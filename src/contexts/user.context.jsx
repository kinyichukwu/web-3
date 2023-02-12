import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  console.log(currentUser, "wrh8y08");

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  console.log(currentUser?.displayName, "sersrtyyxr");
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
