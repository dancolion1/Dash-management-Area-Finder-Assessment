import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button } from "../../components";
import Header from "../../components/Header";
import HomepageEighteenPostreview from "../../components/HomepageEighteenPostreview";

export default function HomepageNineteenPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="flex flex-col self-end gap-8">
          <Header />
          <div className="flex md:flex-col justify-center items-start w-full gap-8 mx-auto md:p-5 max-w-[1240px]">
            <div className="md:self-stretch flex-1">
              <div className="h-[902px] md:h-auto relative">
                <div className="flex flex-col w-full mt-[159px] gap-[174px] md:gap-[130px] sm:gap-[87px]">
                  <div className="py-[13px] border-blue_gray-100 border-t-[0.5px] border-solid">
                    <div className="flex self-start justify-between items-center gap-5">
                      <Text size="2xl" as="p" className="text-right">
                        Add a comment
                      </Text>
                      <Button size="md" shape="round" className="uppercase font-medium min-w-[68px]">
                        POST
                      </Button>
                    </div>
                  </div>
                  <div className="h-px bg-blue_gray-100" />
                </div>
                <div className="flex flex-col w-full gap-[88px] left-0 bottom-0 right-0 top-0 m-auto border-blue_gray-100 border-b border-solid absolute md:relative">
                  <HomepageEighteenPostreview className="flex flex-col gap-2 flex-1" />
                  <HomepageEighteenPostreview zipcode="1000" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                  <div className="flex justify-center border-blue_gray-100 border-b border-solid flex-1">
                    <HomepageEighteenPostreview zipcode="900" twentyfour="24" className="flex flex-col w-full gap-2" />
                  </div>
                  <HomepageEighteenPostreview zipcode="214" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                  <HomepageEighteenPostreview zipcode="24" twentyfour="24" className="flex flex-col gap-2 flex-1" />
                </div>
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
