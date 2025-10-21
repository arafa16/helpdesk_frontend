import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import TicketReducer from "./features/TicketSlice";
import TicketAttachmentReducer from "./features/TicketAttachmentSlice";
import TicketActivityAttachmentReducer from "./features/TicketActivityAttachmentSlice";
import TicketActivityCommentAttachmentReducer from "./features/TicketActivityCommentAttachmentSlice";
import AuthReducer from "./features/AuthSlice";
import GetMeReducer from "./features/GetMeSlice";
import TicketActivityReducer from "./features/TicketActivitiesSlice";
import TicketActivityCommentReducer from "./features/TicketActivityCommentSlice";
import TicketUserReminderReducer from "./features/TicketUserReminderSlice";
import UserReducer from "./features/UserSlice";
import CompanyReducer from "./features/CompanySlice";
import LocationReducer from "./features/LocationSlice";
import DivisionReducer from "./features/DivisionSlice";
import UserStatusReducer from "./features/UserStatusSlice";
import TicketStatusReducer from "./features/TicketStatusSlice";
import TicketCategoryReducer from "./features/TicketCategorySlice";
import TicketAccessReducer from "./features/TicketAccessSlice";
import AreaReducer from "./features/AreaSlice";
import CustomerReducer from "./features/CustomerSlice";
import TicketExportReducer from "./features/TicketExportSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    ticket: TicketReducer,
    ticket_export: TicketExportReducer,
    ticketAttachment: TicketAttachmentReducer,
    auth: AuthReducer,
    getMe: GetMeReducer,
    ticketActivity: TicketActivityReducer,
    ticketActivityAttachment: TicketActivityAttachmentReducer,
    ticket_activity_comment_attachment: TicketActivityCommentAttachmentReducer,
    ticketActivityComment: TicketActivityCommentReducer,
    ticketUserReminder: TicketUserReminderReducer,
    user: UserReducer,
    company: CompanyReducer,
    location: LocationReducer,
    division: DivisionReducer,
    user_status: UserStatusReducer,
    ticket_status: TicketStatusReducer,
    ticket_category: TicketCategoryReducer,
    ticket_access: TicketAccessReducer,
    area: AreaReducer,
    customer: CustomerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
