'use strict';

var _class, _temp, _class2, _temp2;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var text = '\n<font size="1">
<pre><font color="white">0010010001111010110010110001011100011000010100000000011000011100010100010000101000110000001010111000</font><br><font color="white">1011001100000100111110111000111111111010011010001101101101010111000000111000111011011000101000111100</font><br><font color="white">0101000010101001000101100110011010010101110000111110111100010111010001011101101000110010110001011011</font><br><font color="white">011100101001000100110101111100111101010011</font><font color="#fefefe">0</font><font color="#f5f5f5">1</font><font color="#dddddd">0</font><font color="#c3c3c3">1</font><font color="#bbbbbb">1</font><font color="#bbbbbc">0</font><font color="#c7c7c7">1</font><font color="#d3d3d3">0</font><font color="#acacac">0</font><font color="#afafaf">0</font><font color="#c3c3c3">1</font><font color="#bababb">1</font><font color="#c9c9c9">0</font><font color="#e8e8e8">1</font><font color="#f4f4f4">1</font><font color="#fafafa">0</font><font color="white">010011000100100010111011010101000111011110</font><br><font color="white">100011111011010010110101011111010011101</font><font color="#fdfdfd">0</font><font color="#e1e2e2">0</font><font color="#a0a0a0">0</font><font color="#757575">1</font><font color="#5c5c5c">1</font><font color="#3b3b3b">1</font><font color="#383838">0011111000</font><font color="#444444">1</font><font color="#5b5b5b">0</font><font color="#6d6d6d">0</font><font color="#bdbdbd">0</font><font color="#f2f2f2">0</font><font color="white">1000001011100111111000001100110111011110</font><br><font color="white">000011100011111101010010101100100110100</font><font color="#787878">0</font><font color="#474746">1</font><font color="#383838">01010111100001111</font><font color="#393939">0</font><font color="#656565">0</font><font color="#aeaeae">1</font><font color="#fdfdfd">1</font><font color="white">01001001111000011010000001010001100100</font><br><font color="white">000101110100100110000111011110101100</font><font color="#fbfbfb">1</font><font color="#dbdbdb">1</font><font color="#535353">1</font><font color="#393939">1</font><font color="#383838">11001011101111111001</font><font color="#393939">0</font><font color="#575757">0</font><font color="#7b7b7b">1</font><font color="#e5e5e5">1</font><font color="white">100010000011101110011111110110011111</font><br><font color="white">101111011000010001001001001010000001</font><font color="#f4f4f4">1</font><font color="#797979">0</font><font color="#383838">1110111111101011010001110</font><font color="#a7a7a7">0</font><font color="white">110110100101100100000101101111011000</font><br><font color="white">1111110101000101100110010110100111111</font><font color="#727272">1</font><font color="#383838">100010</font><font color="#3b3a39">0</font><font color="#47403d">1</font><font color="#4b423e">1</font><font color="#5b4c43">0</font><font color="#6b5448">0</font><font color="#625045">1</font><font color="#675246">1</font><font color="#795c4c">1</font><font color="#8e6853">1</font><font color="#7b5e4e">1</font><font color="#584a43">1</font><font color="#3e3b3a">0</font><font color="#383838">1101101</font><font color="#565656">0</font><font color="#d2d2d2">1</font><font color="white">11100111000111010000100100011011011</font><br><font color="white">010111011101010101101011110011101100</font><font color="#f8f8f8">1</font><font color="#bfbfbf">0</font><font color="#383838">00110</font><font color="#3f3c3a">1</font><font color="#9a6e57">0</font><font color="#c68562">11</font><font color="#c88763">0</font><font color="#cc8964">0</font><font color="#cf8b66">0</font><font color="#d28e68">0</font><font color="#d7916a">1</font><font color="#d7926a">01</font><font color="#d59169">0</font><font color="#cf8e68">1</font><font color="#ad7a5e">1</font><font color="#413e3b">1</font><font color="#383838">10101</font><font color="#525252">0</font><font color="#7c7c7c">0</font><font color="#f1f1f1">0</font><font color="white">1000001001100111111010101000110001</font><br><font color="white">01101111001011010001100010110100100</font><font color="#fcfcfc">0</font><font color="#bbbbbc">0</font><font color="#4e4e4e">1</font><font color="#383838">1101</font><font color="#463f3c">0</font><font color="#9d6d56">0</font><font color="#c88663">0</font><font color="#c98763">0</font><font color="#cb8864">0</font><font color="#d49069">0</font><font color="#d7926a">10000100</font><font color="#d6916a">1</font><font color="#976d57">1</font><font color="#383838">11101</font><font color="#4e4e4f">1</font><font color="#969696">1</font><font color="#fbfbfb">0</font><font color="white">1100011100011111101110001001011011</font><br><font color="white">0100011000101111110111010000010101000</font><font color="#6c6c6c">1</font><font color="#383838">1001</font><font color="#685046">0</font><font color="#a36c54">1</font><font color="#89604e">0</font><font color="#825f4d">1</font><font color="#8c6551">0</font><font color="#a9775c">0</font><font color="#d38f69">0</font><font color="#d7926a">00</font><font color="#d28f69">0</font><font color="#ae7a5e">1</font><font color="#a4745a">0</font><font color="#a17358">0</font><font color="#a9785c">1</font><font color="#c78665">0</font><font color="#996d57">0</font><font color="#383838">10111</font><font color="#666566">1</font><font color="#d9d9d9">0</font><font color="white">11010111001101010111100101101001000</font><br><font color="white">1100100011011110101110101001101000101</font><font color="#ebebeb">1</font><font color="#868686">1</font><font color="#4f4f4f">0</font><font color="#3d3d3d">0</font><font color="#393939">0</font><font color="#48413d">1</font><font color="#a76e56">1</font><font color="#a56d55">1</font><font color="#9f796b">0</font><font color="#79594e">1</font><font color="#956e5e">0</font><font color="#996651">1</font><font color="#cb8966">1</font><font color="#d7926a">0</font><font color="#bb7d5f">1</font><font color="#a67662">0</font><font color="#876457">1</font><font color="#ae8370">1</font><font color="#c48565">1</font><font color="#c48364">1</font><font color="#916956">0</font><font color="#423e3b">0</font><font color="#393939">1</font><font color="#3c3c3c">0</font><font color="#4c4c4d">1</font><font color="#bbbabb">0</font><font color="#fcfbfc">0</font><font color="white">111111000010011110101101011110000011</font><br><font color="white">001101100000001110110100010010000010111</font><font color="#f0f0f1">0</font><font color="#c8c9c8">0</font><font color="#737170">0</font><font color="#8d6f61">0</font><font color="#896251">0</font><font color="#bf7d60">0</font><font color="#c07d60">1</font><font color="#c58362">1</font><font color="#c58364">1</font><font color="#bd7d60">0</font><font color="#cd8966">1</font><font color="#d7926a">0</font><font color="#cd8b68">0</font><font color="#ce8a66">0</font><font color="#d18d68">0</font><font color="#d59069">0</font><font color="#d6916a">0</font><font color="#b87e62">0</font><font color="#a4765f">0</font><font color="#8e7264">1</font><font color="#7f7f7f">1</font><font color="#cccccc">0</font><font color="#e8e8e8">1</font><font color="white">10100000100111010100001101111000001010</font><br><font color="white">11010110001000100010101010011111010111011</font><font color="#fefefe">1</font><font color="#f3edea">0</font><font color="#8d8480">1</font><font color="#906553">0</font><font color="#c38061">1</font><font color="#d59169">0</font><font color="#cc8a67">0</font><font color="#af7a5f">0</font><font color="#af7b5e">1</font><font color="#b98161">0</font><font color="#bd8364">1</font><font color="#d18e69">1</font><font color="#d7926a">1</font><font color="#d18e68">1</font><font color="#9c7059">0</font><font color="#847973">0</font><font color="#e8d9d2">0</font><font color="#f0eeed">1</font><font color="#fcfcfc">1</font><font color="white">0000110001100011011011010111100000000011</font><br><font color="white">0101100010000011101111100011111100001001</font><font color="#fbfbfb">1</font><font color="#f5f5f6">1</font><font color="#e3e3e4">1</font><font color="#99979a">1</font><font color="#4f443f">0</font><font color="#7a5a4c">1</font><font color="#6d5448">0</font><font color="#594943">1</font><font color="#5d4744">0</font><font color="#785050">1</font><font color="#744e4d">1</font><font color="#5b4843">0</font><font color="#71564b">0</font><font color="#826150">0</font><font color="#765a4d">0</font><font color="#514743">1</font><font color="#c2c2c2">1</font><font color="#f8f8f8">1</font><font color="#fcfcfc">0</font><font color="white">00100101110000010110010110000001010010110</font><br><font color="white">11000110110000101100111100001110110</font><font color="#fefefe">0</font><font color="#f0f0f0">0</font><font color="#e3e3e4">1</font><font color="#cdcdcf">1</font><font color="#b0b0b4">1</font><font color="#98979d">1</font><font color="#838288">0</font><font color="#66656c">0</font><font color="#76747c">0</font><font color="#625c5f">0</font><font color="#4e433f">1</font><font color="#655047">0</font><font color="#896353">0</font><font color="#8f5d57">0</font><font color="#925a57">0</font><font color="#965d59">0</font><font color="#976259">0</font><font color="#8c6555">0</font><font color="#50443f">1</font><font color="#5d5452">0</font><font color="#98959a">0</font><font color="#a3a2a7">1</font><font color="#afaeb4">0</font><font color="#c0bfc4">0</font><font color="#c8c8cc">0</font><font color="#d5d5d7">1</font><font color="#e7e7e8">1</font><font color="#f2f2f3">1</font><font color="#fdfdfd">1</font><font color="white">111101101101100111000100100111111101</font><br><font color="white">01000000010101000001110101001101</font><font color="#f4f4f5">0</font><font color="#cecdd0">1</font><font color="#b3b2b6">0</font><font color="#97959b">1</font><font color="#87858c">1</font><font color="#7c7b82">0</font><font color="#7a7880">1100</font><font color="#75747c">1</font><font color="#7a7880">0</font><font color="#79777f">1</font><font color="#6c686d">1</font><font color="#574f4d">0</font><font color="#5c4b43">1</font><font color="#655046">0</font><font color="#6b5449">1</font><font color="#6f564a">0</font><font color="#6c5549">1</font><font color="#655752">1</font><font color="#7e797a">0</font><font color="#abaab0">1</font><font color="#b4b3ba">11</font><font color="#a6a6ab">0</font><font color="#b4b3ba">100</font><font color="#b2b1b7">1</font><font color="#b8b7bd">0</font><font color="#bfbec4">1</font><font color="#c9c8cc">0</font><font color="#d5d5d8">1</font><font color="#e8e8ea">1</font><font color="#fcfcfc">1</font><font color="white">00011001001001001101011101010101</font><br><font color="white">00010110111011000011101110001</font><font color="#fefefe">0</font><font color="#d9d9da">1</font><font color="#9a999d">0</font><font color="#78767d">0</font><font color="#78777f">1</font><font color="#7a7880">01001101</font><font color="#79777f">0</font><font color="#76747c">1</font><font color="#7a7880">11</font><font color="#79777e">1</font><font color="#7c7272">1</font><font color="#7e665d">0</font><font color="#7f5f51">0</font><font color="#7c6156">1</font><font color="#948886">1</font><font color="#afaeb4">0</font><font color="#b4b3ba">001</font><font color="#adacb2">00</font><font color="#b4b3ba">01100010</font><font color="#b3b2b8">0</font><font color="#b6b5bb">0</font><font color="#c8c7cb">1</font><font color="#ececec">0</font><font color="white">010101100100000111101110111011</font><br><font color="white">01100110100100011110100100101</font><font color="#bdbcbf">1</font><font color="#6e6c73">1</font><font color="#6d6b72">0</font><font color="#737179">1</font><font color="#75737a">0</font><font color="#7a7880">111100110</font><font color="#77757d">10</font><font color="#7a7880">10</font><font color="#76747b">1</font><font color="#717075">0</font><font color="#717074">1</font><font color="#7a797d">1</font><font color="#9f9ea4">1</font><font color="#a9a8af">1</font><font color="#b3b2b9">1</font><font color="#b4b3ba">0</font><font color="#b3b2b8">1</font><font color="#a7a6ab">1</font><font color="#b4b3ba">100110101</font><font color="#a8a7ac">1</font><font color="#a9a8ad">1</font><font color="#b4b3ba">0</font><font color="#b1b0b6">0</font><font color="#dadadb">0</font><font color="white">00100011111110000011101010011</font><br><font color="white">0100110110000100111011010110</font><font color="#dadadb">1</font><font color="#626166">0</font><font color="#79777f">0</font><font color="#615f66">1</font><font color="#79777f">1</font><font color="#66656c">1</font><font color="#7a7880">0000101010</font><font color="#76747b">0</font><font color="#75737b">0</font><font color="#727177">1</font><font color="#74727a">1</font><font color="#8a8a8f">1</font><font color="#98979a">0</font><font color="#a7a7ac">0</font><font color="#acabb2">0</font><font color="#a6a5ac">1</font><font color="#9d9da2">0</font><font color="#a9a8ae">0</font><font color="#a7a7ad">0</font><font color="#b3b2b8">1</font><font color="#b4b3ba">00110001</font><font color="#b4b3b9">1</font><font color="#a3a2a6">0</font><font color="#9c9ca0">1</font><font color="#b4b3ba">1</font><font color="#b1b0b7">1</font><font color="#969699">0</font><font color="#f3f3f4">0</font><font color="white">1011111111101101011111010011</font><br><font color="white">011111011100110000101101100</font><font color="#e7e7e8">1</font><font color="#7d7c81">1</font><font color="#5e5d63">0</font><font color="#7a7880">1</font><font color="#5d5b63">0</font><font color="#7a7880">0</font><font color="#616067">0</font><font color="#7a787f">0</font><font color="#7a7880">1000001001</font><font color="#79777f">0</font><font color="#76757c">0</font><font color="#78767e">0</font><font color="#8d8d91">0</font><font color="#aeadb2">1</font><font color="#b4b3ba">000</font><font color="#abaaaf">0</font><font color="#a0a0a3">1</font><font color="#adacb2">0</font><font color="#b4b3ba">101011011</font><font color="#aeadb3">0</font><font color="#a1a1a4">1</font><font color="#9b9b9e">0</font><font color="#b4b3ba">00</font><font color="#969699">0</font><font color="#b0b0b2">0</font><font color="#fdfdfd">1</font><font color="white">001100000101010011100100100</font><br><font color="white">111001000010111001010110111</font><font color="#939296">0</font><font color="#79777f">0</font><font color="#646369">0</font><font color="#7a7880">1</font><font color="#6c6b72">0</font><font color="#77757d">0</font><font color="#59585f">1</font><font color="#7a7880">1</font><font color="#838189">0</font><font color="#7c7a82">1</font><font color="#7a7880">1100111</font><font color="#7b7981">0</font><font color="#8c8a91">0</font><font color="#a4a3aa">1</font><font color="#85838b">0</font><font color="#8d8d92">0</font><font color="#b4b3ba">0101</font><font color="#b3b2b9">0</font><font color="#a3a3a7">0</font><font color="#abaaaf">0</font><font color="#b4b3ba">11111001</font><font color="#b0afb6">0</font><font color="#a4a4a7">1</font><font color="#9f9fa2">1</font><font color="#a9a9af">0</font><font color="#b4b3ba">00</font><font color="#9b9b9e">0</font><font color="#a1a1a4">0</font><font color="#d2d2d3">0</font><font color="white">110111001010000001110000110</font><br><font color="white">01110111110101110110000111</font><font color="#e7e7e7">1</font><font color="#74737a">1</font><font color="#76747c">1</font><font color="#737179">0</font><font color="#7a7880">10</font><font color="#706e76">1</font><font color="#504e55">1</font><font color="#7a7880">1</font><font color="#929198">1</font><font color="#98979c">1</font><font color="#79777f">0</font><font color="#7a7880">111011</font><font color="#9b9aa0">1</font><font color="#b3b2b8">1</font><font color="#b4b3ba">0</font><font color="#a9a8af">1</font><font color="#8c8b91">0</font><font color="#b3b1b7">0</font><font color="#b3b2b8">0</font><font color="#b4b3ba">101</font><font color="#adadb2">1</font><font color="#aaa9ae">1</font><font color="#b4b3ba">0010111</font><font color="#b1b0b6">1</font><font color="#a2a2a5">1</font><font color="#9f9fa2">0</font><font color="#aaa9af">1</font><font color="#b4b3ba">001</font><font color="#a8a7ad">1</font><font color="#adacb1">0</font><font color="#b8b8bc">1</font><font color="#fbfbfb">0</font><font color="white">10001001011000111101100100</font><br><font color="white">00010101100110101000111110</font><font color="#9f9fa1">1</font><font color="#75747b">0</font><font color="#7a7880">1</font><font color="#76757c">0</font><font color="#77757d">10</font><font color="#79777f">1</font><font color="#706f76">0</font><font color="#65636b">1</font><font color="#94939a">0</font><font color="#b3b2b9">1</font><font color="#908e95">1</font><font color="#7a7880">10110</font><font color="#95939b">0</font><font color="#b4b3ba">0101</font><font color="#a09fa5">1</font><font color="#afacb1">1</font><font color="#b3b2b9">0</font><font color="#b4b3ba">1011</font><font color="#b1b0b7">0</font><font color="#b4b3ba">1010010</font><font color="#b1b0b7">1</font><font color="#a1a1a5">0</font><font color="#94939a">1</font><font color="#b4b3ba">010</font><font color="#afafb4">1</font><font color="#9c9ca0">1</font><font color="#b0afb5">0</font><font color="#b3b3b9">0</font><font color="#d1d1d3">1</font><font color="white">00110101101100111001101010</font><br><font color="white">01000110000100010101010111</font><font color="#747379">1</font><font color="#737178">1</font><font color="#7a7880">00</font><font color="#77767d">1</font><font color="#76757c">0</font><font color="#77757d">0</font><font color="#76747c">1</font><font color="#59585f">0</font><font color="#75747a">1</font><font color="#b4b3ba">1</font><font color="#b3b2b9">1</font><font color="#8e8d93">1</font><font color="#78767d">0</font><font color="#7a7880">00</font><font color="#85848b">1</font><font color="#b3b2b9">0</font><font color="#b4b3ba">1001</font><font color="#97969d">1</font><font color="#b4b3ba">011011011000000</font><font color="#9e9da2">1</font><font color="#8f8e95">1</font><font color="#ababb0">0</font><font color="#b2b1b8">0</font><font color="#b0afb5">0</font><font color="#9e9ea2">1</font><font color="#a5a5aa">1</font><font color="#b4b3ba">10</font><font color="#b0afb4">0</font><font color="#f9f9f9">1</font><font color="white">0101111100011011001001110</font><br><font color="white">1000100000010100010100110</font><font color="#f1f1f1">0</font><font color="#5e5e64">1</font><font color="#737179">0</font><font color="#7a7880">010</font><font color="#79777f">0</font><font color="#78767e">1</font><font color="#77757d">1</font><font color="#717077">1</font><font color="#4c4a51">1</font><font color="#9f9ea3">1</font><font color="#b4b3ba">11</font><font color="#9a999f">1</font><font color="#737278">0</font><font color="#76747c">0</font><font color="#a3a1a8">0</font><font color="#b4b3ba">01101</font><font color="#95949a">1</font><font color="#b4b3ba">0001001010001</font><font color="#b1b0b7">0</font><font color="#acabb1">0</font><font color="#88878d">0</font><font color="#a9a8ae">0</font><font color="#b2b1b8">0</font><font color="#b2b1b7">0</font><font color="#a7a7ab">1</font><font color="#aaaaaf">0</font><font color="#b4b3ba">000</font><font color="#b4b3b9">0</font><font color="#d0d0d1">0</font><font color="white">0111000010111111000100001</font><br><font color="white">1000001010001101101111000</font><font color="#efefef">1</font><font color="#b7b7ba">0</font><font color="#a3a2a7">0</font><font color="#828086">1</font><font color="#7c787e">0</font><font color="#7b787f">01</font><font color="#7a787f">11</font><font color="#7a777f">0</font><font color="#5b585e">1</font><font color="#5b5a5e">1</font><font color="#a5a4aa">1</font><font color="#b4b3ba">11</font><font color="#aeadb3">0</font><font color="#95949a">0</font><font color="#b3b2b9">0</font><font color="#b4b3ba">00111</font><font color="#9d9da2">1</font><font color="#afadb1">0</font><font color="#b1afb4">0</font><font color="#b4b3ba">00001101</font><font color="#aeadb4">0</font><font color="#a9a8ad">1</font><font color="#a6a5aa">1</font><font color="#a3a3a7">0</font><font color="#87868a">0</font><font color="#7f7e85">1</font><font color="#a6a5aa">1</font><font color="#b4b3ba">1</font><font color="#b2b1b7">1</font><font color="#b3b2b9">0</font><font color="#b4b3ba">0</font><font color="#b3b2b9">1</font><font color="#b5b4ba">1</font><font color="#b6b5bc">0</font><font color="#b6b6b9">0</font><font color="#fafafb">1</font><font color="white">1010101101001100100010111</font><br><font color="white">1111001110000010000111010110</font><font color="#c8c1bd">1</font><font color="#ad7960">1</font><font color="#ad7d66">0</font><font color="#a47964">1</font><font color="#9d7562">0</font><font color="#9d7561">1</font><font color="#9e745f">1</font><font color="#825f4e">1</font><font color="#5c585a">0</font><font color="#6d6d72">0</font><font color="#a2a2a7">0</font><font color="#b4b3ba">111010000</font><font color="#99989d">1</font><font color="#b4b3ba">01001110001111</font><font color="#796c6a">0</font><font color="#8c6e61">0</font><font color="#ae8f82">1</font><font color="#b99a8a">1</font><font color="#bd9f90">0</font><font color="#bea090">1</font><font color="#c09a86">1</font><font color="#b08b7a">0</font><font color="#e0dfe1">0</font><font color="#f0f0f1">0</font><font color="#fdfdfd">1</font><font color="white">01101010000001110011000110</font><br><font color="white">0001000010001110010001101001</font><font color="#c8bebb">0</font><font color="#af785c">1</font><font color="#bf8263">0</font><font color="#bd8162">1</font><font color="#af785a">0</font><font color="#ae785a">11</font><font color="#8e634e">0</font><font color="#5f5b5d">1</font><font color="#5a595f">1</font><font color="#78767d">0</font><font color="#9f9ea4">1</font><font color="#b4b3ba">10100111</font><font color="#949398">1</font><font color="#b4b3ba">00001111010011</font><font color="#807370">1</font><font color="#8f644f">0</font><font color="#b77d60">1</font><font color="#d2926b">0</font><font color="#d6956c">101</font><font color="#c28968">0</font><font color="#f7f7f7">1</font><font color="white">1100100010010100011000001010</font><br><font color="white">1110010101111110010001111000</font><font color="#edebea">0</font><font color="#a1725a">1</font><font color="#bf8263">01</font><font color="#b57c5d">1</font><font color="#ae785a">00</font><font color="#7d5a49">1</font><font color="#616063">1</font><font color="#5d5c62">1</font><font color="#67666b">1</font><font color="#79787f">1</font><font color="#97969c">1</font><font color="#b0afb5">1</font><font color="#b4b3ba">001001</font><font color="#a09fa4">1</font><font color="#b1b0b6">1</font><font color="#b0afb5">0</font><font color="#b4b3ba">111011111110</font><font color="#796e6c">0</font><font color="#875e4c">0</font><font color="#b77d60">0</font><font color="#d2926a">0</font><font color="#d6956c">010</font><font color="#cca996">1</font><font color="white">00111000110000111001110110010</font><br><font color="white">01101000100100110000100001111</font><font color="#a78d82">0</font><font color="#b57d61">0</font><font color="#bb8062">0</font><font color="#bd8162">1</font><font color="#b0795b">0</font><font color="#ac7559">0</font><font color="#6e5a51">0</font><font color="#656469">1</font><font color="#6d6c73">0</font><font color="#6c6b71">1</font><font color="#6c6a71">1</font><font color="#9e9da3">0</font><font color="#aaaab0">0</font><font color="#b4b3ba">100100</font><font color="#a2a1a7">0</font><font color="#b2b1b7">1</font><font color="#b3b1b8">0</font><font color="#b4b3ba">011101101111</font><font color="#5e5c61">1</font><font color="#815d4c">0</font><font color="#b77d60">0</font><font color="#d2926b">0</font><font color="#d6956c">11</font><font color="#cb8d67">1</font><font color="#e3dbd6">1</font><font color="white">01010111001100100111110100101</font><br><font color="white">10100001000111000001100100010</font><font color="#b5aeac">0</font><font color="#79605b">1</font><font color="#a57761">0</font><font color="#b47c61">1</font><font color="#b77d5f">0</font><font color="#a67257">1</font><font color="#6f6868">1</font><font color="#626067">0</font><font color="#79777f">1</font><font color="#66656b">1</font><font color="#79777e">0</font><font color="#737278">1</font><font color="#a3a2a9">1</font><font color="#b4b3ba">100110</font><font color="#939299">0</font><font color="#b4b3ba">1101</font><font color="#b3b2b9">0</font><font color="#b4b3ba">000111100</font><font color="#59575d">1</font><font color="#7a6258">1</font><font color="#b77d5f">0</font><font color="#d1916a">0</font><font color="#d6956c">00</font><font color="#bf9279">0</font><font color="#fcfcfc">0</font><font color="white">10001000001110001101110101110</font><br><font color="white">10101100000100111111110000001</font><font color="#e7e6e6">0</font><font color="#63565b">1</font><font color="#977061">0</font><font color="#a07361">1</font><font color="#bd8162">0</font><font color="#9f7058">0</font><font color="#747378">0</font><font color="#5f5d64">0</font><font color="#7a7880">0</font><font color="#77757c">1</font><font color="#727077">1</font><font color="#727178">1</font><font color="#79777f">0</font><font color="#939299">1</font><font color="#b1b0b7">0</font><font color="#b4b3ba">0111</font><font color="#98979e">1</font><font color="#b3b2b9">1</font><font color="#b0afb5">0</font><font color="#b4b3ba">1</font><font color="#b2b1b8">1</font><font color="#adadb2">0</font><font color="#b4b3ba">000001110</font><font color="#65646a">0</font><font color="#7a6c66">1</font><font color="#b57c5f">1</font><font color="#d2926a">1</font><font color="#d6956c">1</font><font color="#d3926b">0</font><font color="#d6c5bc">0</font><font color="white">000011101101001111000001011100</font><br><font color="white">001101000100110001011000101101</font><font color="#908687">1</font><font color="#8b6a5f">1</font><font color="#b07b60">1</font><font color="#bf8263">0</font><font color="#966f5a">1</font><font color="#65636b">0</font><font color="#626068">0</font><font color="#77757c">1</font><font color="#7a7880">0</font><font color="#737179">0</font><font color="#78767e">1</font><font color="#7b7981">0</font><font color="#94929a">1</font><font color="#807e86">1</font><font color="#99989f">0</font><font color="#aeadb4">1</font><font color="#b4b3ba">00</font><font color="#97969d">0</font><font color="#b1b0b5">0</font><font color="#aeabb0">1</font><font color="#b3b2b9">1</font><font color="#a6a6aa">0</font><font color="#aaaaaf">0</font><font color="#b4b3ba">000110000</font><font color="#7d7c82">0</font><font color="#695f60">1</font><font color="#b47c60">1</font><font color="#d6956c">11</font><font color="#c18869">1</font><font color="#f4f4f4">1</font><font color="white">100101000110101010111101100010</font><br><font color="white">101000100111100000000011001010</font><font color="#b2a49f">0</font><font color="#9e6f5a">0</font><font color="#bf8263">00</font><font color="#a4745c">1</font><font color="#67656c">0</font><font color="#6e6c74">0</font><font color="#74727a">1</font><font color="#78777e">1</font><font color="#7a7880">0</font><font color="#75737a">0</font><font color="#7d7c83">1</font><font color="#afaeb5">0</font><font color="#9f9ea4">1</font><font color="#7a7880">0</font><font color="#807e86">0</font><font color="#8e8c94">1</font><font color="#a09ea5">1</font><font color="#8f8e94">1</font><font color="#a4a3a9">1</font><font color="#b3b2b9">0</font><font color="#a7a7ab">0</font><font color="#a1a1a4">0</font><font color="#aeadb3">0</font><font color="#b4b3ba">111001110</font><font color="#98979e">0</font><font color="#785f55">0</font><font color="#c88a66">1</font><font color="#d6956c">00</font><font color="#c39d88">1</font><font color="white">1100110110111101001100000011001</font><br><font color="white">011011000110110000001010110110</font><font color="#e0dbd8">0</font><font color="#886554">0</font><font color="#bb7f61">0</font><font color="#bf8263">1</font><font color="#bd8162">1</font><font color="#7f6f6c">0</font><font color="#79777f">0</font><font color="#7a7880">0</font><font color="#78767e">1</font><font color="#7a7880">01</font><font color="#79777f">1</font><font color="#807e86">0</font><font color="#8e8d94">1</font><font color="#807e86">0</font><font color="#7a7880">010</font><font color="#79777e">0</font><font color="#908f95">1</font><font color="#a6a5aa">0</font><font color="#a1a1a4">0</font><font color="#a2a2a5">1</font><font color="#b3b2b9">0</font><font color="#b4b3ba">011110001</font><font color="#b2b1b8">1</font><font color="#a4806c">0</font><font color="#d5946c">0</font><font color="#d1946d">0</font><font color="#d3ad96">1</font><font color="#e8dfda">0</font><font color="white">0000111110110100101100010101000</font><br><font color="white">1011001000001010001101001111101</font><font color="#e4dedc">1</font><font color="#c8aea1">1</font><font color="#bf896d">0</font><font color="#be8467">0</font><font color="#927265">1</font><font color="#7a7880">1011111010100</font><font color="#88888c">1</font><font color="#a1a1a4">11</font><font color="#ababaf">0</font><font color="#b4b3ba">00001000110</font><font color="#a69790">0</font><font color="#ceaa94">0</font><font color="#e6e1df">0</font><font color="white">101010111101011001100001100000110</font><br><font color="white">001100100001001100110110000000110</font><font color="#efe9e6">0</font><font color="#eae0db">0</font><font color="#b2adad">1</font><font color="#9d9ca1">0</font><font color="#a1a1a5">1</font><font color="#9f9ea2">1</font><font color="#8a898f">1</font><font color="#838288">0</font><font color="#8c8a91">1</font><font color="#8e8d92">0</font><font color="#7b7980">1</font><font color="#76747c">0</font><font color="#7b7980">1</font><font color="#78767d">1</font><font color="#7a7880">1</font><font color="#7a787f">0</font><font color="#87868a">0</font><font color="#9f9fa2">1</font><font color="#a1a1a4">1</font><font color="#acabb0">1</font><font color="#acabb1">1</font><font color="#abaab0">1</font><font color="#adacb2">1</font><font color="#b3b2b8">0</font><font color="#b3b2b7">0</font><font color="#acabb1">0</font><font color="#adadb2">0</font><font color="#afafb5">1</font><font color="#b0afb5">1</font><font color="#b3b3b8">1</font><font color="#bbbbbe">1</font><font color="#dad9da">0</font><font color="#fdfdfd">1</font><font color="white">1010110100000100101111011000000111</font><br><font color="white">00101111010011101110111010101111000100</font><font color="#fefefe">0</font><font color="#f5f5f5">0</font><font color="#f2f2f2">0</font><font color="#f5f5f6">0</font><font color="#f6f6f6">1</font><font color="#eeedee">0</font><font color="#ebebec">0</font><font color="#eeeeef">1</font><font color="#e2e2e3">1</font><font color="#d2d2d3">0</font><font color="#d6d6d7">0</font><font color="#e3e3e3">1</font><font color="#e0e0e0">0</font><font color="#d3d3d4">0</font><font color="#ddddde">1</font><font color="#eeeeee">0</font><font color="#f0f0f1">0</font><font color="#f2f2f3">0</font><font color="#f5f5f5">10</font><font color="#f2f2f2">1</font><font color="#f2f2f3">0</font><font color="#f3f3f4">01</font><font color="#f5f5f5">0</font><font color="#fafafa">0</font><font color="white">111000010011100011001000010101001110</font><br><font color="white">0010000011110101001111011100111011011100110011111101001000011001000100001101111011100101100110010101</font><br><font color="white">1110100010100001100010100001110110110111000111011000101000111001110000000011011001111101100101100011</font><br><font color="white">0110000110110001100111110011111110010010011110000101100101111110010110110100100011011001000010001110</font><br>
</pre></font>\n?' ;

// Cycle animation
var fadeInOut = true;
// Time to complete animation. Proportional to framerate
var animationDuration = 4000;
// Time it takes each letter to fade in. Inversely proportional to framerate
var animationSpeed = 1000;
var fontSize = 50;

// Keep synced with scss
var numKeyframes = 20;

// Alternate Setup

// let text = `
// Wo ein treues Herze
// In Liebe vergeht,
// Da welken die Lilien
// Auf jedem Beet;
// Da muß in die Wolken
// Der Vollmond gehn,
// Damit seine Tränen
// Die Menschen nicht sehn;
// Da halten die Englein
// Die Augen sich zu
// Und schluchzen und singen
// Die Seele zur Ruh.`

// const fadeInOut = true;
// const animationDuration = 8000
// const animationSpeed = 800
// const fontSize = 34
// const numKeyframes = 20

// ---------------------------------------------------------------
text = text.replace(/\n/i, '');
var p = React.PropTypes;

var Letter = (_temp = _class = function (_React$Component) {
  _inherits(Letter, _React$Component);

  function Letter() {
    _classCallCheck(this, Letter);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = {
      show: false,
      animate: true
    };
    _this.timeouts = [];
    return _this;
  }

  Letter.prototype.componentDidMount = function componentDidMount() {
    if (this.props.animate === 'in') {
      this._fadeIn();
    }
  };

  Letter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.animate !== this.props.animate) {
      if (nextProps.animate === 'in') {
        this._fadeIn();
      } else {
        this._fadeOut();
      }
    }
  };

  Letter.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextState.fade !== this.state.fade || nextState.show !== this.state.show || nextProps.x !== this.props.x || nextProps.y !== this.props.y || nextProps.fontHeight !== this.props.fontHeight;
  };

  Letter.prototype.componentWillUnmount = function componentWillUnmount() {
    this.timeouts.forEach(function (timeout) {
      return clearTimeout(timeout);
    });
  };

  // render component and animate in

  Letter.prototype._fadeIn = function _fadeIn() {
    var _this2 = this;

    this.timeouts.push(setTimeout(function () {
      _this2.setState({
        fade: 'in',
        show: true
      });
      // Disable animation after fade in
      _this2.timeouts.push(setTimeout(function () {
        return _this2.setState({
          animate: false
        });
      }, _this2.animationSpeed));
    }, this.props.animationStart + Math.random() * this.props.animationSpeed));
  };

  // animate out then stop rendering

  Letter.prototype._fadeOut = function _fadeOut() {
    var _this3 = this;

    this.timeouts.push(setTimeout(function () {
      _this3.setState({
        fade: 'out',
        animate: true
      });
      _this3.timeouts.push(setTimeout(function () {
        _this3.setState({
          show: false
        });
      }, _this3.props.animationSpeed));
    }, this.props.animationStart + Math.random() * this.props.animationSpeed));
  };

  Letter.prototype.render = function render() {
    if (!this.state.show) {
      return null;
    }
    var keyframe = Math.floor(Math.random() * this.props.numKeyframes + 1);
    var easingFunction = 'cubic-bezier(' + (Math.random() * .8 + +.1) + ',0,' + (Math.random() * .5 + .25) + ',1)';
    var proportionalPosition = this.props.i / this.props.textLen;
    var transitionDelay = proportionalPosition / 2 + Math.random() * proportionalPosition;
    return React.createElement(
      'div', {
        className: 'letter',
        style: {
          fontSize: this.props.fontHeight,
          height: this.props.fontHeight,
          width: this.props.fontHeight / 2,
          left: this.props.x,
          top: 50,
          transition: '\n            top 1s ' + easingFunction + ' ' + transitionDelay + 's,\n            left 1s ' + easingFunction + ' ' + transitionDelay + 's,\n            font-size 1s ' + easingFunction + ' ' + transitionDelay + 's\n          ',
          animation: this.state.animate ? '\n              ' + ('fade-' + this.state.fade + '-' + keyframe) + '\n              ' + easingFunction + '\n              ' + this.props.animationSpeed + 'ms forwards\n            ' : null
        }
      },
      this.props.char
    );
  };

  return Letter;
}(React.Component), _class.propTypes = {
  x: p.number.isRequired,
  y: p.number.isRequired,
  i: p.number.isRequired,
  textLen: p.number.isRequired,
  char: p.string.isRequired,
  fontHeight: p.number.isRequired,
  numKeyframes: p.number.isRequired,
  animate: p.oneOf(['in', 'out']),
  animationSpeed: p.number.isRequired,
  animationStart: p.number.isRequired
}, _temp);
var RandomText = (_temp2 = _class2 = function (_React$Component2) {
  _inherits(RandomText, _React$Component2);

  function RandomText() {
    _classCallCheck(this, RandomText);

    var _this4 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this4.state = {
      numRows: null,
      chars: null,
      updated: false
    };
    return _this4;
  }

  RandomText.prototype.componentDidMount = function componentDidMount() {
    this.setState(this._mapCharPositions(this.props));
  };

  RandomText.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.fontHeight !== this.props.fontHeight || nextProps.width !== this.props.width) {
      this.setState(this._mapCharPositions(nextProps));
    }
  };

  RandomText.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.state.updated) {
      this.setState({
        updated: false
      });
      return true;
    }
    return nextProps.animate !== this.props.animate || this.state.chars === null;
  };

  // returns an array of chars w/ form [x, y, char]

  RandomText.prototype._mapCharPositions = function _mapCharPositions(props) {
    var fontWidth = props.fontHeight / 2;
    var charsPerRow = Math.floor(props.width / fontWidth);
    var emptySpaceInRow = props.width - charsPerRow * fontWidth;
    var margin = emptySpaceInRow / (charsPerRow + 1);
    var chars = [];
    var text = props.text.trim();
    var textLength = text.length;

    var firstLetterOfWord = true;
    for (var i = 0; i < textLength; i++) {
      var col = i % charsPerRow;

      // Don't push spaces into the array, and if there is a space at the
      // beginning of a line, remove it from the original text and put the next
      // character in its place
      if (text[i] === ' ') {
        firstLetterOfWord = true;
        if (col === 0) {
          text = text.slice(0, i) + text.slice(i + 1);
          i--;
          textLength--;
        }
      } else {
        // Handle text wrapping
        if (firstLetterOfWord) {
          var wordLength = 1;
          var wordCounter = 1;
          while (i + wordCounter < text.length && text[i + wordCounter] !== ' ') {
            wordLength++;
            wordCounter++;
          }
          firstLetterOfWord = false;

          var charsLeftInRow = charsPerRow - col;
          var indOfLastCharInRow = i + charsLeftInRow;
          // If the word is too long to fit on one line hyphenate it
          if (wordLength > charsPerRow) {
            text = text.slice(0, indOfLastCharInRow - 1) + '-' + text.slice(indOfLastCharInRow - 1);
            textLength++;
          }
          // Else insert spaces and adjust textLength to skip the word to the next line
          else if (wordLength > charsLeftInRow) {
            text = text.slice(0, i) + ' '.repeat(wordLength) + text.slice(i);
            textLength += wordLength;
          }
        }
        // Push the char at i into the return arr
        chars.push([col * fontWidth + margin * (col + 1), // x
          Math.floor(i / charsPerRow) * props.fontHeight, // y
          text[i]
        ]);
      }
    }
    var numRows = Math.ceil(textLength / charsPerRow);
    return {
      numRows: numRows,
      chars: chars,
      updated: true
    };
  };

  RandomText.prototype.render = function render() {
    var _this5 = this;

    if (this.state.chars == null) {
      return null;
    } else {
      return React.createElement(
        'div', {
          className: 'container' + ' ' + this.props.className,
          style: {
            height: this.state.numRows * this.props.fontHeight,
            width: this.props.width
          }
        },
        this.state.chars.map(function (char, i) {
          return React.createElement(Letter, {
            x: char[0],
            y: char[1],
            char: char[2],
            fontHeight: _this5.props.fontHeight,
            numKeyframes: numKeyframes,
            key: i,
            i: i,
            textLen: _this5.props.text.length,
            animate: _this5.props.animate,
            animationSpeed: _this5.props.animationSpeed,
            animationStart: (_this5.props.animationDuration - _this5.props.animationSpeed) / _this5.state.chars.length * i
          });
        })
      );
    }
  };

  return RandomText;
}(React.Component), _class2.propTypes = {
  text: p.string.isRequired,
  className: p.string,
  width: p.number.isRequired,
  // Sets font-size
  fontHeight: p.number.isRequired,
  // Duration of each letter's fade in animation
  animationSpeed: p.number.isRequired,
  // Total animation duration (not counting randomness factor)
  animationDuration: p.number.isRequired,
  animate: p.oneOf(['in', 'out']),
  homePage: p.bool
}, _temp2);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App() {
    _classCallCheck(this, App);

    var _this6 = _possibleConstructorReturn(this, _React$Component3.call(this));

    _this6.state = {
      animate: 'in',
      width: document.body.offsetWidth * .6
    };
    if (fadeInOut) {
      setInterval(function () {
        _this6.setState({
          animate: _this6.state.animate == 'in' ? 'out' : 'in'
        });
      }, animationDuration + 5000);
    }
    return _this6;
  }

  App.prototype.componentWillMount = function componentWillMount() {
    this._setupResizeListener();
  };

  App.prototype.render = function render() {
    return React.createElement(RandomText, {
      width: this.state.width,
      text: text,
      fontHeight: fontSize,
      animate: this.state.animate,
      animationDuration: animationDuration,
      animationSpeed: animationSpeed
    });
  };

  App.prototype._getWindowWidth = function _getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  };

  App.prototype._setupResizeListener = function _setupResizeListener() {
    // Create "window.throttledResize" event that listens to resize and throttles it to fire once per frame at most
    // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
    var running = false;
    var throttleResize = function throttleResize() {
      if (!running) {
        running = true;
        requestAnimationFrame(function () {
          window.dispatchEvent(new CustomEvent('throttledResize'));
          running = false;
        });
      }
    };
    window.addEventListener('resize', throttleResize);
    window.addEventListener('throttledResize', this._handleResize.bind(this));
  };

  App.prototype._handleResize = function _handleResize() {
    var width = this._getWindowWidth();
    if (Math.abs(width * .6 - this.state.width) > 100) {
      this.setState({
        width: width * .6
      });
    }
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
