import React from "react";
import { Helmet } from "react-helmet";
import AdminLogin from "../../components/AdminLogin";
import HomepageNav from "../../components/HomepageNav";

export default function AdminPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full gap-[287px] p-6 md:gap-[215px] sm:gap-[143px] sm:p-5 bg-gray-100_03">
        <HomepageNav className="flex justify-between items-center w-full gap-5 py-2.5 mx-auto max-w-[1240px]" />
        <AdminLogin className="flex flex-col items-center justify-center w-[25%] md:w-full mb-[5px] gap-[21px] p-6 sm:p-5 bg-gray-50_01 rounded-lg" />
      </div>
    </>
  );
}
