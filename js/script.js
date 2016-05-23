$( document ).ready(function() {
    console.log( "Workflow-SCSS!" );

  $(".btn-ingredienser").click(function(){
    $(this).parents('.card-item-grid').toggleClass("flipped");
  });

});
