import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, SelectBox, Img, Input, Text } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar1 from "../../components/Sidebar1";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AdminTwelvePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100_03">
        <Header2 className="p-4 bg-gray-100_02" />
        <div className="flex md:flex-col justify-center">
          <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
          <div className="flex justify-center md:self-stretch p-10 md:p-5 flex-1">
            <div className="flex flex-col w-[43%] md:w-full mb-[313px] gap-9">
              <div className="flex self-start">
                <div className="flex items-start">
                  <Img src="images/img_trending_flat.svg" alt="trendingflat" className="h-[15px] w-[15px]" />
                  <Text as="p" className="!text-gray-900_bf underline">
                    Back
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start gap-[15px]">
                <Text size="6xl" as="p">
                  Create a new Review
                </Text>
                <div className="flex flex-col self-stretch gap-6 p-[23px] sm:p-5 bg-white-A700 rounded-md">
                  <div className="flex flex-col items-start gap-1.5">
                    <Text as="p">Name of Area</Text>
                    <Input
                      shape="round"
                      type="text"
                      name="name"
                      placeholder={`Input the name of the Area`}
                      className="self-stretch sm:pr-5 !text-gray-900_7f border-gray-300_02 border border-solid"
                    />
                  </div>
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
                    name="select"
                    placeholder={`Select Amenities`}
                    options={dropDownOptions}
                    className="gap-px sm:pr-5"
                  />
                  <TextArea
                    shape="square"
                    name="input_one"
                    placeholder={`Write a review for this Area`}
                    className="sm:pb-5 sm:pr-5 text-gray-900_03 font-light"
                  />
                  <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
