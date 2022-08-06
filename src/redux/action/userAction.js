import { auth, provider } from "../../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        console.log(payload);
      })
      .catch((err) => alert(err.message));
  };
}

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

export const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => console.log(err.message));
  };
};
