import React from 'react'

export default function Header(props) {
    return (
        <>
            <span>
                <h1>Trevor Harkness</h1>
                <h1>Programming</h1>
                <h1>Art</h1>
                <h1>About Me</h1>
                <h1>Resume</h1>
            </span>
            <div>
                {props.children}
            </div>
        </>
    )
}
