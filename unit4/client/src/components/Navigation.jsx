import React from 'react';
import '../App.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><h1>Stardew Valley Closet 👗</h1></li>
            </ul>

            <ul>
                <li><a href='/' role='button'>Customize</a></li>
                <li><a href='/presets' role='button'>View Presets</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;