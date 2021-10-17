import styled from 'styled-components/macro';
import home from './Home.svg';

function Dashboard({ letActiveUser }) {
  return (
    <Wrapper>
        <HeaderWrapper>
            <img src={home} alt="Menu"></img>
        </HeaderWrapper>
        <BodyWrapper>
            <BigHeadline>Guten Abend, <br/><span>{letActiveUser}!</span></BigHeadline>
            <SmallHeadline>Deine Übersicht</SmallHeadline>
            <GridWrapper>
                <FullWidthLink></FullWidthLink>
                <ChatLink></ChatLink>
                <ChatLink></ChatLink>
                <StundenLink></StundenLink>
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
    height: 410px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
`;

const ChatLink = styled.a `
    width: 100%;
    height: 100%;
    background-color: #efeeed;
    border-radius: 20px;
`;

const FullWidthLink = styled.a `
    width: 100%;
    height: 100%;
    grid-column: span 2;
    background-color: #efeeed;
    border-radius: 20px;
`;

const StundenLink = styled.a `
    width: 100%;
    height: 100%;
    grid-column: span 2;
    border-radius: 20px;
    background-color: #184655;
`;