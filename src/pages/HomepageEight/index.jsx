import React from "react";
import { Helmet } from "react-helmet";
import HomepageSevenNav from "../../components/HomepageSevenNav";
import HomepageSevenSignup from "../../components/HomepageSevenSignup";

export default function HomepageEightPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pt-6 sm:pt-5 bg-gray-900_05">
        <HomepageSevenNav className="flex justify-between items-center w-full gap-5 py-2.5 mx-auto md:p-5 max-w-[1240px]" />
        <div className="flex justify-center px-14 py-[97px] md:p-5">
          <HomepageSevenSignup
            password={true}
            passwordis="Password is incorrect"
            className="w-[38%] md:w-full bg-black-900 rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
