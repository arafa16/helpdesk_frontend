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

export const GetTicketDataTable: any = createAsyncThunk(
  "Ticket/GetTicketDataTable",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/table?${datas}`,
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

export const GetTicketDataTableExecutor: any = createAsyncThunk(
  "Ticket/GetTicketDataTableExecutor",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/table/executor?${datas}`,
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

export const GetTicketDataTableCustomer: any = createAsyncThunk(
  "Ticket/GetTicketDataTableCustomer",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/table/customer?${datas}`,
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

export const GetTicketDataAttribute: any = createAsyncThunk(
  "Ticket/GetTicketDataAttribute",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/ticket/create`,
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

export const GetTicketUpdateDataAttribute: any = createAsyncThunk(
  "Ticket/GetTicketUpdateDataAttribute",
  async (uuid: string, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/data/${uuid}/edit`,
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

export const GetTicketDataById: any = createAsyncThunk(
  "Ticket/GetTicketDataById",
  async (uuid: string, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/ticket/data/${uuid}`,
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

export const UpdateTicketStatusDataById: any = createAsyncThunk(
  "Ticket/UpdateTicketStatusDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/data/${datas.uuid}/status`,
        {
          ticket_status_uuid: datas.ticket_status_uuid,
        },
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

export const CreateTicketData: any = createAsyncThunk(
  "Ticket/CreateTicketData",
  async (datas, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/ticket/data`,
        datas,
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

export const UpdateTicketData: any = createAsyncThunk(
  "Ticket/UpdateTicketData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket/data/${datas.uuid}/edit`,
        datas.formData,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        }
      );

      console.log(datas, "datas");

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  }
);

export const TicketSlice = createSlice({
  name: "Ticket",
  initialState,
  reducers: {
    resetTicket: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetTicketDataTable
    builder.addCase(GetTicketDataTable.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketDataTable.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketDataTable.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketDataTableExecutor
    builder.addCase(GetTicketDataTableExecutor.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketDataTableExecutor.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketDataTableExecutor.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketDataTableCustomer
    builder.addCase(GetTicketDataTableCustomer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketDataTableCustomer.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketDataTableCustomer.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetCreateTicketAttribute
    builder.addCase(GetTicketDataAttribute.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketDataAttribute.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketDataAttribute.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketUpdateDataAttribute
    builder.addCase(GetTicketUpdateDataAttribute.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketUpdateDataAttribute.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketUpdateDataAttribute.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetCreateTicketById
    builder.addCase(GetTicketDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //CreateTicket
    builder.addCase(CreateTicketData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateTicketData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(CreateTicketData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //UpdateTicketData
    builder.addCase(UpdateTicketData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateTicketData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateTicketData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });

    //UpdateTicketStatus
    builder.addCase(UpdateTicketStatusDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateTicketStatusDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateTicketStatusDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetTicket } = TicketSlice.actions;
export default TicketSlice.reducer;
