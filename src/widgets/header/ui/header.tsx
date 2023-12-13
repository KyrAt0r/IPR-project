import './header.scss'
import {NavBar} from 'src/shared/nav-bar/index.ts';

interface HeaderProps {
    logoSrc: string;
    title: string;
}

export const Header = ({logoSrc, title}: HeaderProps) => {
  return (
      <>
          <div className="header">
              <a href="/" className="header__logo-link">
                  <img src={logoSrc} alt="Logo" className="header__logo"/>
              </a>
              <h1 className="header__site-name">{title}</h1>
          </div>
          <NavBar/>
      </>

  )
}
