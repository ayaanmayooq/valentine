import React from 'react';

import {Card} from '@/components/card';

const TestComponent: React.FC = () => {
    return (
        <div>
            <h1>Dummy Component</h1>
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
/>

        </div>
    );
};

export default TestComponent;