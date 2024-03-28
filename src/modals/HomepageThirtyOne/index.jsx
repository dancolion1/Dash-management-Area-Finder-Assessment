import React from "react";
import HomepageThirtyReview from "../../components/HomepageThirtyReview";
import { default as ModalProvider } from "react-modal";

export default function HomepageThirtyOne({ isOpen, ...props }) {
  return (
    <ModalProvider
      createfromOne={true}
      arrowdownOne="images/img_arrow_down.svg"
      select="Select Amenities"
      iconOne="images/img_icon_amber_a400.svg"
      iconone1="images/img_icon_amber_a400.svg"
      iconone2="images/img_icon_amber_a400.svg"
      iconone3="images/img_icon_amber_a400.svg"
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
      parkinglot={true}
      nightlife1={true}
      hospitals1={true}
      adulthome1={true}
      schools={true}
      description="Placeholder"
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[695px]"
    >
      <HomepageThirtyReview
        createfromOne={true}
        arrowdownOne="images/img_arrow_down.svg"
        select="Select Amenities"
        iconOne="images/img_icon_amber_a400.svg"
        iconone1="images/img_icon_amber_a400.svg"
        iconone2="images/img_icon_amber_a400.svg"
        iconone3="images/img_icon_amber_a400.svg"
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
        parkinglot={true}
        nightlife1={true}
        hospitals1={true}
        adulthome1={true}
        schools={true}
        description="Placeholder"
        className="w-full pt-2 border-gray-300_02 border border-solid bg-gray-900_05 rounded-md"
      />
    </ModalProvider>
  );
}
