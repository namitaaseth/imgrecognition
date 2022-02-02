Webcam.set({
    width : 300,
    height : 300,
    image_format : 'jpg',
    jpg_quality : 100
});
Webcam.attach("#camera")
function capture(){
    Webcam.snap(function(data_uri){
        console.log(data_uri)
        document.getElementById("result").innerHTML="<img id='capturedimg' src='"+data_uri+"'</img>"
    })
}
console.log("ml5 version",ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YvbDlGNwk/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model is loaded")
}
function identify(){
    img= document.getElementById("capturedimg")
    classifier.classify(img,gotresult);
}
function gotresult(error, result){
    if(error){
        console.log(error)
    }
    else{console.log(result)
    document.getElementById("object_name").innerHTML=result[0].label
    document.getElementById("object_accuracy").innerHTML=(result[0].confidence*100).toFixed(2)+" %"
    }
}