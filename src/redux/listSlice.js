import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: {value: []},
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload);
        },
        toggle: (state, action) => {
            const index = action.payload;
            if (state.value[index]) {
                state.value[index] = state.value[index].includes("(completato)")
                    ? state.value[index].replace(" (completato)", "")
                    : state.value[index] + " (completato)";
            }
        },
        remove: (state) => {
            state.value.pop();
        }
    }
});

export const { add, toggle, remove } = listSlice.actions;

export const listReducer = listSlice.reducer;

// PROSSIMI PASSI
// AGGIUNGERE GLI ELEMENTI DI UNA LISTA COME CARD 
// AGGIUNGERE LO STATO DI COMPLETATO AD UNA ATTIVITA 
// RIGUARDARE LA RIMOZIONE DELLE ATTIVITA DOPO AVERLA CONTRASSEGNTATA COME COMPLETATA