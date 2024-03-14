import{h as n}from"./app.44bb4c6a.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 align="center"> TypeScript </h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><ul><li>\u53EA\u662FJavaScript\u7684\u8D85\u96C6\u3002</li><li>\u4EFB\u4F55\u4E00\u79CDJavaScript\u73AF\u5883\u90FD\u652F\u6301TypeScript\u3002</li><li>\u529F\u80FD\u66F4\u52A0\u5F3A\u5927\u3002</li><li>\u751F\u6001\u66F4\u52A0\u5065\u5168\uFF0C\u5B8C\u5584\u3002</li></ul><h2 id="\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> \u5FEB\u901F\u4E0A\u624B</h2><h3 id="\u521B\u5EFA\u4E00\u4E2Atypescript\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2Atypescript\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2AtypeScript\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> init --yes
<span class="token operator">&gt;</span> <span class="token function">yarn</span> <span class="token function">add</span> typescript --dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u300Cts\u300D\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u300Cts\u300D\u6587\u4EF6" aria-hidden="true">#</a> \u6784\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u300Cts\u300D\u6587\u4EF6</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">hello</span> <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello , </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">hello</span><span class="token punctuation">(</span><span class="token string">&quot;typeScript&quot;</span><span class="token punctuation">)</span> <span class="token comment">// hello , typeScript</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><h3 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">yarn</span> tsc --init
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F1A\u4EA7\u751F\u4E00\u4E2A \u300Ctsconfig.json\u300D\u6587\u4EF6</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Visit https://aka.ms/tsconfig.json to read more about this file */</span>

    <span class="token comment">/* Basic Options */</span>
    <span class="token comment">// &quot;incremental&quot;: true,                         /* Enable incremental compilation */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                                <span class="token comment">/* Specify ECMAScript target version: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39;, &#39;ES2020&#39;, &#39;ES2021&#39;, or &#39;ESNEXT&#39;. */</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>                           <span class="token comment">/* Specify module code generation: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, &#39;es2020&#39;, or &#39;ESNext&#39;. */</span>
    <span class="token comment">// &quot;lib&quot;: [],                                   /* Specify library files to be included in the compilation. */</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                             /* Allow javascript files to be compiled. */</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                             /* Report errors in .js files. */</span>
    <span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                           /* Specify JSX code generation: &#39;preserve&#39;, &#39;react-native&#39;, &#39;react&#39;, &#39;react-jsx&#39; or &#39;react-jsxdev&#39;. */</span>
    <span class="token comment">// &quot;declaration&quot;: true,                         /* Generates corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                      /* Generates a sourcemap for each corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token comment">// &quot;sourceMap&quot;: true,                           /* Generates corresponding &#39;.map&#39; file. */</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./&quot;,                             /* Concatenate and emit output to single file. */</span>
    <span class="token comment">// &quot;outDir&quot;: &quot;./&quot;,                              /* Redirect output structure to the directory. */</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */</span>
    <span class="token comment">// &quot;composite&quot;: true,                           /* Enable project compilation */</span>
    <span class="token comment">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;,                     /* Specify file to store incremental compilation information */</span>
    <span class="token comment">// &quot;removeComments&quot;: true,                      /* Do not emit comments to output. */</span>
    <span class="token comment">// &quot;noEmit&quot;: true,                              /* Do not emit outputs. */</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                       /* Import emit helpers from &#39;tslib&#39;. */</span>
    <span class="token comment">// &quot;downlevelIteration&quot;: true,                  /* Provide full support for iterables in &#39;for-of&#39;, spread, and destructuring when targeting &#39;ES5&#39; or &#39;ES3&#39;. */</span>
    <span class="token comment">// &quot;isolatedModules&quot;: true,                     /* Transpile each file as a separate module (similar to &#39;ts.transpileModule&#39;). */</span>

    <span class="token comment">/* Strict Type-Checking Options */</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                                 <span class="token comment">/* Enable all strict type-checking options. */</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: true,                       /* Raise error on expressions and declarations with an implied &#39;any&#39; type. */</span>
    <span class="token comment">// &quot;strictNullChecks&quot;: true,                    /* Enable strict null checks. */</span>
    <span class="token comment">// &quot;strictFunctionTypes&quot;: true,                 /* Enable strict checking of function types. */</span>
    <span class="token comment">// &quot;strictBindCallApply&quot;: true,                 /* Enable strict &#39;bind&#39;, &#39;call&#39;, and &#39;apply&#39; methods on functions. */</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: true,        /* Enable strict checking of property initialization in classes. */</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: true,                      /* Raise error on &#39;this&#39; expressions with an implied &#39;any&#39; type. */</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: true,                        /* Parse in strict mode and emit &quot;use strict&quot; for each source file. */</span>

    <span class="token comment">/* Additional Checks */</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                      /* Report errors on unused locals. */</span>
    <span class="token comment">// &quot;noUnusedParameters&quot;: true,                  /* Report errors on unused parameters. */</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,                   /* Report error when not all code paths in function return a value. */</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,          /* Report errors for fallthrough cases in switch statement. */</span>
    <span class="token comment">// &quot;noUncheckedIndexedAccess&quot;: true,            /* Include &#39;undefined&#39; in index signature results */</span>
    <span class="token comment">// &quot;noImplicitOverride&quot;: true,                  /* Ensure overriding members in derived classes are marked with an &#39;override&#39; modifier. */</span>
    <span class="token comment">// &quot;noPropertyAccessFromIndexSignature&quot;: true,  /* Require undeclared properties from index signatures to use element accesses. */</span>

    <span class="token comment">/* Module Resolution Options */</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,                  /* Specify module resolution strategy: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6). */</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                             /* Base directory to resolve non-absolute module names. */</span>
    <span class="token comment">// &quot;paths&quot;: {},                                 /* A series of entries which re-map imports to lookup locations relative to the &#39;baseUrl&#39;. */</span>
    <span class="token comment">// &quot;rootDirs&quot;: [],                              /* List of root folders whose combined content represents the structure of the project at runtime. */</span>
    <span class="token comment">// &quot;typeRoots&quot;: [],                             /* List of folders to include type definitions from. */</span>
    <span class="token comment">// &quot;types&quot;: [],                                 /* Type declaration files to be included in compilation. */</span>
    <span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,        /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                        <span class="token comment">/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies &#39;allowSyntheticDefaultImports&#39;. */</span>
    <span class="token comment">// &quot;preserveSymlinks&quot;: true,                    /* Do not resolve the real path of symlinks. */</span>
    <span class="token comment">// &quot;allowUmdGlobalAccess&quot;: true,                /* Allow accessing UMD globals from modules. */</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                            /* Specify the location where debugger should locate TypeScript files instead of source locations. */</span>
    <span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                               /* Specify the location where debugger should locate map files instead of generated locations. */</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,                     /* Emit a single file with source maps instead of having a separate file. */</span>
    <span class="token comment">// &quot;inlineSources&quot;: true,                       /* Emit the source alongside the sourcemaps within a single file; requires &#39;--inlineSourceMap&#39; or &#39;--sourceMap&#39; to be set. */</span>

    <span class="token comment">/* Experimental Options */</span>
    <span class="token comment">// &quot;experimentalDecorators&quot;: true,              /* Enables experimental support for ES7 decorators. */</span>
    <span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,               /* Enables experimental support for emitting type metadata for decorators. */</span>

    <span class="token comment">/* Advanced Options */</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                           <span class="token comment">/* Skip type checking of declaration files. */</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>        <span class="token comment">/* Disallow inconsistently-cased references to the same file. */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="\u7C7B\u578B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u8BF4\u660E" aria-hidden="true">#</a> \u7C7B\u578B\u8BF4\u660E</h2><h3 id="\u57FA\u7840\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7C7B\u578B" aria-hidden="true">#</a> \u57FA\u7840\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * \u539F\u59CB\u7C7B\u578B
 * \u5728typeScript\u4E2D\u53EF\u4EE5\u4E3Anull
 */</span>

<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;INet&quot;</span>

<span class="token keyword">const</span> b<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">const</span> c<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> d<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token doc-comment comment">/**
 * \u65B0\u589E\u7C7B\u578B
 */</span>

<span class="token keyword">const</span> e<span class="token operator">:</span><span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token keyword">const</span> f<span class="token operator">:</span><span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">const</span> g<span class="token operator">:</span><span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token keyword">const</span> h<span class="token operator">:</span><span class="token builtin">symbol</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u4F5C\u7528\u57DF</h3><blockquote><p><strong>\u8FD9\u6837\u5C31\u4E0D\u4F1A\u4EA7\u751F\u53D8\u91CF\u540D\u51B2\u7A81\u7684\u95EE\u9898\u3002</strong></p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">123</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">123</span>

<span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3><blockquote><p><strong>\u8868\u793A\u7684\u662F\u5168\u90E8\u7C7B\u578B\u3002</strong></p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token function-variable function">object</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> b<span class="token operator">:</span><span class="token punctuation">{</span>one<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>two<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>one<span class="token operator">:</span><span class="token number">123</span><span class="token punctuation">,</span>two<span class="token operator">:</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> b<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5143\u7956\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5143\u7956\u7C7B\u578B" aria-hidden="true">#</a> \u5143\u7956\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//\u5143\u7956\u7C7B\u578B</span>

<span class="token comment">//\u521B\u5EFA\u4E00\u4E2A\u5143\u7956\u5BF9\u8C61</span>
<span class="token keyword">const</span> a<span class="token operator">:</span><span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span><span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//\u83B7\u53D6\u5143\u7956\u5BF9\u8C61</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> c <span class="token operator">=</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="\u679A\u4E3E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B\u578B" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//\u679A\u4E3E\u7C7B\u578B,\u679A\u4E3E\u4F1A\u6C61\u67D3\u7F16\u8BD1\u4E4B\u540E\u4EE3\u7801\u3002\u53D8\u6210\u4E00\u4E2A\u53CC\u5411\u7684\u952E\u503C\u5BF9\u5BF9\u8C61\u3002</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u5BF9\u8C61\u6A21\u62DF\u679A\u4E3E
 */</span>
<span class="token keyword">const</span> text_status1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    drafr<span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    Unpublished<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Published<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5728typeScript\u4E2D\u53EF\u4EE5\u4F7F\u7528\u679A\u4E3E\u5BF9\u8C61
 * \u6570\u5B57\u679A\u4E3E
 */</span>
<span class="token keyword">enum</span> text_status2  <span class="token punctuation">{</span>
    drafr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    Unpublished <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
    Published <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B57\u7B26\u4E32\u679A\u4E3E
 */</span>
<span class="token keyword">enum</span> text_status3 <span class="token punctuation">{</span>
    drafr <span class="token operator">=</span> <span class="token string">&#39;drafr&#39;</span><span class="token punctuation">,</span>
    Unpublished <span class="token operator">=</span> <span class="token string">&#39;Unpublished&#39;</span><span class="token punctuation">,</span>
    Published <span class="token operator">=</span> <span class="token string">&#39;Published&#39;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u679A\u4E3E
 */</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;hello INet&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">:</span> <span class="token string">&#39;This is xiaoXunYao typescript learning notes&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// status: text_status1.drafr</span>
    <span class="token comment">// status: text_status2.drafr</span>
    status<span class="token operator">:</span>text_status3<span class="token punctuation">.</span>drafr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="\u51FD\u6570\u7C7B\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B\u7EA6\u675F" aria-hidden="true">#</a> \u51FD\u6570\u7C7B\u578B\u7EA6\u675F</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u51FD\u6570\u58F0\u660E\u4F8B\u5B50</span>

<span class="token doc-comment comment">/**
 * \u7B2C\u4E00\u4E2A\u51FD\u6570\u7C7B\u578B
 * <span class="token keyword">@param</span> <span class="token parameter">a</span> \u53C2\u65701
 * <span class="token keyword">@param</span> <span class="token parameter">b</span> \u53C2\u65702
 * <span class="token keyword">@returns</span> \u8FD4\u56DE\u503C\u4E3Astring\u7C7B\u578B
 */</span>
<span class="token keyword">function</span> <span class="token function">func1</span> <span class="token punctuation">(</span>a <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>b <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;func1&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u4F8B\u5B50</span>

<span class="token keyword">const</span> <span class="token function-variable function">func2</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>a <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>b <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;func2&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="\u4EFB\u610F\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u610F\u7C7B\u578B" aria-hidden="true">#</a> \u4EFB\u610F\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * any \u5728TypeScript\u4E2D\u4E0D\u4F1A\u68C0\u67E5\uFF0C\u5C3D\u91CF\u5C11\u7528
 */</span>

<span class="token keyword">function</span> <span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">&#39;string&#39;</span>

<span class="token keyword">let</span> b<span class="token operator">:</span><span class="token builtin">any</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u9690\u5F0F\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u7C7B\u578B" aria-hidden="true">#</a> \u9690\u5F0F\u7C7B\u578B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//1. \u9996\u5148\u6211\u4EEC\u5B9A\u4E00\u4E2A\u4E00\u4E2A\u53C2\u6570\uFF0C\u4F46\u662F\u4E0D\u76F4\u63A5\u8D4B\u4E88\u5BF9\u5E94\u7684\u7C7B\u578B</span>

<span class="token comment">//\u8FD9\u65F6\u5019\u5DF2\u7ECF\u5C06a\u53D8\u91CF\u8BBE\u7F6E\u4E3Anumber</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">18</span> <span class="token comment">// let a: number</span>

<span class="token comment">//2. \u518D\u5C06a\u7684\u503C\u53D8\u4E3A\u5176\u4ED6\u7C7B\u578B</span>

<span class="token comment">//\u4F1A\u4EA7\u751F\u7C7B\u578B\u9519\u8BEF\u7684\u95EE\u9898</span>
a <span class="token operator">=</span> <span class="token string">&quot;string&quot;</span> <span class="token comment">//Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u7C7B\u578B\u65AD\u8A00" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u65AD\u8A00" aria-hidden="true">#</a> \u7C7B\u578B\u65AD\u8A00</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//1. \u5047\u5B9A\u8FD9\u4E2Anums\u6709\u4E00\u4E2A\u660E\u786E\u7684\u63A5\u53E3</span>

<span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

<span class="token comment">//2. \u627E\u5230\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5927\u4E8E0\u7684\u6570\u5B57</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>i <span class="token operator">=&gt;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">//3. \u65AD\u8A00res\u4E00\u5B9A\u4E3Anumber\u7C7B\u578B</span>

<span class="token keyword">const</span> num1 <span class="token operator">=</span> res <span class="token keyword">as</span> <span class="token builtin">number</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//\u63A5\u53E3\u6700\u4E3B\u8981\u662F\u62E5\u6709\u90A3\u4E9B\u6210\u5458\uFF0C\u5E76\u4E14\u6210\u5458\u7C7B\u578B\u662F\u5982\u4F55\u7684</span>

<span class="token comment">//\u5B9A\u4E49\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">post</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token builtin">string</span>
    body<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4F7F\u7528\u63A5\u53E3</span>
<span class="token keyword">const</span> hello<span class="token operator">:</span>post <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token string">&#39;this is title&#39;</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span><span class="token string">&#39;this is body&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD9\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u8BA9post\u5BF9\u8C61\u4E2D\u62E5\u6709title\u548Cbody\u5C5E\u6027</span>
<span class="token keyword">function</span> <span class="token function">printPost</span><span class="token punctuation">(</span>post<span class="token operator">:</span>post<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EF\u9009\u6210\u5458\u7684\u7279\u6027</span>
<span class="token keyword">interface</span> <span class="token class-name">post1</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token builtin">string</span>
    body<span class="token operator">:</span><span class="token builtin">string</span>
    end<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">//\u6DFB\u52A0?\u5373\u53EF,\u8FD9\u4FBF\u662F\u53EF\u9009\u6210\u5458</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EF\u4EE5\u6709end\u8FD9\u4E2A\u6210\u5458</span>
<span class="token keyword">const</span> demo1<span class="token operator">:</span>post1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
    end<span class="token operator">:</span><span class="token string">&#39;3&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u81EA\u7136\u4E5F\u53EF\u4EE5\u6CA1\u6709end\u8FD9\u4E2A\u6210\u5458</span>
<span class="token keyword">const</span> demo2<span class="token operator">:</span>post1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span>
    body<span class="token operator">:</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u63A5\u53E3\u7684\u53EA\u8BFB\u5C5E\u6027</span>

<span class="token keyword">interface</span> <span class="token class-name">post2</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span><span class="token builtin">string</span>
    body<span class="token operator">:</span><span class="token builtin">string</span>
    <span class="token keyword">readonly</span> end<span class="token operator">:</span><span class="token builtin">string</span> <span class="token comment">//\u5728\u6210\u5458\u7684\u540D\u5B57\u524D\u9762\u4E0D\u5728\u4F7F\u7528readonly\u5173\u952E\u5B57\u5C31\u5B8C\u6210\u4E86\u53EA\u8BFB\u5C5E\u6027\uFF0C\u4E00\u65E6\u8D4B\u503C\u5C31\u4E0D\u53EF\u4FEE\u6539</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u52A8\u6001\u6210\u5458\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">post3</span><span class="token punctuation">{</span>
    <span class="token comment">//key\u662F\u540D\u5B57\uFF0Cstring\u662F\u7C7B\u578B</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h2 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h2><blockquote><p><strong>\u7528\u4E8E\u63CF\u8FF0\u4E00\u7C7B\u5177\u4F53\u4E8B\u7269\u7684\u62BD\u8C61\u7279\u5F81\u3002</strong></p></blockquote><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u7684\u57FA\u7840\u4F7F\u7528</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">Persion</span><span class="token punctuation">{</span>
    name <span class="token operator">:</span> <span class="token builtin">string</span>
    age <span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello , </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u7684\u6210\u5458\u8BBF\u95EE\u4FEE\u9970\u7B26</span>

<span class="token comment">//\u5B9A\u4E49\u4E00\u4E2A\u7C7B</span>
<span class="token keyword">class</span> <span class="token class-name">dog</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> name <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u5C06name\u5C5E\u6027\u53D8\u6210\u5171\u6709\u5C5E\u6027</span>
    <span class="token keyword">private</span> age <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">//\u5C06age\u53D8\u6210\u79C1\u6709\u5C5E\u6027,\u53EA\u80FD\u5728\u5185\u90E8\u8BBF\u95EE</span>
    <span class="token keyword">protected</span> init <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//\u5C06init\u53D8\u6210\u4FDD\u62A4\u5C5E\u6027\uFF0C\u53EA\u80FD\u5728\u5185\u90E8\u8BBF\u95EE</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>init <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>init <span class="token operator">=</span> init
    <span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello , </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u7C7B\u7684\u7EE7\u627F</span>

<span class="token keyword">class</span> <span class="token class-name">cat</span> <span class="token keyword">extends</span> <span class="token class-name">dog</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span> <span class="token punctuation">,</span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">,</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u7C7B\u7684\u53EA\u8BFB\u5C5E\u6027</span>

<span class="token keyword">class</span> <span class="token class-name">persion2</span><span class="token punctuation">{</span>
    <span class="token comment">// \u52A0\u4E0A readonly \u5373\u53EF</span>
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> name <span class="token operator">:</span> <span class="token builtin">string</span> 
    <span class="token keyword">private</span> <span class="token keyword">readonly</span> age <span class="token operator">:</span> <span class="token builtin">number</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>age <span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello , </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h3 id="\u62BD\u8C61\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u62BD\u8C61\u7C7B" aria-hidden="true">#</a> \u62BD\u8C61\u7C7B</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Department name: &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">abstract</span> <span class="token function">printMeeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC5\u987B\u5728\u6D3E\u751F\u7C7B\u4E2D\u5B9E\u73B0</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AccountingDepartment</span> <span class="token keyword">extends</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token string">&#39;Accounting and Auditing&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u6D3E\u751F\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u5FC5\u987B\u8C03\u7528 super()</span>
    <span class="token punctuation">}</span>

    <span class="token function">printMeeting</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The Accounting Department meets each Monday at 10am.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">generateReports</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Generating accounting reports...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B" aria-hidden="true">#</a> \u6CDB\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">//\u4E0D\u4F7F\u7528\u6CDB\u578B</span>
<span class="token keyword">function</span> <span class="token function">identity1</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u4F7F\u7528\u6CDB\u578B</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u7ED3\u5C3E" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5C3E" aria-hidden="true">#</a> \u7ED3\u5C3E</h2><blockquote><p><strong>\u8BE5\u9879\u76EE\u5E76\u4E0D\u662F\u8BA9\u5927\u5BB6\u901A\u8FC7\u8BE5\u9879\u76EE\u76F4\u63A5\u638C\u63E1TypeScript\uFF0C\u8BE5\u9879\u76EE\u4EC5\u4EC5\u53EA\u662F\u4F5C\u4E3A\u4E0D\u6562\u63A5\u89E6TypeScript\u7684\u540C\u5B66\u7684\u4E00\u4EFD\u5C0F\u86CB\u7CD5\u3002\u5982\u679C\u60F3\u5B8C\u5168\u638C\u63E1TypeScript\uFF0C\u53EF\u4EE5\u53BB\u5B98\u7F51\u8FDB\u884C\u6587\u6863\u5B66\u4E60\uFF0C\u6211\u76F8\u4FE1\u5982\u679C\u5B8C\u6210\u4E86\u8BE5\u9879\u76EE\u7684\u6240\u6709\u4EE3\u7801\uFF0C\u5404\u4F4D\u540C\u5B66\u5BF9\u4E8E\u9605\u8BFBTypeScript\u7684\u6587\u6863\u80AF\u5B9A\u662F\u6613\u5982\u53CD\u638C\u3002</strong></p></blockquote>`,48);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
