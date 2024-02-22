import styles from './styles.module.scss';
import {
  IconBrandGithub,
  IconShare2,
  IconBookmarks,
  // IconBrandAngular,
  // IconBrandNextjs,
  // IconBrandCss3,
} from '@tabler/icons-react';
import {motion} from 'framer-motion';
import {FC} from 'react';

type ProjectPropsType = {
  img?: string;
  title?: string;
  gitUrl?: string;
  publicUrl?: string;
  style?: React.CSSProperties | undefined;
};

const Project: FC<ProjectPropsType> = ({
  img,
  title,
  gitUrl,
  publicUrl,
  style,
}) => {
  return (
    <>
      <motion.section
        className={styles['wrapper']}
        style={style}
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.2, type: 'spring'}}
        whileHover={{scale: 1.05}}
        viewport={{once: true}}
      >
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
      </motion.section>
    </>
  );
};

export default Project;
