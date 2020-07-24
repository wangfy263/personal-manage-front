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

export function findTargetByPK(params) {
  const { id } = params;
  return request({
    method: 'get',
    url: `/api/personal/targets/${id}`,
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

/**
 * 新增计划
 * @param {*} data
 */
export function addPlan(data) {
  return request({
    method: 'post',
    url: '/api/personal/plans',
    data,
  });
}
/**
 * 计划详情
 * @param {*} params
 */
export function findPlanByPK(params) {
  const { id } = params;
  return request({
    method: 'get',
    url: `/api/personal/plans/${id}`,
  });
}

/**
 * 更新task状态
 * @param {*}} data
 */
export function updateTask(data) {
  const { id } = data;
  delete data.id;
  return request({
    method: 'PUT',
    url: `/api/personal/tasks/${id}`,
    data,
  });
}
