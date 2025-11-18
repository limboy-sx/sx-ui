'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'PlaySkipBackCircleSharp',
  render: function render(_ctx, _cache) {
    return (
      (0, vue_1.openBlock)(),
      (0, vue_1.createElementBlock)(
        'svg',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48S48 141.31 48 256zm128-80h32v69l128-77.53v176.9L208 267v69h-32z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
