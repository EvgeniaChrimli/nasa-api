import styles from "./Loader.module.css";

type Props = {
  text?: string;
};

const Loader = ({ text = "Loading data..." }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.orbit}>
        <div className={styles.asteroid} />
      </div>

      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Loader;
