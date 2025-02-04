"use client";

import React, { useEffect, useRef, useState } from "react";
import { TIMELINE_DATA } from "@/data/timelineData"; // the array
import "@/styles/timeline.scss"; // import your SCSS

export default function MemoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.9, // item is “active” if 50% is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, options);

    // Observe each timeline-item
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Cleanup
    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // The background is set to the current active item’s image
  const currentBg = TIMELINE_DATA[activeIndex]?.img;

  return (
    <div
      id="timeline-1"
      className="timeline-container"
      style={{
        backgroundImage: `url(${currentBg})`,
      }}
    >
      {/* Dark overlay is done in SCSS .timeline-container:before */}
      <div className="timeline-header">
        <h2 className="timeline-header__title">Memories</h2>
        <h3 className="timeline-header__subtitle">you & me</h3>
      </div>

      <div className="timeline">
        {TIMELINE_DATA.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              ref={(el) => {
                if (el) itemRefs.current[i] = el;
              }}
              className={`timeline-item ${isActive ? "timeline-item--active" : ""}`}
              data-text="FATHER OF THE TURKS"
            >
              <div className="timeline__content">
                <img className="timeline__img" src={item.img} alt={item.year} />
                <h2 className="timeline__content-title">{item.year}</h2>
                <p className="timeline__content-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="demo-footer">
        <a
          href="http://www.turkishnews.com/Ataturk/life.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source/Kaynak
        </a>
      </div>
    </div>
  );
}
