import React from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import "../styles.css";
import { Divider, Paper, Stack, Box, Grid } from "@mui/material";

export const Layout = () => {
  return (
    <Box display="flex" p={2}>
      <Grid container my={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={6} spacing={1}>
          <Paper sx={{ padding: "1rem" }} elevation={4}></Paper>
        </Grid>
        <Grid item xs={6} spacing={1}>
          <Paper sx={{ padding: "1rem" }} elevation={4}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Paper>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
};
