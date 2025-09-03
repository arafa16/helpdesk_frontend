import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import sideMenuReducer from "./sideMenuSlice";
import TicketReducer from "./features/TicketSlice";
import TicketAttachmentReducer from "./features/TicketAttachmentSlice";
import TicketActivityAttachmentReducer from "./features/TicketActivityAttachmentSlice";
import AuthReducer from "./features/AuthSlice";
import GetMeReducer from "./features/GetMeSlice";
import TicketActivityReducer from "./features/TicketActivitiesSlice";
import TicketActivityCommentReducer from "./features/TicketActivityCommentSlice";
import TicketUserReminderReducer from "./features/TicketUserReminderSlice";
import UserReducer from "./features/UserSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    ticket: TicketReducer,
    ticketAttachment: TicketAttachmentReducer,
    auth: AuthReducer,
    getMe: GetMeReducer,
    ticketActivity: TicketActivityReducer,
    ticketActivityAttachment: TicketActivityAttachmentReducer,
    ticketActivityComment: TicketActivityCommentReducer,
    ticketUserReminder: TicketUserReminderReducer,
    user: UserReducer,
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
