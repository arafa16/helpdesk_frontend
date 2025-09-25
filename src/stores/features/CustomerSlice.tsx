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

export const GetCustomerData: any = createAsyncThunk(
  "Customer/GetCustomerData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/customer/table?${datas}`,
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

export const GetCustomerDataById: any = createAsyncThunk(
  "Customer/GetCustomerDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/customer/data/${datas.uuid}`,
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

export const DeleteCustomerData: any = createAsyncThunk(
  "Customer/DeleteCustomerData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/customer/data/${datas.uuid}`,
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

export const CreateCustomerData: any = createAsyncThunk(
  "Customer/CreateCustomerData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/customer/data`,
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

export const UpdateCustomerData: any = createAsyncThunk(
  "Customer/UpdateCustomerData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/customer/data/${datas.uuid}`,
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

export const CustomerSlice = createSlice({
  name: "Customer",
  initialState,
  reducers: {
    resetCustomer: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetCustomerData
    builder.addCase(GetCustomerData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetCustomerData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetCustomerData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetCustomerDataById
    builder.addCase(GetCustomerDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetCustomerDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetCustomerDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetCustomerDataById
    builder.addCase(DeleteCustomerData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteCustomerData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageDelete = action.payload;
    });
    builder.addCase(DeleteCustomerData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageDelete = action.payload;
    });

    //CreateCustomerData
    builder.addCase(CreateCustomerData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateCustomerData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageCreate = action.payload;
    });
    builder.addCase(CreateCustomerData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageCreate = action.payload;
    });

    //UpdateCustomerData
    builder.addCase(UpdateCustomerData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateCustomerData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateCustomerData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;
