import React from 'react';

// import {Card} from '@/components/card';
// import MemoryCard from '@/components/memory-card';
import MemoryTimeline from '@/components/memory-timeline';

const TestComponent: React.FC = () => {

      
    return (
        <div>
    <div className="bg-gray-900 min-h-screen">
      <MemoryTimeline />
    </div>
        </div>
    );
};

export default TestComponent;