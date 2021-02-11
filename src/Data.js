import React, { useState, useEffect } from "react";
import invyoData from './data/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const Data = () => {

  const data = invyoData.articles.slice(0, 10)

  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');


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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    topGrid: {
      margin: "40px 0px"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.topGrid}>
      <select onChange={e => topicSelection(e.target.value)} value={selectedTopic}>
      {uniqueTopicList.map((topic) => (
        <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <select onChange={e => languageSelection(e.target.value)} value={selectedLanguage}>
      {uniqueLanguageList.map((language) => (
        <option key={language} value={language}>{language}</option>
        ))}
      </select>
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
