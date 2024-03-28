import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input, Heading } from "../../components";
import HomepageTwentyFourHerocard from "../../components/HomepageTwentyFourHerocard";

export default function HomepageTwentyFivePage() {
  const [searchBarValue27, setSearchBarValue27] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full px-[100px] md:px-5 bg-gray-900_05">
        <div className="flex md:flex-col justify-center items-start w-full gap-8 mx-auto max-w-[1240px]">
          <div className="flex flex-col md:self-stretch mt-[34px] gap-[228px] md:gap-[171px] sm:gap-[114px] flex-1">
            <div className="flex">
              <div className="flex gap-1 py-[7px] flex-wrap">
                <Heading size="s" as="h1" className="self-start !text-gray-50 tracking-[5.00px] !font-clashdisplay">
                  SPOTTA
                </Heading>
                <Heading
                  size="xs"
                  as="h2"
                  className="flex justify-center items-center h-[13px] p-[3px] !text-gray-50 !font-clashdisplay bg-indigo-A200 rounded-sm"
                >
                  NG
                </Heading>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[39px]">
              <div className="flex flex-col w-[72%] md:w-full gap-[39px]">
                <Heading size="2xl" as="h3" className="!text-gray-50">
                  <>
                    Find a place you
                    <br />
                    will love to live!
                  </>
                </Heading>
                <Text size="6xl" as="p" className="!text-gray-50 !font-normal">
                  <>
                    See through the lenses of people who have
                    <br />
                    lived or visited the neighbourhood you might
                    <br />
                    have in mind.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start w-[79%] md:w-full gap-5">
                <Input
                  color="gray_900_06"
                  shape="round"
                  name="search"
                  placeholder={`Enter Address`}
                  value={searchBarValue27}
                  onChange={(e) => setSearchBarValue27(e)}
                  prefix={<Img src="images/img_icons_indigo_100.svg" alt="icons" className="cursor-pointer" />}
                  suffix={
                    searchBarValue27?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue27("")} height={16} width={16} fillColor="#bacaf5ff" />
                    ) : null
                  }
                  className="self-stretch gap-2.5 sm:pr-5 !text-gray-500 tracking-[0.04px]"
                />
                <Button size="5xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[146px]">
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[1204px] w-[42%] md:w-full relative">
            <div className="w-full top-[0.00px] right-0 left-0 m-auto absolute">
              <div className="flex md:flex-row sm:flex-col gap-6">
                <HomepageTwentyFourHerocard className="flex flex-col w-full sm:w-full pb-4 gap-2 px-4 bg-gray-900 shadow-xs rounded-[15px]" />
                <HomepageTwentyFourHerocard className="flex flex-col w-full sm:w-full pb-4 gap-2 px-4 bg-gray-900 shadow-xs rounded-[15px]" />
              </div>
              <div className="flex flex-col items-end mt-[-176px] py-[31px] sm:py-5 relative bg-gradient">
                <div className="flex justify-end items-center w-[25%] md:w-full mb-[926px] gap-[13px] md:p-5">
                  <Text as="p" className="!text-gray-50 text-right !font-medium">
                    Welcome!
                  </Text>
                  <Img
                    src="images/img_rectangle_32.png"
                    alt="circleimage"
                    className="h-[36px] w-[36px] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
            <div className="justify-center w-full gap-6 grid-cols-[repeat(auto-fill,_minmax(211px_,_1fr))] bottom-[0.00px] right-0 left-0 m-auto grid absolute">
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                categoriessm="network"
                className="flex justify-center items-center w-full p-3.5 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                categoriessm="power"
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                categoriessm="water"
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                categoriessm="security"
                className="flex justify-center items-center w-full p-[15px] bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne={true}
                categoriessm="road"
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne="images/img_close_blue_gray_100_02.svg"
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
              <HomepageTwentyFourHerocard
                circleimage="images/img_ellipse_1.png"
                jamest="James T."
                duration="5 months ago"
                ikatelekki="Ikate, Lekki"
                closeOne="images/img_close_blue_gray_100_02.svg"
                className="flex justify-center items-center w-full p-4 bg-gray-900 shadow-xs rounded-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
