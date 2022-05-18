import {GiHamburgerMenu} from 'react-icons/gi'
import React, {useState} from 'react'
import NavLink from './NavLink';
import {data} from './navbar-data'
function MobileNavMenu(props) {
    const [open, setOpen] = useState(false)

    function toggle () {
        setOpen(prev => !open)
    }
    return ( 
        <div>
            <GiHamburgerMenu size='2em' onClick={toggle}/>
            {open ? 
            <div>
                {data.map(x => {
                    return <NavLink divName = {x.name} linkName={x.linkName}/>
                })}
            </div> : "closed"}
        </div>
    );
}

export default MobileNavMenu;