class Component {

	constructor( elem, data ){

		this.element = elem
		this.img = data.img
		this.title = data.title
		this.description = data.description
		this.price = data.price

		this.setDataInElement(this.element)

	}
	
	setDataInElement( elem ){
		elem.getElementsByClassName('pic_holder')[0].getElementsByTagName('img')[0].setAttribute('src', this.img)
		elem.getElementsByClassName('title')[0].innerHTML = this.title
		elem.getElementsByClassName('description')[0].innerHTML = this.description
		elem.getElementsByClassName('price')[0].innerHTML = this.price
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
		description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio, adipisci temporibus quae, explicabo ',
		price: '$15/month'
	},
	desktop:{
		img: './img/laptop.svg',
		title: 'DESKTOP',
		description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio, adipisci temporibus quae, explicabo ',
		price: '$15/month'
	},
	tv:{
		img: './img/monitor.svg',
		title: 'TV',
		description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio, adipisci temporibus quae, explicabo ',
		price: '1$5/month'
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