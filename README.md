# URL Shortner Servie

An API to shorten any long url. The API is crafted using Nodejs with express framework. We are using Mongo atlas cloud Database. The urls both the long one and generated shorten one both will get stored in the database.

## Getting started

```
git clone https://github.com/jeyk333/url-shortner-service.git

cd url-shortner-service

npm install

npm start
```

## Usage

- Once the application is installed, generate mongoUri code from your mongo cloud account and paste the code inside the config/keys.js file. If, it is in Production environment, it is not safe to save it in the file.
- After, all the above steps are successfully done. Use the below api to post the long url to generate an short url.
  ```
   Method POST: ${baseurl}/api/url/shorten
   {
       longUrl: "Pass the long url here"
   }
  ```

## Libraries used

- express
- mongoose
- shortid
- valid-url
