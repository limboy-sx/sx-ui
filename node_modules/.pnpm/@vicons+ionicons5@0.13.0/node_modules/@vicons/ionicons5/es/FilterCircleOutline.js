import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'FilterCircleOutline',
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
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-miterlimit': '10',
                d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M144 208h224'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M176 272h160'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                d: 'M224 336h64'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
