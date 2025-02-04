import React from 'react';

import {Card} from '@/components/card';
import MemoryCard from '@/components/memory-card';
import MemoryTimeline from '@/components/memory-timeline';

const TestComponent: React.FC = () => {

    const TIMELINE_DATA: TimelineEvent[] = [
        {
          year: "1881",
          imgSrc: "http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg",
          description:
            "He was born in 1881 (probably in the spring) in Salonica... raised by his mother Zubeyde.",
        },
        {
          year: "1893",
          imgSrc: "http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg",
          description:
            "In 1893, he entered a military high school where his mathematics teacher gave him the second name Kemal (meaning perfection)...",
        },
        {
          year: "1905",
          imgSrc: "http://www.volpeypir.com/upload/3732.jpg",
          description:
            "In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain...",
        },
        {
          year: "1908",
          imgSrc: "http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg",
          description:
            "In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal’s career flourished...",
        },
        {
          year: "1915",
          imgSrc: "http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg",
          description:
            "In 1915, when the Dardanelles campaign was launched, Colonel Mustafa Kemal became a national hero...",
        },
        {
          year: "1916",
          imgSrc: "http://blog.istanbul1881.com/wp-content/uploads/2016/08/atat%C3%BCrk-%C3%BCn-inan%C4%B1lmaz-karizmatik-fotograf%C4%B1_861050.jpg",
          description:
            "Promoted to general in 1916, at age 35, he liberated two major provinces in eastern Turkey...",
        },
        {
          year: "1919",
          imgSrc: "http://manisanokta.com/wp-content/uploads/2014/07/ataturk-20.jpg",
          description:
            "On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun...",
        },
        {
          year: "1920",
          imgSrc: "http://www.volpeypir.com/upload/3732.jpg",
          description:
            "On April 23, 1920, the Grand National Assembly was inaugurated. Mustafa Kemal Pasha was elected...",
        },
        {
          year: "1922",
          imgSrc: "http://sanatkaravani.com/wp-content/uploads/2015/11/ataturk-4.jpg",
          description:
            "At the end of August 1922, the Turkish armies won their ultimate victory...",
        },
        {
          year: "1923",
          imgSrc: "https://turkcetarih.com/wp-content/uploads/2015/05/Atat%C3%BCrkveCumhuriyet.jpg",
          description:
            "In July 1923, the national government signed the Lausanne Treaty with Great Britain...",
        },
        {
          year: "1934",
          imgSrc: "https://pbs.twimg.com/media/Cw69H8pXUAEaSqa.jpg",
          description:
            "The account of Atatürk's fifteen year Presidency is a saga of dramatic modernization...",
        },
        {
          year: "1938",
          imgSrc: "http://www.bik.gov.tr/wp-content/uploads/2016/11/20161110_2_20037273_15856882.jpg?fit=1024%2C863",
          description:
            "On November 10, 1938, following an illness of a few months, the national liberator and the Father of modern Turkey died...",
        },
      ];
      
    return (
        <div>
            {/* <h1>Dummy Component</h1>
            <p>This is a dummy component for testing purposes.</p>

            <Card
  title="Hurry Up Tomorrow"
  subtitle="Ayaan Ahmed"
  content={
    <ul className="list-disc pl-6">
      <li>Wake Me Up - The Weeknd</li>
      <li>Cry For Me - The Weeknd</li>
    </ul>
  }
  variant="romantic"
/>

<Card
  title="Our Favorite Memories"
  content={<p>Beach trip, Valentine's dinner, Road trips, etc.</p>}
  variant="elegant"
/>


<Card
  title="Surprise Date Ideas"
  content={<p>1. Stargazing<br />2. Movie Marathon<br />3. Cooking Together</p>}
  variant="whimsical"
/>

<Card
  title="Surprise Date Ideas"
  content={<p>1. Stargazing<br />2. Movie Marathon<br />3. Cooking Together</p>}
  variant="darker"
/> */}
    <div className="bg-gray-900 min-h-screen">
      <MemoryTimeline items={TIMELINE_DATA} />
    </div>
    <MemoryCard
      year="1881"
      imageUrl="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg"
      backgroundUrl="https://example.com/background.jpg"
      description="He was born in 1881 (probably in the spring) in Salonica..."
    />
        </div>
    );
};

export default TestComponent;