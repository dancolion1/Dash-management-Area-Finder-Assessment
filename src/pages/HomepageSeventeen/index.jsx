import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img } from "../../components";
import HomepageSeventeenSearchheader from "../../components/HomepageSeventeenSearchheader";

export default function HomepageSeventeenPage() {
  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full pb-[309px] gap-[114px] md:gap-[85px] md:pb-5 sm:gap-[57px] bg-gray-50_01">
        <header className="self-stretch">
          <HomepageSeventeenSearchheader fourhundredfift="“0” Reviews" className="pb-4 bg-gray-100_02" />
        </header>
        <div className="w-[22%] md:w-full md:p-5">
          <div className="flex flex-col items-center gap-10">
            <Img src="images/img_empty_state.svg" alt="emptystate_one" className="h-[255px] w-full md:h-auto" />
            <Text as="p" className="tracking-[0.16px]">
              Oops! No reviews yet.
            </Text>
            <Button size="5xl" shape="round" className="sm:px-5 uppercase font-medium min-w-[210px]">
              Leave a Review
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
