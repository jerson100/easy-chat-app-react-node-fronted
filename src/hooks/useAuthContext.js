import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No se puede acceder al contexto de la autorización");
  }
  return context;
};

export default useAuthContext;
