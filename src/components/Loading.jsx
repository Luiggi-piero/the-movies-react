import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.spinnerWrap}>
      <div className={styles.spinner}>
        <span>C</span>
        <span>A</span>
        <span>R</span>
        <span>G</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
      </div>
    </div>
  );
}
