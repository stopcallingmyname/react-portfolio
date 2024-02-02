import { IconMapSearch, IconMail } from '@tabler/icons-react'
import styles from './styles.module.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_v666rfp4f',
        'template_loje2qn',
        refForm.current,
        'PZwPScpMV104TnYvQ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message')
        }
      )
  }

  return (
    <>
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <p>contact</p>
              <h3>Don`t be shy! Hit me up! 👇</h3>

              <div className={styles.terminal}>
                <div className={styles['terminal-header']}>
                  <div className={styles['terminal-header-op']}>
                    <span
                      className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--red']}`}
                    ></span>
                    <span
                      className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--yellow']}`}
                    ></span>
                    <span
                      className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--green']}`}
                    ></span>
                  </div>
                  <div className={styles['terminal-header-title']}>
                    root@mail:~/contact
                  </div>
                  <div className={styles['terminal-header-empty']}></div>
                </div>
                <div className={styles['terminal-body']}>
                  <form ref={refForm} onSubmit={sendEmail}>
                    <span className={styles['terminal-body-row']}>
                      <span
                        className={styles['terminal-body-row--arrow']}
                      ></span>
                      <span className={styles['terminal-body-row-result']}>
                        name:
                      </span>
                      <input
                        className={styles['terminal-body-row--input']}
                        required
                        // autoFocus
                        type="text"
                        name="user_name"
                      />
                    </span>
                    <span className={styles['terminal-body-row']}>
                      <span
                        className={styles['terminal-body-row--arrow']}
                      ></span>
                      <span className={styles['terminal-body-row-result']}>
                        email:
                      </span>
                      <input
                        className={styles['terminal-body-row--input']}
                        required
                        type="email"
                        name="user_email"
                      />
                    </span>
                    <span
                      className={styles['terminal-body-row']}
                      // style={{ alignItems: 'flex-start' }}
                    >
                      <span
                        className={styles['terminal-body-row--arrow']}
                      ></span>
                      <span className={styles['terminal-body-row-result']}>
                        message:
                      </span>
                    </span>
                    <span className={styles['terminal-body-row']}>
                      <textarea
                        className={styles['terminal-body-row--input']}
                        required
                        type="text"
                        name="user_message"
                      />
                    </span>
                  </form>
                </div>
              </div>

              <div className={styles['contact-form']}>
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li>
                      <h3>Your Name</h3>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="What`s your name?"
                        required
                      />
                    </li>
                    <li>
                      <h3>Your Email</h3>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="What`s your email?"
                        required
                      />
                    </li>
                    <li>
                      <h3>Your Message</h3>
                      <textarea
                        name="user_message"
                        placeholder="What do you want to say?"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <button type="submit" className={styles['btn-61']}>
                        <span>Send</span>
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div className={styles.icons}>
              <div className={styles['icon-box']}>
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className={styles.info}>
                  <h3>Location</h3>
                  <p>Minsk, Belarus</p>
                </div>
              </div>

              <div className={styles['icon-box']}>
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className={styles.info}>
                  <h3>Mail</h3>
                  <a href="mailto:haletsky.nick@gmail.com">
                    haletsky.nick@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
