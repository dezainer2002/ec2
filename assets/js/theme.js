$( document )
  .on(`click`, `#sidebarCollapse`, function() {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
    const getStatus =   $( this ).find( `.burgerIcon` ).hasClass( `active` );
    if ( getStatus ) {
      $( this ).find( `.burgerIcon` ).removeClass( `active` );
      $( this ).find( `.crossIcon` ).addClass( `active` );
    } else {
      $( this ).find( `.crossIcon` ).removeClass( `active` );
      $( this ).find( `.burgerIcon` ).addClass( `active` );
    }
  })
  .on(`click`, `#sidebar`, function( e ) {
    if(e.target == this){
      $('#sidebar').toggleClass('active');
      $('#sidebarCollapse').toggleClass('active');
    }
  });
