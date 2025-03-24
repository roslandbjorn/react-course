import React from 'react'

export default function Header({children, headerText="Header"}) {
  return (
    <header style={{display:"flex", flexDirection:"column", border:"1px solid #fff"}}>
        <h2>{headerText}</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Atque nam eum optio perspiciatis quas nostrum neque, fugit nobis, 
            ipsa excepturi ab ullam repudiandae! Quia in voluptate consequuntur, ullam ad minus.
        </p>
        {children}
    </header>
  )
}
