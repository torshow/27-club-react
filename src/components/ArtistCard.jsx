import React from "react";

function ArtistCard(props) {
  return (
    <div className="artist-card">
      <h3>{props.name}</h3>
      <p>Band: {props.band}</p>
      <p>Genre: {props.genre}</p>
      <p>Died: {props.died}</p>
    </div>
  );
}

export default ArtistCard;