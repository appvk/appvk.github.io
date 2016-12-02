(function() {
    var session = new ya.speechkit.SpeechRecognition();
    var resultText = '';
    var content = document.getElementById('content');
    var package_send = document.getElementById('package_send');
    var package_proc = document.getElementById('package_proc');
    var process_delay = document.getElementById('process_delay');
    var sendVsProc = document.getElementById('sendVsProc');
    session.start({
        format: ya.speechkit.FORMAT.PCM16,
        errorCallback: function(msg) {
            console.log(msg);
        },
        dataCallback: function(text, uttr, merge) {
            if (uttr) {
                resultText += ' ' + text;
                text = '';
            }
            content.textContent = resultText + ' ' + text;
        },
        infoCallback: function(info) {
            package_send.textContent = info.send_packages.toString(10);
            package_proc.textContent = info.processed.toString(10);
            function packageToTime(count) {
                return Math.round(100 * (session.options.format.bufferSize * count) /
                    (2.0 * session.options.format.sampleRate)) / 100.0;
            }
            process_delay.textContent = packageToTime(info.send_packages - info.processed).toString(10);
            var diff = info.send_packages - info.processed;
            var dots = '';
            if (diff === 0) {
                diff = Math.floor((Math.random() * 2) + 1);
            }
            for (var i = 0; i < diff; ++i) {
                dots += '.';
            }
            sendVsProc.textContent = dots;
        },
    });
}());
