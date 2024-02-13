import React from 'react';
import { IconMapSearch, IconMail } from '@tabler/icons-react'
import styles from './styles.module.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Terminal from '../Terminal'

function Contact() {
  const refForm = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (refForm.current) {
      emailjs.sendForm(
        'service_v666rfp4f',
        'template_loje2qn',
        refForm.current,
        'PZwPScpMV104TnYvQ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload();
        },
        () => {
          alert('Failed to send the message')
        }
      )
    }
  }

  return (
    <>
      <section className={styles.contact} id="contact">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
              <p>contact</p>
              <h3>Don`t be shy! Hit me up! 👇</h3>

              <Terminal ref={refForm} onSubmit={sendEmail} />

              
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
  );
}

export default Contact;
