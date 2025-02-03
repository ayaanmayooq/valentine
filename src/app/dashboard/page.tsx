"use client";

import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import { Placeholder } from "@/components/placeholder";

import {PlannedDate} from "@/components/planned-date";
import {DateIdeasChatbot} from "@/components/chatbot";
import {SpotifyPlaylist} from "@/components/spotify-playlist";

import { Card } from "@/components/card";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "@/styles/custom-grid.css";

export default function Dashboard() {
    const [gridWidth, setGridWidth] = useState(0);
    const [gridHeight, setGridHeight] = useState(0);
  
    useEffect(() => {
      const updateDimensions = () => {
        setGridWidth(window.innerWidth - 40);
        setGridHeight(window.innerHeight - 120);
      };
      updateDimensions(); // Initialize on mount
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }, []);

  const layout = [
    { i: "planned-date", x: 0, y: 0, w: 3, h: 4, minW: 2, minH: 2, maxW: 10, maxH: 10 },
    { i: "memory-list", x: 3, y: 0, w: 4, h: 9, minW: 2, minH: 2, maxW: 10, maxH: 10 },
    { i: "playlist", x: 7, y: 0, w: 3, h: 9, minW: 2, minH: 5, maxW: 10, maxH: 10 },
    { i: "date-ideas", x: 0, y: 4, w: 3, h: 5, minW: 2, minH: 2, maxW: 10, maxH: 10 },
  ];

  return (
    <div className="min-h-screen bg-valentine-pink p-6 overflow-hidden">
      <GridLayout
        className="layout"
        layout={layout}
        cols={10} // More granular grid system
        rowHeight={gridHeight / 10} // Adjust row height dynamically
        width={gridWidth} // Keep layout within screen size
        isResizable
        isDraggable
        resizeHandles={["s", "e", "w", "n", "se", "sw", "ne", "nw"]} // Allow resizing from all sides
        compactType={null} // Prevent overlapping by letting items adjust
        autoSize // Automatically resize other boxes
        preventCollision={true} // Prevent components from moving under each other
        maxRows={9} // Limit rows to fit within screen
      >
        <div key="planned-date">
        <Card
            title="📅 Planned Date"
            content={<PlannedDate />}
            variant="darker" // Use romantic styling
          />
        </div>

        <div key="memory-list" className="">
          <Card
            title="📸 Memory Timeline"
            content={< ></>}
            variant="darker" // Use romantic styling
          />
        </div>

        <div key="playlist" className="overflow-hidden">
          <SpotifyPlaylist playlistId="0Sg92j0J1dIwcTuwCIE46Y" />
        </div>

        <div key="date-ideas" className="">
          <Card
            title="💡 Date Ideas"
            content={<DateIdeasChatbot />}
            variant="darker" // Use romantic styling
          />
        </div>
      </GridLayout>
    </div>
  );
}
