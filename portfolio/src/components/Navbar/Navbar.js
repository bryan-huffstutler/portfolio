import React from 'react'
import MobileNavMenu from './MobileNavMenu';

import {data} from './navbar-data'
import NavLink from './NavLink'

function Navbar() {
    
    return (
        <div id='navbar'>
            <div className='below-360'>
                <MobileNavMenu />
            </div>

            <div className='above-360'>
                {data.map(x => {
                    return <NavLink divName = {x.name} linkName={x.linkName}/>
                })}
            </div>
            
            
        </div>
    );
}

export default Navbar;