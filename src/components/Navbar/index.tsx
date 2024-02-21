import {useState} from 'react';
import {IconMenu2, IconX} from '@tabler/icons-react';
import styles from './styles.module.scss';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  const navLinks = [
    {name: 'Home', link: '#home'},
    {name: 'About', link: '#about'},
    {name: 'Projects', link: '#projects'},
    {name: 'Contact', link: '#contact'},
  ];

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className={styles.logo}>
          Nikita.dev
        </h3>
        <ul>
          {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
          <li onClick={hamburgerMenu}>
            <IconMenu2
              className={styles['mobile-menu']}
              width={30}
              height={30}
            />
          </li>
        </ul>
      </nav>

      <div
        className={`${styles['mobile-nav']} ${
          hamburger ? styles['open-menu'] : styles['closed-menu']
        }`}
      >
        <span onClick={hamburgerMenu}>
          <IconX width={30} height={30} />
        </span>

        <ul>
          {navLinks.map((item) => (
            <li key={item.name} onClick={hamburgerMenu}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
