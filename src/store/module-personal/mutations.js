export function SET_DICT(state, payload) {
  state.enums = payload;
}

export function SET_LOGIN(state, payload) {
  state.isLogin = payload;
}

export function SET_RIGHT_DRAWER_OPEN(state, payload) {
  state.rightDrawerOpen = payload.open;
  state.rightSideFlag = payload.flag;
  state.rightSideOption = payload.option;
}
