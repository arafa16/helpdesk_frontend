import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  messageDelete: string;
}

const initialState: variabel = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  messageDelete: "",
};
//comment

export const CreateTicketUserReminderData: any = createAsyncThunk(
  "TicketUserReminder/CreateTicketUserReminderData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_user_reminder/data`,
        datas.formData,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        }
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  }
);

export const DeleteTicketUserReminderDataById: any = createAsyncThunk(
  "TicketUserReminder/DeleteTicketUserReminderDataById",
  async (uuid: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_user_reminder/data/${uuid}`,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        }
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  }
);
export const TicketUserReminderSlice = createSlice({
  name: "TicketUserReminder",
  initialState,
  reducers: {
    resetTicketUserReminder: (state) => initialState,
  },
  extraReducers: (builder) => {
    //DeleteTicketUserReminderDataById
    builder.addCase(DeleteTicketUserReminderDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketUserReminderDataById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageDelete = action.payload;
      }
    );
    builder.addCase(
      DeleteTicketUserReminderDataById.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageDelete = action.payload;
      }
    );

    //CreateTicketActivityCommentData
    builder.addCase(CreateTicketUserReminderData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateTicketUserReminderData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(CreateTicketUserReminderData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { resetTicketUserReminder } = TicketUserReminderSlice.actions;
export default TicketUserReminderSlice.reducer;
