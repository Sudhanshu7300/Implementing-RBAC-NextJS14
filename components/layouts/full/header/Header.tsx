"use client";
import React from "react";
import {
  Box,
  AppBar,
  styled,
  Stack,
  IconButton,
  Container,
  Grid,
} from "@mui/material";
import PropTypes from "prop-types";
// components
import Profile from "./Profile";
import { IconMenu } from "@tabler/icons-react";
interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.secondary.main,
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <Container
        maxWidth="xl"
        sx={{
          padding: "0px",
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            <IconMenu width="20" height="20" />
          </IconButton>

          <Box flexGrow={1} />
          <Stack spacing={1} direction="row" alignItems="center">
            <Profile />
          </Stack>
        </Grid>
      </Container>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
