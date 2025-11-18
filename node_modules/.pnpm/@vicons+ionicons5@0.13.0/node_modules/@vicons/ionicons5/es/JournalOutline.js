import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'JournalOutline',
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
                x: '96',
                y: '48',
                width: '320',
                height: '416',
                rx: '48',
                ry: '48',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linejoin': 'round',
                'stroke-width': '32'
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
                'stroke-width': '60',
                d: 'M320 48v416'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
