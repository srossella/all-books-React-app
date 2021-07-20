// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const axios = require('axios');

const handler = async (event) => {
  const {searchName}=event.queryStringParameters
  const REACT_APP_APIKEY =process.env.REACT_APP_APIKEY


  const url= `https://www.googleapis.com/books/v1/volumes?q=${searchName}&key=${REACT_APP_APIKEY}`
  try{
    const {data } = await axios.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error){
    const {status}= error.response
    return {
      statusCode: status,
      body: JSON.stringify({status})
    }
  }

}

module.exports = { handler }
