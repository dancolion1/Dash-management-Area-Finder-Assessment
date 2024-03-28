import React from "react";
import HomepageTwentyReview from "../../components/HomepageTwentyReview";
import { default as ModalProvider } from "react-modal";

export default function HomepageTwentyTwo({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[695px]">
      <div className="w-full">
        <HomepageTwentyReview
          reviewlocation="Review Location"
          select={true}
          iconOne="images/img_icon_amber_a400_01.svg"
          iconone1="images/img_icon_amber_a400_01.svg"
          iconone2="images/img_icon_amber_a400_01.svg"
          iconone3="images/img_icon_amber_a400_01.svg"
          iconone4="images/img_icon_amber_a400.svg"
          nightlife={true}
          hospitals={true}
          adulthome={true}
          parkinglotOne={true}
          petstore={true}
          nightlife1={true}
          petstoreOne={true}
          nightlifeOne={true}
          childcare={true}
          hospitals1={true}
          childcareOne={true}
          hospitalsOne={true}
          gym={true}
          adulthome1={true}
          adulthomeOne={true}
          schoolsTwo={true}
          className="flex md:flex-col justify-center items-center pt-[9px] border-gray-300_02 border border-solid bg-gray-50_01 rounded-md"
        />
      </div>
    </ModalProvider>
  );
}
