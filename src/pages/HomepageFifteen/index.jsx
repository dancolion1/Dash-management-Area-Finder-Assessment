import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Text, Heading } from "../../components";
import HomepageFourteenHerocard from "../../components/HomepageFourteenHerocard";

export default function HomepageFifteenPage() {
  const [searchBarValue25, setSearchBarValue25] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full gap-6 px-[100px] md:px-5 bg-gray-50_01">
        <header className="flex md:flex-col justify-between items-center gap-5">
          <div className="flex mt-[34px] gap-1 py-[7px] flex-wrap">
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
          <div className="flex md:flex-row sm:flex-col w-[41%] md:w-full gap-6">
            <HomepageFourteenHerocard
              offerOne="images/img_offer_blue_gray_300.svg"
              userOne="images/img_user_blue_gray_300.svg"
              className="flex flex-col w-full sm:w-full pb-4 gap-2 px-4 bg-gray-50_01 shadow-xs cursor-pointer rounded-[15px] hover:shadow-xs"
            />
            <div className="h-[176px] w-full sm:w-full cursor-pointer relative hover:shadow-xs">
              <HomepageFourteenHerocard
                offerOne="images/img_offer_blue_gray_300.svg"
                userOne="images/img_user_blue_gray_300.svg"
                className="flex flex-col w-full h-max pb-4 gap-2 left-0 bottom-0 right-0 top-0 px-4 m-auto bg-gray-50_01 shadow-xs absolute rounded-[15px]"
              />
              <div className="flex justify-end items-center w-[52%] gap-[13px] right-[0.00px] top-[18%] m-auto absolute">
                <Text as="p" className="!text-gray-900_04 text-right !font-medium">
                  Welcome!
                </Text>
                <Img src="images/img_rectangle_32.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
              </div>
            </div>
          </div>
        </header>
        <div className="w-full mx-auto max-w-[1238px]">
          <div className="flex md:flex-col justify-between items-start gap-5">
            <div className="flex flex-col w-[45%] md:w-full mt-[91px] gap-[39px]">
              <div className="flex flex-col w-[91%] md:w-full gap-[39px]">
                <Heading size="2xl" as="h1">
                  <>
                    Find a place you
                    <br />
                    will love to live!
                  </>
                </Heading>
                <Text size="6xl" as="p" className="!font-normal">
                  <>
                    See through the lenses of people who have
                    <br />
                    lived or visited the neighbourhood you might
                    <br />
                    have in mind.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-start gap-5">
                <Input
                  shape="round"
                  name="search"
                  placeholder={`Enter Address`}
                  value={searchBarValue25}
                  onChange={(e) => setSearchBarValue25(e)}
                  prefix={<Img src="images/img_icons.svg" alt="icons" className="cursor-pointer" />}
                  suffix={
                    searchBarValue25?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue25("")} height={16} width={16} fillColor="#0c2159ff" />
                    ) : null
                  }
                  className="self-stretch gap-2.5 sm:pr-5 !text-gray-800_01 tracking-[0.04px] border-gray-300_02 border border-solid"
                />
                <Button size="5xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[146px]">
                  Search
                </Button>
              </div>
            </div>
            <div className="w-[41%] md:w-full">
              <div className="justify-center gap-6 grid-cols-[repeat(auto-fill,_minmax(211px_,_1fr))] grid">
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  categoriessm="network"
                  className="flex justify-center items-center w-full p-3.5 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  categoriessm="power"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  categoriessm="water"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  categoriessm="security"
                  className="flex justify-center items-center w-full p-[15px] bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne={true}
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  categoriessm="road"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne="images/img_close_blue_gray_100_02.svg"
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
                <HomepageFourteenHerocard
                  circleimage="images/img_ellipse_1.png"
                  jamest="James T."
                  duration="5 months ago"
                  ikatelekki="Ikate, Lekki"
                  closeOne="images/img_close_blue_gray_100_02.svg"
                  offerOne="images/img_offer_blue_gray_300.svg"
                  userOne="images/img_user_blue_gray_300.svg"
                  className="flex justify-center items-center w-full p-4 bg-gray-50_01 shadow-xs rounded-[15px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}