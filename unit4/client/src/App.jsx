import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ViewPresets from './pages/ViewPresets';
import EditPreset from './pages/EditPreset';
import CreatePreset from './pages/CreatePreset';
import PresetDetails from './pages/PresetDetails';
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <CreatePreset title='Stardew Valley Closet | Customize' />
    },
    {
      path:'/presets',
      element: <ViewPresets title='Stardew Valley Closet | Presets' />
    },
    {
      path: '/presets/:id',
      element: <PresetDetails title='Stardew Valley Closet | View' />
    },
    {
      path: '/edit/:id',
      element: <EditPreset title='Stardew Valley Closet | Edit' />
    }
  ]);

  return (
    <div className='app'>
      <Navigation />
      { element }
    </div>
  );
}

export default App;