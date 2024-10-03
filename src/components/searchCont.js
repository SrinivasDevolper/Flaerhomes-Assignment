import React, { useContext, useState } from "react";

const searchContext = React.createContext();

export const SearchedCont = ({ children }) => {
  const [bookName, setBookName] = useState("");
  return (
    <searchContext.Provider value={{ bookName, setBookName }}>
      {children}
    </searchContext.Provider>
  );
};

export const useBookName = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useBookName must be used within a SearchedCont");
  }
  return context;
};
