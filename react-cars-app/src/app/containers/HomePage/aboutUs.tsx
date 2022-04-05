import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full pt-4 pb-4 bg-white pr-7 pl-7 md:pl-0 md:pr-0`}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`}
`;

const Title = styled.div`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`}
`;

const InfoText = styled.p`
  ${tw`mt-4 text-sm font-normal text-gray-500 md:max-w-2xl md:text-base`}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img alt="car" src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Fell the Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor  sit amet consectetur adipisicing elit. Optio dolor
          soluta expedita neque quaerat quidem, hic adipisci doloribus quam
          dolorum omnis eius ullam qui rem accusantium quia officia eligendi
          amet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          dolor soluta expedita neque quaerat quidem, hic adipisci doloribus
          quam dolorum omnis eius ullam qui rem accusantium quia officia
          eligendi amet! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio dolor soluta expedita neque quaerat quidem, hic adipisci
          doloribus quam dolorum omnis eius ullam qui rem accusantium quia
          officia eligendi amet!
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}