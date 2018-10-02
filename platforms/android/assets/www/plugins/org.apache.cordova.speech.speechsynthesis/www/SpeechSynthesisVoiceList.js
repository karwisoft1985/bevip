cordova.define("org.apache.cordova.speech.speechsynthesis.SpeechSynthesisVoiceList", function(require, exports, module) {

var SpeechSynthesisVoiceList = function(data) {
  this._list = data;
  this.length = this._list.length;
};
    
SpeechSynthesisVoiceList.prototype.item = function(item) {
    return this._list[item];
};

module.exports = SpeechSynthesisVoiceList;
});
