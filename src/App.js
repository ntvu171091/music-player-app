import { Box, Typography, Paper } from "@mui/material";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Box
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#111"
      >
        <Paper
          elevation={6}
          sx={{
            width: 360,
            height: 640,
            borderRadius: 6,
            p: 3,
            background: "linear-gradient(180deg, #f3e5f5, #d1c4e9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography align="center" variant="h6" fontWeight={600} mb={3}>
              Mini Spotify
            </Typography>

            <TrackList />
          </Box>

          <Controller />
        </Paper>
      </Box>
    </MusicPlayerProvider>
  );
};

export default App;
