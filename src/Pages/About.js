import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const About = () => {
  return (
    <Box display="flex">
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} p={2}></Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            SmartXchain, LLC is an IT solutions services provider registered in
            North Carolina. We develop web apps using blockchain technology for
            businesses to handle aerospace industry audits efficiently; create
            digital identify infrastructure for a small business engaged in R&D;
            assist seeding for SBIR/STTR programs; and sell services using
            datagraph to businesses. Our goal is to improve businesses’
            efficiency by coordinating the various entities’ efforts in the
            supply chain. This can result in a company achieving a competitive
            advantage over its rivals and enhancing the quality of its products,
            which can lead to increased sales and revenue. Our management is
            highly experienced in handling NADCAP, AN9100 and customer audits,
            setting up and starting chemica processes for Aerospace, Distributed
            Ledger Technologies and Digital Identify Infrastructure.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
