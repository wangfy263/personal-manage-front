import request from '@/utils/request';

export function querySwots(params) {
  return request({
    method: 'GET',
    url: '/api/personal/methods/swot',
    params,
  });
}

export function querySwotById(params) {
  const { id } = params;
  return request({
    method: 'GET',
    url: `/api/personal/methods/swot/${id}`,
    params,
  });
}

export function addSwot(data) {
  return request({
    method: 'POST',
    url: '/api/personal/methods/swot',
    data,
  });
}

export function updSwot(data) {
  const { id } = data;
  return request({
    method: 'PUT',
    url: `/api/personal/methods/swot/${id}`,
    data,
  });
}

export function delSwot(data) {
  const { id } = data;
  return request({
    method: 'DELETE',
    url: `/api/personal/methods/swot/${id}`,
    data,
  });
}
