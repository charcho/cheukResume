$(document).ready(function() {

        });
url=location.href;
  $.ajax({
    type : "get",
    url : "http://hetom.net/jssdk.php?url="+url,//替换网址
    dataType : "jsonp",
    jsonp: "callback",
    jsonpCallback:"success_jsonpCallback",
    success : function(data){
        wx.config({
appId: data.appId,
timestamp: data.timestamp,
nonceStr: data.nonceStr,
signature: data.signature,
jsApiList: [
       "onMenuShareTimeline", //分享给好友
       "onMenuShareAppMessage", //分享到朋友圈
       "onMenuShareQQ",  //分享到QQ
       "onMenuShareWeibo" //分享到微博
]
});
},
error:function(data){
    alert("连接失败！");
}
});
  wx.ready(function (){
  var shareData = {
  title: '开心的儿童呢',
  desc: '您可知道孩子的任何行为、脾性、喜好都预示着他未来可能的方向吗？昂途百课',
  link: '',
  imgUrl: 'http://hetom.net/wenjuan/images/sharebg.png'
  };
  wx.onMenuShareAppMessage(shareData);
  wx.onMenuShareTimeline(shareData);
  wx.onMenuShareQQ(shareData);
  wx.onMenuShareWeibo(shareData);
    });