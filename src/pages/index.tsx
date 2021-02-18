import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <div className={styles.topNavBar}>
        <Link to='/'>Index Page</Link>
        <Link to='/counter'>Counter Page</Link>
      </div>
    </div>
  );
}
