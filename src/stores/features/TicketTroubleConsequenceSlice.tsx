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

export const GetTicketTroubleConsequenceData: any = createAsyncThunk(
  "TicketTroubleConsequence/GetTicketTroubleConsequenceData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_consequence/table?${datas}`,
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

export const GetTicketTroubleConsequenceDataById: any = createAsyncThunk(
  "TicketTroubleConsequence/GetTicketTroubleConsequenceDataById",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_consequence/data/${datas.uuid}`,
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

export const DeleteTicketTroubleConsequenceData: any = createAsyncThunk(
  "TicketTroubleConsequence/DeleteTicketTroubleConsequenceData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_consequence/data/${datas.uuid}`,
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

export const CreateTicketTroubleConsequenceData: any = createAsyncThunk(
  "TicketTroubleConsequence/CreateTicketTroubleConsequenceData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_consequence/data`,
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

export const UpdateTicketTroubleConsequenceData: any = createAsyncThunk(
  "TicketTroubleConsequence/UpdateTicketTroubleConsequenceData",
  async (datas: any, thunkAPI) => {
    try {
      const response = await axios.patch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `/api/v1/ticket_trouble_consequence/data/${datas.uuid}`,
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

export const TicketTroubleConsequenceSlice = createSlice({
  name: "TicketTroubleConsequence",
  initialState,
  reducers: {
    resetTicketTroubleConsequence: (state) => initialState,
  },
  extraReducers: (builder) => {
    //GetTicketTroubleConsequenceData
    builder.addCase(GetTicketTroubleConsequenceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GetTicketTroubleConsequenceData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      },
    );
    builder.addCase(
      GetTicketTroubleConsequenceData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      },
    );

    //GetTicketTroubleConsequenceDataById
    builder.addCase(GetTicketTroubleConsequenceDataById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      GetTicketTroubleConsequenceDataById.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      },
    );
    builder.addCase(
      GetTicketTroubleConsequenceDataById.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      },
    );

    //GetTicketTroubleConsequenceDataById
    builder.addCase(DeleteTicketTroubleConsequenceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      DeleteTicketTroubleConsequenceData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageDelete = action.payload;
      },
    );
    builder.addCase(
      DeleteTicketTroubleConsequenceData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageDelete = action.payload;
      },
    );

    //CreateTicketTroubleConsequenceData
    builder.addCase(CreateTicketTroubleConsequenceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      CreateTicketTroubleConsequenceData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageCreate = action.payload;
      },
    );
    builder.addCase(
      CreateTicketTroubleConsequenceData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageCreate = action.payload;
      },
    );

    //UpdateTicketTroubleConsequenceData
    builder.addCase(UpdateTicketTroubleConsequenceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      UpdateTicketTroubleConsequenceData.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.messageUpdate = action.payload;
      },
    );
    builder.addCase(
      UpdateTicketTroubleConsequenceData.rejected,
      (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.messageUpdate = action.payload;
      },
    );
  },
});

export const { resetTicketTroubleConsequence } =
  TicketTroubleConsequenceSlice.actions;
export default TicketTroubleConsequenceSlice.reducer;
