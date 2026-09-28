"use client";

import React from "react";

export default function DownloadAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("download-app");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href="#download-app"
      onClick={handleClick}
      className="hm-btn hm-btn-outline pui-btn pui-focus"
    >
      Download the Patient App
    </a>
  );
}
