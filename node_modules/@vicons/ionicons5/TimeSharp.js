'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'TimeSharp',
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
                d: 'M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208c114.86 0 208-93.14 208-208c0-114.69-93.31-208-208-208zm108 240H244a4 4 0 0 1-4-4V116a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v140h92a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4z',
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
