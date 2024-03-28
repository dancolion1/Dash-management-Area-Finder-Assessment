import React from "react";
import { Img, Text, Heading } from "./..";

export default function Header2({ ...props }) {
  return (
    <header {...props}>
      <div className="flex justify-between items-center w-full gap-5 mx-auto max-w-[1240px]">
        <div className="flex">
          <div className="flex gap-1 py-[7px] flex-wrap">
            <Heading size="s" as="p" className="self-start !text-gray-900_04 tracking-[5.00px] !font-clashdisplay">
              SPOTTA
            </Heading>
            <Heading
              size="xs"
              as="p"
              className="flex justify-center items-center h-[13px] p-[3px] !text-white-A700 !font-clashdisplay bg-indigo-A200 rounded-sm"
            >
              NG
            </Heading>
          </div>
        </div>
        <div className="flex justify-center items-center w-[10%] gap-[13px]">
          <Text as="p" className="!text-gray-900_04 text-right !font-medium">
            Welcome!
          </Text>
          <Img src="images/img_rectangle_32.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
