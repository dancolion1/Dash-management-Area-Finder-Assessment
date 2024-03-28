import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Img } from "../../components";
import Header2 from "../../components/Header2";
import Sidebar1 from "../../components/Sidebar1";

export default function AdminTwentyThreePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-100_03">
        <div>
          <Header2 className="p-4 bg-gray-100_02" />
          <div className="flex md:flex-col justify-center">
            <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 md:p-5 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
            <div className="flex justify-center md:self-stretch p-10 md:p-5 flex-1">
              <div className="flex flex-col items-start w-[43%] md:w-full mb-[455px] gap-[38px]">
                <div className="flex">
                  <div className="flex items-start">
                    <Img src="images/img_trending_flat.svg" alt="trendingflat" className="h-[15px] w-[15px]" />
                    <Text as="p" className="!text-gray-900_bf underline">
                      Back
                    </Text>
                  </div>
                </div>
                <Text size="6xl" as="p" className="!text-black-900_01">
                  Edit Amenity
                </Text>
                <div className="flex flex-col self-stretch gap-6 p-6 sm:p-5 bg-white-A700 rounded-md">
                  <div className="flex flex-col items-start gap-0.5">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Amenity
                    </Text>
                    <Input
                      shape="round"
                      name="language"
                      placeholder={`|`}
                      className="self-stretch sm:pr-5 tracking-[0.25px] font-medium border-indigo-A200 border border-solid shadow-xl"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <Text size="2xl" as="p" className="tracking-[0.04px]">
                      Category
                    </Text>
                    <Input
                      shape="round"
                      name="inputfield_one"
                      placeholder={`Type in Category`}
                      className="self-stretch sm:pr-5 tracking-[0.04px] font-light border-gray-300_02 border border-solid"
                    />
                  </div>
                  <Button color="indigo_50" size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
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
