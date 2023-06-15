export const calcDeg = (diffY, diffX) => {
  const rad = Math.atan2(diffY, diffX)
  const deg = rad * (180 / Math.PI)
  return deg.toFixed(2)
}
export const calcDiag = (diffY, diffX) => {
  return Math.sqrt(Math.pow(diffY, 2) + Math.pow(diffX, 2)).toFixed(2)
}
