import React from "react";
import { Helmet } from "react-helmet";
import HomepageNav from "../../components/HomepageNav";
import HomepageSignup from "../../components/HomepageSignup";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[116px] p-6 md:gap-[87px] sm:gap-[58px] sm:p-5 bg-gray-100_03">
        <HomepageNav className="flex justify-between items-center w-full gap-5 py-2.5 mx-auto max-w-[1240px]" />
        <HomepageSignup className="w-[36%] md:w-full mb-[5px] md:p-5 bg-white-A700 rounded-lg" />
      </div>
    </>
  );
}
