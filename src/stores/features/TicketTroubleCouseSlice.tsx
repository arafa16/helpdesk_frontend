import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  messageCreate: string;
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
  messageCreate: "",
};

export const GetTicketTroubleCouseData: any = createAsyncThunk(
  "TicketTroubleCouse/GetTicketTroubleCouseData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_couse/table?${datas}`,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        },
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  },
);

export const GetTicketTroubleCouseDataById: any = createAsyncThunk(
  "TicketTroubleCouse/GetTicketTroubleCouseDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_couse/data/${datas.uuid}`,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        },
      );

      console.log(response.data);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  },
);

export const DeleteTicketTroubleCouseData: any = createAsyncThunk(
  "TicketTroubleCouse/DeleteTicketTroubleCouseData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_couse/data/${datas.uuid}`,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        },
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  },
);

export const CreateTicketTroubleCouseData: any = createAsyncThunk(
  "TicketTroubleCouse/CreateTicketTroubleCouseData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_couse/data`,
        datas.formData,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        },
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  },
);

export const UpdateTicketTroubleCouseData: any = createAsyncThunk(
  "TicketTroubleCouse/UpdateTicketTroubleCouseData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_couse/data/${datas.uuid}`,
        datas.formData,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        },
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  },
);

export const TicketTroubleCouseSlice = createSlice({
  name: "TicketTroubleCouse",
  initialState,
  reducers: {
    resetTicketTroubleCouse: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetTicketTroubleCouseData
    builder.addCase(GetTicketTroubleCouseData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketTroubleCouseData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketTroubleCouseData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketTroubleCouseDataById
    builder.addCase(GetTicketTroubleCouseDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GetTicketTroubleCouseDataById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      },
    );
    builder.addCase(GetTicketTroubleCouseDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketTroubleCouseDataById
    builder.addCase(DeleteTicketTroubleCouseData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteTicketTroubleCouseData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageDelete = action.payload;
    });
    builder.addCase(DeleteTicketTroubleCouseData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageDelete = action.payload;
    });

    //CreateTicketTroubleCouseData
    builder.addCase(CreateTicketTroubleCouseData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateTicketTroubleCouseData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageCreate = action.payload;
    });
    builder.addCase(CreateTicketTroubleCouseData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageCreate = action.payload;
    });

    //UpdateTicketTroubleCouseData
    builder.addCase(UpdateTicketTroubleCouseData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateTicketTroubleCouseData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateTicketTroubleCouseData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetTicketTroubleCouse } = TicketTroubleCouseSlice.actions;
export default TicketTroubleCouseSlice.reducer;
