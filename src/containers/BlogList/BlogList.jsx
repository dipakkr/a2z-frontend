import React from 'react';
import './BlogList.css';
import BlogListCard from '../../components/BlogListCard/BlogListCard';
import * as contentful from 'contentful';
export default class BlogList extends React.Component {

  constructor(){
    super()
    this.state = {articles : []}
  }
  
  componentDidMount(){
  var client = contentful.createClient({
    space: '84ay66u6qghp',
    accessToken: 'd442023af610d84c254c3753d8a70f867727cfa98a28e33ae379f8c006ffc6c7' 
  })

  client.getEntries({content_type : 'post'}).then((response)=>{
    this.setState({articles : response.items})
    console.log(response.items);
  })
}
  render() {
   
    // const title = article.fields.title
    // const author = article.fields.author.fields.name
    // const publishedAt = article.fields.publishedDate
    
    return (
      <div className="blog-page-container">
        <div className="blog-container blog-background">
          <h1 className="blog-h1">Campus Stories </h1>
        </div>
        <div className="blog-list-container">
            {this.state.articles.map((article, i) => 
            <BlogListCard id={i} key={i} 
                          title={article.fields.title} 
                          author={article.fields.author.fields.name} 
                          date={article.fields.publishedDate}
                          image={article.fields.featureImage.fields.file.url} 
             />
            )}
        </div>
      </div>
    );
  }
}