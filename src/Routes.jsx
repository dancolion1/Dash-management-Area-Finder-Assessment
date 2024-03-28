import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FrameFiftyOne from "pages/FrameFiftyOne";
import Homepage from "pages/Homepage";
import HomepageOne from "pages/HomepageOne";
import HomepageSeven from "pages/HomepageSeven";
import HomepageEight from "pages/HomepageEight";
import FrameFortyNine from "pages/FrameFortyNine";
import HomepageFourteen from "pages/HomepageFourteen";
import HomepageFifteen from "pages/HomepageFifteen";
import HomepageSixteen from "pages/HomepageSixteen";
import HomepageSeventeen from "pages/HomepageSeventeen";
import HomepageEighteen from "pages/HomepageEighteen";
import HomepageNineteen from "pages/HomepageNineteen";
import HomepageTwentyThree from "pages/HomepageTwentyThree";
import HomepageTwentyFour from "pages/HomepageTwentyFour";
import HomepageTwentyFive from "pages/HomepageTwentyFive";
import HomepageTwentySix from "pages/HomepageTwentySix";
import HomepageTwentySeven from "pages/HomepageTwentySeven";
import HomepageTwentyEight from "pages/HomepageTwentyEight";
import HomepageTwentyNine from "pages/HomepageTwentyNine";
import HomepageThirtyThree from "pages/HomepageThirtyThree";
import FrameFiftyTwo from "pages/FrameFiftyTwo";
import UserProfile from "pages/UserProfile";
import UserProfileOne from "pages/UserProfileOne";
import UserProfileThree from "pages/UserProfileThree";
import UserProfileFour from "pages/UserProfileFour";
import UserProfileFive from "pages/UserProfileFive";
import FrameFifty from "pages/FrameFifty";
import Admin from "pages/Admin";
import AdminOne from "pages/AdminOne";
import FrameFiftyThree from "pages/FrameFiftyThree";
import AdminTwo from "pages/AdminTwo";
import AdminThree from "pages/AdminThree";
import AdminFour from "pages/AdminFour";
import AdminFive from "pages/AdminFive";
import AdminEight from "pages/AdminEight";
import AdminNine from "pages/AdminNine";
import AdminTen from "pages/AdminTen";
import FrameFiftyFour from "pages/FrameFiftyFour";
import AdminEleven from "pages/AdminEleven";
import AdminTwelve from "pages/AdminTwelve";
import AdminThirteen from "pages/AdminThirteen";
import AdminFourteen from "pages/AdminFourteen";
import AdminFifteen from "pages/AdminFifteen";
import AdminSixteen from "pages/AdminSixteen";
import AdminSeventeen from "pages/AdminSeventeen";
import AdminEighteen from "pages/AdminEighteen";
import AdminNineteen from "pages/AdminNineteen";
import FrameFiftyFive from "pages/FrameFiftyFive";
import AdminTwenty from "pages/AdminTwenty";
import AdminTwentyOne from "pages/AdminTwentyOne";
import AdminTwentyTwo from "pages/AdminTwentyTwo";
import AdminTwentyThree from "pages/AdminTwentyThree";
import AdminTwentyFour from "pages/AdminTwentyFour";
import AdminTwentyFive from "pages/AdminTwentyFive";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "framefiftyone",
      element: <FrameFiftyOne />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "homepageone",
      element: <HomepageOne />,
    },
    {
      path: "homepageseven",
      element: <HomepageSeven />,
    },
    {
      path: "homepageeight",
      element: <HomepageEight />,
    },
    {
      path: "framefortynine",
      element: <FrameFortyNine />,
    },
    {
      path: "homepagefourteen",
      element: <HomepageFourteen />,
    },
    {
      path: "homepagefifteen",
      element: <HomepageFifteen />,
    },
    {
      path: "homepagesixteen",
      element: <HomepageSixteen />,
    },
    {
      path: "homepageseventeen",
      element: <HomepageSeventeen />,
    },
    {
      path: "homepageeighteen",
      element: <HomepageEighteen />,
    },
    {
      path: "homepagenineteen",
      element: <HomepageNineteen />,
    },
    {
      path: "homepagetwentythree",
      element: <HomepageTwentyThree />,
    },
    {
      path: "homepagetwentyfour",
      element: <HomepageTwentyFour />,
    },
    {
      path: "homepagetwentyfive",
      element: <HomepageTwentyFive />,
    },
    {
      path: "homepagetwentysix",
      element: <HomepageTwentySix />,
    },
    {
      path: "homepagetwentyseven",
      element: <HomepageTwentySeven />,
    },
    {
      path: "homepagetwentyeight",
      element: <HomepageTwentyEight />,
    },
    {
      path: "homepagetwentynine",
      element: <HomepageTwentyNine />,
    },
    {
      path: "homepagethirtythree",
      element: <HomepageThirtyThree />,
    },
    {
      path: "framefiftytwo",
      element: <FrameFiftyTwo />,
    },
    {
      path: "userprofile",
      element: <UserProfile />,
    },
    {
      path: "userprofileone",
      element: <UserProfileOne />,
    },
    {
      path: "userprofilethree",
      element: <UserProfileThree />,
    },
    {
      path: "userprofilefour",
      element: <UserProfileFour />,
    },
    {
      path: "userprofilefive",
      element: <UserProfileFive />,
    },
    {
      path: "framefifty",
      element: <FrameFifty />,
    },
    {
      path: "admin",
      element: <Admin />,
    },
    {
      path: "adminone",
      element: <AdminOne />,
    },
    {
      path: "framefiftythree",
      element: <FrameFiftyThree />,
    },
    {
      path: "admintwo",
      element: <AdminTwo />,
    },
    {
      path: "adminthree",
      element: <AdminThree />,
    },
    {
      path: "adminfour",
      element: <AdminFour />,
    },
    {
      path: "adminfive",
      element: <AdminFive />,
    },
    {
      path: "admineight",
      element: <AdminEight />,
    },
    {
      path: "adminnine",
      element: <AdminNine />,
    },
    {
      path: "adminten",
      element: <AdminTen />,
    },
    {
      path: "framefiftyfour",
      element: <FrameFiftyFour />,
    },
    {
      path: "admineleven",
      element: <AdminEleven />,
    },
    {
      path: "admintwelve",
      element: <AdminTwelve />,
    },
    {
      path: "adminthirteen",
      element: <AdminThirteen />,
    },
    {
      path: "adminfourteen",
      element: <AdminFourteen />,
    },
    {
      path: "adminfifteen",
      element: <AdminFifteen />,
    },
    {
      path: "adminsixteen",
      element: <AdminSixteen />,
    },
    {
      path: "adminseventeen",
      element: <AdminSeventeen />,
    },
    {
      path: "admineighteen",
      element: <AdminEighteen />,
    },
    {
      path: "adminnineteen",
      element: <AdminNineteen />,
    },
    {
      path: "framefiftyfive",
      element: <FrameFiftyFive />,
    },
    {
      path: "admintwenty",
      element: <AdminTwenty />,
    },
    {
      path: "admintwentyone",
      element: <AdminTwentyOne />,
    },
    {
      path: "admintwentytwo",
      element: <AdminTwentyTwo />,
    },
    {
      path: "admintwentythree",
      element: <AdminTwentyThree />,
    },
    {
      path: "admintwentyfour",
      element: <AdminTwentyFour />,
    },
    {
      path: "admintwentyfive",
      element: <AdminTwentyFive />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
