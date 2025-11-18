'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'CalendarClearOutline',
  render: function render(_ctx, _cache) {
    return (
      (0, vue_1.openBlock)(),
      (0, vue_1.createElementBlock)(
        'svg',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            (0, vue_1.createElementVNode)(
              'rect',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                x: '48',
                y: '80',
                width: '416',
                height: '384',
                rx: '48'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M128 48v32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M384 48v32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M464 160H48'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
