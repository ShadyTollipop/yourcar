import React from "react";
import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`flex flex-col items-center p-3 pb-4 m-1 bg-white rounded-md sm:m-3 md:m-6`};
`;
const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;
const CarName = styled.h3`
  ${tw`mt-1 mb-1 text-base font-bold text-black `}
`;

const PricesContainer = styled.div`
  ${tw`flex justify-start w-full mt-3 `}
`;

const SmallText = styled.div`
  color: inherit;
  ${tw`inline-flex text-xs font-thin `}
`;

const DailyPrice = styled.h5`
  ${tw`mr-3 text-sm font-bold text-red-500`}
`;

const MonthlyPrice = styled.h5`
  ${tw`text-sm font-bold text-gray-500`}
`;
const SmallIcon = styled.span`
  ${tw`mr-1 text-sm text-gray-400 `}
`;

const CarDetailsContainer = styled.div`
  ${tw`flex justify-between w-full`}
`;

const CarDetail = styled.span`
  ${tw`flex items-center `}
`;
const CarInfo = styled.h6`
  ${tw`text-xs text-gray-400 `}
`;

const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`flex mt-2 mb-2 bg-gray-300 `}
`;

const RentButton = styled(Button)`
  ${tw`min-w-full mt-5`}
`;

export function Car(props: ICarProps) {
  const {
    name,
    thumbnailSrc,
    dailyPrice,
    monthlyPrice,
    mileage,
    gearType,
    gas,
  } = props;
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
}
