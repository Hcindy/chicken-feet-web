const appConst = {
  usernameReg: "^[A-Za-z0-9\u4e00-\u9fa5]{1,8}$",
  gameNameReg: "^[A-Za-z0-9\u4e00-\u9fa5]{1,8}$",
  bonuseNameReg: "^[A-Za-z0-9\u4e00-\u9fa5]{1,8}$",
  bonuseAmountReg: "^[1-9]\\d*$",
  bonuseWorthReg: "-?(0|[1-9]\\d*|[1-9]\\d*\\.\\d{1,2})$"
}

export default appConst
