import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "./../features/topics/TopicsSlice";
import quizzesRecurer from "./../features/quizzes/QuizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesRecurer,
  },
});
