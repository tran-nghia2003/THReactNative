import { createSlice, configureStore } from "@reduxjs/toolkit";

// Slice để quản lý trạng thái danh bạ
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    // Bắt đầu fetch dữ liệu
    fetchContactsLoading: (state) => {
      state.loading = true;
      state.error = false;
    },

    // Fetch thành công
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
      state.error = false;
    },

    // Fetch thất bại
    fetchContactsError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Export các action để sử dụng trong component
export const {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} = contactsSlice.actions;

// Tạo store và export
const Store = configureStore({
  reducer: contactsSlice.reducer,
});

export default Store;
