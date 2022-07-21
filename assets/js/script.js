$(document).ready(function () {


    let topLeft = $('.top-left');
    let top = $('.top');
    let topRight = $('.top-right');
    let centerLeft = $('.center-left');
    let center = $('.center');
    let centerRight = $('.center-right');
    let bottomLeft = $('.bottom-left');
    let bottom = $('.bottom');
    let bottomRight = $('.bottom-right');



    let rc1 = [topLeft, centerLeft, top, bottomLeft, topRight];
    let rc1Even = [topLeft, top, topRight]; // This Array is written just to assign the colors.
    let rc1Odd = [topLeft, centerLeft, bottomLeft]; //This Array is written just to assign the colors.

    let rc2 = [centerLeft, top, center, bottom, centerRight];
    let rc2Even = [centerLeft, center, centerRight]; // This Array is written just to assign the colors.
    let rc2Odd = [top, center, bottom]; // This Array is written just to assign the colors.

    let rc3 = [bottomLeft, topRight, bottom, centerRight, bottomRight];
    let rc3Even = [bottomLeft, bottom, bottomRight]; // This Array is written just to assign the colors.
    let rc3Odd = [topRight, centerRight, bottomRight]; // This Array is written just to assign the colors.

    let rcx = [center, topLeft, topRight, bottomRight, bottomLeft,];
    let rcx1 = [topLeft, center, bottomRight]; // This Array is written just to assign the colors.
    let rcx2 = [topRight, center, bottomLeft]; // This Array is written just to assign the colors.


    let turn = 1;


    $('.placement').on('click', function () {
        if ($(this).html() == "") {

            if (turn % 2 != 0) {
                ($(this).html(1));
                turn++;

            } else {
                $(this).html(2);
                turn++;
            }

        } else {
            alert("Please click on the blanks");
        }






        let sum1Odd = rc1[0].html();
        let sum1Even = rc1[0].html();

        for (let i = 1; i < rc1.length; i++) {

            if (i % 2 == 0) {
                sum1Even += rc1[i].html();

            } else {
                sum1Odd += rc1[i].html();
            }
        }

        if (sum1Even == 111) {
            for (let i in rc1Even) {
                $(rc1Even[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum1Odd == 111) {
            for (let i in rc1Odd) {
                $(rc1Odd[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 1 Blue //




        let sum2Odd = rc2[2].html();
        let sum2Even = rc2[0].html();

        for (let i = 1; i < rc2.length; i++) {

            if (i % 2 == 0) {
                sum2Even += rc2[i].html();
            } else {
                sum2Odd += rc2[i].html();
            }
        }

        if (sum2Even == 111) {
            for (let i in rc2Even) {
                $(rc2Even[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum2Odd == 111) {
            for (let i in rc2Odd) {
                $(rc2Odd[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 2 Blue //


        let sum3Odd = rc3[4].html();
        let sum3Even = rc3[0].html();

        for (let i = 1; i < rc3.length; i++) {

            if (i % 2 == 0) {
                sum3Even += rc3[i].html();

            } else {
                sum3Odd += rc3[i].html();
            }
        }

        if (sum3Even == 111) {
            for (let i in rc3Even) {
                $(rc3Even[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum3Odd == 111) {
            for (let i in rc3Odd) {
                $(rc3Odd[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 3 Blue //


        let sum4Odd = rcx[0].html();
        let sum4Even = rcx[0].html();

        for (let i = 1; i < rcx.length; i++) {

            if (i % 2 == 0) {
                sum4Even += rcx[i].html();

            } else {
                sum4Odd += rcx[i].html();
            }
        }

        if (sum4Even == 111) {
            for (let i in rcx2) {
                $(rcx2[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum4Odd == 111) {
            for (let i in rcx1) {
                $(rcx1[i]).css('background-color', 'blue');
            }
            $('#result').show();
            $('#result').html("Player 1 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 4 Blue //

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        let sum5Odd = rc1[0].html();
        let sum5Even = rc1[0].html();

        for (let i = 1; i < rc1.length; i++) {

            if (i % 2 == 0) {
                sum5Even += rc1[i].html();

            } else {
                sum5Odd += rc1[i].html();
            }
        }

        if (sum5Even == 222) {
            for (let i in rc1Even) {
                $(rc1Even[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum5Odd == 222) {
            for (let i in rc1Odd) {
                $(rc1Odd[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 1 Red //


        let sum6Odd = rc2[2].html();
        let sum6Even = rc2[0].html();

        for (let i = 1; i < rc2.length; i++) {

            if (i % 2 == 0) {
                sum6Even += rc2[i].html();
            } else {
                sum6Odd += rc2[i].html();
            }
        }

        if (sum6Even == 222) {
            for (let i in rc2Even) {
                $(rc2Even[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum6Odd == 222) {
            for (let i in rc2Odd) {
                $(rc2Odd[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 2 Red //


        let sum7Odd = rc3[4].html();
        let sum7Even = rc3[0].html();

        for (let i = 1; i < rc3.length; i++) {

            if (i % 2 == 0) {
                sum7Even += rc3[i].html();

            } else {
                sum7Odd += rc3[i].html();
            }
        }

        if (sum7Even == 222) {
            for (let i in rc3Even) {
                $(rc3Even[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum7Odd == 222) {
            for (let i in rc3Odd) {
                $(rc3Odd[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 3 Red //


        let sum8Odd = rcx[0].html();
        let sum8Even = rcx[0].html();

        for (let i = 1; i < rcx.length; i++) {

            if (i % 2 == 0) {
                sum8Even += rcx[i].html();

            } else {
                sum8Odd += rcx[i].html();
            }
        }

        if (sum8Even == 222) {
            for (let i in rcx2) {
                $(rcx2[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })

        } else if (sum8Odd == 222) {
            for (let i in rcx1) {
                $(rcx1[i]).css('background-color', 'red');
            }
            $('#result').show();
            $('#result').html("Player 2 is the winner");
            $('.placement').on('click', function () {
                $('.placement').toggle();
            })
        }
        // 4 Red //



        // Equal 
        let overal = [topLeft, top, topRight, centerLeft, center, centerRight, bottomLeft, bottom, bottomRight];

        if (overal[0].html() != "" && overal[1].html() != "" && overal[2].html() != "" && overal[3].html() != "" && overal[4].html() != "" && overal[5].html() != "" &&
            overal[6].html() != "" && overal[7].html() != "" && overal[8].html() != "") {

            alert('The Game Has Been Tied');
        }












        $('#start').on('click', function () {
            location.reload();
        })

    }) // onclick
}); // onload


