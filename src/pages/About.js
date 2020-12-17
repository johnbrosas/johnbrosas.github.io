import React from 'react'

export default function About() {
    return (
        <div className='about__wrapper'>
            <h1>Whoami</h1>
            <p className='about__description'>Hi, I'm a Frontend Developer and Security enthusiast.
                <br/>
                I've written a few writeups regarding web securities at my <span style={{fontWeight: '600'}}>blog page.</span>
                <br/>
                Feel free to take a loot at my most recent projects on my <span style={{fontWeight: '600'}}>work page.</span>
                <br/>
                Also you can stop and say hello at <span style={{fontWeight: '600'}}>johnfiel15@gmail.com</span>
            </p>
        </div>
    )
}
