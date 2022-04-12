import React from 'react'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: flex;
  margin: auto;
  padding: 20px;
  background: #eee;
`

function Graphic() {
  const SX = 3000
  const SY = 3600

  const H = 3500
  const D = 100
  const color = '#592720'
  const scale = 10

  let l = H / 1.618 / 2
  let f = (H - 2 * l) / 2 / 2
  let r = D / 2
  const t =
    (-f * D ** 2 + Math.sqrt(8 * f ** 4 * D ** 2 - f ** 2 * D ** 4)) / (4 * f ** 2 - D ** 2)
  const alpha = Math.atan((2 * t) / (f - r))
  const s = r * Math.tan(alpha)

  const X0 = 0
  const X1 = X0 + SX / 2
  const X2 = X0 + SX

  const Y0 = (SY - H) / 2
  const Y1 = Y0 + f
  const Y2 = Y0 + 2 * f + r
  const Y3 = Y0 + 2 * f + 2 * l
  const Y4 = Y0 + H
  const Y5 = Y0 + SY

  const X: { [key: string]: number } = {
    A: X1 - l,
    B: X1 - f,
    C: X1 - r,
    D: X1 + r,
    E: X1 + f,
    F: X1 + l
  }
  const Y: { [key: string]: number } = {
    A: Y0,
    B: Y1 - r,
    C: Y1 + r,
    D: Y2 - r,
    E: Y2 + r,
    F: Y3 - f - t,
    G: Y3 - f + t,
    H: Y3 - f + t + 2 * s,
    K: Y3 - s,
    I: Y3 + s,
    J: Y3 + s + 2 * t,
    L: Y4
  }
  const pp = [
    'CA',
    'DA',
    'DB',
    'EB',
    'EC',
    'DC',
    'DD',
    'FD',
    'FE',
    'DE',
    'DH',
    'EI',
    'EJ',
    'DI',
    'DL',
    'CL',
    'CK',
    'BG',
    'BF',
    'CG',
    'CE',
    'AE',
    'AD',
    'CD',
    'CC',
    'BC',
    'BB',
    'CB',
    'CA'
  ]

  const points = pp.map((p: string) => `${X[p[0]]}, ${Y[p[1]]}`).join(' ')

  console.log(l, f, r, t, s, (alpha / Math.PI) * 180)
  return (
    <svg
      fill="none"
      stroke="currentColor"
      width={Math.trunc(SX / scale)}
      height={Math.trunc(SY / scale)}
      style={{
        margin: 'auto',
        border: '1px solid #ddd',
        background: 'white'
      }}
      viewBox={`0 0 ${SX} ${SY}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline points={points} style={{ fill: color, stroke: color, strokeWidth: 0 }} />
    </svg>
  )
}

export default function App() {
  return (
    <StyledApp>
      <Graphic />
    </StyledApp>
  )
}
