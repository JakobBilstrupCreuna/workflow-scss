$(document).ready(function() {
    console.log("Workflow-SCSS!");

    $(".btn-ingredienser, .btn-back").click(function() {
        $(this).parents('.card-item-grid').toggleClass("flipped");
    });

    // Ingredien list order script
    // Variabler til listen!
    var list = $(".card-item__ingrediens-list"),
        itemOrder = list.children();

    list.on("click", ":checkbox", function() {
        var i, checked = document.createDocumentFragment(),
            unchecked = document.createDocumentFragment();

        // i skifter position af itemOrder
        for (i = 0; i < itemOrder.length; i++) {
            if (itemOrder[i].getElementsByTagName("input")[0].checked) {
                checked.appendChild(itemOrder[i]);
            } else {
                unchecked.appendChild(itemOrder[i]);
            }
        }
        list.append(checked).append(unchecked);
    })
  $("label").click(function() {
    $(this).parent().children("p").toggleClass("checked");
    $(this).toggleClass("label-checked");
  });
});
