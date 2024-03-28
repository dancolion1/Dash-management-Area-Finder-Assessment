import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

export default function HomepageTwentySevenSearchheader({
  spotta = "SPOTTA",
  ng = "NG",
  welcome = "Welcome!",
  bonnyandclyde = "Bonny and Clyde Street, Ajao Estate, Lagos",
  fourhundredfift = "“450”",
  reviewspeople = "Reviews (People are raving about the selected location)",
  leaveAReview,
  bookmarkOne,
  iconOne,
  schools = "Schools",
  hospitals = "Hospitals",
  resortPark = "Resort Park",
  shoppingMalls = "Shopping Malls",
  airport = "Airport",
  trainStation = "Train Station",
  nightlife = "Nightlife",
  publicWifi = "Public Wifi",
  parkingLot = "Parking Lot",
  security = "Security",
  _public = "Public Transport",
  busStation = "Bus Station",
  quiet = "Quiet",
  ...props
}) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <div {...props}>
      <div className="w-full pb-4">
        <header className="flex md:flex-col justify-center items-center gap-7 p-4">
          <div className="flex md:flex-col items-center md:self-stretch w-full gap-[42px] mx-auto flex-1 max-w-[1087px]">
            <div className="flex gap-1 py-[7px] flex-wrap">
              <Heading size="s" as="p" className="self-start !text-gray-50 tracking-[5.00px] !font-clashdisplay">
                {spotta}
              </Heading>
              <Heading
                size="xs"
                as="p"
                className="flex justify-center items-center h-[13px] p-[3px] !text-gray-50 !font-clashdisplay bg-indigo-A200 rounded-sm"
              >
                {ng}
              </Heading>
            </div>
            <Input
              color="gray_900_06"
              shape="round"
              name="search"
              placeholder={`Bonny and Clyde Street, Ajao Estate, Lagos`}
              value={searchBarValue}
              onChange={(e) => setSearchBarValue(e)}
              prefix={<Img src="images/img_icons_indigo_100.svg" alt="icons" className="cursor-pointer" />}
              suffix={
                searchBarValue?.length > 0 ? (
                  <Img
                    src="images/img_iccancel_indigo_100.svg"
                    alt="ic_cancel"
                    onClick={() => setSearchBarValue("")}
                    className="cursor-pointer"
                  />
                ) : null
              }
              className="w-[74%] md:w-full gap-2.5 tracking-[0.04px]"
            />
          </div>
          <div className="flex justify-center items-center w-[10%] md:w-full gap-[13px]">
            <Text as="p" className="!text-gray-50 text-right !font-medium">
              {welcome}
            </Text>
            <Img src="images/img_rectangle_32.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
          </div>
        </header>
        <div className="flex flex-col w-full gap-4 mx-auto md:p-5 max-w-[1240px]">
          <div className="flex md:flex-col justify-between items-start gap-5">
            <div className="flex flex-col items-start gap-[3px]">
              <div className="flex">
                <div className="flex self-end">
                  <Text size="6xl" as="p" className="!text-gray-50">
                    {bonnyandclyde}
                  </Text>
                </div>
              </div>
              <div className="flex gap-1 flex-wrap">
                <Heading as="h1" className="!text-gray-50 text-center">
                  {fourhundredfift}
                </Heading>
                <Text as="p" className="self-end !text-gray-50 text-center">
                  {reviewspeople}
                </Text>
              </div>
            </div>
            <div className="flex gap-4">
              {!!leaveAReview ? (
                <Button size="5xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[210px]">
                  {leaveAReview}
                </Button>
              ) : null}
              {!!bookmarkOne ? (
                <Button size="4xl" variant="outline" shape="round">
                  <Img src="images/img_bookmark.svg" />
                </Button>
              ) : null}
              {!!iconOne ? (
                <Button size="4xl" variant="outline" shape="round">
                  <Img src="images/img_icon.svg" />
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex md:flex-col gap-2">
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[69px] !rounded"
            >
              {schools}
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {hospitals}
            </Text>
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[93px] !rounded"
            >
              {resortPark}
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {shoppingMalls}
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {airport}
            </Text>
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[100px] !rounded"
            >
              {trainStation}
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {nightlife}
            </Text>
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[86px] !rounded"
            >
              {publicWifi}
            </Button>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {parkingLot}
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {security}
            </Text>
            <Text
              size="2xl"
              as="p"
              className="flex justify-center items-center h-[24px] px-2 py-[3px] !text-gray-50 border-gray-50 border border-solid bg-gray-900_06 rounded"
            >
              {_public}
            </Text>
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[92px] !rounded"
            >
              {busStation}
            </Button>
            <Button
              color="gray_900_06"
              shape="round"
              className="border-gray-50 border border-solid min-w-[52px] !rounded"
            >
              {quiet}
            </Button>
            <Button color="gray_900_06" size="xs" shape="circle" className="w-[24px] !rounded-[12px]">
              <Img src="images/img_arrow_right_gray_50.svg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
