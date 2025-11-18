//block 代码块 element 元素 modifier装饰 state 状态
//z-button
//z-button——element
//z-button——element--disable
//is-checked is——enable

//：class=[bem.b{'{buttton}]

function _bem(
  prefixedName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixedName = `${prefixedName}-${blockSuffix}`;
  }
  if (element) {
    prefixedName = `${prefixedName}__${element}`;
  }
  if (modifier) {
    prefixedName = `${prefixedName}--${modifier}`;
  }
  return prefixedName;
}

export function createBem(prefixedName: string) {
  const b = (blockSuffix: string = "") =>
    _bem(prefixedName, blockSuffix, "", "");
  const e = (element: string = "") =>
    element ? _bem(prefixedName, "", element, "") : "";
  const m = (modifier: string = "") =>
    modifier ? _bem(prefixedName, "", "", modifier) : "";
  const be = (blockSuffix = "", element = "") =>
    blockSuffix && element ? _bem(prefixedName, blockSuffix, element, "") : "";

  const bm = (blockSuffix = "", modifier = "") =>
    blockSuffix && modifier
      ? _bem(prefixedName, blockSuffix, "", modifier)
      : "";

  const em = (element = "", modifier = "") =>
    element && modifier ? _bem(prefixedName, "", element, modifier) : "";

  const bem = (blockSuffix = "", element = "", modifier = "") =>
    blockSuffix && element && modifier
      ? _bem(prefixedName, blockSuffix, element, modifier)
      : "";

  const is = (name: string, state: string | boolean) => {
    return state ? `is-${name}` : "";
  };
  return {
    e,
    m,
    b,
    be,
    bm,
    em,
    is,
    bem,
  };
}

export function createNameSpacedBem(namespace: string) {
  const prefixedName = `s-${namespace}`;
  return createBem(prefixedName);
}

const bem = createNameSpacedBem("icon");

console.log(bem.b("icon"));
console.log(bem.e("element"));
