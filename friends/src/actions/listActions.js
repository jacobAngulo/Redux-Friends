import axios from "axios";

export const REQUEST_IN_PROGRESS = "REQUEST_IN_PROGRESS";
export const SUCCESS = "SUCCESS";

export const getData = () => dispatch => {
  dispatch({
    type: REQUEST_IN_PROGRESS
  });
  axios
    .get("http://localhost:5000/api/friends", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: SUCCESS,
        payload: res.data
      });
    })
    .catch(err => console.log("err:", err));
};

export const updateFriend = id => dispatch => {
  console.log(id)
}
