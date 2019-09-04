$(document).ready(function () {

    // Slide selection
    $('[data-target]').click(function(){
        if ($(this).data('target') === '#slideFive') {
            $('#headingFive').trigger('click');
            $('#sumQuestion').removeClass('d-none');
            //Hide Verify if user goes back to previous slide
            $('.verify-btn-1').removeClass('d-none');
            $('.verify-btn-2').addClass('d-none');
            return true;
        }
        if ($(this).data('target') === '#slideSix') {
            $('#headingSix').trigger('click');
            $('#sumInfo').removeClass('d-none');
            summarySuccess();
            return true;
        }
        targetTriggerClick($(this));
    });

    function targetTriggerClick($el) {
        var target = $el.data('target');
        var trigger = $(target).parent().find('input[name="fdis-wizard"]');
        $(trigger).click();
    }

    $('.verify-btn-1').click(function(){
        $(this).addClass('d-none');
        $(this).parent().find('.verify-btn-2').removeClass('d-none');
    });

    $('.next-alt').click(function(){
        $('#progressBar').addClass('no-wizard');
        $('#summary').addClass('no-wizard');
        $('#formback1').addClass('d-none');
        $('#formback2').removeClass('d-none');
    });
    
    $('input[name="fdis-wizard"]').on('change',function(){
        $('#wizard section').removeClass('active');
        $('.js-slide').removeClass('active');
        if($('input[name="fdis-wizard"]:checked')) {
            $(this).parent().addClass('active');
            $(this).parent().find('.js-slide').addClass('active');
        }
        if($('#slideOne.active').length === 1 || $('#slideTwo.active').length === 1) {
            $('#progressBar').removeClass('d-flex').addClass('d-none');
            $('#progressBar').css('opacity',0);
        } else {
            $('#progressBar').removeClass('d-none').addClass('d-flex');
            $('#progressBar').css('opacity',1);
        }
        if($('#slideOne.active').length === 1 || $('#slideTwo.active').length === 1 || $('#slideThree.active').length === 1) {
            $('aside').addClass('d-none');
        } else {
            $('aside').removeClass('d-none');
        }
        if($('#slideThree.active').length === 1) {
            if($('#prog1.completed').length === 1) {
                $('#prog1').addClass('active');
            } else {
                setTimeout(function(){
                    $('#prog1').addClass('active');
                },1000);
            }
        }
        if($('#slideFour.active').length === 1) {
            $('#prog1').removeClass('active').addClass('completed');
            $('#prog2').addClass('active');
        }
        if($('#slideFive.active').length === 1) {
            $('#prog2').removeClass('active').addClass('completed');
            $('#prog3').addClass('active');
        }
        if($('#slideSix.active').length === 1) {
            $('#prog3').removeClass('active').addClass('completed');
            $('#prog4').addClass('active');
        }
    });

    $('input[name="device"]').on('change',function(){
        if($('input#clover:checked').length === 1){
            $('#cloverDevice').addClass('show-options');
        } else {
            $('#cloverDevice').removeClass('show-options');
        }
    });


    // WATSON API
    // 2 versions - clover and non-clover
    $('#watsonApiSearch').click(function(){
        $(this).fadeOut(200);
        setTimeout(function(){
            $('#watsonPt1').fadeIn(200);
        },500);
    });

    $('#watsonPt1 input[type="radio"]').on('change',function(){
        if ($('#watsonPt1 input[type="radio"]:checked').length === 1){
            var watsonVal = $(this).val();
            setTimeout(function(){
                $('#watsonPt1').fadeOut(200);
            },1000);
            setTimeout(function(){
                $('#watsonApiSearchInput').val(watsonVal).prop('disabled',true);
                $('#watsonPt2').fadeIn(200);
            },1600);
        }
    });

    $('#watsonReturn').click(function(){
        $('#watsonPt2').fadeOut(200);
        setTimeout(function(){
            $('#watsonApiSearchInput').prop('disabled',false);
            $('#watsonPt1 input[type="radio"]').prop('checked',false);
            $('#watsonPt1').fadeIn(200);
        },1000);
    });

    // Summary - check track of selected options
    $('#yourDevice input').on('change',function(){
        if($('#yourDevice input#clover:checked').length === 1){
            var cloverVal = [];
            $.each($("input[name='cloverdevice']:checked"), function(){            
                cloverVal.push($(this).val());
            });
            $('#sumDevice .sum-p').text(cloverVal);
        } else {
            var deviceVal = $(this).val();
            $('#sumDevice .sum-p').text(deviceVal);
        }
    });

    $('#watsonPt1 input').on('change',function(){
        var questionVal = $(this).val();
        $('#sumQuestion .sum-p').text(questionVal);
    });
    $('#watsonPt2 textarea').on('keyup',function(){
        var tellMoreVal = $(this).val();
        $('#sumQuestion .sum-p2').text(tellMoreVal);
    });

    $('#expandSuccess').click(function(){
        $(this).fadeOut();
        $('#sumQuestion .sum-p2').removeClass('text-truncate');
    });
    function summarySuccess() {
        $('#expandBack').addClass('d-none');
        $('#expandSuccess').removeClass('d-none');
        $('#summary .small').find('button').hide();
    }

    $('.your-info input').on('change',function(){
        var fnameVal = $('#firstName').val();
        var lnameVal = $('#lastName').val();
        $('#sumInfo .sum-name').text(fnameVal + ' ' + lnameVal);
        $('#sumInfo .sum-email').text($('#emailAddress').val());
        $('#sumInfo .sum-phone').text($('#phoneNumber').val());
        $('#sumInfo .sum-busname').text($('#businessLegal').val());
        $('#sumInfo .sum-mid').text($('#merchantId').val());
    });
    

});