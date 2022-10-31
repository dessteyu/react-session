import React from "react";
export const DataContext = React.createContext(null);

const ProviderData = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false);

  return (
    <DataContext.Provider value={{ data, setData, isAuth, setIsAuth }}>
      {children}
    </DataContext.Provider>
  );
};

export default ProviderData;
