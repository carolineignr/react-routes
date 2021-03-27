import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" end activeClassName={styles.selected}>Produtos</NavLink>
      <NavLink to="contact" activeClassName={styles.selected}>Contato</NavLink>
    </nav>
  )
}

export default Header;
