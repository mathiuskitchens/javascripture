/* eslint-disable no-console */
import "./App.css";
import Layout from "Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { searchVerse } from "services/api-requests";
import { useState } from "react";
import { gptRequest } from "services/openai-requests";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [resultVerse, setResultVerse] = useState("");
  const [gptVerse, setGptVerse] = useState("");
  const [translation, setTranslation] = useState("");

  const handleSearch = async () => {
    const result = await searchVerse(searchInput);
    setResultVerse(result);
    console.log(result);
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleGpt = async () => {
    const gptResult = await gptRequest(searchInput, translation);
    setGptVerse(gptResult.message.content);
    console.log(gptResult);
  };

  return (
    <Layout>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "55px",
          paddingBottom: "10px",
        }}
      >
        <TextField
          id="standard-basic"
          label="Search a verse"
          variant="standard"
          value={searchInput}
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
          sx={{ m: 1 }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <Button
          onClick={() => {
            setResultVerse("");
            setGptVerse("");
            if (translation === "esv") {
              handleSearch();
            } else {
              handleGpt(searchInput, translation);
            }
          }}
          variant="contained"
          size="medium"
          style={{ marginLeft: "6px", marginTop: "19px", height: "2.3rem" }}
        >
          Search
        </Button>
      </Box>
      <Container fixed>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Enjoy your translation!
        </h1>
        <Container fixed>
          <p>{resultVerse}</p>
        </Container>

        <p>{gptVerse}</p>
      </Container>
    </Layout>
  );
}

export default Search;
