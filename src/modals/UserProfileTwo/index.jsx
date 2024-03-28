import React from "react";
import HomepageTwentyReview from "../../components/HomepageTwentyReview";
import { default as ModalProvider } from "react-modal";

export default function UserProfileTwo({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1440px]">
      <div className="flex justify-end w-full">
        <div className="flex w-[86%] md:w-full pl-[147px] pr-14 py-[147px] md:p-5">
          <div className="flex w-[69%] md:w-full mb-[71px] ml-[26px] md:ml-0">
            <HomepageTwentyReview
              select={true}
              iconOne="images/img_icon_amber_a400.svg"
              iconone1="images/img_icon_amber_a400.svg"
              iconone2="images/img_icon_amber_a400.svg"
              iconone3="images/img_icon_amber_a400.svg"
              iconone4="images/img_icon_amber_a400.svg"
              parkinglot={true}
              nightlife={true}
              hospitals={true}
              adulthome={true}
              freewifi={true}
              parkinglot1={true}
              freewifiOne={true}
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
              checkboxbgOne={true}
              label="Gym"
              adulthomeOne={true}
              schools={true}
              security={true}
              schoolsOne={true}
              securityOne={true}
              schoolsTwo={true}
              postasanonymous={true}
              className="flex flex-col items-center w-full border-gray-300_02 border border-solid bg-gray-50_01 rounded-md"
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
