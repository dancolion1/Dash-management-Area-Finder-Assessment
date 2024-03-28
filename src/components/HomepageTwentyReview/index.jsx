import React from "react";
import { Button, CheckBox, Text, Img, SelectBox } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function HomepageTwentyReview({
  reviewlocation = "Edit Review",
  bonnyandclyde = "Bonny and Clyde Street, Ajao Estate, Lagos",
  select,
  ratelocation = "Rate location",
  iconOne,
  iconone1,
  iconone2,
  iconone3,
  iconone4,
  writereview = "Write Review",
  parkinglot,
  nightlife,
  hospitals,
  adulthome,
  freewifi,
  parkinglot1,
  freewifiOne,
  parkinglotOne,
  petstore,
  nightlife1,
  petstoreOne,
  nightlifeOne,
  childcare,
  hospitals1,
  childcareOne,
  hospitalsOne,
  gym,
  adulthome1,
  checkboxbgOne,
  label,
  adulthomeOne,
  schools,
  security,
  schoolsOne,
  securityOne,
  schoolsTwo,
  description = (
    <>
      Major roads here are motorable and the power supply is good. For those who work in Lekki, living in Ikota is a
      plus because they will experience little or no traffic to and from
      <br />
      work. The neighbourhood is serene and highly accessible.
    </>
  ),
  postasanonymous,
  submit = "SUBMIT",
  cancel = "CANCEL",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex self-stretch justify-center pb-4">
        <div className="flex flex-col items-start gap-[17px] p-[5px]">
          <div className="flex self-center mt-[19px]">
            <Text size="4xl" as="p" className="tracking-[0.15px] text-center !font-medium">
              {reviewlocation}
            </Text>
          </div>
          <Text size="5xl" as="p" className="ml-[18px] md:ml-0">
            {bonnyandclyde}
          </Text>
        </div>
      </div>
      {!!select ? (
        <SelectBox
          shape="round"
          indicator={<Img src="images/img_arrow_down.svg" alt="arrow_down" />}
          name="select"
          placeholder={`Select Amenities`}
          options={dropDownOptions}
          className="w-[93%] gap-px sm:pr-5"
        />
      ) : null}
      <div className="self-stretch pb-[21px] px-[21px] sm:pb-5 sm:px-5">
        <div className="flex flex-col gap-4">
          <div className="h-[299px] md:h-auto relative">
            <div className="flex flex-col items-start w-[21%] mt-4">
              <Text size="2xl" as="p" className="!font-medium">
                {ratelocation}
              </Text>
              <div className="flex md:flex-row self-stretch mt-[13px] gap-1">
                <div className="flex flex-col">
                  {!!iconOne ? <Img src={iconOne} alt="icon_one" className="h-[24px]" /> : null}
                </div>
                <div className="flex flex-col">
                  {!!iconone1 ? <Img src={iconone1} alt="icon_one" className="h-[24px]" /> : null}
                </div>
                <div className="flex flex-col">
                  {!!iconone2 ? <Img src={iconone2} alt="icon_one" className="h-[24px]" /> : null}
                </div>
                <div className="flex flex-col">
                  {!!iconone3 ? <Img src={iconone3} alt="icon_one" className="h-[24px]" /> : null}
                </div>
                <div className="flex flex-col">
                  {!!iconone4 ? <Img src={iconone4} alt="icon_one" className="h-[24px]" /> : null}
                </div>
              </div>
              <Text size="2xl" as="p" className="mt-6">
                {writereview}
              </Text>
            </div>
            <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="pb-4 z-[1] border-gray-300 border border-solid bg-gray-50_03 rounded-md">
                <div className="flex flex-col self-start">
                  <div className="flex sm:flex-col items-center gap-1.5">
                    <div className="flex flex-col self-end w-[15%] sm:w-full mb-1.5 gap-2">
                      {!!parkinglot ? (
                        <CheckBox
                          name="parkinglot"
                          label="Parking Lot"
                          id="parkinglot1"
                          className="gap-3 py-px text-gray-900_03 text-left text-sm"
                        />
                      ) : null}
                      {!!nightlife ? (
                        <CheckBox
                          name="nightlife"
                          label="Nightlife"
                          id="nightlife1"
                          className="gap-3 p-px text-gray-900_03 text-left text-sm"
                        />
                      ) : null}
                      {!!hospitals ? (
                        <CheckBox
                          name="hospitals"
                          label="Hospitals"
                          id="hospitals1"
                          className="gap-3 p-px text-gray-900_03 text-left text-sm"
                        />
                      ) : null}
                      {!!adulthome ? (
                        <CheckBox
                          name="adulthome"
                          label="Adult Home"
                          id="adulthome1"
                          className="gap-3 p-px text-gray-900_03 text-left text-sm"
                        />
                      ) : null}
                    </div>
                    <div className="flex sm:self-stretch p-1.5 flex-1">
                      <div className="w-[84%] md:w-full mt-3.5 ml-[11px] md:ml-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex sm:flex-col justify-between gap-5 flex-1">
                            {!!freewifi ? (
                              <CheckBox
                                name="freewifi"
                                label="Free Wi-Fi"
                                id="freewifi"
                                className="gap-3 p-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!parkinglot1 ? (
                              <CheckBox
                                name="parkinglot"
                                label="Parking Lot"
                                id="parkinglot"
                                className="gap-3 py-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!freewifiOne ? (
                              <CheckBox
                                name="freewifi_one"
                                label="Free Wi-Fi"
                                id="freewifione"
                                className="gap-3 p-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!parkinglotOne ? (
                              <CheckBox
                                name="parkinglot_one"
                                label="Parking Lot"
                                id="parkinglotone"
                                className="gap-3 py-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                          </div>
                          <div className="flex sm:flex-col justify-center flex-1">
                            {!!petstore ? (
                              <CheckBox
                                name="petstore"
                                label="Pet Store"
                                id="petstore"
                                className="gap-3 p-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!nightlife1 ? (
                              <CheckBox
                                name="nightlife"
                                label="Nightlife"
                                id="nightlife"
                                className="ml-[30px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!petstoreOne ? (
                              <CheckBox
                                name="petstore_one"
                                label="Pet Store"
                                id="petstoreone"
                                className="ml-[46px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!nightlifeOne ? (
                              <CheckBox
                                name="nightlife_one"
                                label="Nightlife"
                                id="nightlifeone"
                                className="ml-[30px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                          </div>
                          <div className="flex sm:flex-col justify-center flex-1">
                            {!!childcare ? (
                              <CheckBox
                                name="childcare"
                                label="Childcare"
                                id="childcare"
                                className="gap-3 p-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!hospitals1 ? (
                              <CheckBox
                                name="hospitals"
                                label="Hospitals"
                                id="hospitals"
                                className="ml-[29px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!childcareOne ? (
                              <CheckBox
                                name="childcare_one"
                                label="Childcare"
                                id="childcareone"
                                className="ml-10 gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            {!!hospitalsOne ? (
                              <CheckBox
                                name="hospitals_one"
                                label="Hospitals"
                                id="hospitalsone"
                                className="ml-[29px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                          </div>
                          <div className="flex justify-between gap-5 flex-1">
                            {!!gym ? (
                              <CheckBox
                                name="gym"
                                label="Gym"
                                id="gym"
                                className="gap-3 py-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                            <div className="flex justify-center w-[40%] gap-6">
                              {!!adulthome1 ? (
                                <CheckBox
                                  name="adulthome"
                                  label="Adult Home"
                                  id="adulthome"
                                  className="gap-3 p-px text-gray-900_03 text-left text-sm flex-1"
                                />
                              ) : null}
                              <div className="flex justify-center items-center w-[36%] gap-3">
                                {!!checkboxbgOne ? (
                                  <div className="h-[16px] w-[16px] border-gray-300_01 border border-solid rounded" />
                                ) : null}
                                {!!label ? (
                                  <Text size="2xl" as="p" className="self-end">
                                    {label}
                                  </Text>
                                ) : null}
                              </div>
                            </div>
                            {!!adulthomeOne ? (
                              <CheckBox
                                name="adulthome_one"
                                label="Adult Home"
                                id="adulthomeone"
                                className="gap-3 p-px text-gray-900_03 text-left text-sm"
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col w-[83%] md:w-full">
                    {!!schools ? (
                      <CheckBox
                        name="schools"
                        label="Schools"
                        id="schools"
                        className="gap-3 p-px text-gray-900_03 text-left text-sm"
                      />
                    ) : null}
                    {!!security ? (
                      <CheckBox
                        name="security"
                        label="Security"
                        id="security"
                        className="ml-[49px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                      />
                    ) : null}
                    {!!schoolsOne ? (
                      <CheckBox
                        name="schools_one"
                        label="Schools"
                        id="schoolsone"
                        className="ml-[37px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                      />
                    ) : null}
                    {!!securityOne ? (
                      <CheckBox
                        name="security_one"
                        label="Security"
                        id="securityone"
                        className="ml-[49px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                      />
                    ) : null}
                    {!!schoolsTwo ? (
                      <CheckBox
                        name="schools_two"
                        label="Schools"
                        id="schoolstwo"
                        className="ml-[37px] gap-3 p-px sm:ml-0 text-gray-900_03 text-left text-sm"
                      />
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="mt-[-38px] p-3 relative border-gray-300_02 border border-solid bg-gray-50 rounded-md">
                <Text size="2xl" as="p" className="!text-gray-900_04 leading-[140%]">
                  {description}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[21px]">
            {!!postasanonymous ? (
              <CheckBox
                name="postasanonymous"
                label="Post as Anonymous"
                id="postasanonymous"
                className="gap-2 p-px text-gray-800_01 text-left text-sm"
              />
            ) : null}
            <div className="flex items-center gap-6">
              <Button color="indigo_50" size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
                {submit}
              </Button>
              <Button
                color="indigo_A200"
                size="3xl"
                variant="outline"
                shape="round"
                className="w-full sm:px-5 uppercase font-medium"
              >
                {cancel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
