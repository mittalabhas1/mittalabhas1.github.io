import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import styles from './home.module.scss';

const socialIcons = [
  {
    component: <FontAwesomeIcon icon={faLinkedinIn} />,
    url: 'https://www.linkedin.com/in/mittalabhas1/',
  },
  { component: <FontAwesomeIcon icon={faGithub} />, url: 'https://github.com/mittalabhas1/' },
  { component: <FontAwesomeIcon icon={faTwitter} />, url: 'https://twitter.com/abhas_4/' },
  {
    component: <FontAwesomeIcon icon={faEnvelopeOpenText} />,
    url: 'mailto:mittalabhas1@gmail.com',
    target: '_self',
  },
  {
    component: <FontAwesomeIcon icon={faComment} />,
    onClick: () =>
      window.ChatGen &&
      window.ChatGen.startInteraction({ interactionId: 632909 }),
  },
];

const renderSocialIcon = (icon, i) => {
  return (
    <li key={`social-icon-${i}`} onClick={icon.onClick || (() => {})}>
      <a
        className={styles.homeLink}
        href={icon.url}
        target={icon.target || '_blank'}
        rel="noopener noreferrer"
      >
        {icon.component}
      </a>
    </li>
  );
};

export default function Home() {
  // Design Credits: https://codepen.io/Mestika/pen/KVXVWE
  // Flag Credits: https://code.sololearn.com/WrMgz6S4e1Zt/#html
  return (
      <div className={styles.wrapper}>
        <aside className={styles.profileCard}>
          <header>
            <a target="_blank" href="" className={styles.headshot}>
              <img
                src="/abhas.png"
                alt={'headshot'}
                className={styles.hoverZoomLink}
              />
              <div className={styles.flag}>
                <ul className={styles.ashokChakra}>
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                  <li />
                </ul>
              </div>
            </a>

            <h1 className={styles.name}>Abhas Mittal</h1>

            <h2 className={styles.designation}>Full Stack Web Engineer</h2>
          </header>

          <div className={styles.profileBio}>
            <div>
              Creative Senior Software Engineer with 5 years of experience.
              Enthusiastic about developing forward-thinking solutions to
              tomorrow's productivity problems.
            </div>
          </div>

          <ul className={styles.profileSocialLinks}>
            {socialIcons.map(renderSocialIcon)}
          </ul>
        </aside>
    </div>
  );
}
