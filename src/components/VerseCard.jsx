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
  const [verseToShare, setVerseToShare] = useState("");

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(verseToShare).catch((error) => {
      console.error("Error copying to clipboard:", error.message);
    });
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${searchInput} as read by ${translation}`,
          text: `${verseToShare}`,
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
    <Card className="m-2 p-4 h-auto">
      <CardContent>
        <Typography variant="body1">{esvVerse}</Typography>
        <Typography variant="body1">{gptVerse}</Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (esvVerse === "" || esvVerse === undefined) {
              setVerseToShare(gptVerse);
            } else {
              setVerseToShare(esvVerse);
              console.log(esvVerse);
            }
            handleShare();
          }}
        >
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            console.log("Add to Hits");
          }}
        >
          Add to Hits
        </Button>
      </CardActions>
    </Card>
  );
};

export default VerseCard;
