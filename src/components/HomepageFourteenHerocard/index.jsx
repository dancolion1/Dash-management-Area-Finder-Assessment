import React from "react";
import { Text, Img } from "./..";

export default function HomepageFourteenHerocard({
  circleimage,
  jamest,
  duration,
  ikatelekki,
  closeOne,
  description = "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
  offerOne = "images/img_offer.svg",
  twentyfour = "24",
  userOne = "images/img_user.svg",
  two = "02",
  onehundredtwent = "125",
  categoriessm = "traffic",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between items-center w-[90%] md:w-full gap-5">
          <div className="flex self-start justify-center w-[43%] gap-1">
            {!!circleimage ? (
              <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[25px] w-[25px] rounded-[50%]" />
            ) : null}
            <div className="flex flex-col">
              {!!jamest ? (
                <Text size="xl" as="p" className="!font-medium">
                  {jamest}
                </Text>
              ) : null}
              {!!duration ? (
                <Text size="xs" as="p">
                  {duration}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col w-[32%]">
            {!!ikatelekki ? (
              <Text size="lg" as="p">
                {ikatelekki}
              </Text>
            ) : null}
            <div>{!!closeOne ? <Img src={closeOne} alt="close_one" className="h-[12px]" /> : null}</div>
          </div>
        </div>
        <Text size="2xl" as="p" className="leading-[140%]">
          {description}
        </Text>
        <div className="flex items-center">
          <div className="flex self-start items-center gap-1">
            <Img src={offerOne} alt="offer_one" className="h-[14px]" />
            <Text size="md" as="p" className="self-end h-[12px] !text-blue_gray-300 !font-medium">
              {twentyfour}
            </Text>
          </div>
          <div className="flex self-end items-center ml-2 gap-1">
            <Img src={userOne} alt="user_one" className="h-[16px] w-[16px]" />
            <Text size="md" as="p" className="self-start h-[12px] !text-blue_gray-300 !font-medium">
              {two}
            </Text>
          </div>
          <div className="flex items-center ml-2 gap-1">
            <Img src="images/img_television.svg" alt="television_one" className="h-[14px] w-[14px]" />
            <Text size="md" as="p" className="self-start !text-blue_gray-300 !font-medium">
              {onehundredtwent}
            </Text>
          </div>
          <Text
            size="s"
            as="p"
            className="flex self-start justify-end items-end h-[14px] ml-[39px] px-2 py-0.5 !text-light_green-900 text-right border-lime-900_01 border border-solid bg-lime-100 rounded-[7px]"
          >
            {categoriessm}
          </Text>
        </div>
      </div>
    </div>
  );
}
