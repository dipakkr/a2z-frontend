import React, {/*{useState, useEffect}*/} from 'react' //will be needing those when fetching from remote server
import './BlogArticle.css'
import {Redirect} from 'react-router-dom'
const Content=props=>{
	if(parseInt(props.match.params.id)>0){ //logic to check valid blog id
		return(
		<>
			<h1 className={'blog-heading'}>
				content to be fetched from server with
				{` Blog id: ${props.match.params.id}`} {/*content to be fetched from server with this blog id */}
			</h1>
			<div className={'post-heading'}>
				<span className={'blog-author'}>
					author&nbsp;<span className={'name'}>{'Prakhar Srivastava'/* to be fetched from backend */}</span>
				</span>
				<time>
					posted on&nbsp;<span>{'Mon Dec 24'}</span>
				</time>
				<span className={'blog-shares'}>
				share on
					<a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={"fab fa-facebook-square"}></i></a>
					<a href={`whatsapp://send?text=${window.location}`}><i className={"fab fa-whatsapp"}></i></a>
					<a href={`https://twitter.com/share?url=${window.location}`}><i className={"fab fa-twitter"}></i></a>
				</span>
			</div>
			<p className={'blog-content'}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et mollis urna. Cras pharetra sapien vitae nulla porta, vitae ultricies lectus tristique. Cras convallis malesuada est, vel mattis nibh tempus eu. Integer interdum euismod est. Fusce eleifend sagittis sem. Nam finibus, risus non porta tincidunt, purus ex varius ligula, at accumsan nibh odio sit amet justo. Quisque feugiat sit amet dolor nec finibus. Integer tortor eros, suscipit condimentum sem quis, dapibus fermentum turpis. Aenean porta est sit amet eros efficitur gravida et et nisl. Praesent porta quam sed urna semper tempor. Maecenas sed neque volutpat, fringilla lectus eu, euismod nibh. In convallis sem a neque facilisis, eu interdum eros aliquet.

Nulla non purus interdum arcu tincidunt faucibus a sit amet enim. Sed eget pellentesque ante, ac porta magna. Sed nec metus ut ex imperdiet hendrerit dapibus suscipit augue. Donec laoreet euismod quam, ac ornare lacus mattis et. Sed vulputate lectus at ex tincidunt, vitae lobortis eros euismod. Quisque malesuada non mauris id finibus. Aenean iaculis ligula non arcu dapibus rutrum. Donec id est imperdiet urna lacinia hendrerit. Vestibulum posuere nisi hendrerit neque malesuada maximus. Nam mollis enim ac molestie tempor. Donec consectetur felis lorem, sit amet ornare est condimentum ac.

Morbi aliquet odio vel ornare elementum. Proin vel malesuada leo, at hendrerit libero. Nunc quis varius sem. Nunc id felis tortor. Pellentesque faucibus, ligula ut tincidunt viverra, dolor sem posuere lorem, quis laoreet turpis nulla id ex. Nunc in felis eget nibh congue commodo. Duis ut nisl condimentum, facilisis diam nec, gravida dolor. Proin sed ipsum vitae diam aliquam gravida. Mauris vel laoreet felis, tristique mattis sem.

Phasellus cursus lorem eget nunc vulputate semper. Sed dictum nisi enim, eget bibendum sem placerat non. Ut tristique ipsum lorem, quis placerat tortor hendrerit sed. Morbi nec diam auctor turpis scelerisque aliquet sit amet a risus. Curabitur lectus orci, pharetra vel est sed, eleifend vehicula risus. Suspendisse in faucibus nibh, ut porttitor velit. Proin pharetra egestas arcu, eu suscipit sem rutrum et.

Etiam est arcu, sollicitudin quis ipsum id, molestie iaculis enim. Etiam magna erat, feugiat eu tristique quis, viverra sit amet orci. Praesent lacinia ut odio vel accumsan. Pellentesque in erat aliquam enim rutrum maximus in et nunc. Donec egestas pellentesque molestie. Sed a euismod sem. Morbi ornare finibus velit, at vehicula mauris sodales venenatis. Sed imperdiet nisi velit, at pulvinar orci sodales nec. Sed eleifend nulla leo, in pretium ipsum aliquam sit amet. Phasellus tincidunt ut sem aliquet dictum. Cras posuere, augue et molestie gravida, tortor nunc mattis dolor, sed pretium mauris felis at est. Donec vehicula felis in leo sollicitudin, sed ullamcorper dui elementum. Nunc ultricies lacus nec justo malesuada, sit amet pellentesque ex eleifend. Curabitur in egestas nisl. Duis sit amet molestie lorem.

Etiam ut justo convallis tortor lacinia pulvinar. Aliquam luctus rutrum metus. Praesent a euismod metus. Maecenas scelerisque rutrum lacinia. Donec lacinia ornare lectus, id cursus dui posuere ut. Donec euismod nibh nunc, pellentesque auctor neque laoreet id. Suspendisse potenti. Nullam quis facilisis eros, nec laoreet dui. Suspendisse potenti. Fusce aliquet massa ac tortor fermentum finibus.
			</p>
		</>
		)
	}
	return <Redirect to={'/lost'} />
}
export default Content