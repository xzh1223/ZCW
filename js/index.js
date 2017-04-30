/**
 * Created by xzh on 2017/4/30.
 */

/** 图片轮播 */
$(function(){
    $('#silder').imgSilder({
        s_width:'100%', //容器宽度
        s_height:250, //容器高度
        is_showTit:true, // 是否显示图片标题 false :不显示，true :显示
        s_times:2000, //设置滚动时间
        css_link:'css/slider.css'
    });
});
