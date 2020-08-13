'use strict';
// $(function(){
//     $('#primary').on('change', function(e){
//         $('#secondary').val('');
//         var endingChar = $(this).val().split('').pop();
//         var selected = $( 'primary' ).val();
//         $('#secondary option').addClass('show');
//         $('#secondary option[value^='+selected+']').toggleClass('show');
//     })
// });
// $(document).ready(function(){
//     $('#primary').on('change', function (){
//         if(this.value == "Enhancement"){
//             $('#en_sh').show();
//         }
//         else{
//             $('#en_sh').hide();
//         }
//     });
// });
$('#primary, #secondary, #document').on('change', function(){
    $('#tags').val($('#primary option:selected').text() + ' - ' +
    $('#secondary option:selected').text() + ' - ' +
    $('#document option:selected').text());
});