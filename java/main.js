
// $dan ( "a" ).click(function() {
//     console.log( "Hey you clicked on me" );
// });

// $iwao ( "a" ).click(function() {
//     console.log( "Hey you clicked on me again." );
// });


$( "a" ).click(function( eventObject ) {
    var elem = $( this );
    if ( elem.attr( "href" ).match( /evil/ ) ) {
        eventObject.preventDefault();
        elem.addClass( "evil" );
    }
});