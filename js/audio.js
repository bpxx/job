/**
 * Created by xcy on 2016/11/16.
 */
~function () {
    var audioBox = document.querySelector(".music"),
        myAudio = document.querySelector('#bemp3');
    window.setTimeout(function () {
        myAudio.play();
        myAudio.addEventListener("canplay", function () {
            audioBox.style.display = "block";
            audioBox.className += " musicCur";
        }, false);
    }, 1000);

    //->点击音乐图标,实现音频的暂停或者播放
    audioBox.addEventListener("click", function () {
        if (myAudio.paused) {//->当前是暂停的,我让其播放
            myAudio.play();
            audioBox.className = "music musicCur";
            return;
        }
        //->当前是播放的,我让其暂停
        myAudio.pause();
        audioBox.className = "music";
        audioBox.style.opacity=1;
    }, false);
}();

var mySwiper=new Swiper('.swiper-container', {
    direction:'vertical',
    loop:true,
    autoplay:9000,
    onTransitionEnd:function(swiper){
        var slides=swiper.slides;
        var curIndex=swiper.activeIndex;
        var lastIndexSlide=slides.length-1;
        var trueIndexSlide=slides.length-2;
        [].forEach.call(slides,function(item,index){
            item.id='';
            if(curIndex==index){
                switch (index){
                    case 0:
                        item.id='page'+trueIndexSlide;
                        break;
                    case lastIndexSlide:
                        item.id='page1';
                        break;
                    default:
                        item.id='page'+(curIndex);
                }
            }
        })
    }
})