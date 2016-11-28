function mouseTrack() {
    $(window).mousemove(function(e){
        var $X = e.pageX, $Y = e.pageY,
            $wHeight = $(window).height(),
            $wWidth = $(window).width();
            $finalX = ((($X - $wWidth/2) / $wWidth) * 100) * 0.1,
            $finalY = ((($Y - $wHeight/2) / $wHeight) * 100) * 0.1;

        var $hex1X = -($finalX) + 50, 
            $hex1Y = -($finalY) + 50;
        var $hex2X =  $finalX + 50, 
            $hex2Y =  $finalY + 50;

        $('.target').html('Hex1 - Left: '+ (Math.round($hex1X * 100) / 100) + '% Top: '+(Math.round($hex1Y * 100) / 100) + '%<br><br>Hex2 - Left: '+ (Math.round($hex2X * 100) / 100) + '% Top: '+(Math.round($hex2Y * 100) / 100) + '%');

        for(var i = 1; i <= 3; i++) {
            $('.hex'+i).animate({ textIndent: 1 }, {
                step: function(now,fx) { $('.hex'+i).css({ top: eval('$hex'+i+'Y') + '%', left: eval('$hex'+i+'X') + '%' }); }, duration:0
            });
        }
        
    });   
};

function stopMouseTrack() {$(window).off('mousemove');}

$(document).ready(function(){
    $('.hex1,.hex2').click(function(){ mouseTrack(); }); 
    $('.target').click(function(){ stopMouseTrack(); });
});