import React from 'react'
import About from '../pages/About'

// eslint-disable-next-line 
const inputValue = 
`
     ██╗ ██████╗ ██╗  ██╗███╗   ██╗    ███████╗██╗███████╗██╗         ██████╗ ██████╗  ██████╗ ███████╗ █████╗ ███████╗
     ██║██╔═══██╗██║  ██║████╗  ██║    ██╔════╝██║██╔════╝██║         ██╔══██╗██╔══██╗██╔═══██╗██╔════╝██╔══██╗██╔════╝
     ██║██║   ██║███████║██╔██╗ ██║    █████╗  ██║█████╗  ██║         ██████╔╝██████╔╝██║   ██║███████╗███████║███████╗
██   ██║██║   ██║██╔══██║██║╚██╗██║    ██╔══╝  ██║██╔══╝  ██║         ██╔══██╗██╔══██╗██║   ██║╚════██║██╔══██║╚════██║
╚█████╔╝╚██████╔╝██║  ██║██║ ╚████║    ██║     ██║███████╗███████╗    ██████╔╝██║  ██║╚██████╔╝███████║██║  ██║███████║
╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚══════╝╚══════╝    ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝ `
// eslint-disable-next-line 
export default function Main() {
    return (
        <>
        <div className='main__container container'>
            <div>
                <h1>root@127.0.0.1:~/$ whoami <span className='blink_me horizontal-bar'>|</span></h1>
            </div>
            <img src="/name.png" />
            <div className='name'>root@127.0.0.1:~/home/admin:$ ls -la </div>                                                                         
            <div style={{display: 'flex', justifyContent: 'space-between', width: '25%', marginTop: '15px'}}>
                <div>
                    
                    <p className='white-text'>Find_Me_Online</p>
                    <p><a href="https://facebook.com/r00t.ssh" 
                        className='link-text green-text'
                        target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p><a href="https://www.linkedin.com/in/john-fiel-brosas-17123167/" 
                        className='link-text green-text'
                        target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p><a href="https://github.com/johnbrosas" 
                        className='link-text green-text'
                        target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p><a href="https://codepen.io/johnfiel15/pens/" 
                        className='link-text green-text'
                        target="_blank" rel="noopener noreferrer">Codepen</a></p>
                    <p className='white-text'>README.md</p>
                    <p className='white-text'>package.json</p>
                </div>
                <div>
                    <p className='white-text'>-rw-rw-r--</p>
                    <p>-drwxrwxr-x</p>
                    <p>-drwxrwxr-x</p>
                    <p>-drwxrwxr-x</p>
                    <p>-drwxrwxr-x</p>
                    <p className='white-text'>-rw-rw-r--</p>
                    <p className='white-text'>-rw-rw-r--</p>
                </div>
                <div>
                    <p className='white-text'>127.0.0.1</p>
                    <p>69.171.250.35</p>
                    <p>13.107.42.14</p>
                    <p>52.74.223.119</p>
                    <p>104.26.14.244</p>
                    <p className='white-text'>-n/a-</p>
                    <p className='white-text'>-n/a-</p>
                </div>
            </div>  
        </div>
        <div className='section' id='about'>
            <About />
        </div>
        </>
    )
}
