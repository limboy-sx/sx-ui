import { transformDefineOptions } from "./core-C7roV5F3.js";
import { FilterFileType, createFilter, detectVueVersion, getFilterPattern } from "@vue-macros/common";
import { createUnplugin } from "unplugin";

//#region src/index.ts
function resolveOptions(options, framework) {
	const version = options.version || detectVueVersion();
	return {
		include: getFilterPattern([FilterFileType.VUE_SFC_WITH_SETUP, FilterFileType.SETUP_SFC], framework),
		...options,
		version
	};
}
const name = "unplugin-vue-define-options";
const plugin = createUnplugin((userOptions = {}, { framework }) => {
	const options = resolveOptions(userOptions, framework);
	const filter = createFilter(options);
	return {
		name,
		enforce: "pre",
		transformInclude: filter,
		transform: transformDefineOptions
	};
});
var src_default = plugin;

//#endregion
export { src_default };