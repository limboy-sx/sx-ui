import { withInstall } from "@limboy-ui/utils/with-install";
import _Virtul from "./src/virtul.vue";

const Virtul = withInstall(_Virtul);

export default Virtul;

declare module "vue" {
  export interface GlobalComponents {
    ZvirtulList: typeof Virtul;
  }
}
