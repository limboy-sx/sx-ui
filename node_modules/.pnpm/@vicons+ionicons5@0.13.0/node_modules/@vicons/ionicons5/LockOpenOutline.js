'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'LockOpenOutline',
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
                d: 'M336 112a80 80 0 0 0-160 0v96',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'rect',
              {
                x: '96',
                y: '208',
                width: '320',
                height: '272',
                rx: '48',
                ry: '48',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
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
