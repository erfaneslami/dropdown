import { useEffect, useRef, useState } from 'react';
import styles from './CDropDown.module.scss';

interface CDropDownPropsType {
  options: string[];
  prompt: string;
  searchPlaceholder: string;
  value: number | string | null;
  onChange: (opt: string | number) => void;
}

const CDropDown = (props: CDropDownPropsType) => {
  const [open, setOpen] = useState(false);

  // const selectRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('click', close);
  //   return () => document.removeEventListener('click', close);
  // }, []);

  // const close = (e: any) => {
  //   console.dir([e.target.closest('div'), selectRef.current]);
  //   setOpen(e && e.target === selectRef.current);
  // };

  return (
    <>
      {/* <div
        style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        onClick={() => setOpen(false)}
      ></div> */}
      <div className={styles.dropdown}>
        <div
          className={styles.control}
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className={styles.selectedValue}>
            {props.value ? props.value : props.prompt}
          </div>
          <div className="arrow">arrow</div>
        </div>
        <div className={`${styles.dropBox} ${open && styles.open}`}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder={props.searchPlaceholder}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.line}></div>
          <div className={styles.options}>
            {props.options.map((opt) => (
              <div
                key={opt}
                className={` ${styles.option} ${
                  props.value === opt && styles.selected
                }`}
                onClick={() => {
                  props.onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CDropDown;
