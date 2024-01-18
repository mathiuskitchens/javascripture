/* eslint-disable no-console */
import "./App.css";
import Layout from "Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { searchVerse } from "services/api-requests";
import { useState } from "react";
import { gptRequest } from "services/openai-requests";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [resultVerse, setResultVerse] = useState("");
  const [gptVerse, setGptVerse] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    const result = await searchVerse(searchInput);
    setResultVerse(result);
    console.log(result);
    setLoading(false);
  };

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const handleGpt = async () => {
    const gptResult = await gptRequest(searchInput, translation);
    setGptVerse(gptResult.message.content);
    console.log(gptResult);
    setLoading(false);
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
          sx={{ m: 1, maxWidth: 100 }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <FormControl
          sx={{ minWidth: 100 }}
          size="small"
          style={{ marginLeft: "6px", marginTop: "18px", height: "2rem" }}
        >
          <InputLabel id="translation-selector-label">Choose</InputLabel>
          <Select
            sx={{ maxWidth: 80 }}
            labelId="translation-selector-label"
            id="translation-selector"
            value={translation}
            label="Choose"
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
        {/*         <Button
          variant="contained"
          size="medium"
          style={{ marginTop: "20px", height: "2rem" }}
          onClick={handleGpt}
        >
          'Mater
        </Button> */}
        <LoadingButton
          loading={loading}
          onClick={() => {
            setLoading(true);
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
        </LoadingButton>
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
