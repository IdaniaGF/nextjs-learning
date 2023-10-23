"use client";

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "liked" : "no liked"}
    </button>
  );
}
