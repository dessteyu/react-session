import React from "react";
export const DataContext = React.createContext(null);

const ProviderData = ({ children }) => {
    const [data, setData] = React.useState([]);
    

    return <DataContext.Provider value={{data, setData}}>
{children}
    </DataContext.Provider>
}

export default ProviderData;