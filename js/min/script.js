$(document).ready(function(){console.log("Workflow-SCSS!"),$(".btn-ingredienser, .btn-back").click(function(){$(this).parents(".card-item-grid").toggleClass("flipped")});var e=$(".card-item__ingrediens-list"),n=e.children();e.on("click",":checkbox",function(){var t,c=document.createDocumentFragment(),i=document.createDocumentFragment();for(t=0;t<n.length;t++)n[t].getElementsByTagName("input")[0].checked?c.appendChild(n[t]):i.appendChild(n[t]);e.append(c).append(i)})});