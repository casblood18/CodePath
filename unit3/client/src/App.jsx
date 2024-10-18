import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationEvents from './pages/LocationEvents';
import Event from './components/Event';
import './App.css';

function App() {
    const element = useRoutes([
        {
            path: '/',
            element: <Locations />
        },
        {
            path: '/pelican-town',
            element: <LocationEvents index={1} />
        },
        {
            path: '/copper-mine',
            element: <LocationEvents index={2} />
        },
        {
            path: '/strawberry-festival',
            element: <LocationEvents index={3} />
        },
        {
            path: '/community-center',
            element: <LocationEvents index={4} />
        },
        {
            path: '/events',
            element: <Event />
        }
    ]);

    return (
        <div className='app'>
            <header className='main-header'>
                <h1>Stardew Valley Community</h1>
                <div className='header-buttons'>
                    <Link to='/' role='button'>Home</Link>
                </div>
            </header>
            <main>
                {element}
            </main>
        </div>
    );
};

export default App;
