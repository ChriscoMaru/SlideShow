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
    }
   }
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.nextPhoto();
   slideshow.getCurrentPhoto();