import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {},
};

const topicsReducer = {
  addTopic: (state, payload) => {
    return {
      ...state,
      topics: {
        ...state.topics.topics,
        [payload.id]: {
          ...payload,
          quizIds: [],
        },
      },
    }; // state.topics[payload.id] = payload;
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
