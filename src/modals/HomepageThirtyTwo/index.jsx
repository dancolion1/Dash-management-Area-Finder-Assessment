import React from "react";
import HomepageThirtyReview from "../../components/HomepageThirtyReview";
import { default as ModalProvider } from "react-modal";

export default function HomepageThirtyTwo({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[695px]">
      <div className="w-full">
        <HomepageThirtyReview
          createfromOne={true}
          arrowdownOne="images/img_arrow_down.svg"
          select="Select Amenities"
          iconOne="images/img_icon_amber_a400_01_24x24.svg"
          iconone1="images/img_icon_amber_a400_01_24x24.svg"
          iconone2="images/img_icon_amber_a400_01_24x24.svg"
          iconone3="images/img_icon_amber_a400_01_24x24.svg"
          iconone4="images/img_icon_amber_a400.svg"
          checkboxbgOne={true}
          label="Free Wi-Fi"
          nightlife={true}
          petstore={true}
          nightlifeOne={true}
          petstoreOne={true}
          hospitals={true}
          childcare={true}
          hospitalsOne={true}
          childcareOne={true}
          adulthome={true}
          gym={true}
          adulthomeOne={true}
          gymOne={true}
          checkboxbgone1={true}
          label1="Security"
          parkinglot={true}
          nightlife1={true}
          hospitals1={true}
          adulthome1={true}
          schools={true}
          description="<>Major roads here are motorable and the power supply is good. For those who work in Lekki, living in Ikota is a plus because they will  experience little or no traffic to and from<br />work. The neighbourhood is serene and highly accessible.</>"
          className="pt-2 border-gray-300_02 border border-solid bg-gray-900_05 rounded-md"
        />
      </div>
    </ModalProvider>
  );
}
