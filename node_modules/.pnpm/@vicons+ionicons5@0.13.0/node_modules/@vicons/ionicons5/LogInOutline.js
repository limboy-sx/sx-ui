'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'LogInOutline',
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
                d: 'M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40',
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
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M288 336l80-80l-80-80'
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
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M80 256h272'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
