let txt = document.querySelector('.text')
let str = txt.innerText
let temp = ''
for(let i = 0; i < str.length; i++){
  ////let size = Math.round(Math.random()*5+10)
 // let font = Math.ceil(Math.random()*2)
 let font = 1
 let size = 14
  temp += `<span style="font-size:${size}px;font-family:f${font};">${str[i]}</span>`
  
}
txt.innerHTML = temp
