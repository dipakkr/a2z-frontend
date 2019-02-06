import React from 'react'
import profileImage  from './../../assets/images/man.png'
import './Author.css'

const Author = (props) =>{
    return(
        // <div className="author-container">
        //     <div className="image-holder">
        //         <img src={profileImage} alt="profile-image"/>
        //     </div>
        //     <div className="author-des">
        //         <div id="autor-name">
        //             <span>{'Deepak Kumar'}</span>
        //         </div>
        //         <div id="author-intro">
        //             <span>{'Deepak is the cofounder of Frontbench. He aims to empower the students of Tier 3 colleges in India.'}</span>
        //         </div>
        //         <div id="author-social">
        //             <a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
        //             <a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
        //             <a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
        //         </div>
        //     </div>
        // </div>

        <div className="author-individual">
          
        <img className="author-img" src={profileImage} alt="blog" />
        
        <div className="author-data">

            <a href={props.url} >
              <p className="author-title">{'Deepak Kumar'}</p>
            </a>
            
            <span className="author"> 
            {'Deepak is the cofounder of Frontbench. He aims to empower the students of Tier 3 colleges in India. Deepak is the cofounder of Frontbench. He aims to empower the students of Tier 3 colleges in India.'} </span>
            
            <div className="author-des">
                <a href={`https://linkedin.com/dipakkr`}><i className={'fab fa-facebook-square'}></i></a>
                <a href={`https://linkedin.com/dipakkr`}><i className={'fab fa-linkedin'}></i></a>
                <a href={`https://twitter.com/>`}><i className={'fab fa-twitter'}></i></a>
            </div>
        </div>
    </div>

    )
}
export default Author;