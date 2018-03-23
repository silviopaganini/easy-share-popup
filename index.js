var Share = function(url){
    this.url = url || "";
}

Share.prototype.openWin = function(url, w, h) {

    var left = ( screen.availWidth  - w ) >> 1;
    var top  = ( screen.availHeight - h ) >> 1;

    window.open(url, '', 'top='+top+',left='+left+',width='+w+',height='+h+',location=no,menubar=no');

}

Share.prototype.plus = function(url) {

    var url = encodeURIComponent(url || this.url);

    this.openWin("https://plus.google.com/share?url=" + url, 650, 385);

}

Share.prototype.pinterest = function(url, media, descr) {

    var url   = encodeURIComponent(url || this.url);
    var media = encodeURIComponent(media || "");
    var descr = encodeURIComponent(descr || "");

    this.openWin("http://www.pinterest.com/pin/create/button/?url=" + url + "&media="+media+"&description=" + description, 735, 310);

}

Share.prototype.tumblr = function(url, media, descr) {

    var url   = encodeURIComponent(url || this.url);
    var media = encodeURIComponent(media || "");
    var descr = encodeURIComponent(descr || "");

    this.openWin("http://www.tumblr.com/share/photo?source=" + media + "&caption="+ descr + "&click_thru=" + url, 450, 430);

}

Share.prototype.facebook = function(url, copy) {

    var url   = encodeURIComponent(url || this.url);
    var descr = encodeURIComponent(copy || "");

    this.openWin("http://www.facebook.com/share.php?u="+url+"&t=" + descr, 600, 300);

}

Share.prototype.twitter = function(url, copy) {

    var url = encodeURIComponent(url || this.url);
    var descr = encodeURIComponent(copy || "");

    this.openWin("http://twitter.com/intent/tweet/?text="+ descr + "&url=" + url, 600, 300);

}

Share.prototype.renren = function(url) {

    var url = encodeURIComponent(url || this.url);

    this.openWin("http://share.renren.com/share/buttonshare.do?link=" + url, 600, 300);

}

Share.prototype.weibo = function(url) {

    var url = encodeURIComponent(url || this.url);

    this.openWin("http://service.weibo.com/share/share.php?url=" + url + "&language=zh_cn", 600, 300);

}

Share.prototype.pinterest = function(url, copy) {

    var url = encodeURIComponent(url || this.url);
    var descr = encodeURIComponent(copy || "");

    this.openWin("http://pinterest.com/pin/create/button/?description="+ descr + "&url=" + url, 600, 300);
}

if ( typeof module === 'object' ) {

    module.exports = Share;

}