$( document ).ready(function() {


  console.log( "Workflow-SCSS!" );

  $(".btn-ingredienser, #btn-tilbage").click(function(){
    $(this).parents('.card-item-grid').toggleClass("flipped");
  });

});
