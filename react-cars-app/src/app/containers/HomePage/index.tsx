import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard/index";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar/index";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;
export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  )
}
