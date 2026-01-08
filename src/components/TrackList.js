import { Typography, Paper, IconButton, Stack } from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useMusicPlayer from "../hooks/useMusicPlayer";

const TrackList = () => {
  const { trackList, playTrack, currentTrackIndex, isPlaying } =
    useMusicPlayer();

  return (
    <Stack spacing={2}>
      {trackList.map((track, index) => {
        const isActive = index === currentTrackIndex;

        return (
          <Paper
            key={index}
            onClick={() => playTrack(index)}
            elevation={0}
            sx={{
              px: 2,
              py: 1.5,
              borderRadius: 3,
              cursor: "pointer",
              backgroundColor: isActive
                ? "rgba(255,255,255,0.9)"
                : "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton size="small">
              {isActive && isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>

            <Typography fontWeight={500}>{track.name}</Typography>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default TrackList;
