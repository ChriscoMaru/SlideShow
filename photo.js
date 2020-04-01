// var slideshow = {
//     photoList: ["Acura", "Lexus", "Mazda", "Toyota"],
//     currentPhotoIndex: (1),
//     nextPhoto: function(){
//         if (this.currentPhotoIndex < this.photoList.length - 1){
//             this.currentPhotoIndex++;
//             console.log(this.photoList[this.currentPhotoIndex])
//         }
//         else{
//             console.log(slideshow.nextPhoto)
//         }
//     }
// }
// slideshow.nextPhoto()
// failed experiments
 
var slideshow = {
    photoList: ["Acura", "Lexus", "Mazda", "Toyota"],
    currentPhotoIndex: (0),
    nextPhoto: function(){

        if(this.currentPhotoIndex < this.photoList.length - 1){
            console.log(this.photoList[this.currentPhotoIndex])
            console.log(this.currentPhotoIndex);
        } else if(this.currentPhotoIndex < this.photoList.length)
        {
            console.log("End Of Slideshow");
        }
    },
    prevPhoto: function(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex -- ;
            console.log(this.photoList[this.currentPhotoIndex])
        } else if (this.currentPhotoIndex + 1 > 0)
        {
            console.log("Start the Slideshow");
        }
    },
    getCurrentPhoto: function(){
        console.log(this.photoList[this.currentPhotoIndex]);
    },
    playInterval: null,
    play: function(){
        var self = this;
        this.playInterval = setInterval(function() {self.nextPhoto()}, 2000);
        this.nextPhoto();
    },
    pause: function(){
        clearInterval(this.playInterval);
    }
   }
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.nextPhoto();
//    slideshow.getCurrentPhoto();
// previous tasks

//    playInterval = setInterval(nextPhoto,2000)

//    clearInterval(playInterval)
// experiments