import { arrayToMap2, arrayToMap } from '@/utils/common';

export function isLogin(state) {
  return state.isLogin;
}
export function rightDrawerOpen(state) {
  return state.rightDrawerOpen;
}
export function rightSideFlag(state) {
  return state.rightSideFlag;
}
export function rightSideOption(state) {
  return state.rightSideOption;
}
export function finishOptions(state) {
  return state.finishOptions;
}
export function finishOptionsMap(state) {
  return arrayToMap(state.finishOptions, 'value', 'label');
}
export function levelColors(state) {
  return state.levelColors;
}
/**
 * 通过参数查询对应的
 * @param {*} state
 */
export function enums(state) {
  return function enums1(subtypeCode, isAll) {
    let res = [];
    if (subtypeCode) {
      res = state.enums.filter(item => item.subtype_code === subtypeCode);
      res = isAll
        ? res
        : res.map(item => {
          return { value: item.id, label: item.name, code: item.code };
        });
    }
    return res;
  };
}

export function enumsMap(state) {
  return arrayToMap2(state.enums, 'code');
}

export function enumsMapName(state) {
  return arrayToMap2(state.enums, 'name');
}
