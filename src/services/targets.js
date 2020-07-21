import request from '@/utils/request';
/**
 * 查找所有的目标列表
 * @param {*} params
 */
export function findAllTargets(params) {
  return request({
    method: 'get',
    url: '/api/personal/targets',
    params,
  });
}
/**
 * 新增目标
 * @param {*} data
 */
export function addTarget(data) {
  return request({
    method: 'post',
    url: '/api/personal/targets',
    data,
  });
}
