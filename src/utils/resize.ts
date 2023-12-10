export function setRem(baseWidth: number, baseHeight: number) {

    const dWidth = document.documentElement.clientWidth
    const dHeight = document.documentElement.clientHeight

    const wRate = dWidth / baseWidth > 1 ? 1 : dWidth / baseWidth
    const hRate = dHeight / baseHeight > 1 ? 1 : dHeight / baseHeight

    const fontSize = wRate < hRate ? wRate * 16 : hRate * 16

    document.documentElement.style.fontSize = `${fontSize.toFixed(3)}px`
}