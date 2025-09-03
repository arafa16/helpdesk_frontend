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

export const CreateTicketAttachment: any = createAsyncThunk(
  "TicketAttachment/CreateTicketAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_attachment/data/${datas.ticket_uuid}`,
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

export const DeleteTicketAttachment: any = createAsyncThunk(
  "TicketAttachment/DeleteTicketAttachment",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_attachment/data/${datas.uuid}`,
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

export const TicketAttachmentSlice = createSlice({
  name: "TicketAttachment",
  initialState,
  reducers: {
    resetTicketAttachment: (state) => initialState,
  },
  extraReducers: (builder) => {
    //CreateTicketAttachment
    builder.addCase(CreateTicketAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateTicketAttachment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(CreateTicketAttachment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //DeleteTicketAttachment
    builder.addCase(DeleteTicketAttachment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteTicketAttachment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message2 = action.payload;
    });
    builder.addCase(DeleteTicketAttachment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message2 = action.payload;
    });
  },
});

export const { resetTicketAttachment } = TicketAttachmentSlice.actions;
export default TicketAttachmentSlice.reducer;
