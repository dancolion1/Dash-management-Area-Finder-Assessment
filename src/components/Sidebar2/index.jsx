import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar2({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar {...props} width="200px !important" collapsedWidth="80px !important" collapsed={collapsed}>
      <Menu
        menuItemStyles={{
          button: {
            padding: "22px",
            gap: "16px",
            alignSelf: "start",
            color: "#1e1e1e",
            fontWeight: 500,
            fontSize: "16px",
            [`&:hover, &.ps-active`]: { color: "#fbfafc", backgroundColor: "#0b153a !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.84px" } }}
        className="flex flex-col w-full mb-[696px]"
      >
        <MenuItem icon={<Img src="images/img_gg_profile.svg" alt="ggprofile_one" className="h-[16px] w-[16px]" />}>
          Profile
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_streamline_chat.svg" alt="streamlinechat" className="h-[16px] w-[16px]" />}
        >
          Reviews
        </MenuItem>
        <MenuItem
          icon={<Img src="images/img_carbon_settings.svg" alt="carbonsettings" className="h-[16px] w-[16px]" />}
        >
          Settings
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
