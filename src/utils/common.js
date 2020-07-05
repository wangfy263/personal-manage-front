const pattern = new RegExp(
  "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
);
export { pattern };

/** 枚举值对象列表，转成枚举值object */
export function arrayToMap(array, kKey, vKey) {
  const arr = array.map(item => {
    const map = {};
    if (kKey && vKey) {
      map[item[kKey]] = item[vKey];
    } else {
      const keys = Object.keys(item);
      map[item[keys[0]]] = item[keys[1]];
    }
    return map;
  });
  return Object.assign(...arr);
}

export function arrayToMap2(array, k) {
  const arr = array.map(item => {
    const map = {};
    map[item[k]] = item;
    return map;
  });
  return Object.assign(...arr);
}

export function uuid() {
  // eslint-disable-next-line
  const S4 = () => {
    // eslint-disable-next-line
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  // eslint-disable-next-line
  const guid = () => {
    return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };
  const mid = guid();
  return mid;
}

export function formatDateStr(dateStr) {
  const str = dateStr;
  if (str.indexOf('-') > -1) {
    return str.substring(0, 10);
  }
  return `${str.substring(0, 4)}-${str.substring(4, 6)}-${str.substring(6, 8)}`;
}

export function formatDateStr2(dateStr) {
  const str = dateStr;
  return `${str.substring(0, 4)}-${str.substring(4, 6)}-${str.substring(6, 8)} ${str.substring(
    8,
    10
  )}:${str.substring(10, 12)}:${str.substring(12, 14)}`;
}

/**
 * 小数加法精度处理
 * @param {加数} a
 * @param {加数} b
 */
export function Add(a, b) {
  const str1 = a.toString();
  const str2 = b.toString();
  let r1 = '';
  let r2 = '';
  let m = '';
  try {
    r1 = str1.split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = str2.split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = 10 ** Math.max(r1, r2);
  return (a * m + b * m) / m;
}

// 交集
export function intersection(arr1, arr2) {
  const arr2Set = new Set(arr2);
  return arr1.filter(item => arr2Set.has(item));
}

// 并集
export function union(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

// 补集 两个数组各自没有的集合
export function complement(arr1, arr2) {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  return [...arr1.filter(item => !arr2Set.has(item)), ...arr2.filter(item => !arr1Set.has(item))];
}
// 差集 数组arr1相对于arr2所没有的
export function diff(arr1, arr2) {
  const arr2Set = new Set(arr2);
  return arr1.filter(item => !arr2Set.has(item));
}

export function getMonthFirstAndEnd() {
  const now = new Date(); // 当前日期
  const nowMonth = now.getMonth(); // 当前月
  const nowYear = now.getFullYear(); // 当前年
  // 本月的开始时间
  const monthStartDate = new Date(nowYear, nowMonth, 1);
  // 本月的结束时间
  const monthEndDate = new Date(nowYear, nowMonth + 1, 0);
  return {
    start: monthStartDate,
    end: monthEndDate,
  };
}
