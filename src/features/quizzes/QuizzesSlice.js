import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {},
};

const quizzesReducer = {
  addQuiz: (state, action) => {
    return {
      ...state,
      quizzes: {
        ...state.quizzes,
        [action.payload.id]: action.payload,
      },
    };
  },
};

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: initialState,
  reducers: quizzesReducer,
});

export const allQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
