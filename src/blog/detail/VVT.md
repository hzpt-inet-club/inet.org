<h1 align="center">Vue.js + TypeScript + vite.js</h1>

> [项目地址](https://github.com/hzpt-inet-club/Vue.js-Vite.js-TypeScript_course)

## 创建项目

### 在vite中创建一个vue项目

```shell
> yarn create vite my-vue-app --template vue
```

### 初始化该项目

```shell
> yarn install
```

### 目录为

```markdown
- 项目名
  - node_modules
  - public
  - src
  - .gitignore
  - index.html
  - package.json
  - vite.config.js
  - yarn.lock
```

### 运行项目

```shell
> yarn dev
```

## 配置项目

### 1. 修改文件名

> **将「main.js」修改成为 「main.ts」**
### 2. 在项目根目录中创建文件

> **创建ts配置文件「tsconfig.json」,并且添加以下的内容**
```json
{
    "compilerOptions": {
      "target": "esnext",
      "module": "esnext",
      // 这样就可以对 `this` 上的数据属性进行更严格的推断
      "strict": true,
      "noImplicitAny": true,
      "noImplicitThis": true,
      "strictNullChecks": true,
      "jsx": "preserve",
      "moduleResolution": "node",
      "baseUrl": ".",
      "paths": {
        "@/*":["src/*"]
      }
    },
    "include":[
        "src/**/*.ts"
        ,"src/**/*.d.ts"
        ,"src/**/*.vue"
    ]
  }
```

### 3. 在src目录下创建文件

> **在『src』目录下创建「shims_vue.d.ts」文件,进行类型推导**
例如

```typescript
// shims_vue.d.ts
declare module '*.css' {
    const classes : {
        [key:string]:string
    }
    export default classes
}
declare module '*.vue' {
    import {defineComponent,FunctionalComponent} from 'vue'
    const component:ReturnType<typeof defineComponent>
}
```

### 4. 修改「vite.config.js」

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': resolve(__dirname,'./src')
    }
  }
})
```

## 基础demo代码

> **通过简单例子感受一下vue3的变化。**
### 简单运用

```vue
<template>
    <div>默认值：{{a.count}}</div>
    <div>{{a.sum}}</div>
    <button @click="add()">按钮</button>
    <div>{{b}}</div>
</template>
<script lang="ts" setup>
import {reactive,computed,ref} from 'vue'
type Result = {
        count:number,
        sum:number
    }
    const a:Result = reactive({
        count:100,
        sum: computed(() => a.count * 2)
    })
    const b = ref(10)
    function add(){
        a.count++;
        b.value++
    }
</script>
```

### 简单的双向绑定

```vue
<template>
    <input type="text" v-model="a">
    <span>{{a}}</span>
</template>
<script lang="ts" setup>
    import {reactive,computed,ref} from 'vue'
    const a = ref("INet")
</script>
```

## 生命周期

你可以通过在生命周期钩子前面加上 “on” 来访问组件的生命周期钩子。

下表包含如何在 [setup ()](https://v3.cn.vuejs.org/guide/composition-api-setup.html) 内部调用生命周期钩子：

| 选项式 API        | Hook inside `setup` |
| ----------------- | ------------------- |
| `beforeCreate`    | Not needed*         |
| `created`         | Not needed*         |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |

## 封装数据请求 Hooks

### 创建文件和文件夹

> 1. 在『src』目录下创建「hooks」文件夹
> 2. 在『hooks』目录下创建「index.ts」和「userApi.ts」文件
### 完成「userApi.ts」

```typescript
export {userApi}
export default userApi
import {Ref, ref} from "vue"
function userApi<T>(url: RequestInfo , options?:RequestInit){
    const response:Ref<T> = ref()
    const request = async () => {
        const res = await fetch(url,options)
        const data = await res.json()
        response.value = data
    }
    return{
        response,
        request
    }
}
export type ApiRequest = () => Promise<void>
export interface UsableApi<T>{
    response:Ref<T | undefined>
    request:ApiRequest
}
```

## 引入组件库

这边使用「Naive UI」举例

### 安装

```shell
> yarn add naive-ui
> yarn add vfonts
```

### 在「main.ts」中配置

```typescript
import { createApp } from 'vue'
import {
    // create naive ui
    create,
    // component
    NButton
} from 'naive-ui'
const naive = create({
    components: [NButton]
})
import App from './App.vue'
createApp(App).use(naive).mount('#app')
```
