import React, { useState } from 'react'
import MobileNavMenu from './MobileNavMenu';
import { GiHamburgerMenu } from 'react-icons/gi'

import { data } from './navbar-data'
import NavLink from './NavLink'

function Navbar() {


    let count = 0

    return (
        <div id='navbar'>
            <div className='navbar-480'>
                <MobileNavMenu />
            </div>

            <div className='navbar-above-480'>
                    {data.map(x => {
                        count += 1
                        return <NavLink key={count} divName={x.name} linkName={x.linkName} />
                    })}
            </div>


        </div>
    );
}

export default Navbar;