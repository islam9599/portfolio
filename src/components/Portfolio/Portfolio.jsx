import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocument({ numPages }) {
    setNumPage(numPage);
    setPageNumber(1);
  }

  return (
    <div className="portfolio" id="Portfolio">
      <img src="/portfolio-1.png" alt="portfolio" className="portfolio-img" />
    </div>
  );
};

export default Portfolio;
