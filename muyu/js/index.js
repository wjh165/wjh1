
loading()
function loading(){
	let i = 0
	let timer = setInterval(()=>{
		if(i>100){
			page1()
			clearInterval(timer)
			return
		}
		document.querySelector('.loading p').innerHTML = i+'%'
		i++
	},20)
}

function page1(){
	document.querySelector('.loading').style.display = 'none'
	document.querySelector('.page1').style.display = 'block'
	document.querySelector('.start').onclick = function(){
		document.querySelector('.page1').style.display = 'none'
		document.querySelector('.page2').style.display = 'block'
	}
}

// let timer = 0
// let my = document.querySelector('.mfish')
let count = 0
let flag = false
page2()
function page2(){
	let mfish = document.querySelectorAll('.mfish')
	let hanmmer = document.querySelectorAll('.hanmmer')
	let gongde = document.querySelectorAll('.gongde')
	let counts = document.querySelector('.count')
	let m = document.querySelectorAll('.m')
	let count = 0
	m.forEach((v,i)=>{
		v.index = i
		mfish[i].timer = 0
		v.addEventListener('click',function(){
			gongde[this.index].innerHTML = '功德+100'
			gongde[this.index].style.color = 'white'
			let crit = Math.round(Math.random()*4)
			if(crit == 3){
				count += 500
				gongde[this.index].innerHTML = '暴击+500'
				gongde[this.index].style.color = 'red'
			}else{
				count+=100
			}
			
			counts.innerHTML = '功德:' + count
			ismyu(mfish[this.index])
		
			mfish[this.index].animate([
				{transform: 'scale(1)'},
				{transform: 'scale(1.1)'},
				{transform: 'scale(1)'}
			],{
				duration:500
			})
			
			hanmmer[this.index].animate({
				transform:['rotate(0deg)','rotate(-18deg)','rotate(0deg)']
			},{
				duration:200
			})
			
			gongde[this.index].animate({
				transform: ['translateY(0vh)','translateY(-10vh)'],
				opacity:[0,1,0]
			},{
				duration:500
			})
			
		})
	})
}

//判断木鱼点击次数
function ismyu(my){
	my.timer++
	if(my.timer == 10){
		my.src = './img/p3/myu1.png'
	}else if(my.timer == 20){
		my.src = './img/p3/myu2.png'
	}else if(my.timer == 30){
		my.src = './img/p3/myu3.png'
	}else if(my.timer == 40){
		my.src = './img/p3/myu4.png'
	}else if(my.timer == 50){
		my.src = './img/p3/p3.gif'
		my.style.display = 'none'
		document.querySelector('.over').style.display = 'block'
		document.querySelector('.gif').style.display = 'block'
		count = 0
		flag = true
		setTimeout(()=>{
			my.src = ''
			my.style.display = 'none'
			document.querySelector('.over').style.display = 'none'
			document.querySelector('.gif').style.display = 'none'
			
		},1000)
	}
	// console.log(my.timer);
}

