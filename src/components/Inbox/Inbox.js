import styled from 'styled-components/macro';
import { Link } from "react-router-dom";
import Backwards from './backwards.svg';
import arrowNext from './arrow_right_blue.svg'


function Inbox({ activeUser }) {
    return(
        <Wrapper>
            <TopWrapper>
                <HeaderWrapper>
                    <Link to='/' className='Link_back'><img src={Backwards} alt="Menu" /></Link>
                </HeaderWrapper>
                <BigHeadline>Postfach</BigHeadline>
            </TopWrapper>
            <BodyWrapper>
                {activeUser === 'FabianHanso' ?
                <Link to='/inbox/SaschaCollinet'>
                    <StyledLink>
                        <ImageBadge><p>SC</p></ImageBadge>
                        <DisplayName>Sascha Collinet</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Sascha Collinet"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                : 
                <Link to='/inbox/FabianHanso'>
                    <StyledLink>
                        <ImageBadge><p>FH</p></ImageBadge>
                        <DisplayName>Fabian Hanso</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Fabian Hanso"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                }
                <Link to='/inbox/VolkerMuehleib'>
                    <StyledLink>
                        <ImageBadge><p>VM</p></ImageBadge>
                        <DisplayName>Volker Mühleib</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Volker Mühleib"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                <Link to='/inbox/DaniloBraeuer'>
                    <StyledLink>
                        <ImageBadge><p>DB</p></ImageBadge>
                        <DisplayName>Danilo Bräuer</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Danilo Bräuer"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                <Link to='/inbox/LukasPetry'>
                    <StyledLink>
                        <ImageBadge><p>LP</p></ImageBadge>
                        <DisplayName>Lukas Petry</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Lukas Petry"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                <Link to='/inbox/LeneFrei'>
                    <StyledLink>
                        <ImageBadge><p>LF</p></ImageBadge>
                        <DisplayName>Lene Frei</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Lene Frei"></img></LinkNextButton>
                    </StyledLink>
                </Link>
                <Link to='/inbox/Jana Bauer'>
                    <StyledLink>
                        <ImageBadge><p>JB</p></ImageBadge>
                        <DisplayName>Jana Bauer</DisplayName>
                        <LinkNextButton><img src={arrowNext} alt="Jana Bauer"></img></LinkNextButton>
                    </StyledLink>
                </Link>
            </BodyWrapper>
        </Wrapper>
    );
}

export default Inbox;

const LinkNextButton = styled.div `
    width: 40px;
    max-width: 40px;
    flex-grow: 1;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: none;
`;

const DisplayName = styled.div `
    width: auto;
    flex-grow: 2;
    height: auto;
    display: flex;
    align-items: center;
    padding: 0px 15px;
`;

const ImageBadge = styled.div `
    width: 40px;
    max-width: 40px;
    flex-grow: 1;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #3c8f7c;
    text-decoration: none;
`;

const StyledLink = styled.div `
    width: 100%;
    height: auto;
    border-radius: 40px;
    background-color: #dedede;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 10px 10px;
    margin-bottom: 10px;
`;

const TopWrapper = styled.div `
    width: 100%;
    height: auto;
    position: fixed;
    background-color: #fff;
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