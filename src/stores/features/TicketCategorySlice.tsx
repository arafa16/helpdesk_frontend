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

export const GetTicketCategoryData: any = createAsyncThunk(
  "TicketCategory/GetTicketCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_category/table?${datas}`,
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

export const GetTicketCategoryDataById: any = createAsyncThunk(
  "TicketCategory/GetTicketCategoryDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_category/data/${datas.uuid}`,
        {
          withCredentials: true, // Now this is was the missing piece in the client side
        }
      );

      console.log(response.data);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response);
      }
    }
  }
);

export const DeleteTicketCategoryData: any = createAsyncThunk(
  "TicketCategory/DeleteTicketCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_category/data/${datas.uuid}`,
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

export const CreateTicketCategoryData: any = createAsyncThunk(
  "TicketCategory/CreateTicketCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/ticket_category/data`,
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

export const UpdateTicketCategoryData: any = createAsyncThunk(
  "TicketCategory/UpdateTicketCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_category/data/${datas.uuid}`,
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

export const TicketCategorySlice = createSlice({
  name: "TicketCategory",
  initialState,
  reducers: {
    resetTicketCategory: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetTicketCategoryData
    builder.addCase(GetTicketCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketCategoryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketCategoryData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketCategoryDataById
    builder.addCase(GetTicketCategoryDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketCategoryDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketCategoryDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketCategoryDataById
    builder.addCase(DeleteTicketCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteTicketCategoryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageDelete = action.payload;
    });
    builder.addCase(DeleteTicketCategoryData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageDelete = action.payload;
    });

    //CreateTicketCategoryData
    builder.addCase(CreateTicketCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateTicketCategoryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageCreate = action.payload;
    });
    builder.addCase(CreateTicketCategoryData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageCreate = action.payload;
    });

    //UpdateTicketCategoryData
    builder.addCase(UpdateTicketCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateTicketCategoryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateTicketCategoryData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetTicketCategory } = TicketCategorySlice.actions;
export default TicketCategorySlice.reducer;
