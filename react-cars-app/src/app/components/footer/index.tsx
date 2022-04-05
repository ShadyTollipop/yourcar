import React from "react";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #1d2124;
  ${tw`flex flex-col items-center justify-center min-w-full pt-10 md:pt-16`}
`;
const InnerContainer = styled.div`
  ${tw`flex flex-wrap w-full h-full max-w-screen-2xl`}
`;
const BottomContainer = styled.div`
  ${tw`flex justify-center w-full md:justify-start max-w-screen-2xl mt-7 md:mt-1`}
`;
const CopywrightText = styled.small`
  font-size: 12px;
  ${tw`text-gray-300`}
`;
const AboutContainer = styled.div`
  ${tw`flex flex-col pl-10 pr-10 mr-2 md:mr-16 md:pl-3 md:pr-3`}
`;
const AboutText = styled.p`
  ${tw`max-w-xs mt-2 text-sm font-normal leading-5 text-white`}
`;
const SectionContainer = styled.div`
  ${tw`flex flex-col w-full pl-10 pr-10 mr-2 mt-7 md:mr-16 md:w-auto md:pl-3 md:pr-3 md:mt-0`}
`;
const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none`}
`;
const ListItem = styled.li`
  ${tw`mb-3`}

  & > a {
    ${tw`text-xs text-white transition-all hover:text-gray-200`}
  }
`;
const HeaderTitle = styled.div`
  ${tw`mb-3 text-2xl font-bold text-white`}
`;
const HorizontalContainer = styled.div`
  ${tw`flex items-center`}
`;
const RedIcon = styled.span`
  ${tw`flex items-center justify-center mr-2 text-base text-white bg-red-500 rounded-full w-9 h-9`}
`;
const SmallText = styled.h6`
  ${tw`text-sm text-white`}
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Services</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy &amp; Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 123-45-67</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopywrightText>
          Copywright &copy; {new Date().getFullYear()}. All Rights Reserved.
        </CopywrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
