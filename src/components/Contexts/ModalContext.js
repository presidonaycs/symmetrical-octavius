import React, { useState, useEffect, createContext } from 'react';

export const ModalContext = createContext();


const ModalContextProvider = (props) => {
   
   const [show6, setShow6] = useState(false)
   const [show22, setShow22] = useState(false)

   const handleShow6 =()=>{
       setShow6(!show6)
   }
   const handleShow22 =()=>{
    setShow22(!show22)
}
  return (
      
    <ModalContext.Provider value = {{handleShow22, handleShow6,show6,show22}}>
{props.children}
    </ModalContext.Provider>

   
  );
};
export default ModalContextProvider;