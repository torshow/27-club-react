import React from "react";
import ArtistCard from "./ArtistCard";


function ArtistList() {
  return (
    <div className="artist-list">
      <h2>Music Legends</h2>

      <div className="artist-cards">
        <ArtistCard
        name="Kurt Cobain"
        band="Nirvana"
        genre="Grunge"
        died="1994"
    
      />
        <ArtistCard
        name="Amy Winehouse"
        band="Solo Artist"
        genre="Soul / RNB"
        died="2011"
        
        />
        
        <ArtistCard
        name="Jimi Hendrix"
        band="Jimi Hendrix Experience"
        genre="Rock / Blues"
        died="1970"
      />

    </div>
    </div>
  );
}

export default ArtistList;