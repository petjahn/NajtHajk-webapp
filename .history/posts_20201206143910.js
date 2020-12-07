const config = require("./config");
const fm = require("front-matter");
const marked = require("marked");
const fs = require("fs")

const createPost = postPath => {
  const data = fs.readFileSync(`${config.dev.postsdir}/${postPath}.md`, "utf8");
  const content = fm(data);
  content.body = marked(content.body);
  content.path = postPath;
  return content;
};

const createPosts = posts => {
    posts.forEach(post => {
      if (!fs.existsSync(`${config.dev.outdir}/${post.path}`))
        fs.mkdirSync(`${config.dev.outdir}/${post.path}`);
  
      fs.writeFile(
        `${config.dev.outdir}/${post.path}/index.html`,
        posthtml(post),
        e => {
          if (e) throw e;
          console.log(`${post.path}/index.html was created successfully`);
        }
      );
    });
};
  
module.exports = {
createPost: createPost,
createPosts: createPosts
};
