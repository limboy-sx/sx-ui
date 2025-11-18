'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'GolfOutline',
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
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M256 400V32l176 80l-176 80'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336z',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
