// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
    var iframe = document.createElement('IFRAME');
    iframe.src = "https://www.baidu.com/";
    iframe.width="500px";
    iframe.height="500px";
    document.body.appendChild(iframe);
});