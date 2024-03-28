import React from "react";
import { Text, Img } from "./..";

export default function HomepageEighteenPostreview({
  jamest = "James T.",
  duration = "5 months ago",
  forty = "4.0",
  description = "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are several grocery stores and Supermarkets.",
  imageOne = "images/img_offer_indigo_900.svg",
  zipcode = "1224",
  twentyfour = "4",
  twentyfourOne = "24",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col self-stretch gap-2">
        <div className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex justify-center items-center md:self-stretch gap-2 flex-1">
            <Img src="images/img_ellipse_1_24x24.png" alt="james_tone" className="h-[24px] w-[24px] rounded-[50%]" />
            <div className="flex self-end mb-0.5">
              <div className="flex gap-2 flex-wrap">
                <Text size="2xl" as="p" className="self-start">
                  {jamest}
                </Text>
                <Text size="2xl" as="p" className="self-end !text-gray-900_99">
                  {duration}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Img src="images/img_signal.svg" alt="image" className="h-[12px] w-[12px]" />
            <Text size="2xl" as="p">
              {forty}
            </Text>
          </div>
        </div>
        <Text as="p" className="!text-gray-900 leading-[150%]">
          {description}
        </Text>
      </div>
      <div className="flex self-stretch">
        <div className="flex self-start items-center">
          <Img src={imageOne} alt="image_one" className="h-[24px] w-[24px]" />
          <Text size="2xl" as="p" className="self-end !text-indigo-900">
            {zipcode}
          </Text>
        </div>
        <div className="flex self-end items-start ml-[17px] py-px">
          <Img src="images/img_settings.svg" alt="image_two" className="h-[24px] w-[24px]" />
          <Text size="2xl" as="p" className="!text-indigo-900">
            {twentyfour}
          </Text>
        </div>
        <div className="flex self-end items-start ml-[31px] py-px">
          <Img src="images/img_bookmark_indigo_900.svg" alt="image_three" className="h-[24px] w-[24px]" />
          <Text size="2xl" as="p" className="h-[17px] !text-indigo-900">
            {twentyfourOne}
          </Text>
        </div>
      </div>
    </div>
  );
}
