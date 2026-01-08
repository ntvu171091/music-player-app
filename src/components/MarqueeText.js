import { Box, Typography } from "@mui/material";

const MarqueeText = ({ text }) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: "marquee 12s linear infinite",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-100%)" },
          },
        }}
        fontWeight={600}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MarqueeText;
