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

/**
 * 新增字典
 * @param {} data
 */
export function addDicts(data) {
  return request({
    method: 'post',
    url: '/api/personal/dictionarys',
    data,
  });
}

/**
 * 修改字典
 * @param {} data
 */
export function updDicts(data) {
  const { id } = data;
  delete data.id;
  console.log(data);
  return request({
    method: 'PUT',
    url: `/api/personal/dictionarys/${id}`,
    data,
  });
}

/**
 * 删除字典
 * @param {} data
 */
export function delDicts(data) {
  return request({
    method: 'delete',
    url: `/api/personal/dictionarys/${data.id}`,
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
