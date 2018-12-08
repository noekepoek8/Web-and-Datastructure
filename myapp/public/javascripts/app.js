$(document).ready(function() {

    var pegCounter = 0;

    document.getElementById("p1").value = [0, 0];
    document.getElementById("p2").value = [0, 0];
    document.getElementById("p3").value = [0, 0];
    document.getElementById("p4").value = [0, 0];
   
    
    $('.selectionBtn').click(function () {
        let color = $(this).css('background-color');
        if (document.getElementById("p1").value[0] == 0) {
            $('#p1').css('background-color', color);
            document.getElementById("p1").value[0] = 1;

            pegCounter++;

            if (pegCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("p2").value[0] == 0) {
            $('#p2').css('background-color', color);
            document.getElementById("p2").value[0] = 1;

            pegCounter++;

            if (pegCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("p3").value[0] == 0) {
            $('#p3').css('background-color', color);
            document.getElementById("p3").value[0] = 1;

            pegCounter++;

            if (pegCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("p4").value[0] == 0) {
            $('#p4').css('background-color', color);
            document.getElementById("p4").value[0] = 1;

            pegCounter++;

            if (pegCounter == 4) {
                $('.fake').removeClass('fake');
            }
        }
    });

    $('.inputPeg').click(function () {
        $(this).css('background', 'none');
        this.value[0] = 0;

        pegCounter--;
        $('.submitContainer').addClass('fake');
        $('.submitBtn').addClass('fake');
        $('.text').addClass('fake');
    });

    var number = 8;
    var blk = 0;
    var wht = 0;

    document.getElementById("ap1").value = 0;
    document.getElementById("ap2").value = 0;
    document.getElementById("ap3").value = 0;
    document.getElementById("ap4").value = 0;

    $('.submitBtn').click(function () {
        if (!($(this).hasClass('fake'))) {
            for(let i = 0; i < 4; i++) {
                let guessColor = $(document.getElementById('p'+(i + 1))).css('background-color');
                $(document.getElementById('r' + number).childNodes[2*i+1]).css('background-color', guessColor);
            }
    
            for(let i = 1; i < 5; i++) {
                if($(document.getElementById('p'+(i))).css('background-color') == $(document.getElementById('ap'+(i))).css('background-color')) {
                    (document.getElementById('p'+ i)).value[1] = 1;
                    (document.getElementById('ap'+ i)).value = 1;
                    blk++;
                }
            }
            
            if (blk != 0) {
                for (let i = 0; i < blk; i++) {
                    $(document.getElementById('cr' + number).childNodes[2*i+1]).css('background-color', 'black');
                }
            }

    
            if (blk != 4) {
                for (let i= 0; i < 4; i++) {
                    if ((document.getElementById('p'+ (i + 1))).value[1] == 0) {
                        for (let j = 1; j < 5; j++) {
                            if ((document.getElementById('ap'+ j)).value == 0) {
                                if ($(document.getElementById('p'+(i + 1))).css('background-color') == $(document.getElementById('ap'+(j))).css('background-color')) {
                                    wht++;
                                    (document.getElementById('ap'+ j)).value = 1;
                                    i++;
                                    j = 1;
                                }
                            }
                        }
                    }
                }
            } else if (blk == 4) {
                for (let i = 0; i < 4; i++) {
                    document.getElementsByClassName("answerPeg")[i].style.display="block";
                }
            }
    
            if (wht != 0) {
                for (let i = blk; i < (blk + wht); i++) {
                    $(document.getElementById('cr' + number).childNodes[2*i+1]).css('background-color', 'white');
                }
            }
    
            for(let i = 1; i < 5; i++) {
                $(document.getElementById('p'+i)).css('background', 'none');
                (document.getElementById('p'+i)).value[0] = 0;
                (document.getElementById('p'+i)).value[1] = 0;
                (document.getElementById('ap'+i)).value = 0;
               
                blk = 0;
                wht = 0;
                pegCounter = 0;
                $('.submitContainer').addClass('fake');
                $('.submitBtn').addClass('fake');
                $('.text').addClass('fake');
            }
    
            number--;
        }
    });

});
