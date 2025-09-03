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

export const CreateTicketActivityCommentData: any = createAsyncThunk(
  "TicketActivityComment/CreateTicketActivityCommentData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_comment/data`,
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

export const DeleteTicketActivityCommentDataById: any = createAsyncThunk(
  "TicketActivityComment/DeleteTicketActivityCommentDataById",
  async (uuid: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_comment/data/${uuid}`,
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
export const TicketActivityCommentSlice = createSlice({
  name: "TicketActivityComment",
  initialState,
  reducers: {
    resetTicketActivityComment: (state) => initialState,
  },
  extraReducers: (builder) => {
    //DeleteTicketActivityCommentDataById
    builder.addCase(DeleteTicketActivityCommentDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketActivityCommentDataById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageDelete = action.payload;
      }
    );
    builder.addCase(
      DeleteTicketActivityCommentDataById.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageDelete = action.payload;
      }
    );

    //CreateTicketActivityCommentData
    builder.addCase(CreateTicketActivityCommentData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      CreateTicketActivityCommentData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      }
    );
    builder.addCase(
      CreateTicketActivityCommentData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

export const { resetTicketActivityComment } =
  TicketActivityCommentSlice.actions;
export default TicketActivityCommentSlice.reducer;
