import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header1 from "../../components/Header1";
import HomepageTwentyEightPostreview from "../../components/HomepageTwentyEightPostreview";

export default function HomepageTwentyNinePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-8 bg-gray-900_05">
        <Header1 />
        <div className="w-full mx-auto md:p-5 max-w-[1240px]">
          <div className="flex md:flex-col justify-center items-start gap-8">
            <div className="flex flex-col md:self-stretch gap-[15px] flex-1">
              <HomepageTwentyEightPostreview className="flex flex-col gap-2" />
              <div className="py-[13px] border-blue_gray-100 border-t-[0.5px] border-solid">
                <div className="self-start border-blue_gray-100 border-b-[0.5px] border-solid">
                  <div className="flex justify-between items-center gap-5">
                    <Text size="2xl" as="p" className="!text-gray-50 text-right">
                      Add a comment
                    </Text>
                    <Button size="md" shape="round" className="uppercase font-medium min-w-[68px]">
                      POST
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[33px]">
                <HomepageTwentyEightPostreview zipcode="1000" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                <div className="w-full h-px bg-blue_gray-100" />
                <HomepageTwentyEightPostreview zipcode="900" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                <div className="w-full h-px bg-blue_gray-100" />
                <div className="flex justify-center border-blue_gray-100 border-t border-solid flex-1">
                  <HomepageTwentyEightPostreview zipcode="214" twentyfour="24" className="flex flex-col w-full gap-2" />
                </div>
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
