import * as api from "../api";

//Action Creators = functon that return actions
// Actions are objects that return type and payload
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {}
};
