/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SelectedStepContext = createContext();

export default function SelectedStepContextProvider({ children }) {
    const selectedStepState = useState(-1);
    return (
        <SelectedStepContext.Provider value={selectedStepState}>
            {children}
        </SelectedStepContext.Provider>
    );
}
