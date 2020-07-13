import { dictionaries } from '../../services/personal';

export async function getEnums({ commit }) {
  const res = await dictionaries({});
  if (res.retCode === '000000') {
    commit('SET_DICT', res.data);
  }
}

export async function LoginByUserName({ commit }, userinfo) {
  const username = userinfo.username.trim();
  const password = userinfo.password.trim();
  console.log(username);
  console.log(password);
  if (username === 'wangfy' && password === '789123') {
    console.log(123);
    commit('SET_LOGIN', true);
    console.log(567);
    return Promise.resolve(true);
  }
  console.log(234);
  return Promise.reject(false);

  // return new Promise((resolve, reject) => {
  //   loginService
  //     .loginByUsername(username, userinfo.password)
  //     .then(response => {
  //       const data = response.data.data;
  //       commit('SET_TOKEN', data.accessToken);
  //       authService.setToken(data.accessToken);
  //       resolve();
  //     })
  //     .catch(error => {
  //       reject(error);
  //     });
  // });
}
