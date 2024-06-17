import axios from "axios";
const url = "https://api.github.com/users/mralexgray/repos";
export const getRepos = () => async (dispatch) => {
  try {
    dispatch({
      type: "FETCH_LOADING",
      payload: true,
    });
    const data = await axios.get(url);
    dispatch({
      type: "FETCH_SUCCESS",
      payload: data.data,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "FETCH_ERROR",
      payload: error.message,
    });
  }
};
