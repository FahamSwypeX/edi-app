import React from "react";

import List from "./List";
import ListItem from "./ListItem";

export default function FeaturePage() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "0 20px" }}
    >
      <div style={{ maxWidth: "800px", width: "100%" }}>
        <h1>About</h1>
        <List>
          <ListItem>
            <p>
              We are a team of medical students who faced an issue and decided
              to resolve it
            </p>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
