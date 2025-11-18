'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'Push',
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
                d: 'M376 352H272V198.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 198.63V352H136a56.06 56.06 0 0 1-56-56V88a56.06 56.06 0 0 1 56-56h240a56.06 56.06 0 0 1 56 56v208a56.06 56.06 0 0 1-56 56z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M272 464a16 16 0 0 1-32 0V352h32z',
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
