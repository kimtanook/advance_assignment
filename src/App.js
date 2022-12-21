/* eslint-disable react-hooks/exhaustive-deps */
import Home from "./components/pages/Home";
import {useDispatch} from "react-redux";
import {getTodos} from "./redux/modules/todoModule";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return <Home />;
}

export default App;
