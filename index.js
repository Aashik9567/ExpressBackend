const express = require('express')//import express from express
require('dotenv').config()
const app = express()
const githubData={
  "login": "Aashik9567",
  "id": 89069898,
  "node_id": "MDQ6VXNlcjg5MDY5ODk4",
  "avatar_url": "https://avatars.githubusercontent.com/u/89069898?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Aashik9567",
  "html_url": "https://github.com/Aashik9567",
  "followers_url": "https://api.github.com/users/Aashik9567/followers",
  "following_url": "https://api.github.com/users/Aashik9567/following{/other_user}",
  "gists_url": "https://api.github.com/users/Aashik9567/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Aashik9567/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Aashik9567/subscriptions",
  "organizations_url": "https://api.github.com/users/Aashik9567/orgs",
  "repos_url": "https://api.github.com/users/Aashik9567/repos",
  "events_url": "https://api.github.com/users/Aashik9567/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Aashik9567/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aashiq Mahato",
  "company": "Advanced College of Engineering and Management",
  "blog": "https://www.youtube.com/@aashiqmahato4918/featured",
  "location": "KATHMANDU",
  "email": null,
  "hireable": null,
  "bio": "Currently studying Bachelor in Electronics, Communication and information engineering \r\n\r\n",
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 9,
  "following": 9,
  "created_at": "2021-08-17T08:18:12Z",
  "updated_at": "2024-09-25T14:55:33Z"
}

// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/login",(req,res)=>{
  res.send("<h1>login page enter email password</h1>")
})
app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})