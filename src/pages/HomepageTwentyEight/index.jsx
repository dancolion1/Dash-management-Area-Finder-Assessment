import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Header1 from "../../components/Header1";
import HomepageTwentyEightPostreview from "../../components/HomepageTwentyEightPostreview";

export default function HomepageTwentyEightPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-900_05">
        <div className="flex flex-col gap-8">
          <Header1 />
          <div className="flex md:flex-col justify-center items-start w-full gap-8 mx-auto md:p-5 max-w-[1240px]">
            <div className="md:self-stretch flex-1">
              <div className="flex flex-col gap-[33px]">
                <div className="flex justify-center border-blue_gray-100 border-b border-solid flex-1">
                  <HomepageTwentyEightPostreview className="flex flex-col w-full gap-2" />
                </div>
                <div className="w-full h-px bg-blue_gray-100" />
                <HomepageTwentyEightPostreview zipcode="1000" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                <div className="w-full h-px bg-blue_gray-100" />
                <div className="flex justify-center border-blue_gray-100 border-b border-solid flex-1">
                  <div className="w-full border-blue_gray-100 border-t border-solid">
                    <HomepageTwentyEightPostreview zipcode="900" twentyfour="24" className="flex flex-col gap-2" />
                  </div>
                </div>
                <div className="w-full h-px bg-blue_gray-100" />
                <HomepageTwentyEightPostreview zipcode="214" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                <div className="w-full h-px bg-blue_gray-100" />
                <HomepageTwentyEightPostreview zipcode="24" twentyfour="24" className="flex flex-col gap-2 flex-1" />
              </div>
            </div>
            <div className="w-[40%] gap-4 grid-cols-[repeat(auto-fill,_minmax(235px_,_1fr))] grid">
              <Img
                src="images/img_placeholder_image.png"
                alt="placeholder_one"
                className="h-[224px] w-full md:h-auto object-cover rounded-lg"
              />
              <Img
                src="images/img_placeholder_image_224x235.png"
                alt="placeholder_one"
                className="w-full md:h-auto object-cover rounded-lg"
              />
              <Img
                src="images/img_placeholder_image_1.png"
                alt="placeholder_one"
                className="w-full md:h-auto object-cover rounded-lg"
              />
              <a href="#" className="w-full">
                <Text />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
