const express = require("express");
const app = express();

// app.use((req, res)=>{
//     console.log('We got a new request!');
//     res.send('<h1>This is my webpage!</h1>');
// })

// 라우팅 ,제레릭한 라우팅
// app.get('/',(req, res)=>{
//     const {q} = req.query;
//     res.send(`<h1>This page is home ${q}</h1>`);
// })

// app.get('/r/:subreddit',(req, res)=>{
//     const {subreddit} = req.params;
//     res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
// })
// app.get('/r/:subreddit/:postId',(req, res)=>{
//     const {subreddit,postId} = req.params;
//     res.send(`<h1>Browsing the ${subreddit} subreddit ${postId}</h1>`);
// })

// app.get('/dogs',(req, res)=>{
//     res.send('<h1>This page is dogs</h1>');
// })

// app.post('/dogs',(req, res)=>{
//     res.send('<h1>Post request</h1>');
// }
// )
// app.get('/baesee',(req, res) => {
//     res.send('<h1>baesee</h1>');
// })

// app.get('/search',(req, res)=>{
//     const {q,color} = req.query;
//     if(!q){
//         res.send('<h1>Nothing found if nothing searched!</h1>');
//     }

//     res.send(`<h1>Search results for: ${q} and ${color}</h1>`);
// })

// app.get('*',(req, res)=>{
//     res.send('<h1>없는 페이지 입니다.</h1>')
// })
app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  res.send("<h1>GET /tacos response</h1>");
});
app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`<h1>OK, here are your ${qty} ${meat} tacos</h1>`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 3000
// 8080
