import React, { useState, useEffect } from "react";
import invyoData from './data/data'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';




const Data = () => {

  // console.log(invyoData.articles.slice(0, 5).map((article) => article.Title))
  const data = invyoData.articles.slice(0, 10)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(data);
  }, []);


  const sortedByTitle = () => {
    console.log("sort by title")
    data.sort(function (a, b) {
      if (a.Title < b.Title) { return -1; }
      if (a.Title > b.Title) { return 1; }
      return 0;
    })
    setArticles(data)
  }


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
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Typography variant="body1" onClick={() => sortedByTitle()}>Titre</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="body1">Contenu</Typography>
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
      {articles.slice(0, 10).map((article, index) =>
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
