import React from "react";
import { Img, Button, Text, Heading, Input } from "./..";

export default function Header({ ...props }) {
  const [searchBarValue7, setSearchBarValue7] = React.useState("");

  return (
    <header {...props}>
      <div className="w-full pb-4 bg-gray-100_02">
        <div className="flex md:flex-col justify-center items-center gap-7 p-4">
          <div className="flex md:flex-col items-center md:self-stretch gap-[42px] flex-1">
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
            <Input
              color="gray_50"
              shape="round"
              name="search"
              placeholder={`Bonny and Clyde Street, Ajao Estate, Lagos`}
              value={searchBarValue7}
              onChange={(e) => setSearchBarValue7(e)}
              prefix={<Img src="images/img_icons_blue_a700.svg" alt="icons" className="cursor-pointer" />}
              suffix={
                searchBarValue7?.length > 0 ? (
                  <Img
                    src="images/img_iccancel.svg"
                    alt="ic_cancel"
                    onClick={() => setSearchBarValue7("")}
                    className="cursor-pointer"
                  />
                ) : null
              }
              className="w-[74%] md:w-full gap-2.5 text-gray-900_04 tracking-[0.04px] border-gray-300_02 border border-solid"
            />
          </div>
          <div className="flex justify-center items-center w-[10%] md:w-full gap-[13px]">
            <Text as="p" className="!text-gray-900_04 text-right !font-medium">
              Welcome!
            </Text>
            <Img src="images/img_rectangle_32.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 mx-auto md:p-5 max-w-[1240px]">
          <div className="flex md:flex-col justify-between items-start gap-5">
            <div className="flex flex-col items-start gap-[3px]">
              <div className="flex">
                <div className="flex self-end">
                  <Text size="6xl" as="p">
                    Bonny and Clyde Street, Ajao Estate, Lagos
                  </Text>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap">
                <Heading as="h6" className="!text-gray-900 text-center">
                  “450”
                </Heading>
                <Text as="p" className="self-end !text-gray-900 text-center">
                  Reviews (People are raving about the selected location)
                </Text>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="5xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[210px]">
                Leave a review
              </Button>
              <Button size="4xl" variant="outline" shape="round">
                <Img src="images/img_bookmark.svg" />
              </Button>
              <Button size="4xl" variant="outline" shape="round">
                <Img src="images/img_icon.svg" />
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col justify-center gap-2">
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[69px] !rounded"
            >
              Schools
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Hospitals
            </Text>
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[93px] !rounded"
            >
              Resort Park
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Shopping Malls
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Airport
            </Text>
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[100px] !rounded"
            >
              Train Station
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Nightlife
            </Text>
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[86px] !rounded"
            >
              Public Wifi
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Parking Lot
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Security
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] border-gray-900_03 border border-solid bg-gray-50 rounded"
            >
              Public Transport
            </Text>
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[92px] !rounded"
            >
              Bus Station
            </Button>
            <Button
              color="gray_50"
              shape="round"
              className="border-gray-900_03 border border-solid min-w-[52px] !rounded"
            >
              Quiet
            </Button>
            <div className="w-[2%] md:w-full bg-white-A700_e5 rounded-[12px]">
              <Img src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[24px] w-[24px] rounded-[50%]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
