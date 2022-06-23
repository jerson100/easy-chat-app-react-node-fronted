import { List, ListItem } from "@mui/material";
import React from "react";

const UserList = ({ users }) => {
  return (
    <List>
      {users.map((us) => (
        <ListItem key={us}>us</ListItem>
      ))}
    </List>
  );
};

export default UserList;
