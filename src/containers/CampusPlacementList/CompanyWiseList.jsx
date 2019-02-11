import React from 'react'
import './CompanyWiseList.css'
import BlogListCard from '../../components/BlogListCard/BlogListCard'
import client from '../../service/client'
import Loader from '../../components/Loader/Loader'
import MessageDialog from '../../components/MessageDialog/Message'

export default class CompanyWiseList extends React.Component {

  constructor(){
    super()
    this.state = {articles : [], loading:true}
  }
  
  componentDidMount(){
      if(this.props.match.params.slug){
        client.getEntries({content_type : 'post', 'fields.company' : this.props.match.params.slug})
        .then((response)=>{
            this.setState({
              articles : response.items,
              loading : false 
            })
          })
      }
   
}
  render() {
   
    // const title = article.fields.title
  
    return (
      <div className="fblog-page-container">
        <div className="fblog-container fblog-background">
          <h1 className="fblog-h1">Campus Placement </h1>
        </div>

      
        <div className="fblog-list-container">

        {this.state.loading ? <Loader message=" " /> : null}

        {this.state.articles.map((article, i) => 
            
            <BlogListCard id={i} key={i} 
                          title={article.fields.title} 
                          author={article.fields.author.fields.name} 
                          date={article.fields.publishedDate}
                          image={article.fields.featureImage.fields.file.url}
                          slug={article.fields.slug}
                          tag={article.fields.tag} 
             />
            )}
        </div>
      </div>
    );
  }
}