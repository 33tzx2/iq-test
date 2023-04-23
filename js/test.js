$(function() {
  $('#begin-test-btn-1, #begin-test-btn-2, #begin-test-btn-3, #begin-test-link').click(function(){
      $('#hero').toggleClass('hidden');
      $('#test-1').toggleClass('visible');
      $('.header-content').toggleClass('header-visible');
  });
});


$('form').submit(function () {
  return false;
});

let flag = false

$(function () {
  let test1Var1 = $('#test-1-var-1');
  let test1Var2 = $('#test-1-var-2');
  
  $('#test-1-form').on('click', function(){
    if(test1Var1.is(":checked") || test1Var2.is(":checked")){
      flag = true
      test1Var1.removeAttr('required');
      test1Var2.removeAttr('required');
      $('#to-test-2').toggleClass('active-btn-test');
    } else {
      flag = false
      test1Var1.attr('required');
      test1Var2.attr('required');
    }
  })

  $('#to-test-2').click(function(){
    if(flag){
      $('#test-1').toggleClass('visible');
      $('#test-2').toggleClass('visible');
      $('#to-test-2').toggleClass('active-btn-test');
      return flag = false
    }
  });

  let test2Var1 = $('#test-2-var-1');
  let test2Var2 = $('#test-2-var-2');
  let test2Var3 = $('#test-2-var-3');
  let test2Var4 = $('#test-2-var-4');

  $('#test-2-form').on('click', function(){
    if(test2Var1.is(":checked") || test2Var2.is(":checked") || test2Var3.is(":checked") || test2Var4.is(":checked")){
      flag = true
      test2Var1.removeAttr('required');
      test2Var2.removeAttr('required');
      test2Var3.removeAttr('required');
      test2Var4.removeAttr('required');
    } else {
      flag = false
      test2Var1.attr('required');
      test2Var2.attr('required');
      test2Var3.attr('required');
      test2Var4.attr('required');
    }
  })

  $('#to-test-3').click(function(){
    if(flag){
      $('#test-2').toggleClass('visible');
      $('#test-3').toggleClass('visible');
      return flag = false
    }
  });

  let test3Var1 = $('#test-3-var-1');
  let test3Var2 = $('#test-3-var-2');
  let test3Var3 = $('#test-3-var-3');
  let test3Var4 = $('#test-3-var-4');
  let test3Var5 = $('#test-3-var-5');

  $('#test-3-form').on('click', function(){
    if(test3Var1.is(":checked") || test3Var2.is(":checked") || test3Var3.is(":checked") || test3Var4.is(":checked") || test3Var5.is(":checked")){
      flag = true
      test3Var1.removeAttr('required');
      test3Var2.removeAttr('required');
      test3Var3.removeAttr('required');
      test3Var4.removeAttr('required');
      test3Var5.removeAttr('required');
    } else {
      flag = false
      test3Var1.attr('required');
      test3Var2.attr('required');
      test3Var3.attr('required');
      test3Var4.attr('required');
      test3Var5.attr('required');
    }
  })

  $('#to-test-4').click(function(){
    if(flag){
      $('#test-3').toggleClass('visible');
      $('#test-4').toggleClass('visible');
      return flag = false
    }
  });

  let test4Var1 = $('#test-4-var-1');
  let test4Var2 = $('#test-4-var-2');
  let test4Var3 = $('#test-4-var-3');
  let test4Var4 = $('#test-4-var-4');
  let test4Var5 = $('#test-4-var-5');
  let test4Var6 = $('#test-4-var-6');
  
  $('#test-4-form').on('click', function(){
    if(test4Var1.is(":checked") || test4Var2.is(":checked") || test4Var3.is(":checked") || test4Var4.is(":checked") || test4Var5.is(":checked") || test4Var6.is(":checked")){
      flag = true
      test4Var1.removeAttr('required');
      test4Var2.removeAttr('required');
      test4Var3.removeAttr('required');
      test4Var4.removeAttr('required');
      test4Var5.removeAttr('required');
      test4Var6.removeAttr('required');
    } else {
      flag = false
      test4Var1.attr('required');
      test4Var2.attr('required');
      test4Var3.attr('required');
      test4Var4.attr('required');
      test4Var5.attr('required');
      test4Var6.attr('required');
    }
  })

  $('#to-test-5').click(function(){
    if(flag){
      $('#test-4').toggleClass('visible');
      $('#test-5').toggleClass('visible');
      return flag = false
    }
  });

  let test5Var1 = $('#test-5-var-1');
  let test5Var2 = $('#test-5-var-2');
  let test5Var3 = $('#test-5-var-3');
  let test5Var4 = $('#test-5-var-4');
  let test5Var5 = $('#test-5-var-5');
  let test5Var6 = $('#test-5-var-6');
  let test5Var7 = $('#test-5-var-7');
  let test5Var8 = $('#test-5-var-8');
  let test5Var9 = $('#test-5-var-9');

  $('#test-5-form').on('click', function(){
    if(test5Var1.is(":checked") || test5Var2.is(":checked") || test5Var3.is(":checked") || test5Var4.is(":checked") || test5Var5.is(":checked") || test5Var6.is(":checked") || test5Var7.is(":checked") || test5Var8.is(":checked") || test5Var9.is(":checked")){
      flag = true
      test5Var1.removeAttr('required');
      test5Var2.removeAttr('required');
      test5Var3.removeAttr('required');
      test5Var4.removeAttr('required');
      test5Var5.removeAttr('required');
      test5Var6.removeAttr('required');
      test5Var7.removeAttr('required');
      test5Var8.removeAttr('required');
      test5Var9.removeAttr('required');
    } else {
      flag = false
      test5Var1.attr('required');
      test5Var2.attr('required');
      test5Var3.attr('required');
      test5Var4.attr('required');
      test5Var5.attr('required');
      test5Var6.attr('required');
      test5Var7.attr('required');
      test5Var8.attr('required');
      test5Var9.attr('required');
    }
  })

  $('#to-test-6').click(function(){
    if(flag){
      $('#test-5').toggleClass('visible');
      $('#test-6').toggleClass('visible');
      return flag = false
    }
  });

  let test6Var1 = $('#test-6-var-1');
  let test6Var2 = $('#test-6-var-2');
  let test6Var3 = $('#test-6-var-3');
  let test6Var4 = $('#test-6-var-4');
  let test6Var5 = $('#test-6-var-5');
  let test6Var6 = $('#test-6-var-6');
  let test6Var7 = $('#test-6-var-7');
  let test6Var8 = $('#test-6-var-8');
  let test6Var9 = $('#test-6-var-9');

  $('#test-6-form').on('click', function(){
    if(test6Var1.is(":checked") || test6Var2.is(":checked") || test6Var3.is(":checked") || test6Var4.is(":checked") || test6Var5.is(":checked") || test6Var6.is(":checked") || test6Var7.is(":checked") || test6Var8.is(":checked") || test6Var9.is(":checked")){
      flag = true
      test6Var1.removeAttr('required');
      test6Var2.removeAttr('required');
      test6Var3.removeAttr('required');
      test6Var4.removeAttr('required');
      test6Var5.removeAttr('required');
      test6Var6.removeAttr('required');
      test6Var7.removeAttr('required');
      test6Var8.removeAttr('required');
      test6Var9.removeAttr('required');
    } else {
      flag = false
      test6Var1.attr('required');
      test6Var2.attr('required');
      test6Var3.attr('required');
      test6Var4.attr('required');
      test6Var5.attr('required');
      test6Var6.attr('required');
      test6Var7.attr('required');
      test6Var8.attr('required');
      test6Var9.attr('required');
    }
  })

  $('#to-test-7').click(function(){
    if(flag){
      $('#test-6').toggleClass('visible');
      $('#test-7').toggleClass('visible');
      return flag = false
    }
  });

  let test7Var1 = $('#test-7-var-1');
  let test7Var2 = $('#test-7-var-2');
  let test7Var3 = $('#test-7-var-3');
  let test7Var4 = $('#test-7-var-4');
  let test7Var5 = $('#test-7-var-5');
  let test7Var6 = $('#test-7-var-6');

  $('#test-7-form').on('click', function(){
    if(test7Var1.is(":checked") || test7Var2.is(":checked") || test7Var3.is(":checked") || test7Var4.is(":checked") || test7Var5.is(":checked") || test7Var6.is(":checked")){
      flag = true
      test7Var1.removeAttr('required');
      test7Var2.removeAttr('required');
      test7Var3.removeAttr('required');
      test7Var4.removeAttr('required');
      test7Var5.removeAttr('required');
      test7Var6.removeAttr('required');
    } else {
      flag = false
      test7Var1.attr('required');
      test7Var2.attr('required');
      test7Var3.attr('required');
      test7Var4.attr('required');
      test7Var5.attr('required');
      test7Var6.attr('required');
    }
  })

  $('#to-test-8').click(function(){
    if(flag){
      $('#test-7').toggleClass('visible');
      $('#test-8').toggleClass('visible');
      return flag = false
    }
  });

  let test8Var1 = $('#test-8-var-1');
  let test8Var2 = $('#test-8-var-2');
  let test8Var3 = $('#test-8-var-3');
  let test8Var4 = $('#test-8-var-4');

  $('#test-8-form').on('click', function(){
    if(test8Var1.is(":checked") || test8Var2.is(":checked") || test8Var3.is(":checked") || test8Var4.is(":checked")){
      flag = true
      test8Var1.removeAttr('required');
      test8Var2.removeAttr('required');
      test8Var3.removeAttr('required');
      test8Var4.removeAttr('required');
    } else {
      flag = false
      test8Var1.attr('required');
      test8Var2.attr('required');
      test8Var3.attr('required');
      test8Var4.attr('required');
    }
  })

  $('#to-test-9').click(function(){
    if(flag){
      $('#test-8').toggleClass('visible');
      $('#test-9').toggleClass('visible');
      return flag = false
    }
  });

  let test9Var1 = $('#test-9-var-1');
  let test9Var2 = $('#test-9-var-2');
  let test9Var3 = $('#test-9-var-3');

  $('#test-9-form').on('click', function(){
    if(test9Var1.is(":checked") || test9Var2.is(":checked") || test9Var3.is(":checked")){
      flag = true
      test9Var1.removeAttr('required');
      test9Var2.removeAttr('required');
      test9Var3.removeAttr('required');
    } else {
      flag = false
      test9Var1.attr('required');
      test9Var2.attr('required');
      test9Var3.attr('required');
    }
  })

  $('#to-test-10').click(function(){
    if(flag){
      $('#test-9').toggleClass('visible');
      $('#test-10').toggleClass('visible');
      return flag = false
    }
  });

  let test10Var1 = $('#test-10-var-1');
  let test10Var2 = $('#test-10-var-2');
  let test10Var3 = $('#test-10-var-3');

  $('#test-10-form').on('click', function(){
    if(test10Var1.is(":checked") || test10Var2.is(":checked") || test10Var3.is(":checked")){
      flag = true
      test10Var1.removeAttr('required');
      test10Var2.removeAttr('required');
      test10Var3.removeAttr('required');
    } else {
      flag = false
      test10Var1.attr('required');
      test10Var2.attr('required');
      test10Var3.attr('required');
    }
  })

  $('#to-test-11').click(function(){
    if(flag){
      $('#test-10').toggleClass('visible');
      $('#test-11').toggleClass('visible');
      return flag = false
    }
  });

  let test11Var1 = $('#test-11-var-1');
  let test11Var2 = $('#test-11-var-2');
  let test11Var3 = $('#test-11-var-3');
  let test11Var4 = $('#test-11-var-4');
  let test11Var5 = $('#test-11-var-5');
  let test11Var6 = $('#test-11-var-6');

  $('#test-11-form').on('click', function(){
    if(test11Var1.is(":checked") || test11Var2.is(":checked") || test11Var3.is(":checked") || test11Var4.is(":checked") || test11Var5.is(":checked") || test11Var6.is(":checked")){
      flag = true
      test11Var1.removeAttr('required');
      test11Var2.removeAttr('required');
      test11Var3.removeAttr('required');
      test11Var4.removeAttr('required');
      test11Var5.removeAttr('required');
      test11Var6.removeAttr('required');
    } else {
      flag = false
      test11Var1.attr('required');
      test11Var2.attr('required');
      test11Var3.attr('required');
      test11Var4.attr('required');
      test11Var5.attr('required');
      test11Var6.attr('required');
    }
  })

  $('#to-calculate').click(function(){
    if(flag){
      $('#test-11').toggleClass('visible');
      $('#calculating').toggleClass('show-result');
      setTimeout(() => {
        $('#calculating').toggleClass('show-result');
        $('#result').toggleClass('show-result');
      }, 5000)
      return flag = false
    }
  });

});

