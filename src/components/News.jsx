import React, { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);
  const link = 'https://newsdata.io/api/1/latest?apikey=pub_45347608daadcf7601587ab23c2fd80648228&language=en';

  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch(link);
        const data = await response.json();
        setNews(data.results);
        console.log(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    getNews();
  }, []);

  return (
    <>
      <h1 className="title">News</h1>
      <div className="news">
        <div id="newsContainer" className="row">
          {news.map((article, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card" style={{ width: '18rem', height:'500px' }}>
                <img src={article.image_url || 'default-image.jpg'} alt={article.title} className="image" />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description || article.content || 'No content available'}</p>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
