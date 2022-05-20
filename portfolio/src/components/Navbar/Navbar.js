import React, { useState } from 'react'
import MobileNavMenu from './MobileNavMenu';
import { GiHamburgerMenu } from 'react-icons/gi'

import { data } from './navbar-data'
import NavLink from './NavLink'

function Navbar() {
    

    let count = 0

    return (
        <div id='navbar'>
            <div className='below-360'>
                <MobileNavMenu />
            </div>

            <div className='above-360'>
                {data.map(x => {
                    count += 1
                    return <NavLink key={count} divName={x.name} linkName={x.linkName} />
                })}
            </div>


        </div>
    );
}

export default Navbar;