import React, { useContext, useState } from "react";

const libraryContext = React.createContext();
export const LibraryProvider = ({ children }) => {
  const [libraryList, setLibraryList] = useState([]);
  return (
    <libraryContext.Provider value={{ libraryList, setLibraryList }}>
      {children}
    </libraryContext.Provider>
  );
};
export const useLibrary = () => {
  const libraryObj = useContext(libraryContext);
  return libraryObj;
};
