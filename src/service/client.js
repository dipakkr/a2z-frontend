import * as contentful from 'contentful'

const client = contentful.createClient({
    space: '84ay66u6qghp',
    accessToken: 'd442023af610d84c254c3753d8a70f867727cfa98a28e33ae379f8c006ffc6c7' 
  })

export default client