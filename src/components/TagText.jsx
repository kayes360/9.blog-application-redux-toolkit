import React from "react";

export default function TagText({ tags }) {
  return (
    <>
      <div className="tags">
      {Array.isArray(tags) &&
          tags.map((tag, i) => (
            <span key={i}>#{tag},</span>
          ))}
      </div>
    </>
  );
}
