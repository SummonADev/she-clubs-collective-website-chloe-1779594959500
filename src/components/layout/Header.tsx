import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={clsx(styles.header, scrolled && styles.scrolled)}>
      <div className={clsx('container', styles.inner)}>
        <Link to="/" className={styles.logo} aria-label="She Clubs Collective">
          <img src="/logo.svg" alt="She Clubs Collective" className={styles.logoImg} />
        </Link>

        <nav className={clsx(styles.nav, open && styles.navOpen)}>
          <NavLink to="/" end className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            Home
          </NavLink>
          <a href="/#mission" className={styles.link}>About</a>
          <a href="/#formats" className={styles.link}>What We Do</a>
          <NavLink to="/events" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>
            Events
          </NavLink>
          <a href="/#join" className={styles.cta}>Join</a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
