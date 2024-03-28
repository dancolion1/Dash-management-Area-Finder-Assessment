import React from "react";
import { Helmet } from "react-helmet";
import HomepageSevenNav from "../../components/HomepageSevenNav";
import HomepageTwentySixLogin from "../../components/HomepageTwentySixLogin";

export default function HomepageTwentySixPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[203px] p-6 md:gap-[152px] sm:gap-[101px] sm:p-5 bg-gray-900_05">
        <HomepageSevenNav className="flex justify-between items-center w-full gap-5 py-2.5 mx-auto max-w-[1240px]" />
        <HomepageTwentySixLogin className="flex flex-col items-center justify-center w-[25%] md:w-full mb-[5px] gap-[23px] p-6 sm:p-5 bg-black-900 rounded-lg" />
      </div>
    </>
  );
}
