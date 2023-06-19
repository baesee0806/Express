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

// get post
const path = require("path");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  { id: uuid(), comment: "lol that is so funny!", username: "Todd" },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
  res.send("IT WORKED!");
  console.log(req.body);
});
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

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
