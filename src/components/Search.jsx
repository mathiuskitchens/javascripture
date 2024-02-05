/* eslint-disable no-console */
import "../App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Card,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { searchVerse } from "services/api-requests";
import React, { useState } from "react";
import { gptRequest } from "services/openai-requests";
import VerseCard from "./VerseCard";
import LoadingSkeleton from "./LoadingSkeleton";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [esvVerse, setEsvVerse] = useState("");
  const [gptVerse, setGptVerse] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setLoaded(false);
    const result = await searchVerse(searchInput);
    setEsvVerse(result);
    console.log(result);
    setLoading(false);
    setLoaded(true);
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleGpt = async () => {
    setLoading(true);
    setLoaded(false);
    const gptResult = await gptRequest(searchInput, translation);
    setGptVerse(gptResult.message.content);
    console.log(gptResult);
    setLoading(false);
    setLoaded(true);
  };

  return (
    <>
      <Stack
        direction="row"
        style={{
          marginTop: "70px",
          paddingBottom: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter a verse..."
          variant="standard"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          sx={{ m: 1, width: "60%" }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <LoadingButton
          loading={loading}
          onClick={() => {
            setLoading(true);
            setEsvVerse("");
            setGptVerse("");
            if (translation === "esv") {
              handleSearch();
            } else {
              handleGpt(searchInput, translation);
            }
          }}
          variant="contained"
          size="small"
          style={{
            height: "40px",
            width: "100px",
            marginTop: "10px",
          }}
        >
          Search
        </LoadingButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <FormControl id="translation" size="small" sx={{ width: "40%" }}>
          <InputLabel id="translation-selector-label">Translation</InputLabel>
          <Select
            labelId="translation-selector-label"
            id="translation-selector"
            value={translation}
            label="Translation"
            onChange={handleTranslationChange}
          >
            <MenuItem value={"esv"}>ESV</MenuItem>
            <MenuItem value={"hillbilly"}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f7/Mater_%28Cars%29.png"
                height="30px"
                width="30px"
              />
            </MenuItem>
            <MenuItem value={"joker"}>
              <img
                src="https://www.templatesarea.com/wp-content/uploads/2023/06/free-joker-svg-vector-cut-file-iconic-head-image-cricut-silhouette.jpg"
                height="30px"
                width="30px"
              />
            </MenuItem>
            <MenuItem value={"yoda"}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-37-512.png"
                height="40px"
                width="40px"
              />
            </MenuItem>
            <MenuItem value={"groot"}>
              <img
                src="https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/1691205632_Groot-01.png&width=600&height=600&quality=90&format=auto&fit=pad"
                height="40px"
                width="40px"
              />
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack spacing={2}>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "1rem",
          }}
        >
          Enjoy your translation!
        </h1>
      </Stack>
      {!loaded && loading && (
        <>
          <LoadingSkeleton />
          <LoadingSkeleton />
        </>
      )}
      {loaded && (
        <VerseCard
          gptVerse={gptVerse}
          esvVerse={esvVerse}
          searchInput={searchInput}
          translation={translation}
        />
      )}
    </>
  );
}

export default Search;
