import React, {
  useReducer,
  createContext,
  useCallback,
  useEffect,
} from "react";
import {
  commentsReducer,
  USER_TYPES,
  USER_DEFAULT_VALUES,
} from "../reducers/commentsReducer";

const CommentsContext = createContext();

const ComentsProvider = React.memo(({ children, io }) => {
  const [data, dispatch] = useReducer(commentsReducer, USER_DEFAULT_VALUES);

  useEffect(() => {
    if (io) {
      io.on("newComment", (data) => {
        const newC = JSON.parse(data);
        dispatch({
          type: USER_TYPES["ADD [COMMENT]"],
          payload: { ...newC, myComment: io.id == newC.room },
        });
      });
    }
    //para la desconexion del usuario...
    // return () =>{
    //     io.emit("exit", JSON.stringify())
    // }
  }, [io]);

  const addComment = useCallback(
    ({ description, date, username, img }) => {
      io.emit(
        "addComment",
        JSON.stringify({
          description,
          date,
          username,
          img,
          room: io.id,
        })
      );
    },
    [io]
  );

  return (
    <CommentsContext.Provider value={{ comments: data.comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
});

export { CommentsContext, ComentsProvider };
