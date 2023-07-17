import React from "react";

import A from "../A";

import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        display: "flex",
        justifyContent: "space-between",
        padding: "3em 0",
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          padding: "0 1em",
        }}
      >
        <section>
          Created by the following Med Students @ UOttawa: Eileen, Eimaan, Hadi,
          and Sarah
        </section>
        <section></section>
        <section>
          Developed by{" "}
          <A href="https://www.linkedin.com/in/fahamkhan/">Faham Khan</A>
        </section>
      </div>
    </Box>
  );
}

export default Footer;
