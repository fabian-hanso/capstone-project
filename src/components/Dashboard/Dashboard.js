import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import home from './Home.svg';
import arrownext from './arrow_right.svg';
import arrownextblue from './arrow_right_blue.svg';
import { useState } from 'react';

function Dashboard({ letActiveUser, onOpenMenu }) {

    const [Greeting, setGreeting] = useState(false)
    const [newMessages, setNewMessages] = useState(false)

    function openMenuHandler() {
        // Functionality goes gere!
    }

  return (
    <Wrapper>
        <HeaderWrapper>
            <MenuButton onClick={openMenuHandler}><img src={home} alt="Menu" /></MenuButton>
        </HeaderWrapper>
        <BodyWrapper>
            <BigHeadline>{Greeting ? "Guten Abend, " : "Guten Morgen, " }<br/><span>{letActiveUser}!</span></BigHeadline>
            <SmallHeadline>Deine Übersicht</SmallHeadline>
            <GridWrapper>
                <FullWidthLink>
                    <DashboardHeadline>Neue Nachrichten</DashboardHeadline>
                    <DashboardText>{newMessages ? "Du hast ungelesene Nachrichten in deinem Postfach!" : "Du hast keine ungelesene Nachrichten in deinem Postfach!"}</DashboardText>
                    <Link to="/chat" className='Link'><img src={arrownext} alt="next"></img></Link>
                </FullWidthLink>
                <ChatLink>
                    <DashboardHeadline>Bücher</DashboardHeadline>
                    <DashboardText>Alle Bücher auf einen Blick.</DashboardText>
                    <Link to="" className='Link'><img src={arrownext} alt="next"></img></Link>
                </ChatLink>
                <ChatLink>
                    <DashboardHeadline>Hausaufgaben</DashboardHeadline>
                    <DashboardText>Alle Aufgaben auf einen Blick.</DashboardText>
                    <Link to="" className='Link'><img src={arrownext} alt="next"></img></Link>
                </ChatLink>
                <StundenLink>
                    <DashboardHeadline>Stundenplan</DashboardHeadline>
                    <DashboardText>In kürze kannst du hier alle Aktualisierungen des Stundenplans einsehen.</DashboardText>
                    <Link to="" className='Link_white'><img src={arrownextblue} alt="next"></img></Link>
                </StundenLink>
            </GridWrapper>
        </BodyWrapper>
    </Wrapper>
  );
}

export default Dashboard;

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
    }
`;

const BodyWrapper = styled.div `
    width: 100%;
    height: auto;
    padding: 0px 20px;
`;

const BigHeadline = styled.h2 `
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 20px;

    span {
        font-weight: 600;
        color: #f47458;
    }
`;

const SmallHeadline = styled.h3 `
    font-weight: 400;
    font-size: .9rem;
    margin-bottom: 20px;
`;

const GridWrapper = styled.div `
    width: 100%;
    height: 430px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
`;

const ChatLink = styled.div `
    width: 100%;
    height: 100%;
    background-color: #efeeed;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FullWidthLink = styled.div `
    width: 100%;
    height: 100%;
    grid-column: span 2;
    background-color: #efeeed;
    border-radius: 20px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StundenLink = styled.div `
    width: 100%;
    height: 100%;
    grid-column: span 2;
    border-radius: 20px;
    background-color: #184655;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
`;

const DashboardHeadline = styled.h3 `
    font-size: .8rem;
    font-weight: 500;
`;

const DashboardText = styled.p `
    font-size: .8rem;
    line-height: 1.3rem;
`;

const MenuButton = styled.button `
    all: unset;
    cursor: pointer;
`;