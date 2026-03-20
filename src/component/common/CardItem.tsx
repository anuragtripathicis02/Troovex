"use client";
import { useState } from "react";

type Props = {
  title?: string;        // optional
  description: string;
};

export default function CardItem({ title, description }: Props) {
  const [expanded, setExpanded] = useState(false);

  const shortText = description.slice(0, 120);

  return (
    <div className="">

      {/* Title (अगर हो तभी दिखे) */}
      {title && (
        <h5 className="title">{title}</h5>
      )}

      {/* Description */}
      <p className="desc mb-1">
        {expanded ? description : `${shortText}...`}
      </p>

      {/* Read More */}
      <span
        className="read-less-button"
        style={{ cursor: "pointer" }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </span>
    </div>
  );
}