import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "../../../views/Chat";
import Login from "../../../views/Login";
import NotFound from "../../common/NotFound";
import PrivateLayout from "../../layouts/PrivateLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateLayout />}>
          <Route path="/chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
