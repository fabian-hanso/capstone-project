import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import home from './Home.svg';
import arrownext from './arrow_right.svg';
import arrownextblue from './arrow_right_blue.svg';
import close from './close_white_24dp.svg';
import { useState } from 'react';
import linkarrow from './navigate_next_white_24dp.svg';

function Dashboard({ letActiveUser, onOpenMenu }) {

    const [Greeting, setGreeting] = useState(false)
    const [newMessages, setNewMessages] = useState(false)
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    function openMenuHandler() {
        setMenuIsOpen(!menuIsOpen);
    }

  return (
    <Wrapper>
        <MenuBackground menuIsOpen={menuIsOpen} />
        <OffCanvas menuIsOpen={menuIsOpen}>
            <HeaderWrapperCanvas>
                <MenuButton onClick={openMenuHandler}><img src={close} alt="Close Menu" /></MenuButton>
            </HeaderWrapperCanvas>
            <BodyWrapper>
                <BigHeadlineWhite>Wo darf's hingehen,<br/><span>{letActiveUser}?</span></BigHeadlineWhite>
                <LinkArea>
                    <CanvasLinkColor to="/tasks"><img src={linkarrow} alt="Arrow next" />Hausaufgaben</CanvasLinkColor>
                    <CanvasLinkColor to="/plan"><img src={linkarrow} alt="Arrow next" />Stundenplan</CanvasLinkColor>
                    <CanvasLinkColor to="/inbox"><img src={linkarrow} alt="Arrow next" />Postfach</CanvasLinkColor>
                    <CanvasLinkColor to="/books"><img src={linkarrow} alt="Arrow next" />Bücher</CanvasLinkColor>
                </LinkArea>
            </BodyWrapper>
        </OffCanvas>
        <HeaderWrapper>
            <MenuButton onClick={openMenuHandler}><img src={home} alt="Open Menu" /></MenuButton>
        </HeaderWrapper>
        <BodyWrapper>
            <BigHeadline>{Greeting ? "Guten Abend, " : "Guten Morgen, " }<br/><span>{letActiveUser}!</span></BigHeadline>
            <SmallHeadline>Deine Übersicht</SmallHeadline>
            <GridWrapper>
                <FullWidthLink>
                    <DashboardHeadline>Neue Nachrichten</DashboardHeadline>
                    <DashboardText>{newMessages ? "Du hast ungelesene Nachrichten in deinem Postfach!" : "Du hast keine ungelesene Nachrichten in deinem Postfach!"}</DashboardText>
                    <Link to="/inbox" className='Link'><img src={arrownext} alt="next"></img></Link>
                </FullWidthLink>
                <ChatLink>
                    <DashboardHeadline>Bücher</DashboardHeadline>
                    <DashboardText>Alle Bücher auf einen Blick.</DashboardText>
                    <Link to="/books" className='Link'><img src={arrownext} alt="next"></img></Link>
                </ChatLink>
                <ChatLink>
                    <DashboardHeadline>Hausaufgaben</DashboardHeadline>
                    <DashboardText>Alle Aufgaben auf einen Blick.</DashboardText>
                    <Link to="/tasks" className='Link'><img src={arrownext} alt="next"></img></Link>
                </ChatLink>
                <StundenLink>
                    <DashboardHeadline>Stundenplan</DashboardHeadline>
                    <DashboardText>In kürze kannst du hier alle Aktualisierungen des Stundenplans einsehen.</DashboardText>
                    <Link to="/plan" className='Link_white'><img src={arrownextblue} alt="next"></img></Link>
                </StundenLink>
            </GridWrapper>
        </BodyWrapper>
    </Wrapper>
  );
}

export default Dashboard;

const CanvasLinkColor = styled(Link) `
    color: #fff;
    font-size: 1.2rem;
    padding: 5px 0px;
    display: flex;
    align-items: center;
`;

const MenuBackground = styled.div `
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .6);
    position: fixed;
    display: ${({menuIsOpen}) => menuIsOpen ? 'block' : 'none'};
    backdrop-filter: blur(3px);
`;

const OffCanvas = styled.div `
    width: 80%;
    height: 100%;
    position: fixed;
    left: ${({menuIsOpen}) => menuIsOpen ? '0%' : '-100%'};
    transition: all .5s;
    display: block;
    background-color: #3c8f7c;
    box-shadow: 0px 0px 10px #3d3d3d;
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
    }
`;

const HeaderWrapperCanvas = styled.div `
    width: 100%;
    height: auto;
    background-color: none;
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

const BigHeadlineWhite = styled.h2 `
    font-size: 1.4rem;
    font-weight: 300;
    margin-bottom: 20px;
    color: #fff;

    span {
        font-weight: 600;
        color: #fff;
    }
`;

const LinkArea = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
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