import React from "react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Logo from "../../UI/Logo/Logo";
import classes from "./Footer.module.scss";

const footerColumns = [
  {
    id: 1,
    headline: "Who we are",
    links: ["About us"],
  },
  {
    id: 2,
    headline: "Get in Touch",
    links: ["Contact us"],
  },
  {
    id: 3,
    headline: "Content",
    links: ["Submit Photos", "Submit Videos", "Marketing"],
  },
  {
    id: 4,
    headline: "Socials",
    links: ["Youtube", "Facebook", "Snapchat", "Twitter", "Instagram"],
  },
];

const socials = [
  {
    link: "https://www.linkedin.com/company/project-downtown-miami/",
    icon: <FaLinkedin />,
  },
  {
    link: "https://www.instagram.com/pd.miami/?hl=en",
    icon: <FaInstagram />,
  },
];

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <footer className={classes.footer}>
          <div className={classes.footer__newsletter}>
            <h4 className={classes.footer__newsletter__headline}>
              Join us in our mission to make downtown Miami a better place
            </h4>
            <span>Unsubscribe at any time.</span>
            <div className={classes.footer__newsletter__form}>
              <input
                className={classes.input}
                type="email"
                placeholder="Your Email"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className={classes.footer__content}>
            {footerColumns.map(({ id, headline, links }) => (
              <div className={classes.footer__content__col} key={id}>
                <div className={classes.footer__content__col__headline}>
                  {headline}
                </div>
                <ul className={classes.footer__content__col__links}>
                  {links.map((link, index) => (
                    <li key={index + 1}>
                      <a href="/">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={classes.footer__base}>
            <Logo />
            <span className={classes.footer__base__year}>
              Project Downtown Miami&nbsp;&copy;&nbsp;{new Date().getFullYear()}
            </span>
            <ul className={classes.footer__base__socials}>
              {socials.map((icon, index) => (
                <li key={index + 1}>
                  <a target="_blank" href={icon.link}>
                    {icon.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
