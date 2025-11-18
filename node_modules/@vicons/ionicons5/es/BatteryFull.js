import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
export default defineComponent({
  name: 'BatteryFull',
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
                x: '32',
                y: '144',
                width: '400',
                height: '224',
                rx: '45.7',
                ry: '45.7',
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'square',
                'stroke-miterlimit': '10',
                'stroke-width': '32'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'rect',
              {
                x: '85.69',
                y: '198.93',
                width: '292.63',
                height: '114.14',
                rx: '4',
                ry: '4',
                stroke: 'currentColor',
                'stroke-linecap': 'square',
                'stroke-miterlimit': '10',
                'stroke-width': '32',
                fill: 'currentColor'
              },
              null,
              -1 /* HOISTED */
            ),
            _createElementVNode(
              'path',
              {
                fill: 'none',
                stroke: 'currentColor',
                'stroke-linecap': 'round',
                'stroke-miterlimit': '10',
                'stroke-width': '32',
                d: 'M480 218.67v74.66'
              },
              null,
              -1 /* HOISTED */
            )
          ])
      )
    )
  }
})
