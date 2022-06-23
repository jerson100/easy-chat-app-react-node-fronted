import { useContext } from "react";
import { CommentsContext } from "../providers/ComentsContext";

const useCommentContext = () => {
  const context = useContext(CommentsContext);
  if (!context) throw new Error("No puede acceder al contexto de comentarios");
  return context;
};

export default useCommentContext;
