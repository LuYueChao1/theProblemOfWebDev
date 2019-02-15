<template>
    <div>
        <of-ios-error></of-ios-error>
        <p>{{year}}年{{month}}月{{date}}日{{hour}}时{{minute}}分{{second}}秒</p>
        <video class="video" ref="refVideo" ></video>
        <canvas class="canvas" ref="refCanvas"></canvas>
        <button @click="openCamera"></button>
    </div>
</template>
<script>
import ofIosError from './ofIosError.vue'
export default {
    data(){
        return{
            year:'',
            month:'',
            date:'',
            hour:'',
            minute:'',
            second:'',
            videoUrl:''
        }
    },
    created(){
        let timeObj=new Date('2019/02/10 12:01:01')
        this.year=timeObj.getFullYear()
        this.month=timeObj.getMonth()+1
        this.date=timeObj.getDate()
        this.hour=timeObj.getHours()
        this.minute=timeObj.getMinutes()
        this.second=timeObj.getSeconds()
    },
    methods:{
        openCamera(){
            let self=this
            var video=self.$refs.refVideo
            var canvas=self.$refs.refCanvas
            var context=canvas.getContext('2d')
            //video.addEventListener('play',function(){
              //  window.setInterval(function () {  
                //context.drawImage(video, 0, 0,90,120);  
            //}, 60)
            //})
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
                navigator.mediaDevices.getUserMedia({
                    video:true,
                    audio:true
                }).then(
                    function(stream){
                        console.log(stream)
                        MediaStreamTrack=typeof stream.stop==='function'?stream:stream.getTracks()[1]
                        video.srcObject=stream
                        console.log(video.src)
                        video.play()
                    }
                ).catch(function(error){
                    console.log(error)
                })
            }else if(navigator.getUserMedia){
                navigator.getUserMedia({
                    video:true
                }).then(function(stream){
                    this.videoUrl=(window.webkitURL).createObjectURL(stream);
                    this.$refs.refVideo.play()
                }).catch(function(err){
                    console.log(err)
                })
            }

        }
    },
    components:{
        ofIosError
    }
}
</script>
<style>
.video{
    width: 60%;
    text-align: center;
}
.canvas{
    height: 200px;
}
</style>


