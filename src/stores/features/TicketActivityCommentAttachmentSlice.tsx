import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  message2: string;
}

const initialState: variabel = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  message2: "",
};

export const CreateTicketActivityCommentAttachment: any = createAsyncThunk(
  "TicketActivityCommentAttachment/CreateTicketActivityCommentAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_comment_attachment/data/${datas.uuid}/ticket_activity_comment`,
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

export const DeleteTicketActivityCommentAttachment: any = createAsyncThunk(
  "TicketActivityCommentAttachment/DeleteTicketActivityCommentAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_comment_attachment/data/${datas.uuid}`,
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

export const TicketActivityCommentAttachmentSlice = createSlice({
  name: "TicketAttachment",
  initialState,
  reducers: {
    resetTicketActivityCommentAttachment: (state) => initialState,
  },
  extraReducers: (builder) => {
    //CreateTicketAttachment
    builder.addCase(CreateTicketActivityCommentAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      CreateTicketActivityCommentAttachment.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      }
    );
    builder.addCase(
      CreateTicketActivityCommentAttachment.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //DeleteTicketAttachment
    builder.addCase(DeleteTicketActivityCommentAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketActivityCommentAttachment.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message2 = action.payload;
      }
    );
    builder.addCase(
      DeleteTicketActivityCommentAttachment.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message2 = action.payload;
      }
    );
  },
});

export const { resetTicketActivityCommentAttachment } =
  TicketActivityCommentAttachmentSlice.actions;
export default TicketActivityCommentAttachmentSlice.reducer;
