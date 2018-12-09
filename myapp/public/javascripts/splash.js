$(document).ready(function() {
    console.log("shrodinger's cat");
    codeCounter = 0;

    document.getElementById("cp1").value = 0;
    document.getElementById("cp2").value = 0;
    document.getElementById("cp3").value = 0;
    document.getElementById("cp4").value = 0;

    $('.selectionBtn').click(function () {
        let color = $(this).css('background-color');
        if (document.getElementById("cp1").value == 0) {
            $('#cp1').css('background-color', color);
            document.getElementById("cp1").value = 1;

            codeCounter++;

            if (codeCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("cp2").value == 0) {
            $('#cp2').css('background-color', color);
            document.getElementById("cp2").value = 1;

            codeCounter++;

            if (codeCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("cp3").value == 0) {
            $('#cp3').css('background-color', color);
            document.getElementById("cp3").value = 1;

            codeCounter++;

            if (codeCounter == 4) {
                $('.fake').removeClass('fake');
            }

        } else if (document.getElementById("cp4").value == 0) {
            $('#cp4').css('background-color', color);
            document.getElementById("cp4").value = 1;

            codeCounter++;

            if (codeCounter == 4) {
                $('.btnContainer').removeClass('fake');
                $('.submitBtn').removeClass('fake');
                $('.text').removeClass('fake');
            }
        }
    });

    $('.inputPeg').click(function () {
        $(this).css('background', 'none');
        this.value = 0;

        codeCounter--;
        $('.submitContainer').addClass('fake');
        $('.submitBtn').addClass('fake');
        $('.text').addClass('fake');
    });

    $('.submitBtn').click(function() {
        $('.fake').removeClass('fake')
        $('#codeStart').hide();
    });
});;