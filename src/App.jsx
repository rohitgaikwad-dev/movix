import { useEffect } from "react";
import { fetchDatafromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";

const App = () => {
  const dispatch = useDispatch();
  const {url} = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDatafromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (
    <div className="App">
      {url?.total_pages}
    </div>
  );
};

export default App;
