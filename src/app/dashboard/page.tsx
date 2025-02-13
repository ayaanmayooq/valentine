"use client";

import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
// import { Placeholder } from "@/components/placeholder"; 

import {PlannedDate} from "@/components/planned-date";
import {DateIdeasChatbot} from "@/components/chatbot";
import {SpotifyPlaylist} from "@/components/spotify-playlist";

import { Card } from "@/components/card";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "@/styles/custom-grid.css";
import MemoryTimeline from "@/components/memory-timeline";

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
    { i: "planned-date", x: 5, y: 0, w: 2, h: 5, minW: 2, minH: 2, maxW: 10, maxH: 10 },
    { i: "memory-list", x: 0, y: 0, w: 5, h: 10, minW: 2, minH: 2, maxW: 10, maxH: 10 },
    { i: "playlist", x: 7, y: 0, w: 3, h: 5, minW: 2, minH: 5, maxW: 10, maxH: 10 },
    { i: "date-ideas", x: 5, y: 5, w: 5, h: 5, minW: 2, minH: 2, maxW: 10, maxH: 10 },
  ];

  return (
    <div className="min-h-screen bg-valentine-pink overflow-hidden">
      <GridLayout
        className="layout"
        layout={layout}
        cols={10} // More granular grid system
        rowHeight={gridHeight / 10} // Adjust row height dynamically
        width={gridWidth} // Keep layout within screen size
        isResizable={false} // Prevent resizing
        isDraggable={false} // Prevent dragging
        // resizeHandles={["s", "e", "w", "n", "se", "sw", "ne", "nw"]} // Allow resizing from all sides
        compactType={null} // Prevent overlapping by letting items adjust
        autoSize={false} // Automatically resize other boxes
        preventCollision={true} // Prevent components from moving under each other
        maxRows={9} // Limit rows to fit within screen
      >
        <div key="planned-date">
        <Card
            title="PLANNED DATE"
            content={<PlannedDate />}
            variant="darker"
          />
        </div>

        <div key="memory-list" className="h-full w-full rounded-xl bg-black">
          <MemoryTimeline />
        </div>

        <div key="playlist" className="overflow-hidden">
          <SpotifyPlaylist playlistId="7dm7JGCV8yhOEOxx5l0l9e" />
        </div>

        <div key="date-ideas" className="">
          <Card
            title="DATE IDEAS ASSISTANT"
            content={<DateIdeasChatbot/>}
            variant="darker"
          />
        </div>
      </GridLayout>
    </div>
  );
}
