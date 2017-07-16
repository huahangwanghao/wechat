
//只能用相對路徑
var postsData = require("../../../data/post-data.js");
Page({
  date:{
    //方法之间传递参数的时候通过这个data就可以啦
  },
  onLoad:function(option){
    var postId=option.id;
    this.setData({
      postId:postId
    });
    var postData=postsData.postList[postId];
    this.setData({
      postData_key:postData
    });
    wx.setStorageSync("key", "wanghao");
    wx.setStorageSync("key", {
      gaem:123,
      age:123
    });
    var that=this;
    wx.onBackgroundAudioPlay(function(){
      that.setData({
        play:true
      });
    });
    wx.onBackgroundAudioPause(function(){
      that.setData({
        play: false
      });
    });
  },
  onTap:function(event){
    var that=this;
    wx.showToast({
      title: '收藏成功!,',
    }),
    wx.showModal({
      title: '收藏',
      content: '是否收藏',
      showCancel:true,
      success:function(){
        //这是因为this指定的是调用的上下文对象,调用success的上下文不是Page啦. 所以如果这里用this就不行啦
        that.setData({
          key:123
        });
      }
    })
  }
  ,
  onShareTap:function(event){
    var items = [
      "分享到微信",
      "分享到朋友圈",
      "分享到QQ",
      "分享到微博"
    ];
    wx.showActionSheet({
      itemList:items ,
      itemColor:"#405f80",
      success:function(res){
        var cancle= res.cancle;
        var tapIndex=res.tapIndex;
        wx.showToast({
          title: "你点击了"+items[tapIndex],
        })
      }
    })
  },
  musicTap:function(event){
    var postId=this.data.postId;
    var isPlayMusic=this.data.play;
    var postData = postsData.postList[postId];
    if(isPlayMusic){
      this.setData({
        play: false
      });
      wx.pauseBackgroundAudio();
    }else{
      this.setData({
        play:true
      });
      wx.playBackgroundAudio(postData.music)
    }

    
  },


})