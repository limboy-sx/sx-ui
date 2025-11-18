'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'FilterCircleOutline',
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
                'stroke-width': '32',
                'stroke-miterlimit': '10',
                d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M144 208h224'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M176 272h160'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M224 336h64'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
