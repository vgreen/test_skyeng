class Component {

	constructor( elem, data ){

		this.element = elem
		this.img = data.img
		this.title = data.title
		this.description = data.description
		this.currency = data.currency
		this.price = data.price
		this.period = data.period

		this.setDataInElement(this.element)

	}
	
	setDataInElement( elem ){
		elem.getElementsByClassName('pic_holder')[0].getElementsByTagName('img')[0].setAttribute('src', this.img)
		elem.getElementsByClassName('title')[0].innerHTML = this.title
		elem.getElementsByClassName('description')[0].innerHTML = this.description
		elem.getElementsByClassName('currency')[0].innerHTML = this.currency
		elem.getElementsByClassName('price_num')[0].innerHTML = this.price
		elem.getElementsByClassName('period')[0].innerHTML = this.period
	}


	showWindow( windowE, shadow, cross ){
		console.log(  windowE, shadow )
		shadow.classList.add('active')
		windowE.classList.add('active')
		this.setDataInElement ( windowE )

		shadow.onclick = () => {
			shadow.classList.remove('active')
			windowE.classList.remove('active')
		}

		cross.onclick = () =>{
			shadow.classList.remove('active')
			windowE.classList.remove('active')
		}
	}

}

let data = {
	mobile:{
		img: './img/device.svg',
		title: 'MOBILE',
		description : 'Get notification about new releases in our mobile app ',
		currency: "$",
		price: '10',
		period: '/month'
	},
	desktop:{
		img: './img/laptop.svg',
		title: 'DESKTOP',
		description : 'Enjoy new epizodes on your laptop in browser with our web service, which supports all the platforms',
		currency: "$",
		price: '15',
		period: '/month'
	},
	tv:{
		img: './img/monitor.svg',
		title: 'TV',
		description : 'Which your favorite series at home on large screen with our TV application',
		currency: "$",
		price: '20',
		period: '/month'
	}
}

window.onload = () => {
	console.log(data['mobile'])
	let app_flag = true
	let elems = []
	for( let item of document.getElementsByClassName('element')){
		elems.push( new Component(item, data[item.getAttribute('key')]))
	}

	elems.forEach((item)=>{
		console.log(item)
		item.element.onclick = () => {
			item.showWindow( document.getElementsByClassName('window')[0] ,document.getElementsByClassName('shadow')[0], document.getElementsByClassName('cross')[0] )
		}
	})
		
	

	console.log(elems)
}