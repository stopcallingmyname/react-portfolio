import React, { forwardRef, useEffect, useRef, useState, KeyboardEvent, LegacyRef } from 'react';
import styles from './styles.module.scss';

interface TerminalProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Terminal = forwardRef<HTMLFormElement, TerminalProps>((props, ref) => {
  const [fieldsState, setFieldsState] = useState({
    name: true,
    email: false,
    message: false,
  });

  const arrayOfRefs = useRef([
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLTextAreaElement>(),
  ]);

  useEffect(() => {
    if (fieldsState.email) {
      arrayOfRefs.current[1].current?.focus();
    }
    if (fieldsState.message) {
      arrayOfRefs.current[2].current?.focus();
    }
  }, [fieldsState.email, fieldsState.name, fieldsState.message]);

  const handleKeyPress = (field: string) => (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      const currentValue = target.value.trim();

      if (currentValue) {
        if (field === 'name') {
          setFieldsState((prev) => ({ ...prev, name: false, email: true }));
        }
        if (field === 'email') {
          setFieldsState((prev) => ({ ...prev, email: false, message: true }));
        }
        if (field === 'message') {
          setFieldsState((prev) => ({ ...prev, message: false }));
          (ref as any)?.current.requestSubmit();
        }
      }

      e.preventDefault();
    }
  };

  return (
    <>
      <div className={styles.terminal}>
        {/* Terminal UI code remains unchanged */}
        <div className={styles['terminal-header']}>
          <div className={styles['terminal-header-op']}>
            <span className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--red']}`}></span>
            <span className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--yellow']}`}></span>
            <span className={`${styles['terminal-header-op-icon']} ${styles['terminal-header-op-icon--green']}`}></span>
          </div>
          <div className={styles['terminal-header-title']}>root@mail:~/contact</div>
          <div className={styles['terminal-header-empty']}></div>
        </div>
        <div className={styles['terminal-body']}>
          <form ref={ref} onSubmit={props.onSubmit}>
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
                type='search'
                name="user_name"
                autoComplete="off"
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
                    ref={arrayOfRefs.current[1] as any}
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
                    ref={arrayOfRefs.current[2] as LegacyRef<HTMLTextAreaElement>}
                    disabled={!fieldsState.message}
                    onKeyDown={handleKeyPress('message')}
                    className={styles['terminal-body-row--input']}
                    required
                   
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
  );
});

export default Terminal;
