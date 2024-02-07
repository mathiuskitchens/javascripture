import { Box, Card, Stack } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const sampleData = [
  {
    id: 1,
    title: "Verse 1",
    verse: "This is the first verse",
    speaker: "Yoda",
    hits: 1000,
  },
  {
    id: 2,
    title: "Verse 2",
    verse: "This is the second verse",
    speaker: "Darth Vader",
    hits: 900,
  },
  {
    id: 3,
    title: "Verse 3",
    verse: "This is the third verse",
    speaker: "Luke Skywalker",
    hits: 800,
  },
  {
    id: 4,
    title: "Verse 4",
    verse: "This is the fourth verse",
    speaker: "Princess Leia",
    hits: 700,
  },
  {
    id: 5,
    title: "Verse 5",
    verse: "This is the fifth verse",
    speaker: "Han Solo",
    hits: 600,
  },
  {
    id: 6,
    title: "Verse 6",
    verse: "This is the sixth verse",
    speaker: "Chewbacca",
    hits: 500,
  },
  {
    id: 7,
    title: "Verse 7",
    verse: "This is the seventh verse",
    speaker: "R2-D2",
    hits: 400,
  },
  {
    id: 8,
    title: "Verse 8",
    verse: "This is the eighth verse",
    speaker: "C-3PO",
    hits: 300,
  },
  {
    id: 9,
    title: "Verse 9",
    verse: "This is the ninth verse",
    speaker: "Obi-Wan Kenobi",
    hits: 200,
  },
  {
    id: 10,
    title: "Verse 10",
    verse: "This is the tenth verse",
    speaker: "Darth Maul",
    hits: 100,
  },
];

const TopHits = () => {
  return (
    <>
      <h1 className="mb-14"></h1>

      {sampleData.map((verse) => (
        <Card key={verse.id} className="mx-2 my-4 p-4 h-auto flex">
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <p>{verse.verse}</p>
            <h2>{verse.title}</h2>

            <p>
              <i>Spoken by {verse.speaker}</i>
            </p>

            <Stack direction="row" spacing={3} n className="pt-2">
              <p>
                <strong>Hits:</strong> {verse.hits}
              </p>
              <ThumbUpOffAltIcon />
              <ThumbDownOffAltIcon />
            </Stack>
          </Box>
        </Card>
      ))}
    </>
  );
};

export default TopHits;
