//封装函数：把code写到code 和style 标签里面
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
  document.innerHTML = prefix || ''
  let n = 0;
  let id = setInterval(()=>{
    n+=1;
    domCode.innerHTML = Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
    styleTag.innerHTML = prefix+code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n>=code.length){
      window.clearInterval(id)
      fn.call()
      }
  },1)
}


function writeMarkdown(markdown,fn){
  let domPaper = document.querySelector('#paper > .content')
  let n  = 0;
  let id = setInterval(()=>{
      n +=  1
      domPaper.innerHTML = markdown.substring(0,n)
      domPaper.scrollTop = domPaper.scrollHeight
      if(n >= markdown.length){
         window.clearInterval(id)
         fn.call()
      } 
  })
}

var md = `
# 自我介绍
---
 你好，我叫黄锦

  1995年12月出生

  江西xx大学毕业

  自学前端半年 

  希望应聘前端开发工程师岗位
  
# 技能介绍

  熟悉JavaScript、HTML、CSS


# 项目介绍

  1. 简历制作

  2. 轮播图

  3. 网易云音乐移动端

  4. 画板

  # 联系方式

  手机：123456789

  QQ：1234536768

  邮箱：123@gmail.com

`




 

var result = `
/*
* 亲爱的面试官，你好，我是黄同学
* 现在，我将以动画的形式来介绍我自己
* 使用文字太单调了
* 那我就用代码来介绍吧
* 首先，准备一些样式
*/

*{
  transition:all 1s;
  margin:0;
  padding:0;
  font-size:18px;
}

html{
  background: #213F48;
}
#code{
  border:1px solid red;
  padding: 16px;
  margin:16px;
}

/*黑色的代码样式看着真丑，现在，我们让代码高亮*/

.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.punctuation{
  color: #999;
}


/*感觉还少了点什么，我们来点3D效果*/

/* #code{
*  transform: skewY(8deg);
}*/

#code{
  transform:rotate(360deg);
}

/*好啦，不玩啦，我来介绍一下我自己

* 首先，准备一张白纸

*/

#code{
  position: fixed;
  left: 0;
  width: 50%;
  height:100%;
}

#paper{
  position:fixed;
  right: 0;
  width: 50%;
  height:100%;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}

#paper > .content{
  width: 100%;
  height: 100%;
}


`

var result2 = `
 
/*
* 接下来，把markdown变成 HTML
*/

/*
* 接下来，给 HTML 加样式

*/

/*
* 这就是我会动的简历
*/
  `

// var n = 0;
// var id = setInterval(()=>{
//   n+=1;
//  code.innerHTML  = result.substring(0,n)
//  code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
//  styleTag.innerHTML = result.substring(0,n)
//   if(n>=result.length){
//     window.clearInterval(id)
//     fn2()
//     fn3(result)
//   }
// },1)


writeCode('',result,()=>{
  console.log('前一个结束了')
  createPaper(()=>{
    writeCode(result,result2)
    console.log('paper创建好了')
  })
})




function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function fn3(preResult){
/*  var result = `
#paper{
    width:100px;
    height:100px;
    background:red;
  }

  `*/
  var n = 0;
  var id = setInterval(()=>{
    n+=1;
    code.innerHTML = preResult + result.substring(0,n) //重点理解
    code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
    styleTag.innerHTML = preResult + result.substring(0,n)
    if(n>=result.length){
      window.clearInterval(id)
    }
  },1)
}




