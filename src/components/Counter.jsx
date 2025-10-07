import useStore from '../stores/useStore.js'

function Counter(){

    const count = useStore(state => state.count);
    const increment = useStore(state => state.increment);
    const decrement = useStore(state => state.decrement);
    return(

      <div>
          <h1>カウント：{count}</h1>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
      </div>
    );
}
export default Counter;