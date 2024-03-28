import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar1 from "../../components/Sidebar1";

export default function AdminEightPage() {
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
            <div className="flex flex-col w-[43%] md:w-full mb-[98px] gap-9">
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
                  Edit Selected Area
                </Text>
                <div className="flex flex-col self-stretch items-center justify-center gap-[23px] p-[23px] sm:p-5 bg-white-A700 rounded-md">
                  <div className="flex flex-col self-stretch items-start gap-1.5">
                    <Text as="p">Name of Area</Text>
                    <Input
                      shape="round"
                      name="name"
                      placeholder={`Egbeda-Idimu`}
                      className="self-stretch sm:pr-5 !text-gray-900_03 border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col self-stretch items-start gap-1.5">
                    <Text as="p">State</Text>
                    <Input
                      shape="round"
                      name="inputfield_one"
                      placeholder={`Lagos`}
                      className="self-stretch sm:pr-5 !text-gray-900_03 border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col self-stretch items-start gap-1.5">
                    <Text as="p">Local Government Area</Text>
                    <Input
                      shape="round"
                      name="inputfield"
                      placeholder={`Alimosho LGA`}
                      className="self-stretch sm:pr-5 !text-gray-900_03 border-gray-300_02 border border-solid"
                    />
                  </div>
                  <div className="flex flex-col self-start items-start gap-[5px]">
                    <Text as="p">Upload Pictures</Text>
                    <div className="flex flex-col self-center items-center gap-3 p-4 border-gray-300 border border-solid rounded-lg">
                      <Button
                        color="gray_100_02"
                        size="2xl"
                        shape="circle"
                        className="w-[40px] border-gray-50_04 border-[3px] border-solid !rounded-[20px]"
                      >
                        <Img src="images/img_arrow_left.svg" />
                      </Button>
                      <div className="flex flex-col items-center gap-1.5">
                        <div className="flex items-center gap-1 px-[92px] md:px-5">
                          <div className="flex">
                            <div className="flex">
                              <Heading size="md" as="h1" className="self-end !text-blue-A700">
                                Click to upload
                              </Heading>
                            </div>
                          </div>
                          <Text size="2xl" as="p" className="self-end !text-blue_gray-700_01">
                            or drag and drop
                          </Text>
                        </div>
                        <Text size="xl" as="p" className="!text-blue_gray-700_01 text-center">
                          SVG, PNG, JPG or GIF (max. 800x400px)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row sm:flex-col self-stretch gap-6">
                    <Img
                      src="images/img_placeholder_image_71x76.png"
                      alt="placeholder_one"
                      className="w-[16%] sm:w-full object-cover rounded-md"
                    />
                    <Img
                      src="images/img_placeholder_image_2.png"
                      alt="placeholder_one"
                      className="w-[16%] sm:w-full object-cover rounded-md"
                    />
                    <Img
                      src="images/img_placeholder_image_3.png"
                      alt="placeholder_one"
                      className="w-[16%] sm:w-full object-cover rounded-md"
                    />
                    <Img
                      src="images/img_placeholder_image_4.png"
                      alt="placeholder_one"
                      className="w-[16%] sm:w-full object-cover rounded-md"
                    />
                    <div className="h-[71px] w-[71px] md:h-auto relative">
                      <Img
                        src="images/img_placeholder_image_71x71.png"
                        alt="placeholder_one"
                        className="h-[71px] w-full object-cover rounded-md"
                      />
                      <Text
                        size="md"
                        as="p"
                        className="w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-gray-50 text-center absolute"
                      >
                        Remove
                      </Text>
                    </div>
                  </div>
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
