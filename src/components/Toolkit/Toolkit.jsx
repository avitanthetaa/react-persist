import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./actions/action";
import { getJokesData } from "./actions/action";
import { store } from "./store";

const Toolkit = () => {
  const [jokes, setJokes] = useState([]);
  const persistedState = store.getState();
  // console.log("🚀 ~ Toolkit ~ persistedState:", persistedState);

  const jokesData = useSelector((state) => state?.jokesSlice.data);
  const cricketData = useSelector((state) => state);
  console.log("🚀 ~ Toolkit ~ cricketData:", cricketData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJokesData());
    dispatch(getData());
  }, [dispatch]);

  const getJokes = () => {
    // dispatch(getJokesData());
    setJokes((prevJokes) => [...prevJokes, { joke: jokesData.joke }]);
  };

  return (
    <div>
      <button onClick={getJokes}>get</button>
      {jokes?.map((item, index) => (
        <div key={index}>
          <p>{item.joke}</p>
        </div>
      ))}
    </div>
  );
};

export default Toolkit;
