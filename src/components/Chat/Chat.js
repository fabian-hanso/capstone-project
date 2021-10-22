import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import Backwards from './backwards.svg';
import Send from './Send.svg';
import ChatStyles from './ChatStyles.css';

function Chat({ activeUser }) {

    let messages = [
        {
            sentTo: 'SaschaCollinet',
            sentFrom: 'FabianHanso',
            body: 'Hey, Sascha! Hast du die Aufgabenstellung verstanden?',
            Timestamp: '2021/10/21',
        },
        {
            sentTo: 'FabianHanso',
            sentFrom: 'SaschaCollinet',
            body: 'Hallo Fabian! Leider nein & du?',
            Timestamp: '2021/10/21',
        },
        {
            sentTo: 'SaschaCollinet',
            sentFrom: 'FabianHanso',
            body: 'Ich habe mir alles durchgelesen & nehme nun das Merkblatt dazu.',
            Timestamp: '2021/10/21',
        },
        {
            sentTo: 'FabianHanso',
            sentFrom: 'SaschaCollinet',
            body: 'Hallo Fabian! Leider nein & du?',
            Timestamp: '2021/10/21',
        },
        {
            sentTo: 'SaschaCollinet',
            sentFrom: 'FabianHanso',
            body: 'Ich habe mir alles durchgelesen & nehme nun das Merkblatt dazu.',
            Timestamp: '2021/10/21',
        }
    ]

    // function onSubmitMessage(event) {
    //     event.preventDefault()
    //     const Messageform = event.target
    //     const message = Messageform.elements.message
    //     console.log(message.value)
    //     console.log({isActiveUser})
    //     Messageform.reset()
    // }

  return (
    <Wrapper>
        <TopWrapper>
        <HeaderWrapper>
            <Link to='/' className='Link_back'><img src={Backwards} alt="Menu" /></Link>
        </HeaderWrapper>
            <BigHeadline>{messages[0].sentTo}</BigHeadline>
        </TopWrapper>
        <BodyWrapper>
            <div>
            {messages.map(message => (
            <MessageWrapper className={message.sentFrom === activeUser ? 'sent_message' : 'received_message'}>{message.body}</MessageWrapper>
            ))}
                <div></div>
            </div>
        </BodyWrapper>
        <InputElement>
            <SubmitForm onSubmit={() => console.log('Test')}>
                <input type="text" name="message" placeholder="Insert Text here"></input>
                <ChatButton><img src={Send} alt="Send Message" /></ChatButton>
            </SubmitForm>
        </InputElement>
    </Wrapper>
  );
}

export default Chat;

const TopWrapper = styled.div `
    width: 100%;
    height: auto;
    position: fixed;
    background-color: #fff;
`;

const MessageWrapper = styled.div `
    width: 70%;
    height: auto;
    padding: 20px 20px;
    border-radius: 20px;
    background-color: #dedede;
    margin-bottom: 10px;
    line-height: 22px;
    color: #fff;
`;

const Wrapper = styled.div `
    width: 100%;
    height: 100%;
`;

const HeaderWrapper = styled.div `
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 20px 20px;

    img {
        width: auto;
        height: 40px;
        transform: rotate(180deg);
    }
`;

const BackButton = styled.button `
    all: unset;
    cursor: pointer;
`;

const BodyWrapper = styled.div `
    width: 100%;
    height: 100%;
    padding: 150px 20px 110px 20px;
`;

const BigHeadline = styled.h2 `
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 20px;
    padding: 0px 20px;
`;

const InputElement = styled.div `
    width: 100%;
    padding: 30px 20px 25px 20px;
    background-color: #184655;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: fixed;
    bottom: 0;
`;

const SubmitForm = styled.form `
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

const ChatButton = styled.button `
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

    img {
        transform: rotate(270deg);
    }
`;