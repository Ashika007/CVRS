import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "200px",
        background: "#f4f4f4",
        height: "100vh",
        padding: "10px",
      }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Create Hospital" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Update Hospital" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Remove Hospital" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
