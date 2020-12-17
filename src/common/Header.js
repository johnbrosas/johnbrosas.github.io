import React from 'react'

export default function Header() {
    return (
        <>
            <nav>
                <ul className='nav__ul'>
                    <li><a href="#about" className='nav__list'>/home</a></li>
                    <li><a href="#about" className='nav__list'>/about</a></li>
                    <li><a href="#about" className='nav__list'>/web</a></li>
                    <li><a href="#about" className='nav__list'>/blog</a></li>
                    <li><a href="#about" className='nav__list'>/resume</a></li>
                </ul>
            </nav>
        </>
    )
}
