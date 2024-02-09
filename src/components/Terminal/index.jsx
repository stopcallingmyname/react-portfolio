import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

const Terminal = forwardRef(function Terminal({ onSubmit }, ref) {
  const [fieldsState, setFieldsState] = useState({
    name: true,
    email: false,
    message: false,
  })

  const arrayOfRefs = useRef([
    React.createRef(null),
    React.createRef(null),
    React.createRef(null),
  ])

  useEffect(() => {
    if (fieldsState.email) {
      arrayOfRefs?.current[1]?.current?.focus()
    }
    if (fieldsState.message) {
      arrayOfRefs?.current[2]?.current?.focus()
    }
  }, [fieldsState.email, fieldsState.name, fieldsState.message])

  const handleKeyPress = (field) => (e) => {
    if (e.key === 'Enter') {
      const currentValue = e.target.value.trim()

      if (currentValue) {
        if (field === 'name') {
          setFieldsState((prev) => ({ ...prev, name: false, email: true }))
        }
        if (field === 'email') {
          setFieldsState((prev) => ({ ...prev, email: false, message: true }))
        }
        if (field === 'message') {
          setFieldsState((prev) => ({ ...prev, message: false }))
          ref?.current?.requestSubmit()
        }
      }

      e.preventDefault()
    }
  }
  return (
    <>
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
          <form ref={ref} onSubmit={onSubmit}>
            <span className={styles['terminal-body-row']}>
              {fieldsState.name && (
                <span className={styles['terminal-body-row--arrow']}></span>
              )}

              <span className={styles['terminal-body-row-result']}>name:</span>

              <input
                disabled={!fieldsState.name}
                onKeyDown={handleKeyPress('name')}
                className={styles['terminal-body-row--input']}
                required
                // autoFocus
                autoComplete="off"
                type="text"
                name="user_name"
              />
            </span>

            {!fieldsState.name && (
              <>
                <span className={styles['terminal-body-row']}>
                  {fieldsState.email && (
                    <span className={styles['terminal-body-row--arrow']}></span>
                  )}

                  <span className={styles['terminal-body-row-result']}>
                    email:
                  </span>

                  <input
                    disabled={!fieldsState.email}
                    ref={arrayOfRefs.current[1]}
                    onKeyDown={handleKeyPress('email')}
                    className={styles['terminal-body-row--input']}
                    required
                    type="email"
                    name="user_email"
                    autoComplete="off"
                  />
                </span>
              </>
            )}
            {!fieldsState.name && !fieldsState.email && (
              <>
                <span className={styles['terminal-body-row']}>
                  {fieldsState.message && (
                    <>
                      <span
                        className={styles['terminal-body-row--arrow']}
                      ></span>
                    </>
                  )}

                  <span className={styles['terminal-body-row-result']}>
                    message:
                  </span>
                </span>
                <span className={styles['terminal-body-row']}>
                  <textarea
                    ref={arrayOfRefs.current[2]}
                    disabled={!fieldsState.message}
                    onKeyDown={handleKeyPress('message')}
                    className={styles['terminal-body-row--input']}
                    required
                    type="text"
                    name="user_message"
                    autoComplete="off"
                  />
                </span>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  )
})
export default Terminal
