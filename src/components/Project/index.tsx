import styles from './styles.module.scss';
import {APIResponse, LinkPreview} from '@dhaiwat10/react-link-preview';
import {parse} from 'html-metadata-parser';
type ProjectProps = {
  gitUrl?: string;
  publicUrl?: string;
};
const customFetcher = async (url: string): Promise<APIResponse> => {
  const result = await parse(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  return {
    title: result.og.title ?? null,
    description: result.og.description ?? null,
    image: result.og.image ?? null,
    siteName: result.og.site_name ?? null,
    hostname: result.og.site_name ?? null,
  };
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
            url="https://github.com/dhaiwat10/react-link-preview/blob/HEAD/demo.gif"
            width={'400px'}
            fetcher={customFetcher}
          />
          {/* <a href={gitUrl}>Source</a>
          <a href={publicUrl}>Live Demo</a> */}
        </div>
      </section>
    </>
  );
}

export default Project;
