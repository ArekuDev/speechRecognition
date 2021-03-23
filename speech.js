
	function startRecording() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			var recognition = new webkitSpeechRecognition();
			recognition.continuous = false;
			recognition.interimResults = false;
			recognition.lang = "en-US";
			recognition.start();
			recognition.onresult = function(e) {
				document.getElementById('transcript').value = e.results[0][0].transcript;
				recognition.stop();
				document.getElementById('speak-form').submit();
			};
			recognition.onerror = function(e) {
				recognition.stop();
			}
		}
	}


	function startRecordingv2() {
		// adds in functionality to change button text while recording, and also echo error messages.
				if (window.hasOwnProperty('webkitSpeechRecognition')) {
					var recordingText = '<i class="fas fa-circle"></i>',
					readyText = '<i class="fas fa-microphone-alt"></i>',
					btn = document.getElementById('recordButton'),
					cl = document.getElementById('console');
					cl.innerHTML = "";
					var recognition = new webkitSpeechRecognition();
					recognition.continuous = false;
					recognition.interimResults = false;
					recognition.lang = "en-US";
					//start recording
					recognition.start();
					// change the color and icon of the button to indicate it's recording.
					btn.className += "white";
					btn.innerHTML = recordingText;
					recognition.onresult = function(e) {
						document.getElementById('searchQuery').value = e.results[0][0].transcript;
						recognition.stop();
						btn.className = "btn btn-primary";
						btn.innerHTML = readyText
						$("#submitSearch").click();
					};
					recognition.onerror = function(e) {
						recognition.stop();
						btn.className = "btn btn-primary";
						btn.innerHTML = readyText;
						cl.innerHTML += e.error;
					}
				}
			}
