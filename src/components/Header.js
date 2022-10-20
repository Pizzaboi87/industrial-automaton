import React, { useEffect } from 'react'
import menuOptions from '../data/menuOptions';
import Menu from './Menu';

const Header = () => {

    const menubar = menuOptions.map(menu => {
        return (
            <Menu 
                key={menu.id}
                menu={menu}
                />
        )
    })

    function transAur(){
        let change = document.getElementById("root");
        change.style.fontFamily = "Aurebesh";
      }
    
    function transEng(){
        let change = document.getElementById("root");
        change.style.fontFamily = "Days One";
    }

    useEffect(() => {
        const menuButton = document.getElementById("logo")
        const navsidebar = document.getElementById("navsidebar")
        menuButton.addEventListener('click', function(){
            navsidebar.classList.toggle('menuinactive')
        })
        navsidebar.addEventListener('click', function(){
            navsidebar.classList.toggle('menuinactive')
        })
    }, [])

    return (
        <div className="header">
            <img src='../images/automaton_logo.png' alt='automaton logo' id="logo"/>
            <h1>"MACHINES FOR THE FUTURE"</h1>
            <nav className="navbar">
                <ul>
                    {menubar}
                    <li className="switch" onClick={transEng}>ENG</li>
                    <li className="switch" onClick={transAur}>AUR</li>
			    </ul>
            </nav>
            <nav className="navsidebar menuinactive" id="navsidebar">
                <ul>
                    {menubar}
                    <li className="switch" onClick={transEng}>ENG</li>
                    <li className="switch" onClick={transAur}>AUR</li>
			    </ul>
            </nav>
        </div>
    )
}

export default Header;