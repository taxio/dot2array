import * as React from "react";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => (
  <AppBar title="Header" position="static">
    <Toolbar>
      <Typography variant='h6' color='inherit'>
        Dot2Array
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;