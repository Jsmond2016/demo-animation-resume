




var md = `
# 黄同学的简历

## 自我介绍

---

  ### 你好，我叫xxx , 1995年12月出生

  ### 江西xx大学 软件工程毕业

  ### 自学前端半年 

  ### 希望应聘前端开发工程师岗位

  
  
## 技能介绍

---

  ### 熟悉JavaScript、HTML、CSS




## 项目介绍

---

  ### 1. [简历制作]()

  ### 2. [轮播图]()

  ### 3. [网易云音乐移动端]()

  ### 4. [画板]()



## 联系方式

---

  ### QQ：3058xxxxx

  <br>

  ### 手机：159xxxxxxxx

  <br>

  ### 邮箱：jsmond2016@gmail.com

  <br>

  ### 学习博客： [个人博客]()
  <br>
  
  ### Github: [Github](https://github.com/Jsmond2016)



## 联系方式

---

  ### QQ：30xxxxxxx

  <br>

  ### 手机：15912345678

  <br>

  ### 邮箱：jsmond2016@gmail.com

  <br>

  ### 学习博客： [个人博客]()
  <br>
  
  ### Github: [Github](https://github.com/Jsmond2016)




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
  box-sizing:border-box;
}



html{
  background: #eeeeee;
}
#code{
  border:1px solid black;
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


/*感觉还少了点什么，我们加点呼吸效果*/



#code{
  border-radius: 2px;
  animation: breath 0.5s infinite alternate-reverse;
}



/*
*  好啦，不玩啦，我来介绍一下我自己
*  首先，准备一张白纸
*/

#code-wrapper{
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
  padding: 16px;
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




#paper hr{
  margin: 15px 0;
}

#paper h1{
  text-align: center;
}

#paper h2{
  margin:10px 0;
}



  `


var result3 = `
/*
* 这就是我会动的简历,感谢您的观看！
*/
`


writeCode('',result,()=>{
  console.log('前一个结束了')
  createPaper(()=>{
    writeCode(result,result2,()=>{
      writeMarkdown(md,()=>{
        writeCode(result+result2,result3,()=>{
          converMarkdownToHTML(()=>{
            console.log('markdown转换完成!')
          })
        })
      })
    })
    console.log('paper创建好了')
  })
})







  //封装函数：把code写到code 和style 标签里面
function writeCode(prefix,code,fn){
  let domCode = document.querySelector('#code')
  document.innerHTML = prefix || ''
  let n = 0;
  let id = setInterval(()=>{
    n+=1;
    domCode.innerHTML = Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
    styleTag.innerHTML = prefix+code.substring(0,n)
    domCode.scrollTop = 100000
    if(n>=code.length){
      window.clearInterval(id)
      fn && fn.call()
      }
  },10)
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
         fn && fn.call()
      } 
  })
}



function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function converMarkdownToHTML(fn){
  var div = document.createElement('div')
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)

  let  markdownContainer = document.querySelector('#paper>.content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

