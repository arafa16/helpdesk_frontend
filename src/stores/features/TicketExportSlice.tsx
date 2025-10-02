import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import fileDownload from "js-file-download";

interface variabel {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  messageUpdate: string;
  messageDelete: string;
}

const initialState: variabel = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  messageUpdate: "",
  messageDelete: "",
};

export const ExportTicketData: any = createAsyncThunk(
  "TicketExport/ExportTicketData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/export?${datas.searchParams}`,
        {
          responseType: "blob",
          withCredentials: true, // Now this is was the missing piece in the client side
        }
      );

      return fileDownload(response.data, datas.name);
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  }
);

export const TicketExportSlice = createSlice({
  name: "TicketExport",
  initialState,
  reducers: {
    resetTicketExport: (state) => initialState,
  },
  extraReducers: (builder) => {
    //ExportTicketData
    builder.addCase(ExportTicketData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ExportTicketData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(ExportTicketData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { resetTicketExport } = TicketExportSlice.actions;
export default TicketExportSlice.reducer;
