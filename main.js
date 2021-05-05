var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function record_voice()
{
    document.getElementById("voice_input").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    var text=event.results[0][0].transcript;
    document.getElementById("voice_input").innerHTML=text;

    if (text=="take my selfie")
    {
        speak_fast();
    }
}

function speak_fast()
{
    var synth=window.speechSynthesis;
    var speak_data="taking your selfie in five seconds";
    var utterThis=new SpeechSynthesisUtterence(speak_data);
    synth.speak(utterThis);
    Webcam.attach( camera );

    setTimeout(function()
    {
        snapshot();
        save();
    },5000
    );
}
    var camera=document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });

  function snapshot()
  {
      Webcam.snap(function(data_uri)
      {
          document.getElementById("result").innerHTML='<img id="meselfie" src='+data_uri+'>';
      }
      );
  }

  function save()
  {
      link=document.getElementById("link");
      image=document.getElementById("meselfie").src;
      link.href=image;
      link.click();
  }