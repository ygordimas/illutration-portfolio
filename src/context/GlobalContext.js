"use client";

import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [listType, setListType] = useState("illustrations");

  return (
    <GlobalContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        currentImage,
        setCurrentImage,
        isOpen,
        setIsOpen,
        hideHeader,
        setHideHeader,
        listType,
        setListType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
