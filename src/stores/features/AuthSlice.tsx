import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface variabel {
  data: any;
  dataToken: any;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  messageRegister: string;
  messageReset: string;
  messageToken: string;
  messageResetPassword: string;
}

const initialState: variabel = {
  data: null,
  dataToken: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  messageRegister: "",
  messageReset: "",
  messageToken: "",
  messageResetPassword: "",
};

export const Login: any = createAsyncThunk(
  "Auth/Login",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/auth/login`,
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

export const RegistrationAttributes: any = createAsyncThunk(
  "Auth/RegistrationAttributes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/auth/register`,
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

export const Registration: any = createAsyncThunk(
  "Auth/Registration",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/auth/register`,
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

export const SendResetPassword: any = createAsyncThunk(
  "Auth/SendResetPassword",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/auth/mail`,
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

export const GetTokenData: any = createAsyncThunk(
  "Auth/GetTokenData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/auth/reset/${datas.token}`,
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

export const ResetPassword: any = createAsyncThunk(
  "Auth/ResetPassword",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/auth/reset/${datas.token}`,
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

export const Logout: any = createAsyncThunk(
  "Auth/Logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL + "/api/v1/auth/logout",
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

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetAuth: (state) => initialState,
  },
  extraReducers: (builder) => {
    //Login
    builder.addCase(Login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(Login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Login
    builder.addCase(Logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.message = action.payload;
    });
    builder.addCase(Logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Registration attributes
    builder.addCase(RegistrationAttributes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(RegistrationAttributes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(RegistrationAttributes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //Registration
    builder.addCase(Registration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(Registration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageRegister = action.payload;
    });
    builder.addCase(Registration.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageRegister = action.payload;
    });

    //SendResetPassword
    builder.addCase(SendResetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SendResetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageReset = action.payload;
    });
    builder.addCase(SendResetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageReset = action.payload;
    });

    //GetTokenData
    builder.addCase(GetTokenData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTokenData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.dataToken = action.payload;
    });
    builder.addCase(GetTokenData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageToken = action.payload;
    });
    //ResetPassword
    builder.addCase(ResetPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(ResetPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageResetPassword = action.payload;
    });
    builder.addCase(ResetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageResetPassword = action.payload;
    });
  },
});

export const { resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
