import React from "react";
import { Helmet } from "react-helmet";
import HomepageNav from "../../components/HomepageNav";
import HomepageSixteenLogin from "../../components/HomepageSixteenLogin";

export default function HomepageSixteenPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[203px] p-6 md:gap-[152px] sm:gap-[101px] sm:p-5 bg-gray-100_03">
        <HomepageNav className="flex justify-between items-center w-full gap-5 py-2.5 mx-auto max-w-[1240px]" />
        <HomepageSixteenLogin className="flex flex-col items-center w-[25%] md:w-full mb-[5px] gap-[23px] p-[18px] bg-gray-50_01 rounded-lg" />
      </div>
    </>
  );
}
