import { HeaderContainer } from './styles'

import LogoHeader from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoHeader} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={26} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={26} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
