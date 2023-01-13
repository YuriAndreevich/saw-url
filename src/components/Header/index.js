import React from 'react'
import './Header.scss'

import logoSVG from 'img/logo.svg'

function Header() {
    return (
        <header><img src={logoSVG} alt='logo' />Saw url!</header>
    )
}

export default Header