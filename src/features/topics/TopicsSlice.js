import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/QuizzesSlice";

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
  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    });
  },
});

export const allTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
