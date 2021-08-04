/*
 * @Author: hzhren
 * @Date: 2021-08-02 16:37:37
 * @Description: 进入下一个阶段
 * @LastEditors: your name
 * @LastEditTime: 2021-08-04 11:27:21
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    // 'postcss-pxtorem': {
    //   rootValue: 37.5,
    //   propList: ['*'],
    // },
    'postcss-px-to-viewport': {
      // options
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 2,
      minPixelValue: 0.1,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw'
    }
  }
}
