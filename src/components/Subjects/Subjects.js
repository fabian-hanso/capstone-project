import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Backwards from "./backwards.svg";
import BookIcon from "./BookIcon.svg";

function Subjects() {
  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapper>
          <Link to="/" className="Link_back">
            <img src={Backwards} alt="Menu" />
          </Link>
        </HeaderWrapper>
        <BigHeadline>Bücher</BigHeadline>
      </TopWrapper>
      <BodyWrapper>
        <Link to="/subjects/Wirtschaft">
          <StyledLink>
            <ImageBadge>
              <img src={BookIcon} alt="Book Icon"></img>
            </ImageBadge>
            <DisplayName>Wirtschaft</DisplayName>
          </StyledLink>
        </Link>
        <Link to="/subjects/Mathematik">
          <StyledLink>
            <ImageBadge>
              <img src={BookIcon} alt="Book Icon"></img>
            </ImageBadge>
            <DisplayName>Mathematik</DisplayName>
          </StyledLink>
        </Link>
      </BodyWrapper>
    </Wrapper>
  );
}

export default Subjects;

const StyledLink = styled.div`
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

const DisplayName = styled.div`
  width: auto;
  flex-grow: 2;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

const ImageBadge = styled.div`
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

const TopWrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: #fff;
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
  padding: 150px 20px 0px 20px;
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;

  button {
    background-color: #fff !important;
    background: #fff !important;
    align-self: flex-end;
    border-radius: 0px !important;
    opacity: 0.8;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
`;

const BookPage = styled.img`
  width: 100%;
  height: auto;
`;
