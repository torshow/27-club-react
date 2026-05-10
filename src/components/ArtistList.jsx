import React from "react";
import ArtistCard from "./ArtistCard";


function ArtistList() {
  return (
    <div className="artist-list">
      <h2>Music Legends</h2>

      <div className="artist-card">
        <h3>Kurt Cobain</h3>
        <p>Band: Nirvana</p>
        <p>Genre: Grunge</p>
        <p>Died: 1994</p>
      </div>

      <div className="artist-card">
        <h3>Amy Winehouse</h3>
        <p>Band: Solo Artist</p>
        <p>Genre: Soul / R&B</p>
        <p>Died: 2011</p>
      </div>

      <div className="artist-card">
        <h3>Jimi Hendrix</h3>
        <p>Band: Jimi Hendrix Experience</p>
        <p>Genre: Rock / Blues</p>
        <p>Died: 1970</p>
      </div>

    </div>
  );
}

export default ArtistList;