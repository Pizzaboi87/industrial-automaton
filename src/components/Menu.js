import React from 'react'

const Menu = (props) => {
    return (
        <li><a href={props.menu.href} className="nav-link">{props.menu.txt}</a></li>
    )
}

export default Menu;