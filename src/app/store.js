import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "./../features/topics/TopicsSlice";
import quizzesRecurer from "./../features/quizzes/QuizzesSlice";
import cardsReducer from "./../features/cards/CardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesRecurer,
    cards: cardsReducer,
  },
});
