$(document).ready( function(){
 
    // the top part of the block
    $('#sidebar-last .block h2, #header-regions .block h2, #main-content .odd h2').corner("top");
 
    // the bottom part of the block
    $('#sidebar-last .block .content, #header-regions .block .content, #main-content .node-content ').corner("bottom");
 
});
