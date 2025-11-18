'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'BookSharp',
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
                d: 'M464 48c-67.61.29-117.87 9.6-154.24 25.69c-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M48 48c67.61.29 117.87 9.6 154.24 25.69c27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48z',
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
