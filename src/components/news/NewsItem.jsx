import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin: 40px;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      font-size: 16px;
    }
    margin-left: 20px;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target='_black' rel='noopener noreferrer'>
            <img target='_blank' alt='thumbnail' src={urlToImage} />
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={url} target='_blank' rel='roopener noreferrer'>
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
