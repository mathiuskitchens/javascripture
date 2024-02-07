import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import LoadingSkeleton from "components/LoadingSkeleton";
import { useEffect, useState } from "react";
import { searchVerse } from "services/api-requests";

const Bible = () => {
  const [view, setView] = useState("");
  const [chapter, setChapter] = useState("John 1");
  const [isLoading, setIsLoading] = useState(false);

  async function getVerse() {
    setIsLoading(true);
    const result = await searchVerse(chapter);
    setIsLoading(false);
    return result;
  }

  useEffect(() => {
    getVerse().then((result) => {
      setView(result);
    });
  }, []);

  return (
    <Box className="mt-16">
      <Card>
        <Typography variant="h5" className="p-4 text-center underline">
          {chapter}
        </Typography>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <CardContent>
            <Typography variant="p">{view}</Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default Bible;
