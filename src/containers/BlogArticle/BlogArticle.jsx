import React from 'react'
import './BlogArticle.css'
import client from '../../service/client'
import marked from 'marked'

class BlogArticle extends React.Component { 
    constructor(){
        super()
        this.state = {article : null}
    }
    componentDidMount(){

        if(this.props.match.params.slug ){
            client.getEntries({content_type : 'post', 'fields.slug' : this.props.match.params.slug})
                    .then((response)=>{
                        this.setState({article : response.items[0]})
                        console.log(response.items[0])
                })
        }
    }

    getParsedMarkdown(content){
        return{
            __html : marked(content, {sanitize : true})
        }
    }

    render(){
         
        if(!this.state.article){
            return <h1> Loading .. </h1>
        }

        return(
            <>
                <h1 className={'blog-heading'}>
                    {this.state.article.fields.title} {/*`content to be fetched from server with this blog id */}
                </h1>
    
                <div className={'post-heading'}>
                    <ul className={'post-heading-ul'}>
                        <li>
                            <span className={'blog-author'}>
                        &nbsp;<span className={'name'}>{this.state.article.fields.author.fields.name}</span>
                            </span>
                        </li>
                        <li>
                            <time>
                        posted on&nbsp;<span>{this.state.article.fields.publishedDate}</span>
                            </time>
                        </li>
                        <li>
                            <span className={'blog-shares'}>
                    
                                <a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
                                <a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
                                <a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={'blog-content'} id='content' dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.content)}/>
                
            </>
        )
    }
}

export  default BlogArticle