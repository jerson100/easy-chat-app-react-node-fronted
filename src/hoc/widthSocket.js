import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import useAuthContext from "../hooks/useAuthContext";

const withSocket = (Component) => (props) => {
  const [socket, setsocket] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    // setsocket(io("http://localhost:3100"));
    setsocket(io("https://easy-chat-app-react.herokuapp.com/"));
    // console.log(socket.current);
  }, []);

  useEffect(() => {
    if (socket != null) {
      socket.on("connect", () => {
        socket.emit(
          "login",
          JSON.stringify({
            user: user,
            room: socket.id,
          })
        );
      });
    }
  }, [user, socket]);

  return <Component {...props} io={socket} />;
};

export { withSocket };
