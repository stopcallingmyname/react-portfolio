import styles from './styles.module.scss'
import AboutImage from '../../assets/images/about_img.jpg'
import Spline from '@splinetool/react-spline'

function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <div className={styles['about-content']}>
            <div className={styles['img-side']}>
              {/* <img
                src={AboutImage}
                alt="about"
                className={styles['main-img']}
              ></img> */}
              <div className={styles['main-canvas']}>
                <Spline scene="https://prod.spline.design/vqyzc8BxrlwfpP5p/scene.splinecode" />
              </div>
            </div>
            <div className={styles['text-side']}>
              <h3>About Me</h3>
              <h4>
                Front-End Developer <br /> Based in Minsk, Belarus 📍
              </h4>
              <p>
                Hey, my name is Nikita, and I`m a Front-End Developer. My
                passion is to create and develop a clean UI/UX for my users.
                <br />
                <br />
                My main stack currently is Angular/Nest.js in combination with
                Tailwind CSS and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
