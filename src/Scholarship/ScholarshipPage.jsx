import React from 'react'
import Pad from '../components/generics/pad'
/*bg={'https://www.blackboard.com/images/223/z_Awards_2100x600_610680812_tcm223-54735.png'}*/
export default class Scholarship extends React.Component{
	render(){
		return (<Pad name={'Scholarship & Fellowship Programs'} tabs={["Scholarships","Fellowships"]} tab_default={'Scholarships'} />)
	}
}