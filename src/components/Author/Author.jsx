import React from 'react'
// import profileImage  from './../../assets/images/man.png'
import './Author.css'

const Author = (props) =>{
    return(
    
        <div className="author-individual"> 
            <img className="author-img" src={props.image} alt="profile" />           
            <div className="author-data">
                <p> Author </p>
                <a href={props.url} >
                    <p className="author-title">{props.name}</p>
                </a>
                <span className="author-bio">{props.bio} </span>
        
                <div className="author-social">
                            <a href={props.facebook}><i className={'fab fa-facebook-square'}></i></a>
                            <a href={props.linkedin}><i className={'fab fa-linkedin'}></i></a>
                            <a href={props.twitter}><i className={'fab fa-twitter'}></i></a>
                </div>
            </div>
    </div>
    )
}
export default Author;