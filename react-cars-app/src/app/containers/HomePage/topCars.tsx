import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { Dispatch } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectTopCars } from "./selectors";
import MoonLoader from "react-spinners/MoonLoader";
import { TIMEOUT } from "dns";

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0`}
`;

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

const EmptyCars = styled.div`
  ${tw`flex items-center justify-center w-full text-sm text-gray-500`}
`;

const LoadingContainer = styled.div`
  ${tw`flex items-center justify-center w-full text-base text-black mt-9`}
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setLoading(true);
    const cars = await carService.getCars().catch((err) => {
      console.log("Error", err);
    });

    console.log("Cars: ", cars);
    if (cars) setTopCars(cars);
    setLoading(false);
  };

  const testCar: ICar = {
    name: "Tesla Atmos",
    mileage: "20k",
    thumbnailSrc:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };
  const testCar2: ICar = {
    name: "Tesla Saturn",
    mileage: "30k",
    thumbnailSrc:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/3d7892b2-7246-42e5-819a-cc119ede91b7/bvlatuR/std/1440x1080/MX-Specs-Hero-Desktop.jpg",
    dailyPrice: 60,
    monthlyPrice: 1700,
    gearType: "Auto",
    gas: "Petrol",
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars =
    (!isEmptyTopCars &&
      topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailUrl} />)) ||
    [];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {isLoading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !isLoading && <EmptyCars>No Cars To Show!</EmptyCars>}
      {!isEmptyTopCars && !isLoading && (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={cars}
            plugins={[
              "clickToChange",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          />
          <Dots value={current} onChange={setCurrent} number={numberOfDots} />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
}
