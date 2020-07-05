import request from '@/utils/request';

/**
 * 查询相关枚举值
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function dictionaries(data) {
  return request({
    method: 'get',
    url: '/api/personal/dictionarys',
    data,
  });
}

export function getListExpends(params) {
  return request({
    method: 'get',
    url: '/api/personal/expends',
    params,
  });
}

export function addExpends(data) {
  return request({
    method: 'post',
    url: '/api/personal/expends',
    data,
  });
}
