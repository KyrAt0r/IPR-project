import {menuItems} from '../../nav-list.ts';
import {NavLink} from 'react-router-dom';

import './nav-bar.scss';

export const NavBar = () => {
	return (
		<>
			<nav className="menu">
				<ul className="menu__list">
					{menuItems.map(item => (
						<li key={item.id} className="menu__item">
							<NavLink
								to={item.link}
								className={({isActive, isPending}) =>
									isPending ? 'menu__link' : isActive ? 'active' : ''
								}
							>
								{item.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};
