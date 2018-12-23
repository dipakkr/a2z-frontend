import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
export default class Modal extends React.Component{
	constructor(props){
		super(props)
		this.el=document.createElement('div')
		const classes=props.styles||''
		this.el.classList.add('modal')
		if(classes!==''){
			classes.forEach(element => {
				this.el.classList.add(element)
			});
		}
		this.close=this.close.bind(this)
	}
	componentDidMount(){
		document.querySelector('#modal').appendChild(this.el)
	}
	componentWillUnmount(){
		document.querySelector('#modal').removeChild(this.el)
	}
	close(event){
		console.log('Closing modal')
		if(this.props.onClose)
			this.props.onClose(event)
		let rem=(!ReactDOM.unmountComponentAtNode(document.getElementById('modal')))||undefined
		console.log(rem)
		if(rem===undefined)
			document.getElementById('modal').removeChild(this.el)
	}
	render(){
	const jsx=(
		<>
		<button className={'modal_close'} onClick={this.close}>
			&times;
		</button>
		{this.props.children}
		</>
	)
	return ReactDOM.createPortal(jsx,this.el)
	}
}