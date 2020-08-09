import React from "react";

const Heading = () => {
  return (
    <div className="jumbotron text-center p-1 mb-3">
      <h2 className="display-5">Instagram Line Breaker</h2>
      <p className="lead">Add line breaks in your instagram caption.</p>
      <p className="lead">
        <a
          className="btn btn-primary btn-md"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ekamid/instagram-caption-line-breaker"
          role="button"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Heading;
