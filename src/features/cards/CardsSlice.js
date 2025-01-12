import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {},
};

const cardsReducer = {
  addCard: (state, action) => {
    return {
      ...state,
      cards: {
        ...state.cards,
        [action.payload.id]: action.payload,
      },
    };
  },
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: cardsReducer,
});

export const selectedCard = (cardId) => (state) => {
  console.log(state.cards.cards);
  const cardToReturn = Object.values(state.cards.cards).find(
    (card) => card.id === cardId
  );
  console.log(cardToReturn);
  return cardToReturn;
};
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
