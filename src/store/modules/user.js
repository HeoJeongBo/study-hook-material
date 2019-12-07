import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const LOGIN_START = "user/LOGIN_START";
const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
const LOGIN_FAILED = "user/LOGIN_FAILED";
const LOGOUT_START = "user/LOGOUT_START";
const LOGOUT_SUCCESS = "user/LOGOUT_SUCCESS";

export const createLoginStart = createAction(LOGIN_START);
export const createLoginSuccess = createAction(LOGIN_SUCCESS);
export const createLoginFailed = createAction(LOGIN_FAILED);

export const createLogoutStart = createAction(LOGOUT_START);
export const createLogoutSuccess = createAction(LOGOUT_SUCCESS);

const initialState = {
  userId: "",
  password: "",
  requesting: false,
  success: false,
  logged: false
};

export default handleActions(
  {
    [LOGIN_START]: (state, action) =>
      produce(state, draft => {
        draft.requesting = true;
      }),
    [LOGIN_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft.userId = action.payload.userId;
        draft.password = action.payload.password;
        draft.requesting = false;
        draft.success = true;
        draft.logged = true;
      }),
    [LOGIN_FAILED]: (state, action) =>
      produce(state, draft => {
        draft = initialState;
      }),
    [LOGOUT_START]: (state, action) =>
      produce(state, draft => {
        draft.requesting = true;
      }),
    [LOGOUT_SUCCESS]: (state, action) =>
      produce(state, draft => {
        draft = initialState;
        draft.succes = true;
      })
  },
  initialState
);
