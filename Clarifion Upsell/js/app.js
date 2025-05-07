// Check your console, if you see errors after connection successful, know they come from whatever code you write here.

/* Test Connection JavaScript Compatibility [Remove if you no longer need]...
    Try running these
    alert($('layout').parentElement.nodeName);
    alert(`Welcome To ${app.name}. Created by ${app.author}. Copyright ${app.copyright}.`);
    alert(d.fullDate());
*/

//loadApp();

loopX($$('header div'), () => {
    addClass(i, 'code-col'),
    addClass(i, 'code-animate-right'),
    addClass(i, 'code-block');
});

loopX($$('menu div'), () => attrib(i, 'class', 'code-row-padding code-quarter code-center'));

loopX($$('menu div span'), () => {
    addClass(i, 'code-circle');
});

/* five stars */
loopX($$('stars'), () => {
    html(i, html(i).repeat(5));
});


var slideIndex = 1;
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    $i;
    $x = $$(".hd");
    if (n > $x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = $x.length}
    loopX($x, () => i.style.display = "none");
    $x[slideIndex - 1].style.display = "block"; 
}

click($('.mbtn'), () => plusDivs(-1));
click($('.pbtn'), () => plusDivs(1));
