import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
  privilege?: string;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "LayoutDashboard",
      title: "Dashboard",
      pathname: "/",
      privilege: "dashboard",
    },
    {
      icon: "Ticket",
      title: "Ticket Customer",
      pathname: "/ticket_customer",
      privilege: "ticket_customer",
    },
    {
      icon: "Ticket",
      title: "Ticket Executor",
      pathname: "/ticket_executor",
      privilege: "ticket_executor",
    },
    {
      icon: "Ticket",
      title: "Ticket",
      pathname: "/ticket",
      privilege: "ticket",
    },
    {
      icon: "User",
      title: "User",
      pathname: "/user",
      privilege: "user",
    },
    {
      icon: "Settings",
      title: "Setting",
      privilege: "setting",
      subMenu: [
        {
          icon: "Settings",
          title: "company",
          pathname: "/company",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "location",
          pathname: "/location",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "division",
          pathname: "/division",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "user status",
          pathname: "/user_status",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "ticket status",
          pathname: "/ticket_status",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "ticket category",
          pathname: "/ticket_category",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "ticket access",
          pathname: "/ticket_access",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "customer",
          pathname: "/customer",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "area",
          pathname: "/area",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "ticket Trouble Category",
          pathname: "/ticket_trouble_category",
          privilege: "setting",
        },
        {
          icon: "Settings",
          title: "ticket Trouble Consequence",
          pathname: "/ticket_trouble_consequence",
          privilege: "setting",
        },
      ],
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
