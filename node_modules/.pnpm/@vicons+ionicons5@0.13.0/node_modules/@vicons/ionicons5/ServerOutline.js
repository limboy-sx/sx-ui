'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'ServerOutline',
  render: function render(_ctx, _cache) {
    return (
      (0, vue_1.openBlock)(),
      (0, vue_1.createElementBlock)(
        'svg',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            (0, vue_1.createElementVNode)(
              'ellipse',
              {
                cx: '256',
                cy: '128',
                rx: '192',
                ry: '80',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M448 214c0 44.18-86 80-192 80S64 258.18 64 214',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M448 300c0 44.18-86 80-192 80S64 344.18 64 300',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
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
