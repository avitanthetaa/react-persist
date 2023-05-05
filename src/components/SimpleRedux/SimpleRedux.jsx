import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slice/CounterSlice";

const SimpleRedux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>count : {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default SimpleRedux;
