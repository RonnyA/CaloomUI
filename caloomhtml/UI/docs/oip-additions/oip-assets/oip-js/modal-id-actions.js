$(document).on("click", ".open-IDAction_ConfirmRemove", function () {
    var fieldid = $(this).data('id');
    var fieldquestion = $(this).data('question');


    $('.modal-body #ObjectFieldID').val(fieldid);
    $('.modal-body #question').val(fieldquestion);


    $('#IDAction_ConfirmRemove').modal('show');
});

$("#edittoggle").click(function () {
    // alert('Toggling page elements to/from edit mode...');
    var inEditMode = $(".editable");
    var notInEditMode = $(".noteditable");
    inEditMode.removeClass("editable").addClass("noteditable");
    notInEditMode.removeClass("noteditable").addClass("editable");
    // alert("Toggled to edit: " + notInEditMode.length + " - toggled off from edit: " + inEditMode.length + " elements...");
});

