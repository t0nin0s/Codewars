function maskify(cc) {
  if (cc.length <= 4) return cc;
  const digitToHide = cc.substring(0, cc.length - 4);
  const digitToShow = cc.substring(cc.length - 4);
  const wildCard = "#";
  return wildCard.repeat(digitToHide.length) + digitToShow;
}

module.exports = maskify;
