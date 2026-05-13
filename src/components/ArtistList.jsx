import React from "react";
import ArtistCard from "./ArtistCard";

function ArtistList({ projects }) {
  return (
    <div className="artist-list">
      <h2>Projects</h2>

      <div className="artist-cards">
        {projects.map(project => (
          <ArtistCard
            key={project.id}
            name={project.name}
            band={project.client}
            genre={project.category}
            died={project.year}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtistList;