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

export const GetUserStatusData: any = createAsyncThunk(
  "UserStatus/GetUserStatusData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/user_status/table?${datas}`,
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

export const GetUserStatusDataById: any = createAsyncThunk(
  "UserStatus/GetUserStatusDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/user_status/data/${datas.uuid}`,
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

export const DeleteUserStatusData: any = createAsyncThunk(
  "UserStatus/DeleteUserStatusData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/user_status/data/${datas.uuid}`,
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

export const CreateUserStatusData: any = createAsyncThunk(
  "UserStatus/CreateUserStatusData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL + `/api/v1/user_status/data`,
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

export const UpdateUserStatusData: any = createAsyncThunk(
  "UserStatus/UpdateUserStatusData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/user_status/data/${datas.uuid}`,
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

export const UserStatusSlice = createSlice({
  name: "UserStatus",
  initialState,
  reducers: {
    resetUserStatus: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetUserStatusData
    builder.addCase(GetUserStatusData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetUserStatusData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetUserStatusData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetUserStatusDataById
    builder.addCase(GetUserStatusDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetUserStatusDataById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetUserStatusDataById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetUserStatusDataById
    builder.addCase(DeleteUserStatusData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(DeleteUserStatusData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageDelete = action.payload;
    });
    builder.addCase(DeleteUserStatusData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageDelete = action.payload;
    });

    //CreateUserStatusData
    builder.addCase(CreateUserStatusData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(CreateUserStatusData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageCreate = action.payload;
    });
    builder.addCase(CreateUserStatusData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageCreate = action.payload;
    });

    //UpdateUserStatusData
    builder.addCase(UpdateUserStatusData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(UpdateUserStatusData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.messageUpdate = action.payload;
    });
    builder.addCase(UpdateUserStatusData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.messageUpdate = action.payload;
    });
  },
});

export const { resetUserStatus } = UserStatusSlice.actions;
export default UserStatusSlice.reducer;
