import React from "react";
import { Text, Img } from "./..";

export default function HomepageTwentyEightPostreview({
  jamest = "James T.",
  duration = "5 months ago",
  forty = "4.0",
  description = "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  zipcode = "1224",
  twentyfour = "4",
  twentyfour1 = "24",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch gap-2">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
            <Img
              src="images/img_ellipse_1_24x24.png"
              alt="circleimage_one"
              className="h-[24px] w-[24px] rounded-[50%]"
            />
            <div className="flex self-end mb-0.5">
              <div className="flex gap-2 flex-wrap">
                <Text size="2xl" as="p" className="self-start !text-gray-50">
                  {jamest}
                </Text>
                <Text size="2xl" as="p" className="self-end !text-gray-50_99">
                  {duration}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Img src="images/img_signal.svg" alt="signal_one" className="h-[12px] w-[12px]" />
            <Text size="2xl" as="p" className="!text-gray-50">
              {forty}
            </Text>
          </div>
        </div>
        <Text as="p" className="!text-gray-50 leading-[150%]">
          {description}
        </Text>
      </div>
      <div className="flex self-stretch gap-[17px]">
        <div className="flex self-start items-center">
          <Img src="images/img_offer_indigo_100.svg" alt="offer_one" className="h-[24px] w-[24px]" />
          <Text size="2xl" as="p" className="self-end !text-indigo-100">
            {zipcode}
          </Text>
        </div>
        <div className="flex md:flex-row self-end w-[16%] gap-[31px]">
          <div className="flex items-start py-px">
            <Img src="images/img_user_indigo_100.svg" alt="image" className="h-[24px] w-[24px]" />
            <Text size="2xl" as="p" className="!text-indigo-100">
              {twentyfour}
            </Text>
          </div>
          <div className="flex items-start py-px">
            <Img src="images/img_user_indigo_100_24x24.svg" alt="user_one" className="h-[24px] w-[24px]" />
            <Text size="2xl" as="p" className="h-[17px] !text-indigo-100">
              {twentyfour1}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
