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

export const CreateTicketActivityAttachment: any = createAsyncThunk(
  "TicketActivityAttachment/CreateTicketActivityAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_attachment/data/${datas.uuid}/ticket_activity`,
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

export const DeleteTicketActivityAttachment: any = createAsyncThunk(
  "TicketActivityAttachment/DeleteTicketActivityAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity_attachment/data/${datas.uuid}`,
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

export const TicketActivityAttachmentSlice = createSlice({
  name: "TicketAttachment",
  initialState,
  reducers: {
    resetTicketActivityAttachment: (state) => initialState,
  },
  extraReducers: (builder) => {
    //CreateTicketAttachment
    builder.addCase(CreateTicketActivityAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      CreateTicketActivityAttachment.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      }
    );
    builder.addCase(
      CreateTicketActivityAttachment.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //DeleteTicketAttachment
    builder.addCase(DeleteTicketActivityAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketActivityAttachment.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message2 = action.payload;
      }
    );
    builder.addCase(
      DeleteTicketActivityAttachment.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message2 = action.payload;
      }
    );
  },
});

export const { resetTicketActivityAttachment } =
  TicketActivityAttachmentSlice.actions;
export default TicketActivityAttachmentSlice.reducer;
