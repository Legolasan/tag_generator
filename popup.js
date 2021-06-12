'use strict';

$('#primary, #secondary, #teritiary').on('change', function(){
    $('#tags').val($('#primary option:selected').text() + ' - ' +
    $('#secondary option:selected').text() + ' - ' +
    $('#teritiary option:selected').text());
});

// $(document).ready(function(){
//     $('.initial').on('change', function(){
//        var result= $('#primary').text() + '-' + $('#secondary').text() + '-' + $('#teritiary').text();
//        $('#tags').text(result);
//     });
// })