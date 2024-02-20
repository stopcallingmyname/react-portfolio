import styles from './styles.module.scss';
import {
  IconBrandGithub,
  IconShare2,
  IconBookmarks,
  // IconBrandAngular,
  // IconBrandNextjs,
  // IconBrandCss3,
} from '@tabler/icons-react';

type ProjectProps = {
  img?: string;
  title?: string;
  gitUrl?: string;
  publicUrl?: string;
  style?: React.CSSProperties | undefined;
};

function Project({img, title, gitUrl, publicUrl, style}: ProjectProps) {
  return (
    <>
      <section className={styles['wrapper']} style={style}>
        <img src={img} className={styles.preview}></img>
        <div className={styles['title-wrapper']}>
          <p>{title}</p>
        </div>
        <div className={styles.links}>
          {gitUrl && (
            <div className={styles.link}>
              <a href={gitUrl}>Source</a>
              <div className={styles.icon}>
                <IconBrandGithub />
              </div>
            </div>
          )}

          {publicUrl && (
            <div className={styles.link}>
              <a href={publicUrl}>Live Demo</a>
              <div className={styles.icon}>
                <IconShare2 />
              </div>
            </div>
          )}

          {!gitUrl && !publicUrl && (
            <div className={styles.link} style={{padding: 0}}>
              <p>Soon.. </p>
              <div className={styles.icon}>
                <IconBookmarks />
              </div>
            </div>
          )}
        </div>
        {/* <div className={styles['tech-stack']}>
          <div className={styles['stack-icon']}>
            <IconBrandAngular />
            <p>Angular</p>
          </div>
          <div className={styles['stack-icon']}>
            <IconBrandNextjs />
            <p>Nest</p>
          </div>
          <div className={styles['stack-icon']}>
            <IconBrandCss3 />
            <p>SCSS</p>
          </div>
        </div> */}
      </section>
    </>
  );
}

export default Project;
