import React from 'react';
import './pad.css'
const ButtonTab=props=>{
	const def=props.cls||''
	return (<button className={'padButton '+def} onClick={(evnt)=>{
		document.querySelector('.active').classList.toggle('active')
		document.activeElement.classList.toggle('active')
		console.log(`${props.name} is clicked!`)
		}
	}>
	{props.name}
	</button>)
}
const Pad=props=>(
	<div className={'upperPad'}>
		<a href={'/home'} className={'padHome'}>Home</a>
		<p className={'padHeading'}>{props.name}</p>
		<div className={'tabsContainer'}>
		{props.tabs?props.tabs.map(tabName=>{
		if(tabName===props.tab_default)
			return <ButtonTab name={tabName} key={tabName} cls={'active'}/>
		return <ButtonTab name={tabName} key={tabName}/>
		}):null}
		</div>
	</div>
)
export default Pad