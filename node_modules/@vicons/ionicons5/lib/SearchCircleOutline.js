'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'SearchCircleOutline',
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
                d: 'M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80z',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M232 160a72 72 0 1 0 72 72a72 72 0 0 0-72-72z',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32',
                d: 'M283.64 283.64L336 336'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
