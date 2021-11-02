import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import Backwards from "./backwards.svg";

function Plan() {
  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapper>
          <Link to="/" className="Link_back">
            <img src={Backwards} alt="Menu" />
          </Link>
        </HeaderWrapper>
        <BigHeadline>Stundenplan</BigHeadline>
      </TopWrapper>
      <BodyWrapper>
        <TopBodyWrapper>
          <LeftButton>
            <img src={Backwards} alt="Test" />
          </LeftButton>
          <DateDisplay>Do, 4. Nov. 2021</DateDisplay>
          <RightButton>
            <img src={Backwards} alt="Test" />
          </RightButton>
        </TopBodyWrapper>
        <MainBody>
          <FullWidth>
            <LeftWrapper>08:00</LeftWrapper>
            <RightWrapperMath>Mathematik</RightWrapperMath>
          </FullWidth>
          <FullWidth>
            <LeftWrapper>09:45</LeftWrapper>
            <RightWrapperInf>Informatik</RightWrapperInf>
          </FullWidth>
          <FullWidth>
            <LeftWrapper>11:30</LeftWrapper>
            <RightWrapperGer>Deutsch</RightWrapperGer>
          </FullWidth>
          <FullWidthHalf>
            <LeftWrapper>13:30</LeftWrapper>
            <RightWrapperEng>Englisch</RightWrapperEng>
          </FullWidthHalf>
        </MainBody>
      </BodyWrapper>
    </Wrapper>
  );
}

export default Plan;

const RightWrapperEng = styled.div`
  width: 80%;
  border-radius: 30px;
  padding: 15px 20px;
  background-color: #466eb6;
  color: #fff;
`;

const RightWrapperGer = styled.div`
  width: 80%;
  border-radius: 30px;
  padding: 20px 20px;
  background-color: #3c8f7c;
  color: #fff;
`;

const RightWrapperMath = styled.div`
  width: 80%;
  border-radius: 30px;
  padding: 20px 20px;
  background-color: #184655;
  color: #fff;
`;

const RightWrapperInf = styled.div`
  width: 80%;
  border-radius: 30px;
  padding: 20px 20px;
  background-color: #f47458;
  color: #fff;
`;

const LeftWrapper = styled.div`
  width: 20%;
  font-size: 0.8rem;
`;

const FullWidthHalf = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 10px;
`;

const FullWidth = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  margin-bottom: 10px;
`;

const MainBody = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DateDisplay = styled.div`
  height: 100%;
`;

const RightButton = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  background-color: #dedede;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftButton = styled.button`
  all: unset;
  width: 30px;
  height: 30px;
  background-color: #dedede;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    transform: rotate(180deg);
  }
`;

const TopBodyWrapper = styled.div`
  width: 100%;
  padding: 5px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
