import React from 'react'

export default function Title({ text = "Title", classes }) {
    return (
        <h1 className={`title ${classes}`}>{text}</h1>
    )
}
