import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axiosIns from '../../axiosInstance';

export const changePassword = createAsyncThunk(
  'oldPassword/newPassword',
  async ({ oldPass, newPass }, { dispatch, rejectWithValue }) => {
    try {
      console.log(oldPass, 444444444);
      console.log(newPass, 555555555555);
      const { data, status } = await axiosIns.post(`/api/login/password-change`, {
        oldPassword: oldPass,
        newPassword: newPass,
      });

      if (status === 200) {
        dispatch(changePasswordModal(false));
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    yourAccount: true,
    // twitterBlue: false,
    security: false,
    // privacy: false,
    // notifications: false,
    // accessibility: false,
    // additional: false,
    changePassword: false,
    accountInformation: false,
    sideSetting: true,
  },
  reducers: {
    selectYourAccount: (state) => {
      state.yourAccount = true;
      // state.twitterBlue = false;
      state.security = false;
      // state.privacy = false;
      // state.notifications = false;
      // state.accessibility = false;
      // state.additional = false;
    },
    // selectTwitterBlue: (state) => {
    //   state.yourAccount = false;
    //   state.twitterBlue = true;
    //   state.security = false;
    //   state.privacy = false;
    //   state.notifications = false;
    //   state.accessibility = false;
    //   state.additional = false;
    // },
    selectSecurity: (state) => {
      state.yourAccount = false;
      // state.twitterBlue = false;
      state.security = true;
      // state.privacy = false;
      // state.notifications = false;
      // state.accessibility = false;
      // state.additional = false;
    },

    // selectPrivacy: (state) => {
    //   state.yourAccount = false;
    //   state.twitterBlue = false;
    //   state.security = false;
    //   state.privacy = true;
    //   state.notifications = false;
    //   state.accessibility = false;
    //   state.additional = false;
    // },
    // selectNotifications: (state) => {
    //   state.yourAccount = false;
    //   state.twitterBlue = false;
    //   state.security = false;
    //   state.privacy = false;
    //   state.notifications = true;
    //   state.accessibility = false;
    //   state.additional = false;
    // },
    // selectAccessibility: (state) => {
    //   state.yourAccount = false;
    //   state.twitterBlue = false;
    //   state.security = false;
    //   state.privacy = false;
    //   state.notifications = false;
    //   state.accessibility = true;
    //   state.additional = false;
    // },
    // selectAdditional: (state) => {
    //   state.yourAccount = false;
    //   state.twitterBlue = false;
    //   state.security = false;
    //   state.privacy = false;
    //   state.notifications = false;
    //   state.accessibility = false;
    //   state.additional = true;
    // },
    changePasswordModal: (state, action) => {
      state.changePassword = action.payload;
      state.sideSetting = !action.payload;
    },
  },
});

export default settingSlice.reducer;
export const {
  selectYourAccount,
  // selectTwitterBlue,
  // selectPrivacy,
  // selectNotifications,
  // selectAccessibility,
  // selectAdditional,
  selectSecurity,
  changePasswordModal,
} = settingSlice.actions;
