// Listen for clicks on links with specific class
$(".time-link").on("click", function(e){
    // Prevent default event.
    e.preventDefault();
    // Find jPlayer instance and play it from time value stored in data attribute on link.
    $(".field-name-field-posnetek .jp-jplayer").jPlayer("play", $(this).data("seconds"));
})
