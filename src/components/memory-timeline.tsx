"use client";

import React, { useEffect, useRef, useState } from "react";
import { TIMELINE_DATA } from "@/data/timelineData";
import "@/styles/timeline.scss";

export default function MemoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const options = {
      root: timelineRef.current,
      threshold: 0.99,
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
    <>
    <div className="fixed w-full h-full inset-0"
    style={{
        backgroundColor: "rgba(46, 4, 13, 0.5)",
    }}
    ></div>
    <div className="timeline-contianer w-full h-full overflow-auto inset-0"
    style={{
        backgroundImage: `url(${currentBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        }}
    >
    {/* <div className=" w-full h-full" */}
      <div className="timeline-header p-8">
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
              data-text={item.sideHeading} // for side heading
            >
              <div className="timeline__content">
                <img className="timeline__img" src={item.img} alt={item.date} />
                <h2 className="timeline__content-title">{item.date}</h2>
                <p className="timeline__content-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
