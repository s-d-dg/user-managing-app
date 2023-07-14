import { createSlice } from "@reduxjs/toolkit";

import { UsersStateModel } from "./model";

const initialState: UsersStateModel = {
  stateUsers: [],
  sortBy: null,
  loading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers(state, data) {
      const { users } = data.payload;

      state.stateUsers = users;
    },
    removeUser(state, data) {
      const { id } = data.payload;

      state.stateUsers = state.stateUsers.filter((user) => user.id !== id);
    },
    addUser(state, data) {
      const { userData } = data.payload;

      // Only temporary method for generating id
      const newId = new Number(
        Math.floor(10 + Math.random() * (1000 - 10 + 1))
      ).toString();

      state.stateUsers = [...state.stateUsers, { id: newId, ...userData }];
    },
    editUser(state, data) {
      const { userData } = data.payload;
      const index = state.stateUsers.findIndex(
        (user) => user.id === userData.id
      );

      if (index > -1) {
        const updatedUsers = [...state.stateUsers];
        updatedUsers[index] = { ...userData };
        state.stateUsers = [...updatedUsers];
      }
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
