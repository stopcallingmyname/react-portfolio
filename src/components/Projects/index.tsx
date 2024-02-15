import styles from "./styles.module.scss";
import {IconPuzzleFilled} from "@tabler/icons-react";

function Projects() {
  return (
    <>
      <section className={styles.projects} id="projects">
        {/* <div className={styles.container}>
          <h2 className={styles['new-projects']}>New Projects coming soon..</h2>
        </div> */}

        <div className={styles.container}>
          <div className={styles["projects-content"]}>
            <p>Portfolio</p>
            <h3>
              Each project is a unique piece of development{" "}
              <IconPuzzleFilled style={{rotate: "16deg"}} />
            </h3>
          </div>

          <div className={styles["bento-wrapper"]}>
            <div className={styles["bento-top"]}>
              <div className={styles["tab-1"]}>1</div>
              <div className={styles["tab-2"]}>2</div>
              <div className={styles["tab-3"]}>3</div>
            </div>
            <div className={styles["bento-bottom"]}>
              <div className={styles["tab-1"]}>1</div>
              <div className={styles["tab-2"]}>2</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
