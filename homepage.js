const fs=require("fs");
const config=require("./config");

const homepage = posts => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <title>${config.blogName}</title>
        <link rel="stylesheet" href="static/assets/styles/main.css" />
    </head>
    <body>
        <div class="grotesk">
            <header>
                <h1>${config.blogName}</h1>
                <p>—</p>
                <p>Nájt Hájk hivatalos honlapja, jelenleg fejlesztés alatt. </p>
                <hr />
            </header>

            <div class="posts">
                ${posts
                  .map(
                    post => `<div class="post">
                    <h3><a href="./${post.path}">${
                      post.attributes.title
                    }</a></h3>
                        <small>${new Date(
                          parseInt(post.attributes.date)
                        ).toDateString()}</small>
                        <p>${post.attributes.description}</p>
                    </div>`
                  )
                  .join("")}
            </div>
            <!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://najt-hajk.us7.list-manage.com/subscribe/post?u=b0eb4b55dd441dba667eb8add&amp;id=a44110f09c" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">E-mail cím  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Vezetéknév </label>
	<input type="text" value="" name="LNAME" class="" id="mce-LNAME">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">Keresztnév </label>
	<input type="text" value="" name="FNAME" class="" id="mce-FNAME">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b0eb4b55dd441dba667eb8add_a44110f09c" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='LNAME';ftypes[2]='text';fnames[1]='FNAME';ftypes[1]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->

            <footer>
                ${`<p>© ${new Date().getFullYear()} ${
                  config.authorName
                }, Find the code on <a href="github.com/kartiknair/blog">GitHub</a></p>`}
            </footer>
        </div>
    </body>
</html>
`;

const addHomePage = posts => {
    fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
      if (e) throw e;
      console.log(`index.html was created successfully`);
    });
};

module.exports = addHomePage;