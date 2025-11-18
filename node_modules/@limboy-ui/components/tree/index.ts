import { withInstall } from "@limboy-ui/utils/with-install";
import _Tree from "./src/tree.vue";

const Tree = withInstall(_Tree);

export default Tree;

declare module "vue" {
  export interface GlobalComponents {
    STree: typeof Tree;
  }
}
