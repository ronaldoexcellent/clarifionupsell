const logo = {
    src : "files/images/logo.png"
};

const tags = ['package', 'library'];

const sources = ['package.cjs', 'js/source/library.cjs'];

for (i = 0; i < tags.length; i++) {
    $s = document.createElement('script');
    $s.setAttribute('src', sources[i]);
    document.querySelector(tags[i]).replaceWith($s);
}

const stylesheets = ["css/lib/code.css", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",  "css/root.css"];

const script = "js/app.cjs";
