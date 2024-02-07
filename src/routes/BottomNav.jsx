import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@mui/material";
import { AutoStoriesOutlined, Search as SearchIcon } from "@mui/icons-material";
import TopHits from "pages/TopHits";
import Search from "pages/Search";
import Bible from "pages/Bible";

export default function FixedBottomNavigation() {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState("search");

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      {value === "search" && <Search />}
      {value === "bible" && <Bible />}
      {value === "topHits" && <TopHits />}
      <CssBaseline />

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon />}
            value="search"
          />
          <BottomNavigationAction
            label="Bible"
            icon={<AutoStoriesOutlined />}
            value="bible"
          />
          <BottomNavigationAction
            label="Top Hits"
            icon={<FavoriteIcon />}
            value="topHits"
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
