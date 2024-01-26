import IconHand from '../../assets/images/hand.png'
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTelegram,
} from '@tabler/icons-react'
import styles from './styles.module.scss'

function Hero() {
  const skillsIcons = [
    {
      image: 'https://skillicons.dev/icons?i=angular,nest',
      id: 1,
    },
    {
      image: 'https://skillicons.dev/icons?i=js,ts',
      id: 2,
    },
    {
      image: 'https://skillicons.dev/icons?i=html,css',
      id: 3,
    },
    {
      image: 'https://skillicons.dev/icons?i=tailwind,scss',
      id: 4,
    },
  ]

  return (
    <>
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles['hero-main']}>
              <div className={styles['hero-text']}>
                <h1>Front-End Angular Developer</h1>
                <img src={IconHand} alt="hand-icon" />
                <p>
                  Hi, I`m Nikita Khaletsky. A passionate Front-End Angular
                  Developer based in Minsk, Belarus 📍
                </p>
                <span>
                  <a
                    aria-label="telegram"
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/stopcallingmyname"
                  >
                    <IconBrandTelegram width={32} height={32} />
                  </a>
                  <a
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/nikita-khaletsky-dev"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/stopcallingmyname"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className={styles['hero-img']}></div>
            </div>
            <div className={styles.skills}>
              <p>Tech Stack</p>
              <div className={styles.logos}>
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.image} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
