import { useState } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";

const VerseCard = ({ gptVerse, esvVerse, searchInput, translation }) => {
  const handleCopyToClipboard = () => {
    const textToCopy = gptVerse;
    navigator.clipboard.writeText(textToCopy).catch((error) => {
      console.error("Error copying to clipboard:", error.message);
    });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${searchInput} as read by ${translation}`,
          text: `${esvVerse}`,
        });
        console.log("Successfully shared");
      } else {
        handleCopyToClipboard();
        throw new Error("Web Share API is not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <Card className="m-2 p-4 bg-slate-800 rounded-lg h-auto">
      <CardContent>
        <Typography variant="body1">{esvVerse}</Typography>
        <Typography variant="body1">{gptVerse}</Typography>
      </CardContent>
      <CardContent></CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleShare}>
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default VerseCard;
