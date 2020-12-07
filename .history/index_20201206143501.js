const fs = require("fs");
const postMethods = require("./posts");
const config = require("./config");

const posts = fs
  .readdirSync(config.dev.contentdir)
  .map(post => post.slice(0, -3))
  .map(post => postMethods.createPost(post));

console.log(posts);