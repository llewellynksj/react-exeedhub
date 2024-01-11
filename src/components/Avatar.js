import styles from "../styles/Avatar.module.css";

// Code from CI's Moments Walkthrough project

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt="profile image"
      />
      {text}
    </span>
  );
};

export default Avatar;
