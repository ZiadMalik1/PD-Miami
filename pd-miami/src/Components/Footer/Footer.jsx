import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Button from "../../UI/Button/Button";
import Logo from "../../UI/Logo/Logo";
import classes from "./Footer.module.scss";

const footerColumns = [
  {
    id: 1,
    headline: "About us",
    links: [
      "Pricing",
      "Our Story",
      "Testimonials",
      "Investors",
      "Terms of Service",
    ],
  },
  {
    id: 2,
    headline: "Contact us",
    links: ["Contact", "Support", "Destinations", "Careers", "Refund Policy"],
  },
  {
    id: 3,
    headline: "Content",
    links: [
      "Submit Video",
      "Submit Photo",
      "Influencer",
      "Marketing",
      "Privacy Policy",
    ],
  },
  {
    id: 4,
    headline: "Socials",
    links: ["Youtube", "Facebook", "Snapchat", "Twitter", "Instagram"],
  },
];

const socials = [
  <FaYoutube />,
  <FaInstagram />,
  <FaTwitter />,
  <FaSnapchatGhost />,
  <FaFacebook />,
];

const Footer = () => {
  return (
    <>
      <div className={classes.container}>
        <footer className={classes.footer}>
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
                  <a href="/">{icon}</a>
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
