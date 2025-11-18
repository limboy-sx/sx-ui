'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'LaptopOutline',
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
                x: '48',
                y: '96',
                width: '416',
                height: '304',
                rx: '32.14',
                ry: '32.14',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32',
                d: 'M16 416h480',
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
