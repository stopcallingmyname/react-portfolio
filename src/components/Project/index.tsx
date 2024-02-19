import styles from './styles.module.scss';

type ProjectProps = {
  gitUrl?: string;
  publicUrl?: string;
};

function Project({gitUrl, publicUrl}: ProjectProps) {
  return (
    <>
      <section className={styles['wrapper']}>
        <img
          src="https://cdn.dribbble.com/users/2547736/screenshots/16309212/media/dfc6571df7ce9adadc6b4d2987558e53.png"
          className={styles.preview}
        ></img>
        <div className={styles['title-wrapper']}>
          <p>Weather Task</p>
        </div>
        <div className={styles.links}>
          {gitUrl && <a href={gitUrl}>Source</a>}
          {publicUrl && <a href={publicUrl}>Live Demo</a>}
          {!gitUrl && !publicUrl && <p>Soon..</p>}
        </div>
      </section>
    </>
  );
}

export default Project;
