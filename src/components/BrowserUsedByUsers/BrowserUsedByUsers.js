import React from "react";
import "./BrowserUsedByUsers.scss";
// import articles from "../../assets/articles.svg";

const BrowserUsedByUsers = () => {
  return (
    <div className="BrowserUsedByUsers-min">
      <div className="articles-header">
        {/* <img src={articles} alt="logo" /> */}
        <h2>Articles</h2>
      </div>
      <div className="articles-data-min">
        <div className="articles-data-col">
          <h4 className="articles-name">Global HR Day 2022 is here</h4>
          <p className="article-date">May 23, 2021</p>
        </div>
        <div className="articles-data-col">
          <h4 className="articles-name">Sweden introduces new workplace culture in 2022</h4>
          <p className="article-date">May 23, 2021</p>
        </div>
        <div className="articles-data-col">
          <h4 className="articles-name">5 times it’s OK to fire an employee on FMLA leave</h4>
          <p className="article-date">May 23, 2021</p>
        </div>
        <div className="articles-data-col">
          <h4 className="articles-name">Japan updates certain employment laws</h4>
          <p className="article-date">May 23, 2021</p>
        </div>
      </div>
      <div className="articles-footer">
        <h4>More</h4>
      </div>
    </div>
  );
};

export default BrowserUsedByUsers;
