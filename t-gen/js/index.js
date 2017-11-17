
// determine if Web Audio API is available
// (`contextClass` will return `false` if
// the API is not supported).
var contextClass = (window.AudioContext || window.webkitAudioContext);
var context = new contextClass();

// VCO #1
// Create an oscillator using the API:
var vco1 = context.createOscillator();
// Set the waveform for our new VCO:
vco1.type = 'triangle';//vco1wav;// OPTIONS: sine, square, sawtooth, triangle
// Set the starting frequency for the VCO
vco1.frequency.value = 440.00;// 440.00Hz = "A", the standard note all orchestras tune to.
// Get the VCO running
vco1.start(0);

// VCA
// This is a gain (volume) node that
// will control the volume of the note.
var vca = context.createGain();
vca.gain.value = 0;

// VCO#1 VOLUME
// Gain node for VCO#1
var vco1vol = context.createGain();
vco1vol.gain.value = 1;

// MASTER VCA
// This is our overall volume control
// When we trigger a note, the normal
// VCA goes from 0 to full. Having a
// master volume control allows us to
// set the global volume without
// affecting the notes' on/off function.
var master = context.createGain();
master.gain.value = 0.5;

// DISTORTION
var distortion = context.createWaveShaper();
// distortion.curve = makeDistortionCurve(0);
// distortion.oversample = '4x';

// DELAY
var delay = context.createDelay();
delay.delayTime.value = 0;
var delay_feedback = context.createGain();
delay_feedback.gain.value = 0.2;
var delay_filter = context.createBiquadFilter();
delay_filter.frequency.value = 2000;

// CONNECTIONS
// Here we link all our nodes
// together. The final setting
// of `context.destination`
// pipes the resulting sounds
// to our audio output, so we
// can hear it.
vco1.connect(vco1vol);
vco1vol.connect(vca);

// No effects:
vca.connect(master);

vca.connect(delay);
delay.connect(delay_feedback);
delay_feedback.connect(delay_filter);
delay_filter.connect(delay);

// With effects:
// vca.connect(distortion);
// distortion.connect(delay);
delay.connect(master);

master.connect(context.destination);


// var controlPad = document.getElementById('controlPad');
var controlPad = $('#controlPad');
var controlPadMarker = document.getElementById('controlPadMarker');

var volumeInput = 0;
var pitchInput = 0;
var noteOn = false;
var notePersist = false;

var offset = controlPad.offset();

/**
 * ------------------
 * CONTROL PAD EVENTS
 * ------------------
 */
controlPad.on('mousedown',function(e){
    noteOn = true;
    var rawVolInput = e.pageY - offset.top;
    var rawPitchInput = e.pageX - offset.left;
    console.log(rawVolInput);
    console.log(rawPitchInput);
    setNote(rawVolInput,rawPitchInput);
});

controlPad.on('mouseleave',function(e){
    if (noteOn) {
        notePersist = true;
    } else {
        notePersist = false;
    }
    noteOn = false;
    vca.gain.value = 0;
});

controlPad.on('mouseenter',function(e){
    // console.log(notePersist);
    if (notePersist) {
        noteOn = true;
        var rawVolInput = e.pageY - offset.top;
        var rawPitchInput = e.pageX - offset.left;
        setNote(rawVolInput,rawPitchInput);
    }
});

$(document).on('mouseup',function(e){
    // console.log('mouseup');
    noteOn = false;
    notePersist = false;
    vca.gain.value = 0;
    noQuery.removeClass(controlPadMarker,'active');
});

controlPad.on('mousemove',function(e){
    // console.log('mousemove');
    // console.log('noteon: ' + noteOn);
    var rawVolInput = e.pageY - offset.top;
    var rawPitchInput = e.pageX - offset.left;
    if (noteOn) {
        setNote(rawVolInput,rawPitchInput);
    }
    setMarker(rawVolInput,rawPitchInput);
});

// Set Marker Positon
function setMarker(x,y){
    controlPadMarker.style.top = x + 'px';
    controlPadMarker.style.left = y + 'px';
}

function setNote(volume,pitch){
    volumeInput = parseNoteValue(volume);
    pitchInput = parsePitchValue(pitch);
    noQuery.addClass(controlPadMarker,'active');

    vca.gain.value = volumeInput;
    vco1.frequency.value = pitchInput;
}

// Parse note value.
// -----------------
// Make sure we're using a value
// between 0.00 and 1.00 for volume.
function parseNoteValue(input){
    var output = input / 300;
    return (1 - output).toFixed(2);
}

// Parse pitch value.
// ------------------
// Make sure we're using a value
// between 200.00 and 800.00 for pitch.
function parsePitchValue(input){
    var output = input * 2;
    var output = input * 10;
    // output = output + 200;
    return output.toFixed(2);
}

// Get Wave-Type Selection
var waveSelectorRadio = document.waveTypeForm.waveSelector;
for(var i = 0; i < waveSelectorRadio.length; i++) {
    waveSelectorRadio[i].onclick = function() {
        var rawWave = this.value;
        var waveType = parseWave(rawWave);
        setWave(waveType);
    };
}

// Turn wave-type int into string
function parseWave(int){
    // Make sure the input is a string
    string = int.toString();
    var waveType = false;
    switch (string) {
        case '1':
            waveType = 'sine';
            break;
        case '2':
            waveType = 'square';
            break;
        case '3':
            waveType = 'triangle';
            break;
        case '4':
            waveType = 'sawtooth';
            break;
    }
    return waveType;
}

// Set the wave type of an oscillator
function setWave(waveType){
    vco1.type = waveType;
}

/**
 * ------------------------------------
 * noQuery
 * 
 * These are basic utilities that allow
 * for cross-browser support, replacing
 * the need to use jQuery.
 * ------------------------------------
 */
var noQuery = (function(){
    
    /**
     * ---------
     * HAS CLASS
     * 
     * Does the target element have the target class?
     * @param  {object}  el        The target element.
     * @param  {string}  className The target class.
     * @return {Boolean}           If the el has the class, output 'true'. Otherwise 'false'.
     * ---------
     */
    function _hasClass(el, className){
        if (el.classList) {
            var result = el.classList.contains(className);
        } else {
            var result = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
        return result;
    }

    /**
     * ---------
     * ADD CLASS
     * 
     * Add a class to the target element.
     * @param {object} el        The target element.
     * @param {string} className The target class.
     * ---------
     */
    function _addClass(el, className){
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }

    /**
     * ------------
     * REMOVE CLASS
     * 
     * Remove a class from the target element.
     * @param  {object} el        The target element.
     * @param  {string} className The target class.
     * ------------
     */
    function _removeClass(el, className){
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    
    /**
     * ----------
     * GET OFFSET
     * ----------
     */
    function _getOffset(elem) { // crossbrowser version
        return 'test';
//         console.log(elem);
//         var box = elem.getBoundingClientRect();

//         var body = document.body;
//         var docEl = document.documentElement;

//         var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//         var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

//         var clientTop = docEl.clientTop || body.clientTop || 0;
//         var clientLeft = docEl.clientLeft || body.clientLeft || 0;

//         var top  = box.top +  scrollTop - clientTop;
//         var left = box.left + scrollLeft - clientLeft;

//         return { top: Math.round(top), left: Math.round(left) };
    }

    /**
     * --------------
     * PUBLIC METHODS
     * 
     * Expose all our
     * nice functions
     * to the public.
     * --------------
     */
    var publicAPI = {
        hasClass: _hasClass,
        addClass: _addClass,
        removeClass: _removeClass,
        offset: _getOffset
    };
    return publicAPI;
})();