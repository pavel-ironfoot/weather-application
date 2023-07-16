import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cardsState {
    cards:{city:string, celsius:boolean}[];
}
const initialState: cardsState = {
    cards:[]
}
const cardsSlice = createSlice({
    name:'cards',
    initialState,
    reducers:{
        updateCards(state, action) {
            state.cards= action.payload;
          },
        addCard(state,action){
            state.cards.push(action.payload)
        },
        deleteCurrentCard(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.cards = state.cards.filter((_, i) => i !== index);
          },
    }
});

export default cardsSlice.reducer;
export const {addCard,deleteCurrentCard,updateCards} = cardsSlice.actions;