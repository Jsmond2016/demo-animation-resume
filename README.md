# 会动的简历

## 项目预览

- [戳我](http://strml.net/)

## 思路分析

- 打字机效果：实际上就是使用定时器，没一定的时间打印出一个字母，简单的 Demo，[看我](http://js.jirengu.com/moperideme/1/edit?html,js,console,output)
- 使用到 `substring()` ，使用方法[看我](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 
- 在里面写 CSS 代码并生效
- 在里面写 HTML 代码
- 在里面写 中文

## 遇到问题 

- 回车问题：在 HTML 页面中，所有的连续空格和回车都会合并成一个空格，因此无法对代码进行分行显示
  - 解决办法：使用特殊标签 `<pre>` ，可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。
  - 预览  [Demo](http://js.jirengu.com/moperideme/2/edit)

- 如何实现在页面中打印出的代码的对应效果？
  - 直接使用  js 操作THML 和 CSS
  - 预览 [Demo](http://js.jirengu.com/moperideme/3/edit)

- 中文问题 ：使用你简历写一些中文描述信息的时候，css语法不能解析中文啊，怎么办 ？

  - 写在注释里面
  - 预览  [Demo](http://js.jirengu.com/moperideme/4/edit)

- 让代码显示高亮效果？

  - 方法一：手写替换所有 code  ，然后再写入HTML页面中，举例为：

    ```javascript
    code.innerHTML = code.innerHTML.replace("html",'<span style="color:red;">html</span>')
    styleTag.innerHTML = result.substring(0,n)
    ```

  - 预览 [Demo](http://js.jirengu.com/moperideme/5/edit)

  - 分析：上面方法太烂了，难道要使用正则去分析哪些是代码哪些需要高亮显示吗？显然这种方法太过于累赘，怎么办？使用 库

  - 方法二：使用第三方库 ，谷歌关键词 `js syntax lib`，我使用的是 [prism.js](http://prismjs.com/)

  - 测试：

    - 引入`prism.css`和`prism.js` ，在  `main.js` 中输入如下代码：

      ```javascript
      var code = "var data = 1;";
      var html = Prism.highlight(code, Prism.languages.javascript);
      console.log(html)
      ```

    - 修改对应参数，换成我们的代码， [js代码](https://github.com/Jsmond2016/demo-animation-resume/blob/e08658605db80d3dc6401f73017662443b7786f5/js/main.js)

    - 为了表示我们使用了代码高亮，因此一开始的代码不能高亮，所以要自己写一些样式覆盖代码高亮的样式，然后在还原回来代码高亮的效果。

- 添加炫酷3D效果：使用 `transform:rotate(angle)` 




