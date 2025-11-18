import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'FlashOffSharp',
  render: function render(_ctx, _cache) {
    return (
      _openBlock(),
      _createElementBlock(
        'svg',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode(
              'path',
              {
                d: 'M63.998 86.004l21.998-21.998L448 426.01l-21.998 21.998z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                d: 'M80 304h144l-32 192l108.18-129.82l-148.36-148.36L80 304z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                d: 'M432 208H288l32-192l-108.18 129.82l148.36 148.36L432 208z',
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
