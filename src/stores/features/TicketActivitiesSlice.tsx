import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  messageUpdate: string;
}

const initialState: variabel = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  messageUpdate: "",
};

export const UpdateTicketActivityData: any = createAsyncThunk(
  "TicketActivity/UpdateTicketActivityData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity/data/${datas.uuid}`,
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

export const DeleteTicketActivityDataById: any = createAsyncThunk(
  "TicketActivity/DeleteTicketActivityDataById",
  async (uuid: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_activity/data/${uuid}`,
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

export const TicketActivitySlice = createSlice({
  name: "TicketActivity",
  initialState,
  reducers: {
    resetTicketActivity: (state) => initialState,
  },
  extraReducers: (builder) => {
    //DeleteTicketActivityDataById
    builder.addCase(DeleteTicketActivityDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteTicketActivityDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(DeleteTicketActivityDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //UpdateTicketActivityData
    builder.addCase(UpdateTicketActivityData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateTicketActivityData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateTicketActivityData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetTicketActivity } = TicketActivitySlice.actions;
export default TicketActivitySlice.reducer;
