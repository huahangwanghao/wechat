Page({
  onTap:function(){
   /*
   在父页面调到子页面
    wx.navigateTo({
      url: "../posts/post"
    });
    */
    wx.redirectTo({
      url: "../posts/post"
    });   

  },
  onUnload:function(){
    console.log("页面被关闭的时候执行这个代码");
  }
})