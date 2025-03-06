import React from 'react';
import EventHandlingDemo from './components/Ex16';
import RenderAndCommitDemo from './components/Ex17';
import SnapshotDemo from './components/Ex18';
import './App.css';

const App = () => {
  return (
    <div>
      <EventHandlingDemo />
      <React.StrictMode>
        <RenderAndCommitDemo />
        <SnapshotDemo />
      </React.StrictMode>
     

    </div>
  );
};

export default App;
