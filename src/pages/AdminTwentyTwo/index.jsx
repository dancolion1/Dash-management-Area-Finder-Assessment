import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Heading, Input } from "../../components";
import Header2 from "../../components/Header2";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/Sidebar1";
import { createColumnHelper } from "@tanstack/react-table";

const table12Data = [
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Gym",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "120",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Amusement Park",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "64",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Wi-Fi",
    tablecelltwo: "Utility Services",
    tablecellthree: "90",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Car Park",
    tablecelltwo: "Transportation Services",
    tablecellthree: "45",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Hospital",
    tablecelltwo: "Healthcare Facilities ",
    tablecellthree: "120",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Gym",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "64",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Amusement Park",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "90",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Wi-Fi",
    tablecelltwo: "Utility Services",
    tablecellthree: "45",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Car Park",
    tablecelltwo: "Transportation Services",
    tablecellthree: "120",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Hospital",
    tablecelltwo: "Healthcare Facilities ",
    tablecellthree: "64",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Gym",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "90",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Amusement Park",
    tablecelltwo: "Recreational Facilities ",
    tablecellthree: "45",
    rowtablecell: "images/img_notification.svg",
  },
  {
    tablecell: "May 10th, 2024",
    tablecellone: "Wi-Fi",
    tablecelltwo: "Utility Services",
    tablecellthree: "120",
    rowtablecell: "images/img_notification.svg",
  },
];

export default function AdminTwentyTwoPage() {
  const [searchBarValue59, setSearchBarValue59] = React.useState("");
  const table12Columns = React.useMemo(() => {
    const table12ColumnHelper = createColumnHelper();
    return [
      table12ColumnHelper.accessor("tablecell", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h1" className="border-blue_gray-50 border-t border-l border-b border-solid">
            Date Created
          </Heading>
        ),
        meta: { width: "263px" },
      }),
      table12ColumnHelper.accessor("tablecellone", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h2" className="border-blue_gray-50 border-t border-l border-b border-solid">
            Amenities
          </Heading>
        ),
        meta: { width: "335px" },
      }),
      table12ColumnHelper.accessor("tablecelltwo", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h3" className="border-blue_gray-50 border-t border-l border-b border-solid">
            Categories
          </Heading>
        ),
        meta: { width: "279px" },
      }),
      table12ColumnHelper.accessor("tablecellthree", {
        cell: (info) => (
          <Text as="p" className="border-blue_gray-50 border-l border-b border-solid">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Heading as="h4" className="border-blue_gray-50 border-t border-l border-b border-solid">
            No of Reviews
          </Heading>
        ),
        meta: { width: "235px" },
      }),
      table12ColumnHelper.accessor("rowtablecell", {
        cell: (info) => (
          <div className="flex">
            <Button color="blue_gray_50" size="4xl" variant="outline" shape="square">
              <Img src="images/img_notification.svg" />
            </Button>
          </div>
        ),
        header: (info) => (
          <div className="flex">
            <div className="h-[50px] w-[48px] border-blue_gray-50 border border-solid" />
          </div>
        ),
        meta: { width: "48px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Area finder</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gray-50_01">
        <div className="flex flex-col">
          <Header2 className="p-4 bg-gray-100_02" />
          <div className="flex md:flex-col justify-between items-start w-[97%] md:w-full gap-5 md:p-5">
            <Sidebar1 className="flex flex-col h-screen w-[202px] top-0 py-10 sm:py-5 bg-gray-100_02 !sticky overflow-auto md:hidden" />
            <div className="md:self-stretch flex-1">
              <div className="flex flex-col gap-[23px]">
                <div className="flex md:flex-col justify-between items-center gap-5">
                  <Text size="6xl" as="p" className="self-end mb-[5px]">
                    All Amenities
                  </Text>
                  <div className="flex md:flex-col justify-center items-end w-[73%] md:w-full gap-2">
                    <div className="md:self-stretch h-[74px] md:w-full flex-1 relative md:flex-none">
                      <Button
                        size="xl"
                        shape="round"
                        className="bottom-[0.00px] right-[-0.50px] m-auto sm:px-5 uppercase font-medium min-w-[170px] absolute !rounded"
                      >
                        create amenity
                      </Button>
                      <Button
                        color="deep_orange_50"
                        size="5xl"
                        shape="round"
                        leftIcon={<Img src="images/img_checkcircle_red_600.svg" alt="check-circle" />}
                        className="gap-3 left-[0.00px] top-[0.00px] m-auto sm:px-5 font-clashdisplay font-medium border-red-600 border border-solid min-w-[339px] absolute"
                      >
                        Amenity Created Not Successful
                      </Button>
                    </div>
                    <Input
                      size="xs"
                      shape="square"
                      name="search"
                      placeholder={`Search`}
                      value={searchBarValue59}
                      onChange={(e) => setSearchBarValue59(e)}
                      prefix={<Img src="images/img_rewind.svg" alt="rewind" className="cursor-pointer" />}
                      suffix={
                        searchBarValue59?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue59("")}
                            height={10}
                            width={10}
                            fillColor="#8f95b2ff"
                          />
                        ) : null
                      }
                      className="w-[27%] md:w-full gap-2.5 sm:pr-5 text-blue_gray-300"
                    />
                    <Button
                      size="xl"
                      variant="outline"
                      shape="round"
                      className="sm:px-5 uppercase font-medium min-w-[100px] !rounded"
                    >
                      Search
                    </Button>
                  </div>
                </div>
                <ReactTable
                  size="md"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "md:flex-col" }}
                  rowDataProps={{ className: "md:flex-col" }}
                  columns={table12Columns}
                  data={table12Data}
                />
                <div className="flex md:flex-col justify-between items-center gap-5 border-blue_gray-50 border border-solid">
                  <div className="flex">
                    <Button
                      color="white_A700"
                      size="xl"
                      shape="round"
                      leftIcon={<Img src="images/img_arrowleft_blue_gray_800.svg" alt="arrow_left" />}
                      className="gap-2 font-semibold border-blue_gray-100_01 border border-solid min-w-[115px] !rounded-lg"
                    >
                      Previous
                    </Button>
                  </div>
                  <div className="flex justify-between items-center w-[61%] md:w-full gap-5">
                    <div className="flex items-center flex-wrap">
                      <Text
                        size="2xl"
                        as="p"
                        className="flex justify-center items-center h-[40px] w-[40px] !text-blue-A700 text-center !font-medium bg-blue-A700_0c rounded-[20px]"
                      >
                        1
                      </Text>
                      <Text size="2xl" as="p" className="ml-[17px] !text-blue_gray-500 text-center !font-medium">
                        2
                      </Text>
                      <Text size="2xl" as="p" className="ml-8 !text-blue_gray-500 text-center !font-medium">
                        3
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="self-end mb-[7px] ml-[31px] !text-blue_gray-500 text-center !font-medium"
                      >
                        ...
                      </Text>
                      <Text size="2xl" as="p" className="ml-[31px] !text-blue_gray-500 text-center !font-medium">
                        8
                      </Text>
                      <Text size="2xl" as="p" className="ml-[33px] !text-blue_gray-500 text-center !font-medium">
                        9
                      </Text>
                      <Text
                        size="2xl"
                        as="p"
                        className="h-[17px] ml-[29px] !text-blue_gray-500 text-center !font-medium"
                      >
                        10
                      </Text>
                    </div>
                    <div className="flex">
                      <Button
                        color="white_A700"
                        size="xl"
                        shape="round"
                        rightIcon={<Img src="images/img_arrowleft_blue_gray_800.svg" alt="arrow_right" />}
                        className="gap-2 font-semibold border-blue_gray-100_01 border border-solid min-w-[88px] !rounded-lg"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
