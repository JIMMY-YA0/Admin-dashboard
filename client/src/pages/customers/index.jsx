import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetCustomersQuery } from "redux/api";
import Header from "components/Header";
import { DataGrid } from "@mui/x-data-grid";
const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data1: ", data);
  return <div> Customers</div>;
};

export default Customers;
