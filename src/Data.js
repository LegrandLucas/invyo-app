import React from "react";
import invyoData from './data/data'




const Data = () => {

  // console.log(invyoData.articles.slice(0,5).map((article) => article.Title))
  console.log(invyoData.articles.slice(0, 5).map((article) => article.Title))

  return (
    <div>
      <h1>Datas</h1>
      {invyoData.articles.slice(0, 5).map((article, index) =>
        <div>
          <p key={index}>{article.Title}</p>
          <p key={index}>{article.Content.substring(0, 50)}</p>
          <p key={index}>{article.Langues}</p>
          {article.Tags.topic.map((topic) => (
            <p key={index}>{topic}</p>
          ))}
        </div>

      )}
      {/* {invyoData.articles.slice(0, 5).map((article) => (
        <div>
          <p>{article.Title}</p>
          <p>{article.Content}</p>
          <p>{article.Langues}</p>
          <p>{article.Tags}</p>
        </div>
       ))} */}
    </div>
  );
}

export default Data;
