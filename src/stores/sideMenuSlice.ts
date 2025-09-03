import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

const initialState: SideMenuState = {
  menu: [
    "START MENU",
    {
      icon: "Ticket",
      title: "Ticket Customer",
      pathname: "/ticket_customer",
    },
    {
      icon: "Ticket",
      title: "Ticket Executor",
      pathname: "/ticket_executor",
    },
    {
      icon: "Ticket",
      title: "Ticket",
      pathname: "/ticket",
    },
    {
      icon: "User",
      title: "User",
      pathname: "/user",
    },
    {
      icon: "Settings",
      title: "Setting",
      subMenu: [
        {
          icon: "Settings",
          title: "application",
          pathname: "/application",
        },
        {
          icon: "Settings",
          title: "company",
          pathname: "/company",
        },
        {
          icon: "Settings",
          title: "location",
          pathname: "/location",
        },
        {
          icon: "Settings",
          title: "devision",
          pathname: "/devision",
        },
        {
          icon: "Settings",
          title: "user status",
          pathname: "/user_status",
        },
        {
          icon: "Settings",
          title: "user shift schedule",
          pathname: "/user_shift_schedule",
        },
        {
          icon: "Settings",
          title: "ticket status",
          pathname: "/ticket_status",
        },
        {
          icon: "Settings",
          title: "ticket category",
          pathname: "/ticket_category",
        },
        {
          icon: "Settings",
          title: "ticket access",
          pathname: "/ticket_access",
        },
        {
          icon: "Settings",
          title: "customer",
          pathname: "/customer",
        },
        {
          icon: "Settings",
          title: "area",
          pathname: "/area",
        },
        {
          icon: "Settings",
          title: "ticket history",
          pathname: "/ticket_history",
        },
        {
          icon: "Settings",
          title: "user ticket reminder",
          pathname: "/user_ticket_reminder",
        },
        {
          icon: "Settings",
          title: "ticket attachment",
          pathname: "/ticket_attachment",
        },
        {
          icon: "Settings",
          title: "ticket activity attachment",
          pathname: "/ticket_activity_attachment",
        },
        {
          icon: "Settings",
          title: "ticket activity tipe",
          pathname: "/ticket_activity_tipe",
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
