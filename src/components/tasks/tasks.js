import firebase from "../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Backwards from "./backwards.svg";
import styled from "styled-components/macro";
import Send from "./add_task_white_24dp.svg";
import DeleteIcon from "./delete_black_24dp.svg";
import {
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "@firebase/firestore";

function Tasks({ activeUser }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const isunsubscribe = onSnapshot(
      query(
        collection(firebase, "tasks"),
        where("letActiveUser", "==", [activeUser].sort().join()),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return isunsubscribe;
  }, [activeUser]);

  function onSubmitTask(event) {
    event.preventDefault();
    const tasksForm = event.target;
    const task = tasksForm.elements.task;
    const text = task.value;
    const taskDone = false;
    const letActiveUser = activeUser;
    const timestamp = serverTimestamp();
    const collectionRef = collection(firebase, "tasks");
    const payload = { text, letActiveUser, timestamp, taskDone };
    addDoc(collectionRef, payload);
    tasksForm.reset();
  }

  function taskDoneToggle(id, taskDone) {
    const docRef = doc(firebase, "tasks", id);
    const payload = { taskDone: !taskDone };
    setDoc(docRef, payload, { merge: true });
  }

  function handleDelete(id) {
    const docRef = doc(firebase, "tasks", id);
    deleteDoc(docRef);
  }

  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapper>
          <Link to="/" className="Link_back">
            <img src={Backwards} alt="Menu" />
          </Link>
        </HeaderWrapper>
        <BigHeadline>Hausaufgaben</BigHeadline>
      </TopWrapper>
      <BodyWrapper>
        <div>
          {tasks.map((task) => (
            <TaskWrapper
              key={task.id}
              className={task.taskDone === true ? "true_task" : "false_task"}
              onClick={() => taskDoneToggle(task.id, task.taskDone)}
            >
              <TextOutput>{task.text}</TextOutput>
              <DeleteButton onClick={() => handleDelete(task.id)}>
                <img src={DeleteIcon} alt="Delete Button" />
              </DeleteButton>
            </TaskWrapper>
          ))}
        </div>
      </BodyWrapper>
      <TaskInputArea>
        <SubmitForm onSubmit={onSubmitTask}>
          <InputLabel htmlFor="task">Username</InputLabel>
          <input
            type="text"
            name="task"
            placeholder="Aufgabe hinzufügen"
            autocomplete="off"
          />
          <ChatButton>
            <img src={Send} alt="Send Message" />
          </ChatButton>
        </SubmitForm>
      </TaskInputArea>
    </Wrapper>
  );
}

export default Tasks;

const TextOutput = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
`;

const DeleteButton = styled.button`
  all: unset;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TaskInputArea = styled.div`
  width: 100%;
  padding: 30px 20px 25px 20px;
  background-color: #184655;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;
`;

const ChatButton = styled.button`
  all: unset;
  background-color: #184655;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputLabel = styled.label`
  display: none;
`;

const SubmitForm = styled.form`
  box-sizing: border-box;
  display: block;
  min-width: 100%;
  height: auto;
  position: relative;

  input {
    all: unset;
    box-sizing: border-box;
    width: 100%;
    padding: 15px 50px 15px 20px;
    background-color: #fff;
    border-radius: 30px;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: #fff;
`;

const TaskWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 20px;
  border-radius: 20px;
  background-color: #3d3d3d;
  margin-bottom: 10px;
  line-height: 22px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 20px 20px;

  img  {
    width: auto;
    height: 40px;
    transform: rotate(180deg);
  }
`;

const BigHeadline = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 20px;
  padding: 0px 20px;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 150px 20px 110px 20px;
`;
