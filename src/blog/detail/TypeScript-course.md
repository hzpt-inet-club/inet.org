<h1 align="center">
TypeScript
</h1>

## 介绍

- 只是JavaScript的超集。
- 任何一种JavaScript环境都支持TypeScript。
- 功能更加强大。
- 生态更加健全，完善。

## 快速上手

### 创建一个typeScript项目

```shell
> yarn init --yes
> yarn add typescript --dev
```

### 构建一个简单的「ts」文件

```typescript
const hello = (value: string) => {
    console.log(`hello , ${value}`)
}

hello("typeScript") // hello , typeScript
```

## 配置文件

### 命令

```shell
> yarn tsc --init
```

会产生一个 「tsconfig.json」文件

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                         /* Enable incremental compilation */
    "target": "es5",                                /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */
    "module": "commonjs",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                                   /* Specify library files to be included in the compilation. */
    // "allowJs": true,                             /* Allow javascript files to be compiled. */
    // "checkJs": true,                             /* Report errors in .js files. */
    // "jsx": "preserve",                           /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */
    // "declaration": true,                         /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                      /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                           /* Generates corresponding '.map' file. */
    // "outFile": "./",                             /* Concatenate and emit output to single file. */
    // "outDir": "./",                              /* Redirect output structure to the directory. */
    // "rootDir": "./",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                           /* Enable project compilation */
    // "tsBuildInfoFile": "./",                     /* Specify file to store incremental compilation information */
    // "removeComments": true,                      /* Do not emit comments to output. */
    // "noEmit": true,                              /* Do not emit outputs. */
    // "importHelpers": true,                       /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,                  /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,                     /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                                 /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                       /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                    /* Enable strict null checks. */
    // "strictFunctionTypes": true,                 /* Enable strict checking of function types. */
    // "strictBindCallApply": true,                 /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,        /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                      /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                        /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                      /* Report errors on unused locals. */
    // "noUnusedParameters": true,                  /* Report errors on unused parameters. */
    // "noImplicitReturns": true,                   /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,          /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,            /* Include 'undefined' in index signature results */
    // "noImplicitOverride": true,                  /* Ensure overriding members in derived classes are marked with an 'override' modifier. */
    // "noPropertyAccessFromIndexSignature": true,  /* Require undeclared properties from index signatures to use element accesses. */

    /* Module Resolution Options */
    // "moduleResolution": "node",                  /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                             /* Base directory to resolve non-absolute module names. */
    // "paths": {},                                 /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                             /* List of folders to include type definitions from. */
    // "types": [],                                 /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                        /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,                    /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,                /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                               /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                     /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                       /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true        /* Disallow inconsistently-cased references to the same file. */
  }
}
```

## 类型说明

### 基础类型

```typescript
/**
 * 原始类型
 * 在typeScript中可以为null
 */

const a:string = "INet"

const b:number = 100

const c:boolean = false

const d:boolean = null

/**
 * 新增类型
 */

const e:void = undefined

const f:null = null

const g:undefined = undefined

const h:symbol = Symbol()
```

### 作用域

> **这样就不会产生变量名冲突的问题。**

```typescript
(function () {
    const a = 123
})

const a = 123

export{}
```

### Object

> **表示的是全部类型。**

```typescript
export {}

const a:object = function(){}

const b:{one:number,two:string} = {one:123,two:"123"}
```

### 数组

```typescript
export{}

const a:Array<string> = ['1','2','3']

const b:string[] = ['1','2','3']
```

### 元祖类型

```typescript
export{}

//元祖类型

//创建一个元祖对象
const a:[number,string] = [1,'2']

//获取元祖对象

const b = a[0]

const c = a[1]
```

### 枚举类型

```typescript
export{}

//枚举类型,枚举会污染编译之后代码。变成一个双向的键值对对象。

/**
 * 使用对象模拟枚举
 */
const text_status1 = {
    drafr:0,
    Unpublished: 1,
    Published: 2
}

/**
 * 在typeScript中可以使用枚举对象
 * 数字枚举
 */
enum text_status2  {
    drafr = 0,
    Unpublished = 1,
    Published = 2
}

/**
 * 字符串枚举
 */
enum text_status3 {
    drafr = 'drafr',
    Unpublished = 'Unpublished',
    Published = 'Published'
}

/**
 * 使用枚举
 */
const text = {
    title: 'hello INet',
    content: 'This is xiaoXunYao typescript learning notes',
    // status: text_status1.drafr
    // status: text_status2.drafr
    status:text_status3.drafr
}
```

### 函数类型约束

```typescript
export{}

// 函数声明例子

/**
 * 第一个函数类型
 * @param a 参数1
 * @param b 参数2
 * @returns 返回值为string类型
 */
function func1 (a : number,b : number) : string{
    return "func1"
}

// 函数表达式的例子

const func2 = function (a : number,b : number) : string{
    return 'func2'
}
```

### 任意类型

```typescript
export{}

/**
 * any 在TypeScript中不会检查，尽量少用
 */

function stringify(value:any){
    return JSON.stringify(value)
}

let a:any = 'string'

let b:any = false
```

### 隐式类型

```typescript
export{}

//1. 首先我们定一个一个参数，但是不直接赋予对应的类型

//这时候已经将a变量设置为number
let a = 18 // let a: number

//2. 再将a的值变为其他类型

//会产生类型错误的问题
a = "string" //Type 'string' is not assignable to type 'number'.
```

### 类型断言

```typescript
export{}

//1. 假定这个nums有一个明确的接口

const nums = [1,2,3,4]

//2. 找到数组中第一个大于0的数字

const res = nums.find(i => i > 0)

//3. 断言res一定为number类型

const num1 = res as number
```

## 接口

```typescript
export{}

//接口最主要是拥有那些成员，并且成员类型是如何的

//定义接口
interface post{
    title:string
    body:string
}

//使用接口
const hello:post = {
    title:'this is title',
    body:'this is body'
}

//这时候我们就需要让post对象中拥有title和body属性
function printPost(post:post){
    console.log(post.title)
    console.log(post.body)
}

//可选成员的特性
interface post1{
    title:string
    body:string
    end?:string //添加?即可,这便是可选成员
}

//可以有end这个成员
const demo1:post1 = {
    title:'1',
    body:'2',
    end:'3'
}

//自然也可以没有end这个成员
const demo2:post1 = {
    title:'1',
    body:'2',
}

//接口的只读属性

interface post2{
    title:string
    body:string
    readonly end:string //在成员的名字前面不在使用readonly关键字就完成了只读属性，一旦赋值就不可修改
}

//动态成员接口
interface post3{
    //key是名字，string是类型
    [key:string]:string
}
```

## 类

> **用于描述一类具体事物的抽象特征。**

### 基础用法 

```typescript
export{}

// 类的基础使用

//定义一个类
class Persion{
    name : string
    age : number
    constructor(name : string,age : number){
        this.name = name
        this.age = age
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}

// 类的成员访问修饰符

//定义一个类
class dog{
    public name : string //将name属性变成共有属性
    private age : number //将age变成私有属性,只能在内部访问
    protected init : string //将init变成保护属性，只能在内部访问
    constructor(name : string,age : number,init : string){
        this.name = name
        this.age = age
        this.init = init
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}

// 类的继承

class cat extends dog {
    constructor(name:string , age:number){
        super(name,age,"1");
    }
}

//类的只读属性

class persion2{
    // 加上 readonly 即可
    private readonly name : string 
    private readonly age : number
    constructor(name : string,age : number){
        this.name = name
        this.age = age
    }

    sayHello():void{
        console.log(`hello , ${this.name}`)
    }
}
```

### 抽象类

```typescript
export{}


abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log('Department name: ' + this.name);
    }

    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}
```

## 泛型

```typescript
export{}

//不使用泛型
function identity1(arg: number): number {
    return arg;
}

//使用泛型
function identity2<T>(arg: T): T {
    return arg;
}
```

## 结尾

> **该项目并不是让大家通过该项目直接掌握TypeScript，该项目仅仅只是作为不敢接触TypeScript的同学的一份小蛋糕。如果想完全掌握TypeScript，可以去官网进行文档学习，我相信如果完成了该项目的所有代码，各位同学对于阅读TypeScript的文档肯定是易如反掌。**
 
