import styled from "styled-components/macro";
import { React, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Backwards from "./backwards.svg";
import Send from "./email-fast-outline.svg";
import firebase from "../firebase";
import { useEffect, useState } from "react";
import ChatStyles from "./ChatStyles.css";
import {
  onSnapshot,
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "@firebase/firestore";

function Chat({ activeUser }) {
  const [messages, setMessages] = useState([]);
  const { chatPartner } = useParams();

  const scrollRef = useRef();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(firebase, "chats"),
        where("chatId", "==", [activeUser, chatPartner].sort().join()),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }
    );
    return unsubscribe;
  }, [activeUser, chatPartner]);

  function onSubmitMessage(event) {
    event.preventDefault();
    const messageform = event.target;
    const message = messageform.elements.message;
    const text = message.value;
    const sentFrom = activeUser;
    const timestamp = serverTimestamp();
    const chatId = [activeUser, chatPartner].sort().join();
    const sentTo = chatPartner;
    const collectionRef = collection(firebase, "chats");
    const payload = { text, sentFrom, timestamp, sentTo, chatId };
    addDoc(collectionRef, payload);
    messageform.reset();
    scrollRef.current.scrollIntoView({ behavior: "smooth" }, false);
  }

  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapper>
          <Link to="/inbox" className="Link_back">
            <img src={Backwards} alt="Menu" />
          </Link>
        </HeaderWrapper>
        <BigHeadline>{chatPartner}</BigHeadline>
      </TopWrapper>
      <BodyWrapper>
        {messages.map((message) => (
          <MessageWrapper
            key={message.id}
            className={
              message.sentFrom === activeUser
                ? "sent_message"
                : "received_message"
            }
          >
            {message.text}
          </MessageWrapper>
        ))}
        <div id="scrollView" ref={scrollRef}></div>
      </BodyWrapper>
      <ChatInputArea>
        <SubmitForm onSubmit={onSubmitMessage}>
          <InputLabel htmlFor="message">Username</InputLabel>
          <input
            type="text"
            name="message"
            placeholder="Nachricht eingeben"
            autocomplete="off"
          />
          <ChatButton>
            <img src={Send} alt="Send Message" />
          </ChatButton>
        </SubmitForm>
      </ChatInputArea>
    </Wrapper>
  );
}

export default Chat;

const InputLabel = styled.label`
  display: none;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: #fff;
`;

const MessageWrapper = styled.div`
  width: 70%;
  height: auto;
  padding: 20px 20px;
  border-radius: 20px;
  background-color: #dedede;
  margin-bottom: 10px;
  line-height: 22px;
  color: #fff;
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

const BackButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 150px 20px 110px 20px;
`;

const BigHeadline = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 20px;
  padding: 0px 20px;
`;

const ChatInputArea = styled.div`
  width: 100%;
  padding: 30px 20px 25px 20px;
  background-color: #184655;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;
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
