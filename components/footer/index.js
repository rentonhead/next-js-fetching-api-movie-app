import React from "react";
import Link from "next/link";
import {
  FaPlayCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle /> NEXTFLIX
        </Link>
      </div>
      <div className={styles.socialMedia}>
        <Link href="https://facebook.com" className={styles.iconLink}>
          <FaFacebook />
          Facebook
        </Link>
        <Link href="https://instagram.com" className={styles.iconLink}>
          <FaInstagram />
          Instagram
        </Link>
        <Link href="https://twitter.com" className={styles.iconLink}>
          <FaTwitter />
         Twitter
        </Link>
      </div>
      <hr className={styles.divider} />
      <div className={styles.movieCategories}>
        <h4>Movie Categories</h4>
        <ul>
          <li>
            <Link href="/">Action</Link>
          </li>
          <li>
            <Link href="/">Adventure</Link>
          </li>
          <li>
            <Link href="/">Animation</Link>
          </li>
          <li>
            <Link href="/">Comedy</Link>
          </li>
          <li>
            <Link href="/">Crime</Link>
          </li>
        </ul>
      </div>
      <div className={styles.supportSection}>
        <h4>Support</h4>
        <ul>
          <li>
            <Link href="/">My Account</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Watch on TV</Link>
          </li>
          <li>
            <Link href="/">Help Center</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.BottomText}>
        <span>
          Made With ❤️ by&nbsp;
          <Link href="https://www.rentonhead.github.io" target="_blank">
            rentonhead
          </Link>
        </span>
        <span className={styles.AllRights}>
          © {new Date().getFullYear()} All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
