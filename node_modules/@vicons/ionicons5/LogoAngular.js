'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'LogoAngular',
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
                d: 'M213.57 256h84.85l-42.43-89.36L213.57 256z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z',
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
