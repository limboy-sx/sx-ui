'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'NavigateCircleOutline',
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
                d: 'M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z',
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
