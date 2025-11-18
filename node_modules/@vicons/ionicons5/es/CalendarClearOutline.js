import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'CalendarClearOutline',
  render: function render(_ctx, _cache) {
    return (
      _openBlock(),
      _createElementBlock(
        'svg',
        _hoisted_1,
        _cache[0] ||
          (_cache[0] = [
            _createElementVNode(
              'rect',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                x: '48',
                y: '80',
                width: '416',
                height: '384',
                rx: '48'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M128 48v32'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M384 48v32'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32',
                'stroke-linecap': 'round',
                d: 'M464 160H48'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
