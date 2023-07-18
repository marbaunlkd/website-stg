import {
  WHITE,
  GRAY_DARK,
  GRAY_LIGHT,
  GRAY,
  GREEN,
  PURPLE,
  LG,
  MD,
  SM,
} from '../../../constants'

import abstartups from '../../../../../assets/img/partners/12.svg'
import acecortex from '../../../../../assets/img/partners/14.svg'
import abvcap from '../../../../../assets/img/partners/13.svg'

export const positionNodes = {
  'gray-0': {
    top: 7.74,
    left: 20.59,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-1': {
    top: 196.68,
    left: 132.94,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-2': {
    top: 128.57,
    left: 291.26,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-3': {
    top: 221.49,
    left: 310.13,
    size: MD,
    background: GRAY_LIGHT,
  },
  'gray-border-0': {
    top: 283.87,
    left: 157.01,
    size: MD,
    background: GRAY_LIGHT,
    border: `1px solid ${GRAY_DARK}`,
  },
  'gray-border-1': {
    top: 97,
    left: 180,
    size: LG,
    background: `url(${abvcap}) no-repeat center, ${GRAY}`,
    backgroundSize: '83.33px 33.33px',
    border: '1px solid black',
    link: '#',
  },
  'white-1': {
    top: 0,
    left: 64,
    size: LG,
    background: `url(${abstartups}) no-repeat center, ${WHITE}`,
    backgroundSize: '98.33px 15px',
    link: '#',
  },
  'white-2': {
    top: 174,
    left: 29,
    size: LG,
    background: `url(${acecortex}) no-repeat center, ${WHITE}`,
    backgroundSize: '93.33px 48.33px',
    link: '#',
  },
  'small-0': {
    top: 107.45,
    left: 76.65,
    size: SM,
    background: GREEN,
  },
  'small-1': {
    top: 22.97,
    left: 221.47,
    size: SM,
    background: PURPLE,
  },
  'small-2': {
    top: 261.68,
    left: 239.35,
    size: SM,
    background: PURPLE,
  },
  'hidden-0': {
    top: 78.78,
    left: 161.54,
    size: MD,
  },
  'hidden-1': {
    top: 293.63,
    left: 320 - MD,
    size: MD,
  },
  'hidden-2': {
    top: 93.305,
    left: 320 - MD,
    size: MD,
  },
  'hidden-3': {
    top: 28.31,
    left: 320 - MD,
    size: MD,
  },
  'hidden-4': {
    top: 118.23,
    left: 320 - MD,
    size: MD,
  },
  'hidden-5': {
    top: 142.36,
    left: 320 - MD,
    size: MD,
  },
}
