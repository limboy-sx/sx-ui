import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'AddSharp',
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
                'stroke-linecap': 'square',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M256 112v288'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'square',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                d: 'M400 256H112'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
