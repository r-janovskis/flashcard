import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

const topicsReducer = {
  addTopic: (state, action) => {
    return {
      ...state,
      topics: {
        ...state.topics,
        [action.payload.id]: {
          // id: action.payload.id,
          // name: action.payload.name,
          // icon: action.payload.icon,
          ...action.payload,
          quizIds: [],
        },
      },
    };
  },
};

const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: topicsReducer,
});

export const allTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
