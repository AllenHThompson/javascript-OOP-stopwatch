$(document).ready(function () {

     // $('#the-button').click(function(){
     //      $('#the-button').text('Stop');
     //
     //      this.start();
     //
     // });
     //
     // $('#clear-button').click(function(){
     //      $('#the-button').text('Start');
     // });
     //
     //
     // $('#timer').text(this.startTime);




     function Stopwatch() {
          this.startTime = 0;
          this.stopTime = 0;
          this.totalElasped = 0;
          this.isStarted = false;

          this.oneHour = 1000 * 60 * 60;
          this.oneMin = 1000 * 60;
          this.oneSecond = 1000;

     }

     Stopwatch.prototype.start = function() {
          this.startTime = new Date().getTime();
     };

     Stopwatch.prototype.stop = function() {

     };

     Stopwatch.prototype.reset = function() {

     };


});
