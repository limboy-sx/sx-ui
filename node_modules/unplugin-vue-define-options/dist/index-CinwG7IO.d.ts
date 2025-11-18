import { CodeTransform } from "@vue-macros/common";
import { CallExpression, ObjectExpression, Statement } from "@babel/types";

//#region src/core/utils.d.ts
declare function filterMacro(stmts: Statement[]): CallExpression[];
declare function hasPropsOrEmits(node: ObjectExpression): boolean;
//#endregion
//#region src/core/index.d.ts
declare function transformDefineOptions(code: string, id: string): CodeTransform | undefined;
//#endregion
export { filterMacro, hasPropsOrEmits, transformDefineOptions };