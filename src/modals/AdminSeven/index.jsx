import React from "react";
import { Button, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function AdminSeven({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1130px]">
      <div className="flex self-end w-full pl-[239px] pr-14 py-[239px] md:p-5">
        <div className="flex flex-col w-[65%] md:w-full mt-3 mb-48 gap-[15px] p-6 sm:p-5 bg-white-A700 rounded-lg">
          <div className="flex flex-col gap-1.5">
            <div>
              <div className="flex flex-col items-start">
                <div className="flex self-stretch justify-between items-start gap-5">
                  <Text size="6xl" as="p">
                    <span className="text-gray-900_03">Ikota-Lekki, Lagos&nbsp;</span>
                    <span className="text-gray-900_03 text-base font-normal">(Eti-Osa LGA)</span>
                  </Text>
                  <Img src="images/img_close.svg" alt="close_one" className="h-[16px] w-[16px] mt-1" />
                </div>
                <Text size="xl" as="p">
                  Created February 19th, 2024
                </Text>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-2 flex-wrap">
                <Text size="xl" as="p">
                  <span className="text-gray-900_03 font-semibold">555</span>
                  <span className="text-gray-900_03">&nbsp;</span>
                  <span className="text-gray-900_03 font-light">Views</span>
                </Text>
                <Text size="xl" as="p">
                  <span className="text-gray-900_03 font-semibold">165</span>
                  <span className="text-gray-900_03">&nbsp;</span>
                  <span className="text-gray-900_03 font-light">Reviews</span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex">
              <div className="flex sm:flex-col gap-2">
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="text-right">
                    Traffic
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-[15px] w-[15px] !text-blue-A700 text-center bg-blue-100_01 rounded-[7px]"
                  >
                    10
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Gym
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    30
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Security
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    24
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="text-right">
                    Wi-Fi
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-[15px] w-[15px] !text-blue-A700 text-center bg-blue-100_01 rounded-[7px]"
                  >
                    12
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Shopping Mall
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    02
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex sm:flex-col gap-2">
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="text-right">
                    Traffic
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-[15px] w-[15px] !text-blue-A700 text-center bg-blue-100_01 rounded-[7px]"
                  >
                    10
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Gym
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    30
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Security
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    24
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="text-right">
                    Wi-Fi
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-center items-center h-[15px] w-[15px] !text-blue-A700 text-center bg-blue-100_01 rounded-[7px]"
                  >
                    12
                  </Text>
                </div>
                <div className="flex items-center gap-2 border-gray-900_03 border border-solid flex-wrap rounded">
                  <Text size="2xl" as="p" className="self-end text-right">
                    Shopping Mall
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="flex justify-end items-end h-[15px] p-px !text-blue-A700 text-right bg-blue-100_01 rounded-[7px]"
                  >
                    02
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col gap-6">
            <Img
              src="images/img_placeholder_image_71x76.png"
              alt="placeholder_one"
              className="w-[15%] sm:w-full object-cover rounded-md"
            />
            <Img
              src="images/img_placeholder_image_2.png"
              alt="placeholder_one"
              className="w-[15%] sm:w-full object-cover rounded-md"
            />
            <Img
              src="images/img_placeholder_image_3.png"
              alt="placeholder_one"
              className="w-[15%] sm:w-full object-cover rounded-md"
            />
            <Img
              src="images/img_placeholder_image_4.png"
              alt="placeholder_one"
              className="w-[15%] sm:w-full object-cover rounded-md"
            />
            <Img
              src="images/img_placeholder_image_5.png"
              alt="placeholder_one"
              className="w-[15%] sm:w-full object-cover rounded-md"
            />
          </div>
          <div className="flex justify-center gap-[15px]">
            <Button size="xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
              view reviews
            </Button>
            <Button size="xl" variant="outline" shape="round" className="w-full sm:px-5 uppercase font-medium">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
