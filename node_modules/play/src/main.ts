import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Icon from "@limboy-ui/components/icon";
import "@limboy-ui/theme-chalk/src/index.scss";
import checkBox from "@limboy-ui/components/checkbox";
import Tree from "@limboy-ui/components/tree";
import Button from "@limboy-ui/components/button";
import Input from "@limboy-ui/components/input";
import Upload from "@limboy-ui/components/upload";
import { FormItem, Form } from "@limboy-ui/components/form";

const plugins = [Icon, Tree, checkBox, Button, Input, FormItem, Form, Upload];

const app = createApp(App);
//注册全局组件可以使用
plugins.forEach((plugin) => app.use(plugin));

app.mount("#app");
