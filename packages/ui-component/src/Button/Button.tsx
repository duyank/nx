import styles from './Button.module.css';
import { FC, PropsWithChildren } from 'react';

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
