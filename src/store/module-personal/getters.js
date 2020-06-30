import { arrayToMap2 } from '@/utils/common';
/**
 * 通过参数查询对应的
 * @param {*} state
 */
export function enums(state) {
  return function enums1(subtypeCode) {
    let res = [];
    if (subtypeCode) {
      res = state.enums
        .filter(item => item.subtype_code === subtypeCode)
        .map(item => {
          return { value: item.id, label: item.name, code: item.code };
        });
    }
    return res;
  };
}

export function enumsMap(state) {
  return arrayToMap2(state.enums, 'code');
}
