import styled from "styled-components/macro";
import logo from "./ebuddy-logo.svg";
import grafik from "./grafik-login.svg";
import papierflieger from "./Papierflieger.svg";

function Login({ onLogin }) {
  const userData = [
    {
      username: "FabianHanso",
      password: "123",
      firstname: "Fabian",
    },
    {
      username: "SaschaCollinet",
      password: "456",
      firstname: "John",
    },
    {
      username: "DaniloBraeuer",
      password: "Password",
    },
    {
      username: "VolkerMuehleib",
      password: "Password",
    },
  ];

  return (
    <Wrapper>
      <TopWrapper>
        <LoginLogo src={logo} alt="ebuddy Logo" />
        <LoginGrafik src={grafik} alt="Grafik mit Schulbüchern" />
      </TopWrapper>
      <BottomWrapper>
        <Form onSubmit={formSubmitHandler}>
          <Label htmlFor="username">Username</Label>
          <InputField
            type="text"
            placeholder="Nutzername"
            required
            name="username"
            autocomplete="off"
          ></InputField>
          <Label htmlFor="Password">Password</Label>
          <InputField
            type="Password"
            placeholder="Passwort"
            required
            name="password"
            autocomplete="off"
          ></InputField>
          <InputButton>Anmelden</InputButton>
        </Form>
        <Copyright>©2021 Fabian Hanso</Copyright>
        <Papierflieger src={papierflieger} alt="Kleiner Papierflieger" />
      </BottomWrapper>
    </Wrapper>
  );

  function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const { username, password } = form.elements;

    for (let i = 0; i < userData.length; i++) {
      if (
        username.value === userData[i].username &&
        password.value === userData[i].password
      ) {
        i = userData.length;
        onLogin(username.value);
      } else {
        console.log("Fehler!");
      }
    }
    // userData.some()
    // userData.find()
    form.reset();
  }
}

export default Login;

const Label = styled.label`
  display: none;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 42vh;
  min-width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #3c8f7c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 0px 20px;
  position: relative;
`;

const LoginLogo = styled.img`
  width: 50%;
`;

const LoginGrafik = styled.img`
  width: 75%;
  position: absolute;
  bottom: -35px;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding: 90px 20px 20px 20px;
`;

const Form = styled.form`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  box-sizing: border-box;
  /* all: unset; */
  border: none;
  width: 100%;
  height: auto;
  background-color: #f4ece6;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 20px 30px;
`;

const InputButton = styled.button`
  box-sizing: border-box;
  /* all: unset; */
  border: none;
  width: 60%;
  height: auto;
  background-color: #3c8f7c;
  color: #fff;
  border-radius: 30px;
  margin-bottom: 40px;
  padding: 20px 20px;
  transition: all 0.5s;

  &:hover {
    background-color: #184655;
  }
`;

const Copyright = styled.div`
  text-align: center;
  font-weight: 300;
  font-size: 0.8rem;
`;

const Papierflieger = styled.img`
  position: absolute;
  width: 40px;
  bottom: 0px;
`;
