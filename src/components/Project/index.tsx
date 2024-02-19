import styles from './styles.module.scss';
import {LinkPreview} from '@dhaiwat10/react-link-preview';

type ProjectProps = {
  gitUrl?: string;
  publicUrl?: string;
};

function Project({gitUrl, publicUrl}: ProjectProps) {
  return (
    <>
      <section className={styles['wrapper']}>
        <div className={styles.links}>
          {gitUrl && <a href={gitUrl}>Source</a>}
          {publicUrl && <a href={publicUrl}>Live Demo</a>}
          {!gitUrl && !publicUrl && <p>Soon..</p>}
          <LinkPreview
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            width={'400px'}
          />
          {/* <a href={gitUrl}>Source</a>
          <a href={publicUrl}>Live Demo</a> */}
        </div>
      </section>
    </>
  );
}

export default Project;
