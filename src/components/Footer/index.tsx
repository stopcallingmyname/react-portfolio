import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTelegram,
} from '@tabler/icons-react';
import styles from './styles.module.scss';
import {FC} from 'react';

const Footer: FC = () => {
  return (
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.footerc}>
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className={styles['footerc__socials']}>
              <a
                aria-label="telegram"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/stopcallingmyname"
              >
                <IconBrandTelegram width={30} height={30} />
              </a>
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/nikita-khaletsky-dev"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/stopcallingmyname"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
