import styles from './index.less';
import { connect } from 'react-redux';

function Count(props:any) {
  const {el} = props

  const mathActionHandler = (id: number, action:number) => {
    let data = [id, action]
    props.mathAction(data)
  }
  return (
    <div>
      <button onClick={() => mathActionHandler(el.id, -1)}>{'- 1'}</button>
      {el.value}
      <button onClick={() => mathActionHandler(el.id, +1)}>{'+ 1'}</button>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  count: state.Counter.counter
})

const mapStateToDispatch = (dispatch:any) => ({
  mathAction: (payload: {data: any}) => dispatch({type: 'Counter/mathAction', payload}),
})

export default connect(mapStateToProps, mapStateToDispatch)(Count)
