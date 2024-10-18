import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import { getEventById } from '../services/LocationsAPI'

const Event = (props) => {

    const date = new Date(props.date);

    const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    });
    
    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate} <br /> </p>

                </div>
            </div>
        </article>
    )
}

export default Event