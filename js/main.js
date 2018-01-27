

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

好啦，不玩啦，我来介绍一下我自己

首先，准备一张白纸

`

var n = 0;
var id = setInterval(()=>{
  n+=1;
 code.innerHTML  = result.substring(0,n)
 code.innerHTML = Prism.highlight(code.innerHTML,Prism.languages.css)
 styleTag.innerHTML = result.substring(0,n)
  if(n>=result.length){
    window.clearInterval(id)
  }
},1)




