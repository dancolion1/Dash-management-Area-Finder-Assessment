import React from "react";
import { Button, CheckBox, Text, Img } from "./..";

export default function HomepageThirtyReview({
  reviewlocation = "Review Location",
  bonnyandclyde = "Bonny and Clyde Street, Ajao Estate, Lagos",
  createfromOne,
  arrowdownOne,
  select,
  ratelocation = "Rate location",
  iconOne,
  iconone1,
  iconone2,
  iconone3,
  iconone4,
  writereview = "Write Review",
  checkboxbgOne,
  label,
  nightlife,
  petstore,
  nightlifeOne,
  petstoreOne,
  hospitals,
  childcare,
  hospitalsOne,
  childcareOne,
  adulthome,
  gym,
  adulthomeOne,
  gymOne,
  checkboxbgone1,
  label1,
  parkinglot,
  nightlife1,
  hospitals1,
  adulthome1,
  schools,
  description,
  submit = "SUBMIT",
  cancel = "CANCEL",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex self-end w-full py-[17px] mx-auto md:p-5 max-w-[1240px]">
        <div className="flex flex-col items-end w-[76%] md:w-full mb-[272px]">
          <Text
            size="4xl"
            as="p"
            className="mr-[252px] md:mr-0 !text-gray-50 tracking-[0.15px] text-center !font-medium"
          >
            {reviewlocation}
          </Text>
          <Text size="5xl" as="p" className="mt-[17px] mr-[233px] md:mr-0 !text-gray-50">
            {bonnyandclyde}
          </Text>
          {!!createfromOne ? (
            <div className="h-[50px] w-[70%] bg-gray-900_06 absolute rounded-md">
              {!!arrowdownOne ? (
                <Img
                  src={arrowdownOne}
                  alt="arrowdown_one"
                  className="h-[16px] w-[16px] right-[0.00px] bottom-0 top-0 my-auto absolute"
                />
              ) : null}
              <div className="flex sm:flex-col justify-center items-center flex-1">
                <CheckBox
                  name="schools"
                  label="Schools"
                  id="schools2"
                  className="self-start sm:self-stretch gap-3 text-gray-50 text-left text-sm flex-1"
                />
                <CheckBox
                  name="security"
                  label="Security"
                  id="security1"
                  className="sm:self-stretch ml-[49px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm flex-1"
                />
                <CheckBox
                  name="schools_one"
                  label="Schools"
                  id="schoolsone1"
                  className="self-start sm:self-stretch ml-[37px] gap-3 sm:ml-0 text-gray-50 text-left text-sm flex-1"
                />
                {!!checkboxbgone1 ? (
                  <div className="self-start h-[16px] w-[16px] ml-[49px] sm:ml-0 border-gray-300_01 border border-solid rounded" />
                ) : null}
                {!!label1 ? (
                  <Text size="2xl" as="p" className="self-end ml-3 sm:ml-0 !text-gray-50">
                    {label1}
                  </Text>
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="flex flex-col w-[69%] md:w-full gap-[18px]">
            <div className="h-[299px] md:h-auto relative">
              <div className="flex flex-col items-start w-[21%] mt-4">
                <Text size="2xl" as="p" className="!text-gray-50 !font-medium">
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
                <Text size="2xl" as="p" className="mt-6 !text-gray-50">
                  {writereview}
                </Text>
              </div>
              <div className="w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="p-4 z-[1] border-gray-900_06 border border-solid bg-gray-900_06 rounded-md">
                  <div className="flex md:flex-col items-center gap-6">
                    <div className="md:self-stretch flex-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex sm:flex-col justify-center items-center flex-1">
                          <div className="flex justify-between sm:self-stretch gap-5 flex-1">
                            <CheckBox
                              name="parkinglot"
                              label="Parking Lot"
                              id="parkinglot1"
                              className="p-px text-gray-50 text-left text-sm"
                            />
                            <CheckBox
                              name="freewifi"
                              label="Free Wi-Fi"
                              id="freewifi"
                              className="self-start gap-3 text-gray-50 text-left text-sm"
                            />
                            <CheckBox
                              name="parkinglot_one"
                              label="Parking Lot"
                              id="parkinglotone"
                              className="gap-3 p-px text-gray-50 text-left text-sm"
                            />
                          </div>
                          {!!checkboxbgOne ? (
                            <div className="self-start h-[16px] w-[16px] ml-[27px] sm:ml-0 border-gray-300_01 border border-solid rounded" />
                          ) : null}
                          {!!label ? (
                            <Text size="2xl" as="p" className="self-start ml-3 sm:ml-0 !text-gray-50">
                              {label}
                            </Text>
                          ) : null}
                        </div>
                        <div className="flex sm:flex-col justify-center flex-1">
                          {!!nightlife ? (
                            <CheckBox
                              name="nightlife"
                              label="Nightlife"
                              id="nightlife1"
                              className="gap-3 p-px text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!petstore ? (
                            <CheckBox
                              name="petstore"
                              label="Pet Store"
                              id="petstore"
                              className="ml-[46px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!nightlifeOne ? (
                            <CheckBox
                              name="nightlife_one"
                              label="Nightlife"
                              id="nightlifeone"
                              className="ml-[30px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!petstoreOne ? (
                            <CheckBox
                              name="petstore_one"
                              label="Pet Store"
                              id="petstoreone"
                              className="ml-[46px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                        </div>
                        <div className="flex sm:flex-col justify-center flex-1">
                          {!!hospitals ? (
                            <CheckBox
                              name="hospitals"
                              label="Hospitals"
                              id="hospitals1"
                              className="gap-3 p-px text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!childcare ? (
                            <CheckBox
                              name="childcare"
                              label="Childcare"
                              id="childcare"
                              className="ml-10 gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!hospitalsOne ? (
                            <CheckBox
                              name="hospitals_one"
                              label="Hospitals"
                              id="hospitalsone"
                              className="ml-[29px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                          {!!childcareOne ? (
                            <CheckBox
                              name="childcare_one"
                              label="Childcare"
                              id="childcareone"
                              className="ml-10 gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm"
                            />
                          ) : null}
                        </div>
                        <div className="flex sm:flex-col justify-between w-[92%] md:w-full gap-5">
                          <div className="flex justify-center w-[43%] sm:w-full gap-6">
                            {!!adulthome ? (
                              <CheckBox
                                name="adulthome"
                                label="Adult Home"
                                id="adulthome1"
                                className="gap-3 p-px text-gray-50 text-left text-sm flex-1"
                              />
                            ) : null}
                            {!!gym ? (
                              <CheckBox
                                name="gym"
                                label="Gym"
                                id="gym"
                                className="gap-3 py-px text-gray-50 text-left text-sm"
                              />
                            ) : null}
                          </div>
                          <div className="flex justify-center w-[43%] sm:w-full gap-6">
                            {!!adulthomeOne ? (
                              <CheckBox
                                name="adulthome_one"
                                label="Adult Home"
                                id="adulthomeone"
                                className="gap-3 p-px text-gray-50 text-left text-sm flex-1"
                              />
                            ) : null}
                            {!!gymOne ? (
                              <CheckBox
                                name="gym_one"
                                label="Gym"
                                id="gymone"
                                className="gap-3 py-px text-gray-50 text-left text-sm"
                              />
                            ) : null}
                          </div>
                        </div>
                        <div className="flex sm:flex-col justify-center items-center flex-1">
                          <CheckBox
                            name="schools"
                            label="Schools"
                            id="schools2"
                            className="self-start sm:self-stretch gap-3 text-gray-50 text-left text-sm flex-1"
                          />
                          <CheckBox
                            name="security"
                            label="Security"
                            id="security1"
                            className="sm:self-stretch ml-[49px] gap-3 p-px sm:ml-0 text-gray-50 text-left text-sm flex-1"
                          />
                          <CheckBox
                            name="schools_one"
                            label="Schools"
                            id="schoolsone1"
                            className="self-start sm:self-stretch ml-[37px] gap-3 sm:ml-0 text-gray-50 text-left text-sm flex-1"
                          />
                          {!!checkboxbgone1 ? (
                            <div className="self-start h-[16px] w-[16px] ml-[49px] sm:ml-0 border-gray-300_01 border border-solid rounded" />
                          ) : null}
                          {!!label1 ? (
                            <Text size="2xl" as="p" className="self-end ml-3 sm:ml-0 !text-gray-50">
                              {label1}
                            </Text>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col w-[18%] md:w-full gap-2">
                      {!!parkinglot ? (
                        <CheckBox
                          name="parkinglot"
                          label="Parking Lot"
                          id="parkinglot"
                          className="gap-3 py-px text-gray-50 text-left text-sm"
                        />
                      ) : null}
                      {!!nightlife1 ? (
                        <CheckBox
                          name="nightlife"
                          label="Nightlife"
                          id="nightlife"
                          className="gap-3 p-px text-gray-50 text-left text-sm"
                        />
                      ) : null}
                      {!!hospitals1 ? (
                        <CheckBox
                          name="hospitals"
                          label="Hospitals"
                          id="hospitals"
                          className="gap-3 p-px text-gray-50 text-left text-sm"
                        />
                      ) : null}
                      <div className="flex flex-col gap-2">
                        {!!adulthome1 ? (
                          <CheckBox
                            name="adulthome"
                            label="Adult Home"
                            id="adulthome"
                            className="gap-3 p-px text-gray-50 text-left text-sm"
                          />
                        ) : null}
                        {!!schools ? (
                          <CheckBox
                            name="schools"
                            label="Schools"
                            id="schools"
                            className="gap-3 p-px text-gray-50 text-left text-sm"
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[-38px] p-3 relative border-gray-300_02 border border-solid rounded-md">
                  {!!description ? (
                    <Text size="2xl" as="p" className="!text-gray-50 leading-[115%]">
                      {description}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
            <CheckBox
              name="postasanonymous"
              label="Post as Anonymous"
              id="postasanonymous"
              className="gap-2 p-px text-gray-500 text-left text-sm"
            />
            <div className="flex items-center gap-6">
              <Button size="5xl" shape="round" className="w-full sm:px-5 uppercase font-medium">
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
