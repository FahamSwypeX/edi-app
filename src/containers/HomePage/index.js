/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "../../components/Footer";

import {
  getAllTags,
  getAllLanguages,
} from "../../utils/dataReader/dataProcessor";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export function HomePage({ setSelectedTag, setSelectedLanguage }) {
  const [allTags, setAllTags] = useState([{ title: "Loading..." }]);
  const [allLanguages, setAllLanguages] = useState([{ title: "Loading..." }]);

  useEffect(() => {
    setAllTags(getAllTags());
    setAllLanguages(getAllLanguages());
  }, []);

  const handleTagSelection = (event, values) => {
    const selectedTags = values.map((value) => value.title);
    console.log("setting selected tags" + selectedTags);
    setSelectedTag(selectedTags);
  };

  const handleLanguageSelection = (event, value) => {
    const selectedLanguage = value.title;
    setSelectedLanguage(selectedLanguage);
  };

  return (
    <article>
      <div>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              EDI
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              An app to help doctors fill in the gaps when speaking to their
              patients in another language
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="column"
              spacing={2}
              justifyContent="center"
            >
              <Autocomplete
                sx={{ width: "100%" }}
                id="tags-standard"
                options={allLanguages}
                onChange={handleLanguageSelection}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Select Target Language"
                    placeholder="Language"
                  />
                )}
              />
              <Autocomplete
                sx={{ width: "100%" }}
                multiple
                id="tags-standard"
                options={allTags}
                onChange={handleTagSelection}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Select symptoms"
                    placeholder="Symptoms"
                  />
                )}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Link to="/translations" style={{ textDecoration: "none" }}>
                  <Button variant="contained" style={{ color: "white" }}>
                    Get Questions
                  </Button>
                </Link>
              </div>
            </Stack>
          </Container>
        </Box>
      </div>
      <Footer />
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  setSelectedTag: PropTypes.func,
  selectedTag: PropTypes.array,
  setSelectedLanguage: PropTypes.func,
  selectedLanguage: PropTypes.string,
};

export default HomePage;
