'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'Cafe',
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
                d: 'M432 64H96a16 16 0 0 0-16 16v192a96.11 96.11 0 0 0 96 96h112a96.11 96.11 0 0 0 96-96v-80h18a62.07 62.07 0 0 0 62-62V96a32 32 0 0 0-32-32zm0 66a30 30 0 0 1-30 30h-18V96h48z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M400 400H64a16 16 0 0 0 0 32h336a16 16 0 0 0 0-32z',
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
