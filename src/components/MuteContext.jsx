import { createContext, useContext, useState } from "react";

const MuteContext = createContext();

export const MuteProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </MuteContext.Provider>
  );
};

export const useMute = () => {
  return useContext(MuteContext);
};
