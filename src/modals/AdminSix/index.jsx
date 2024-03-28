import React from "react";
import { Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function AdminSix({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1130px]">
      <div className="self-end w-full pt-[65px] md:pt-5">
        <div className="flex pl-[229px] pr-14 py-[229px] md:p-5">
          <div className="flex w-[65%] md:w-full mb-[246px] ml-2.5 py-[21px] md:ml-0 sm:py-5 bg-white-A700 rounded-lg">
            <div className="flex flex-col w-full mb-[3px] gap-[15px]">
              <div className="flex flex-col gap-[5px]">
                <div className="flex">
                  <div className="flex w-[57%] md:w-full ml-[261px] md:ml-0">
                    <div className="flex flex-col items-start w-full">
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
                </div>
                <div className="flex ml-[263px] gap-2 md:ml-0 flex-wrap">
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
              <div className="flex flex-col w-[57%] md:w-full ml-[263px] gap-4 md:ml-0">
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
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
