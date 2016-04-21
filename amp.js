document.write("yads test");

console.log("window.context.referrer", window.context.referrer);
console.log("document.referrer", document.referrer);
console.log("window.context.location", window.context.location);
console.log("window.context.canonicalUrl", window.context.canonicalUrl);
console.log("yahoojpParam", yahoojpParam);

yads_ad_ds = yahoojpParam.yadsid || "";
yads_page_url = "http://app.studio-ponta.com/";
document.write("<script src='https://yads.c.yimg.jp/js/yads.js'></script>");


