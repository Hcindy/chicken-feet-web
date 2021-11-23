import Bonus from "./Bonus"

export default interface Game {
  id: string; // 游戏ID
  name: string; // 游戏名称
  bonuses: Array<Bonus>; // 游戏奖励
  startTime?: number; // 游戏开始时间
  endTime?: number; // 游戏结束时间
}
