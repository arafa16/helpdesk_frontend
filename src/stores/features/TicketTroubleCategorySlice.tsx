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

export const GetTicketTroubleCategoryData: any = createAsyncThunk(
  "TicketTroubleCategory/GetTicketTroubleCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_category/table?${datas}`,
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

export const GetTicketTroubleCategoryDataById: any = createAsyncThunk(
  "TicketTroubleCategory/GetTicketTroubleCategoryDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_category/data/${datas.uuid}`,
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

export const DeleteTicketTroubleCategoryData: any = createAsyncThunk(
  "TicketTroubleCategory/DeleteTicketTroubleCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_category/data/${datas.uuid}`,
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

export const CreateTicketTroubleCategoryData: any = createAsyncThunk(
  "TicketTroubleCategory/CreateTicketTroubleCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_category/data`,
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

export const UpdateTicketTroubleCategoryData: any = createAsyncThunk(
  "TicketTroubleCategory/UpdateTicketTroubleCategoryData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_category/data/${datas.uuid}`,
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

export const TicketTroubleCategorySlice = createSlice({
  name: "TicketTroubleCategory",
  initialState,
  reducers: {
    resetTicketTroubleCategory: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetTicketTroubleCategoryData
    builder.addCase(GetTicketTroubleCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(GetTicketTroubleCategoryData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetTicketTroubleCategoryData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    //GetTicketTroubleCategoryDataById
    builder.addCase(GetTicketTroubleCategoryDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GetTicketTroubleCategoryDataById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      },
    );
    builder.addCase(
      GetTicketTroubleCategoryDataById.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      },
    );

    //GetTicketTroubleCategoryDataById
    builder.addCase(DeleteTicketTroubleCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketTroubleCategoryData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageDelete = action.payload;
      },
    );
    builder.addCase(
      DeleteTicketTroubleCategoryData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageDelete = action.payload;
      },
    );

    //CreateTicketTroubleCategoryData
    builder.addCase(CreateTicketTroubleCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      CreateTicketTroubleCategoryData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageCreate = action.payload;
      },
    );
    builder.addCase(
      CreateTicketTroubleCategoryData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageCreate = action.payload;
      },
    );

    //UpdateTicketTroubleCategoryData
    builder.addCase(UpdateTicketTroubleCategoryData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      UpdateTicketTroubleCategoryData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageUpdate = action.payload;
      },
    );
    builder.addCase(
      UpdateTicketTroubleCategoryData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageUpdate = action.payload;
      },
    );
  },
});

export const { resetTicketTroubleCategory } =
  TicketTroubleCategorySlice.actions;
export default TicketTroubleCategorySlice.reducer;
