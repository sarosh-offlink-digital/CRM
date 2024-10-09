// import React, { createContext, useContext, useState } from 'react';

// const SidebarContext = createContext();

// export const SidebarProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpenSales, setIsOpenSales] = useState(false);
//   const [toggleNavHeight, setToggleNavHeight] = useState(false);
//   const [navHeight, setNavHeight] = useState('52');
//   const [crmTitle, setCrmTitle] = useState('Customer Relationship Management');

//   return (
//     <SidebarContext.Provider
//       value={{
//         isOpen,
//         setIsOpen,
//         isOpenSales,
//         setIsOpenSales,
//         toggleNavHeight,
//         setToggleNavHeight,
//         navHeight,
//         setNavHeight,
//         crmTitle,
//         setCrmTitle,
//       }}
//     >
//       {children}
//     </SidebarContext.Provider>
//   );
// };

// export const useSidebar = () => {
//   return useContext(SidebarContext);
// };
