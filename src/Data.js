import React, { useState, useEffect } from "react";
import invyoData from './data/data'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Select, MenuItem, FormControl, InputLabel, TextField } from '@material-ui/core';



const Data = () => {

  const data = invyoData.articles.slice(0, 10)

  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('Choisir des topic');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [keyword, setKeyword] = useState('');


  useEffect(() => {
    setArticles(data);
    setTopics(dataTopics);
  }, []);

  const sortByTitle = () => {
    data.sort(function (a, b) {
      if (a.Title < b.Title) { return -1; }
      if (a.Title > b.Title) { return 1; }
      return 0;
    })
    setArticles(data)
  };

  const sortByContent = () => {
    data.sort(function (a, b) {
      if (a.Content < b.Content) { return -1; }
      if (a.Content > b.Content) { return 1; }
      return 0;
    })
    setArticles(data)
  };



// Filtering articles by Tags
  const filterByTag = (tag) => {
    data.filter(function (el) {
      const selectedData = el.Tags.topic;
      if (selectedData.indexOf(tag) > -1) {
        setArticles([el])
      }
    });
  }

  const dataTopics = data.map((article) => article.Tags.topic);
  const newTopics = dataTopics.concat.apply([], dataTopics);

  const uniqueTopic = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const uniqueTopicList = newTopics.filter(uniqueTopic);

  const topicSelection = (newTopic) => {
    setSelectedTopic(newTopic);
    filterByTag(newTopic)
  }
//

// Filtering articles by Languages
  const filterByLanguage = (Language) => {
    data.filter(function (el) {
      const selectedData = el.Language;
      if (selectedData.indexOf(Language) > -1) {
        setArticles([el])
      }
    });
  }

  const dataLanguage = data.map((article) => article.Language);
  const newLanguages = dataLanguage.concat.apply([], dataLanguage);

  const uniqueLanguage = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const uniqueLanguageList = newLanguages.filter(uniqueLanguage);

  const languageSelection = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    filterByLanguage(newLanguage)
  }
//


  const searchArticles = (input) => {
    if (input === "") {
      setArticles(data)
    } else {
      const filterdArticles = data.filter(obj => {
        return (
          obj.Content.toLowerCase().split(' ').includes(input.toLowerCase())
          ||
          obj.Title.toLowerCase().split(' ').includes(input.toLowerCase())
        )
      })
      setArticles(filterdArticles)
    }
  }


// styles
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    topGrid: {
      margin: "40px 0px"
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
//
  return (
    <div className={classes.topGrid}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
          <TextField
            id="standard-basic"
            label="Rechercher une actualité"
            onChange={e => searchArticles(e.target.value)}
          />
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
          <InputLabel id="topic">Choisir un topic</InputLabel>
          <Select
            labelId="topic"
            id="topic"
            value={selectedTopic}
            onChange={e => topicSelection(e.target.value)}
          >
            {uniqueTopicList.map((topic) => (
              <MenuItem value={topic}>{topic}</MenuItem>
            ))}
          </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel id="language">Choisir une langue</InputLabel>
            <Select
              labelId="language"
              id="language"
              onChange={e => languageSelection(e.target.value)}
              value={selectedLanguage}
            >
              {uniqueLanguageList.map((language) => (
                <MenuItem value={language}>{language}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="body1" onClick={() => sortByTitle()}>Titre</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body1" onClick={() => sortByContent()}>Contenu</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">Langues</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">Tags</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">Actions</Typography>
        </Grid>
      </Grid>
      {articles.map((article) =>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography variant="body2">
            {article.Title}
            </Typography>
            <Typography variant="body2">
            {"Source:" + article.url.substring(0, 10)}
            </Typography>
            <Typography variant="body2">
            {article.Date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            {article.Content.substring(0, 220) + '...'}
          </Grid>
          <Grid item xs={1}>
            {article.Language}
          </Grid>
          <Grid item xs={1}>
            {article.Tags.topic.map((topic) => (
              <p>{topic}</p>
            ))}
          </Grid>
          <Grid item xs={1}>
          actions
          </Grid>
        </Grid>
      </div>
    )}
    </div>
  );
}

export default Data;
