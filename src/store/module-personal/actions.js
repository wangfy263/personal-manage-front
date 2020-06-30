import { dictionaries } from '../../services/personal';

export async function getEnums({ commit }) {
  const res = await dictionaries({});
  if (res.retCode === '000000') {
    commit('SET_DICT', res.data);
  }
}
