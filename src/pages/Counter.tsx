import styles from './index.less';
import { Link } from 'umi';
import { connect } from 'react-redux';
import Count from '@/pages/Count';

function Counter(props: any) {
  return (
    <div>
      <h1 className={styles.title}>Page Counter</h1>
      <div className={styles.topNavBar}>
        <Link to='/'>Index Page</Link>
        <Link to='/counter'>Counter Page</Link>
      </div>
      <div>
        <button onClick={() => props.addNewCounter()}>Add new</button>
        {props.count.map((el: any) => <Count el={el} />)}
      </div>

    </div>
  );
}

const mapStateToProps = (state: any) => ({
  count: state.Counter.counter,
});

const mapStateToDispatch = (dispatch: any) => ({
  addNewCounter: () => dispatch({ type: 'Counter/addNewCounter' }),
});


export default connect(mapStateToProps, mapStateToDispatch)(Counter);
