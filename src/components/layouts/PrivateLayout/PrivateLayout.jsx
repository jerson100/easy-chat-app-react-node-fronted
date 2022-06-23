import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";

const PrivateLayout = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  // if (previousLoadingUser) return <LoaderPage />;
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
export default PrivateLayout;
