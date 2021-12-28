import React from "react";

export const data = {
    Number:'123',
    text: 'Pão'
}

const DataContext = React.createContext(data);

export default DataContext