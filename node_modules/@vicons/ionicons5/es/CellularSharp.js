import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'CellularSharp',
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
                d: 'M496 432h-96V80h96z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                d: 'M368 432h-96V160h96z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                d: 'M240 432h-96V224h96z',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                d: 'M112 432H16V288h96z',
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
