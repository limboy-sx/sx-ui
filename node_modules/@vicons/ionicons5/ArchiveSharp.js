'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const vue_1 = require('vue')
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
exports.default = (0, vue_1.defineComponent)({
  name: 'ArchiveSharp',
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
                x: '32',
                y: '48',
                width: '448',
                height: '80',
                rx: '12',
                ry: '12',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            (0, vue_1.createElementVNode)(
              'path',
              {
                d: 'M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160zm192 230.63L169.32 304L192 281.32l48 48.05V208h32v121.37l48.07-48.07l22.61 22.64z',
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
