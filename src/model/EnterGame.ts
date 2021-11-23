export default interface EnterGame {
  disabled: boolean; // 是否允许进入游戏
  checkInterval?: number; // 倒数计时器
  countdown: number; // 倒数
  message: string; // 进入游戏按钮提示语
}
