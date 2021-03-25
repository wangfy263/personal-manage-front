export default function () {
  return {
    isLogin: false,
    rightDrawerOpen: false,
    rightSideFlag: '',
    rightSideOption: {},
    enums: [],
    finishOptions: [
      { label: '未完成', value: 0 },
      { label: '已完成', value: 1 },
    ],
    levelColors: ['negative', 'secondary', 'accent', 'warning', 'info'],
  };
}
