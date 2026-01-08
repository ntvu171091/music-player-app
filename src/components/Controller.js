import { Box, IconButton, Typography } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import useMusicPlayer from "../hooks/useMusicPlayer";
import MarqueeText from "./MarqueeText";

const Controller = () => {
  const {
    togglePlay,
    playNextTrack,
    playPreviousTrack,
    isPlaying,
    currentTrackIndex,
    currentTrackName,
  } = useMusicPlayer();

  return (
    <Box>
      {/* TITLE CHẠY */}
      <Box mb={2} textAlign="center">
        <Typography variant="caption" color="text.secondary">
          Now Playing
        </Typography>

        <MarqueeText text={currentTrackName} />
      </Box>

      {/* BUTTONS */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
        <IconButton
          disabled={currentTrackIndex === null}
          onClick={playPreviousTrack}
        >
          <SkipPreviousIcon />
        </IconButton>

        <IconButton
          onClick={togglePlay}
          disabled={currentTrackIndex === null}
          sx={{
            width: 64,
            height: 64,
            backgroundColor: "#666",
            color: "#fff",
            "&:hover": { backgroundColor: "#555" },
          }}
        >
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton
          disabled={currentTrackIndex === null}
          onClick={playNextTrack}
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Controller;
