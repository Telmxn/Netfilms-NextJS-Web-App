import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle />
          NETFILMS
        </Link>
        <nav>
          <ul className={styles.navigationMenu}>
            <li>
              <Link href="/">Movies</Link>
            </li>
            <li>
              <Link href="/">Series</Link>
            </li>
            <li>
              <Link href="/">Kids</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
