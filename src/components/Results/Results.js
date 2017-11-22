import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import "./Results.css";
import { Link } from "react-router-dom";
const Results = ({ results }) => {
  let resultsMaped = results.map((item, i) => {
    return (
      <Link to={`${item.trackId}`} key={item.trackId} target="_new">
        <ListGroupItem className="Result">
          <span className="ResImg">
            <img src={item.artworkUrl60} alt="img preview" />
          </span>
          <span className="Restext">
            <div className="ResTitle">{`${item.trackName} (${item.kind})`}</div>
            <div className="ResContent">{item.artistName}</div>
          </span>
        </ListGroupItem>
      </Link>
    );
  });
  return <ListGroup>{resultsMaped}</ListGroup>;
};
export default Results;
