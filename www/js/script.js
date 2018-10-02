// handling document ready and phonegap deviceready
window.addEventListener('load', function () {
    document.addEventListener('deviceready', onDeviceReady, false);
}, false);

// Phonegap is loaded and can be used
function onDeviceReady(){
	var srcaudio=document.getElementById("srcaudio").value;
	var daudio=document.getElementById("durationaudio").value;
	var play_btn = $('#play');
	var pause_btn = $('#pause');
	var stop_btn = $('#stop');
	
	play_btn.click(function(){
		playAudio(srcaudio);
		$("#play").attr('disabled', 'disabled');
		$("#pause").removeAttr('disabled');
	});
	
	pause_btn.click(function(){
		pauseAudio();
		
		$("#pause").attr('disabled','disabled');
		$("#play").removeAttr('disabled');
	});
	
	stop_btn.click(function(){
		stopAudio();
		// reset slider
		$('#slider').val(0);
		$('#slider').slider('refresh');
		
	    $("#pause").attr('disabled','disabled');
		$("#play").removeAttr('disabled');
	});
	
}

/* Audio player */
var audio = null;
var audioTimer = null;
var pausePos = 0;

/* play audio file */
function playAudio(file){
	audio = new Media(file, function(){}, function(error){ // error callback
    	alert('error: '+ error.exception);
    });
    
    // get audio duration
    var duration = 17;
    // set slider data
    if( duration > 0 ){
	   $('#slider').attr( 'max', Math.round(duration) );
	    $('#slider').slider('refresh');
    }
    
    // play audio
    audio.play();
    
    audio.seekTo(pausePos*1000);

    // update audio position every second
    if (audioTimer == null) {
        audioTimer = setInterval(function() {
            // get audio position
            audio.getCurrentPosition(
                function(position) { // get position success
                    if (position > -1) {
                        setAudioPosition(position);
                    }
                }, function(e) { // get position error
                    alert("Error getting pos=" + e);
                    //setAudioPosition(duration);
                }
            );
        }, 1000);
    }
}

/* pause audio */
function pauseAudio() {
    if (audio) {
        audio.pause();
    }
}

/* stop audio */
function stopAudio() {
    if (audio) {
        audio.stop();
        audio.release();
    }
    clearInterval(audioTimer);
    audioTimer = null;
    pausePos = 0;
}

/* set audio position */
function setAudioPosition(position) {
	pausePos = position;
	position = Math.round(position);
    $('#slider').val(position);
    $('#slider').slider('refresh');
	
}
