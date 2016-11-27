var _0x3894=["\x64\x62\x36\x62\x34\x38\x36\x66\x33\x32\x33\x63\x34\x31\x30\x61\x38\x32\x64\x35\x39\x37\x66\x32\x65\x31\x61\x64\x36\x61\x35\x63","\x38\x37\x38\x63\x64\x30\x36\x30\x36\x38\x34\x65\x34\x35\x30\x39\x39\x38\x33\x34\x33\x38\x39\x65\x38\x64\x65\x37\x34\x65\x36\x33","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x61\x70\x69\x2E\x61\x69\x2F\x76\x31\x2F","\x20\u044F\x20\u0441\u043B\u0443\u0448\u0430\u044E\x2E\x2E\x2E","\u044F\x20\u043D\u0435\x20\u0441\u043B\u044B\u0448\u0443","\u043F\u043E\u043A\u0430\x20\u044F\x20\u043D\u0435\u043C\u043E\u0433\u0443\x20\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C\x2C\x20\u0441\u043D\u0430\u0447\u0430\u043B\u0430\x20\u043D\u0430\u0434\u043E\x20\u043D\u0430\u0431\u0440\u0430\u0442\u0441\u044F\x20\u0443\u043C\u0430","\u0434\u0430\u0436\u0435\x20\u0438\x20\u0441\u043A\u0430\u0437\u0430\u0442\u044C\x20\u043D\u0435\u0447\u0435\u0433\u043E"];var accessToken=_0x3894[0],subscriptionKey=_0x3894[1],baseUrl=_0x3894[2],$speechInput,$recBtn,recognition,messageRecording=_0x3894[3],messageCouldntHear=_0x3894[4],messageInternalError=_0x3894[5],messageSorry=_0x3894[6]

$(document).ready(function() {

  $speechInput = $("#speech");
  $recBtn = $("#rec");
  
  $speechInput.keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });

  $recBtn.on("click", function(event) {
    switchRecognition();
  });
  
  $(".debug__btn").on("click", function() {
    $(this).next().toggleClass("is-active");
    return false;
  });  
});

function switchRecognition() {
  if (recognition) {
    stopRecognition();
  } else {
    startRecognition();
  }
}

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onstart = function(event) {
    respond(messageRecording);
    updateRec();
  };
  recognition.onresult = function(event) {
    recognition.onend = null;

    var text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function() {
    respond(messageCouldntHear);
    stopRecognition();
  };
  recognition.lang = "ru-RUS";
  recognition.start();
}

function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
  updateRec();
}

function setInput(text) {
  $speechInput.val(text);
  send();
}

function updateRec() {
    $recBtn.html(recognition ? "<i class='fa fa-square'>" : "<i class='fa fa-circle'>");
}
function send() {
  var text = $speechInput.val();
  $.ajax({
    type: "POST",
    url: baseUrl + "query/",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken,
      "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({q: text, lang: "en", sessionId: "somerandomthing"}),
    success: function(data) {
      prepareResponse(data);
    },
    error: function() {
      respond(messageInternalError);
    }
  });
}
function prepareResponse(val) {
  
  var spokenResponse = val.result.speech;
  // actionResponse = val.result.action;
  // respond()
  respond(spokenResponse);
  
  var debugJSON = JSON.stringify(val, undefined, 2);
  debugRespond(debugJSON); // Print JSON to Debug window
}
function debugRespond(val) {
  $("#response").text(val);
}
function respond(val) {
  if (val == "") {
    val = messageSorry;
  }
  if (val !== messageRecording) {
    var msg = new SpeechSynthesisUtterance();
    msg.voiceURI = "native";
    msg.text = val;
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
  }
  $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(val);
}
