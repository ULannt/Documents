import{_ as p,r as o,o as i,c,d as s,e as n,a as e,b as t}from"./app-eV3dBgDR.js";const l={},u=s("h2",{id:"配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),n(" 配置")],-1),d=s("h3",{id:"项目配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#项目配置","aria-hidden":"true"},"#"),n(" 项目配置")],-1),r={href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;projectname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mini-app&quot;</span><span class="token punctuation">,</span>            <span class="token comment">// 项目名称</span>
  <span class="token property">&quot;compileType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// 编译类型</span>
  <span class="token property">&quot;miniprogramRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram/&quot;</span><span class="token punctuation">,</span>    <span class="token comment">// 小程序源码目录</span>
  <span class="token property">&quot;srcMiniprogramRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;miniprogram/&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 对应目录下的右键菜单快捷新建页面和组件文件</span>
  <span class="token property">&quot;libVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.4.10&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 基础库版本</span>
  <span class="token property">&quot;setting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;coverView&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                 <span class="token comment">// 使用工具渲染 CoverView</span>
    <span class="token property">&quot;es6&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                       <span class="token comment">// 将 ES6 编译为 ES5</span>
    <span class="token property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 上传代码时样式自动补全</span>
    <span class="token property">&quot;minified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">// 自动压缩脚本文件</span>
    <span class="token property">&quot;enhance&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                   <span class="token comment">// 开启增强编译</span>
    <span class="token property">&quot;showShadowRootInWxmlPanel&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启调试器 WXML 面板展示 shadow-root</span>
    <span class="token property">&quot;packNpmManually&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>           <span class="token comment">// 手动配置构建 npm 的路径</span>
    <span class="token property">&quot;packNpmRelationList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;packageJsonPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// package.json 的路径</span>
        <span class="token property">&quot;miniprogramNpmDistDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./miniprogram&quot;</span> <span class="token comment">// miniprogram_npm 的路径</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;useCompilerPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 插件配置，仅支持 typescript less sass</span>
      <span class="token string">&quot;sass&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;babelSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>         <span class="token comment">// 跳过 Babel 编译的文件或目录</span>
      <span class="token property">&quot;outputPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>     <span class="token comment">// Babel 辅助函数的输出目录，默认为 @babel/runtime</span>
      <span class="token property">&quot;disablePlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editorSetting&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;tabIndent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insertSpaces&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;appid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3>`,2),k={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">/* 页面路径 */</span>
  <span class="token property">&quot;pages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;pages/about/about&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">/* 全局页面窗口 */</span>
  <span class="token property">&quot;window&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Mini App&quot;</span><span class="token punctuation">,</span>       <span class="token comment">// 导航栏标题</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>          <span class="token comment">// 导航栏标题颜色 [black | white]</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 导航栏背景颜色</span>
    <span class="token property">&quot;navigationStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 导航栏样式 [default | custom]</span>
    
    <span class="token property">&quot;enablePullDownRefresh&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>              <span class="token comment">// 开启下拉刷新</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>               <span class="token comment">// 下拉窗口背景颜色</span>
    <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dark&quot;</span>               <span class="token comment">// 下拉 loading 样式 [dark | light]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">/* 底部 Tab */</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#000&quot;</span><span class="token punctuation">,</span>             <span class="token comment">// 文本颜色</span>
    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// 选中时的文本颜色</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#fff&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// 背景颜色</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>                    <span class="token comment">// Tab 列表，最少 2 个，最多 5 个</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/index/index&quot;</span><span class="token punctuation">,</span>         <span class="token comment">// 页面路径</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Home&quot;</span><span class="token punctuation">,</span>                          <span class="token comment">// 文本内容</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/home.png&quot;</span><span class="token punctuation">,</span>           <span class="token comment">// 图片路径 [81px * 81px, size &lt; 40kb]</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/home-s.png&quot;</span>  <span class="token comment">// 选中时的图片路径</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/about/about&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;About&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h3>`,2),b={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>会覆盖 <code>app.json</code> 中相同的配置项。</p><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h2><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p><strong>图片</strong>。默认尺寸为 320px * 240px。</p><ul><li><p><code>mode</code>：图片裁剪模式。</p><ul><li><p><code>scaleToFill</code>：（默认）不保持宽高比，图片会被拉伸到刚好填满容器。</p></li><li><p><code>aspectFit</code>：保持宽高比，完全显示图片。容器可能有空白。</p></li><li><p><code>aspectFill</code>：保持宽高比，不留空白。图片可能完全覆盖或者超出容器。</p></li><li><p><code>widthFix</code>：保持宽高比，宽度不变，高度自适应。</p></li><li><p><code>heightFix</code>：保持宽高比，高度不变，宽度自适应。</p></li></ul></li><li><p><code>show-menu-by-longpress</code>：长按打开菜单（发送给朋友、收藏、保存图片）。</p></li><li><p><code>lazy-load</code>：图片懒加载。</p></li></ul><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h3><p><strong>输入框</strong>。</p><ul><li><p><code>type</code>：键盘类型。</p><ul><li><p><code>text</code>：文本键盘。</p></li><li><p><code>number</code>：数字键盘。</p></li></ul></li><li><p><code>password</code>：密码框。</p></li><li><p><code>bindinput</code>：键盘输入时触发。<code>event.detail = { value, cursor, keyCode }</code></p></li><li><p><code>bindfocus</code>：聚焦时触发。</p></li><li><p><code>bindblur</code>：失焦时触发。</p></li><li><p><code>bindconfirm</code>：点击 “完成” 按钮时触发。</p></li></ul><h3 id="swiper" tabindex="-1"><a class="header-anchor" href="#swiper" aria-hidden="true">#</a> swiper</h3><p><strong>轮播图</strong>。</p><ul><li><p><code>autoplay</code>：是否自动切换。</p></li><li><p><code>interval</code>：自动切换时间间隔。</p></li><li><p><code>circular</code>：是否开启无缝滚动。</p></li><li><p><code>indicator-dots</code>：是否显示面板指示点。</p></li><li><p><code>indicator-color</code>：指示点颜色。</p></li><li><p><code>indicator-active-color</code>：当前指示点颜色。</p></li></ul><h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h3><p><strong>导航</strong>。</p><ul><li><p><code>open-type</code>：跳转方式。</p><ul><li><p><code>navigate</code>：跳转到非 tabbar 页面。保留当前页面，可返回上一页。</p></li><li><p><code>redirect</code>：重定向到非 tabbar 页面。关闭当前页面，不能返回上一页。</p></li><li><p><code>switchTab</code>：切换到 tabbar 页面。</p></li><li><p><code>reLaunch</code>：重定向到任意页面。关闭所有页面，不能返回上一页。</p></li><li><p><code>navigateBack</code>：返回上一页。关闭当前页面。</p></li></ul></li><li><p><code>delta</code>：<code>navigateBack</code> 的回退层数。</p></li></ul><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="事件类型" tabindex="-1"><a class="header-anchor" href="#事件类型" aria-hidden="true">#</a> 事件类型</h3><ul><li><p><code>tap</code>：触摸（点击）事件。</p></li><li><p><code>touchstart</code>：触摸开始。</p></li><li><p><code>touchmove</code>：触摸后移动。</p></li><li><p><code>touchcancel</code>：触摸被打断（来电提醒，弹窗）。</p></li><li><p><code>touchend</code>：触摸结束。</p></li></ul><h3 id="事件冒泡" tabindex="-1"><a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a> 事件冒泡</h3><p>使用 bind 绑定的事件，会触发事件冒泡。如果想阻止事件冒泡，可以使用 catch 来绑定事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">bind:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bubbleFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">catch:</span>tap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>touchFn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义数据" tabindex="-1"><a class="header-anchor" href="#自定义数据" aria-hidden="true">#</a> 自定义数据</h3><p>使用 <code>data-</code> 绑定自定义数据。通过 <code>event.target.dataset</code> 获取。</p><p>或者使用 <code>mark:</code> 传递自定义数据。通过 <code>event.mark</code> 获取（含冒泡元素的 <code>mark</code> 数据）。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li><p><code>event.currentTarget</code>：绑定事件的元素。</p></li><li><p><code>event.target</code>：触发事件的元素。</p></li></ul></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2><h3 id="应用生命周期" tabindex="-1"><a class="header-anchor" href="#应用生命周期" aria-hidden="true">#</a> 应用生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 小程序初始化完成时触发（冷启动）
   */</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序启动、或切入前台时触发
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序切入后台时触发
   */</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 小程序发生脚本错误、或 api 调用失败时触发
   */</span>
  <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 页面加载完成时触发（冷启动）
   */</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面初次渲染完成时触发
   */</span>
  <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面显示、或切入前台时触发
   */</span>
  <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面隐藏、或切入后台时触发
   */</span>
  <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面卸载时触发（重定向跳转）
   */</span>
  <span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面处理函数" tabindex="-1"><a class="header-anchor" href="#页面处理函数" aria-hidden="true">#</a> 页面处理函数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 页面滚动时触发
   */</span>
  <span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 页面尺寸变化时触发
   */</span>
  <span class="token function">onResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用于触发下拉刷新
   */</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用于触发上拉加载
   */</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token doc-comment comment">/**
   * 用户分享时触发
   */</span>
  <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义组件" tabindex="-1"><a class="header-anchor" href="#自定义组件" aria-hidden="true">#</a> 自定义组件</h2><h3 id="基本选项" tabindex="-1"><a class="header-anchor" href="#基本选项" aria-hidden="true">#</a> 基本选项</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 配置项</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 属性</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 组件的数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 组件的方法</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册" aria-hidden="true">#</a> 组件注册</h3><p>在 <code>app.json</code> 中注册就是全局组件；在 <code>pages/*.json</code> 中注册就是局部组件。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;custom-component&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/components/custom-component/custom-component&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据监听器" tabindex="-1"><a class="header-anchor" href="#数据监听器" aria-hidden="true">#</a> 数据监听器</h3><p>使用 setData 改变 data 中的数据时，会触发数据监听器。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">&quot;2024-07-22&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 监听一个数据</span>
    <span class="token function">time</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听多个数据</span>
    <span class="token string">&quot;page.current, page.size&quot;</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 监听所有数据</span>
    <span class="token string">&quot;**&quot;</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3><p>监听事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom-component</span> <span class="token attr-name"><span class="token namespace">bind:</span>update</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateFn<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">updateFn</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>detail <span class="token comment">// 触发事件时携带的额外参数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>触发事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateEmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>args <span class="token comment">/* datail */</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">/* option */</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3><p>组件自身的生命周期。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 组件实例创建完成时触发
     */</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件实例挂载到页面时触发
     */</span>
    <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件实例卸载时触发
     */</span>
    <span class="token function">detached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件在视图层布局完成后触发
     */</span>
    <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件被移动时触发
     */</span>
    <span class="token function">moved</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件所在页面的生命周期。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">pageLifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面显示、或切入前台时触发
     */</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面隐藏、或切入后台时触发
     */</span>
    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 组件所在页面尺寸变化时触发
     */</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="冷启动顺序" tabindex="-1"><a class="header-anchor" href="#冷启动顺序" aria-hidden="true">#</a> 冷启动顺序</h3><p><code>app.onLaunch</code> &gt; <code>app.onShow</code> &gt; <code>component.created</code> &gt; <code>component.attached</code> &gt; <code>page.onLoad</code> &gt; <code>page.onShow</code> &gt; <code>component.ready</code> &gt; <code>page.onReady</code></p><h3 id="behavious" tabindex="-1"><a class="header-anchor" href="#behavious" aria-hidden="true">#</a> Behavious</h3><p>类似 mixin。</p>`,55),g={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<h2 id="小程序分包" tabindex="-1"><a class="header-anchor" href="#小程序分包" aria-hidden="true">#</a> 小程序分包</h2><p>小程序有体积的限制（2M），如果需要让小程序体积更大功能更多，就需要进行分包（20M）。分包只在使用时加载。</p><p>每个分包小程序必须有一个主包，主包中有启动页面、TabBar 页面以及一些公共资源。</p><p>普通分包：将需要分包的文件单独放入一个文件夹，在 <code>app.json</code> 的 subpackages 字段中声明分包结构。</p><p>普通分包可以使用主包中的公共资源，例如发送请求的函数、公共样式。</p><p>独立分包：和普通分包配置一样，需要再添加一个 independent 字段开启独立分包。</p><p>独立分包不能使用主包中的任何内容。</p><h2 id="登录流程" tabindex="-1"><a class="header-anchor" href="#登录流程" aria-hidden="true">#</a> 登录流程</h2><p>首先在 onLaunch 生命周期中进行登录鉴权，如果鉴权失败就跳转到登录页面。通过 <code>wx.login</code> 得到一个临时的授权码 code；然后把这个授权码发送给服务器获取 token；再携带 token 去向服务器请求用户数据。如果用户登录过就会得到用户数据，如果用户没有登录过就会随机生成一个用户名和头像。</p><h2 id="支付流程" tabindex="-1"><a class="header-anchor" href="#支付流程" aria-hidden="true">#</a> 支付流程</h2><p>提交订单，将订单信息（商品数据、收件人信息等）发送给服务器，得到订单号；再将订单号发送给服务器，得到用于支付的参数（时间戳、ID、签名等）；然后调用 <code>wx.requestPayment</code> 传入支付参数，跳转到用户支付的页面；用户支付成功，跳转页面。</p><h2 id="上线流程" tabindex="-1"><a class="header-anchor" href="#上线流程" aria-hidden="true">#</a> 上线流程</h2><p>将代码上传到微信平台；点击提交审核；审核通过就上线了。</p><h2 id="更新流程" tabindex="-1"><a class="header-anchor" href="#更新流程" aria-hidden="true">#</a> 更新流程</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建 updateManager 实例，用于管理更新</span>
    <span class="token keyword">const</span> updateManager <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getUpdateManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token comment">// 监听是否有新版本，如果有的话会主动触发下载</span>
    updateManager<span class="token punctuation">.</span><span class="token function">onUpdateReady</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;更新提示&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&quot;新版本已经准备好，是否重启应用？&quot;</span><span class="token punctuation">,</span>
        <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>confirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 强制小程序重启并使用新版本</span>
            updateManager<span class="token punctuation">.</span><span class="token function">applyUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function f(y,x){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,d,s("p",null,[n("详见 "),s("a",r,[n("设置 / 项目配置文件"),e(a)]),n("。")]),v,s("p",null,[n("详见 "),s("a",k,[n("小程序配置 / 全局配置"),e(a)]),n("。")]),m,s("p",null,[n("详见 "),s("a",b,[n("小程序配置 / 页面配置"),e(a)]),n("。")]),h,s("p",null,[n("详见 "),s("a",g,[n("自定义组件 / behaviors"),e(a)]),n("。")]),q])}const w=p(l,[["render",f],["__file","mini-app.html.vue"]]);export{w as default};
