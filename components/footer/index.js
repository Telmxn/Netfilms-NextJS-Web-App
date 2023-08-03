import Link from "next/link";
import React from "react";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://www.linkedin.com/in/telman-yusifov/" target="_blank">
        Telman Yusifov
      </Link>
    </footer>
  );
};

export default Footer;
