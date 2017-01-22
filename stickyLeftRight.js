$(function(){ // document ready
   if (!!$('#newspro').length) { // make sure "#sticky" element exists
      var el = $('#newspro');
      var stickyTop = $('#newspro').offset().top; // returns number
      var footerTop = $('#stopfixed').offset().top; // returns number
      var stickyHeight = $('#newspro').height();
      var limit = footerTop - stickyHeight - 50;
      $(window).scroll(function(){ // scroll event
          var windowTop = $(window).scrollTop(); // returns number
            
          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 0 });
          }
          else {
             el.css('position','static');
          }
            
          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }     
        });
   }
});

$(function(){ // document ready
   if (!!$('#sidebar').length) { // make sure "#sticky" element exists
      var el = $('#sidebar');
      var stickyTop = $('#sidebar').offset().top; // returns number
      var footerTop = $('#stopfixed').offset().top; // returns number
      var stickyHeight = $('#sidebar').height();
      var limit = footerTop - stickyHeight - 50;
      $(window).scroll(function(){ // scroll event
          var windowTop = $(window).scrollTop(); // returns number
            
          if (stickyTop < windowTop){
             el.css({ position: 'fixed', top: 0 });
          }
          else {
             el.css('position','static');
          }
            
          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }     
        });
   }
});
