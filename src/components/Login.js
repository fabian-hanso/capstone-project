import styled from 'styled-components/macro';
import logo from './ebuddy-logo.svg';
import grafik from './grafik-login.svg';
import papierflieger from './Papierflieger.svg';

function Login() {
  return (
    <Wrapper>
        <TopWrapper>
            <LoginLogo src={logo} alt="Logo" />
            <LoginGrafik src={grafik} alt="Schulbücher" />
        </TopWrapper>
        <BottomWrapper>
            <Form>
                <InputField type="text" placeholder="Vorname" />
                <InputField type="text" placeholder="Passwort" />
                <InputButton type="submit">Anmelden</InputButton>
            </Form>
            <Copyright>©2021 Fabian Hanso</Copyright>
            <Papierflieger src={papierflieger} alt="Kleiner Papierflieger" />
        </BottomWrapper>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div `
  width: 100%;
  height: 100%;
`;

const TopWrapper = styled.div `
    width: 100%;
    height: 50vh;
    min-width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #3c8f7c;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 110px 20px 0px 20px;
    position: relative;
`;

const LoginLogo = styled.img `
    width: 50%;
`;

const LoginGrafik = styled.img `
    width: 85%;
    position: absolute;
    bottom: -40px;
`;

const BottomWrapper = styled.div `
    width: 100%;
    height: 50vh;
    padding: 100px 20px 20px 20px;
`;

const Form = styled.form `
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputField = styled.input `
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

const InputButton = styled.button `
    box-sizing: border-box;
    /* all: unset; */
    border: none;
    width: 60%;
    height: auto;
    background-color: #3c8f7c;
    color: #fff;
    border-radius: 30px;
    margin-bottom: 50px;
    padding: 20px 20px;
`;

const Copyright = styled.div `
    text-align: center;
    font-weight: 300;
    font-size: .8rem;
`;

const Papierflieger = styled.img `
    position: absolute;
    width: 40px;
    bottom: 0px;
`;