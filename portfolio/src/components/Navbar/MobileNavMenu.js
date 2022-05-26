import React, {useState} from 'react'
import NavLink from './NavLink';
import {data} from './navbar-data'
import { GiHamburgerMenu } from 'react-icons/gi'

function MobileNavMenu(props) {

    const [open, setOpen] = useState(false)

    function toggle () {
        setOpen(prev => !open)
    }
    let count=0
    return ( 
        <div id='mob-nav-menu'>
            <GiHamburgerMenu size='2.3em' onClick={toggle} />
            {open ? 
            <div>
                
                {data.map(x => {
                    count +=1
                    return <NavLink key={count} onClick={toggle} divName = {x.name} linkName={x.linkName}/>
                })}
            </div> : ""}
        </div>
    );
}

export default MobileNavMenu;