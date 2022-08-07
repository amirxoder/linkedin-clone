import { auth, provider, storage } from "../../firebase";
import { SET_LOADING_STATUS, SET_USER, GET_ARTICLES } from "./actionType";
import db from "./../../firebase";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING_STATUS,
    status: status,
  };
};

export const getArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload: payload,
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

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoading(true));

    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`progress${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`progress${progress}%`);
          }
        },
        (error) => console.error(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              data: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comment: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          data: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comment: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
};

export const getArticlesAPI = () => {
  // console.log("get aritcle");
  return (dispatch) => {
    let payload;
    // console.log("get aritcle");
    db.collection("articles")
      .orderBy("actor.data", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(getArticles(payload));
      });
  };
};
