import React from 'react'
import './BlogArticle.css'
import client from '../../service/client'
import marked from 'marked'
import Loader from '../../components/Loader/Loader'
import Author from '../../components/Author/Author'
import {Helmet} from "react-helmet";


class BlogArticle extends React.Component { 
    constructor(){
        super()
        this.state = {
            article : null,
            loading : true
        }
    }
    componentDidMount(){

        if(this.props.match.params.slug ){
            client.getEntries({content_type : 'post', 'fields.slug' : this.props.match.params.slug})
                    .then((response)=>{
                        this.setState({article : response.items[0], loading: false})
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
           return(  
           <>
               {this.state.loading ? <Loader message=" " /> : null}
           </>)
        }

        return(
            <>

                <Helmet>
                        <title>  {this.state.article.fields.title}   </title>
                        <meta name="description"        content={this.state.article.fields.description} />
                        <meta property="og:title"       content={this.state.article.fields.title} />
                        <meta property="og:description" content={this.state.article.fields.description} />
                </Helmet>

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
                        <li >
                            <span className={'blog-shares'}>
                    
                                <a href="https://www.facebook.com/sharer/sharer.php?u=#url"><i className={'fab fa-facebook-square'}></i></a>
                                <a href={`whatsapp://send?text=${window.location}`}><i className={'fab fa-whatsapp'}></i></a>
                                <a href={`https://twitter.com/share?url=${window.location}`}><i className={'fab fa-twitter'}></i></a>
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="addthis_inline_share_toolbox"> </div>

                <div className={'blog-content'} id='content' dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.content)}/> 

                {/* <div className={'blog-content-2'} id='content' dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.content)}/>  */}

                <Author/>

                <div id="disqus_thread"></div>
                
            </>
        )
    }
}

export  default BlogArticle