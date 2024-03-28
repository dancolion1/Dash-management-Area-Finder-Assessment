import React from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../../components";

export default function FrameFiftyThreePage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full pl-[78px] pr-14 py-[78px] md:p-5 bg-gray-900_05">
        <Heading size="3xl" as="h1" className="ml-2 md:ml-0 !text-gray-50">
          ADMIN-AREAS
        </Heading>
      </div>
    </>
  );
}
