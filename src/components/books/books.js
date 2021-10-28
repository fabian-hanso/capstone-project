import React from "react";
import styled from "styled-components/macro";
import { Slide } from "react-slideshow-image";
import { Link, useParams } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import Backwards from "./backwards.svg";
import Slide1 from "./Book_FirstPage.jpg";
import Slide2 from "./Book_SecondPage.jpg";
import Slide3 from "./Book_ThirdPage.jpg";

const Slideshow = () => {
  const { bookname } = useParams();

  const slideImages = [
    {
      url: Slide1,
    },
    {
      url: Slide2,
    },
    {
      url: Slide3,
    },
  ];
  return (
    <Wrapper>
      <TopWrapper>
        <HeaderWrapper>
          <Link to="/subjects" className="Link_back">
            <img src={Backwards} alt="Menu" />
          </Link>
        </HeaderWrapper>
        <BigHeadline>{bookname}</BigHeadline>
      </TopWrapper>
      <BodyWrapper>
        <SlideContainer className="slide-container">
          <Slide autoplay={false} transitionDuration={200}>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <Image style={{ backgroundImage: `url(${slideImage.url})` }}>
                  <BookPage src={slideImage.url} alt="Test"></BookPage>
                  <span>{slideImage.caption}</span>
                </Image>
              </div>
            ))}
          </Slide>
        </SlideContainer>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Slideshow;

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
