
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1) {
          document.getElementById('home').classList.add('fixed-top');
          document.getElementById('home').classList.add('bg-b');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('home').classList.remove('fixed-top');
          document.getElementById('home').classList.remove('bg-transparent');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
    // window.addEventListener('foot', function() {
    //     if(window.innerWidth <= 990) {
    //         // Kita remove class navbar-fixed
    //         document.getElementById('infor').classList.remove('text-end');
    //     }else{
    //         // diluar dari kondisi diatas kita akan add class navbar-fixed
    //         // $('#infor').addClass('text-center');
    //         document.getElementById('infor').classList.add('text-center');

    //      }
    // });
    // window.bind('DOMContentLoaded load resize', function() {
    //     // pengecekan ukuran width window, bila widthnya lebih kecil atau sama dengan 500
    //     if(window.innerWidth() <= 990) {
    //        // Kita remove class navbar-fixed
    //        $('#infor').removeClass('text-end');
    //        document.getElementById('infor').classList.remove('text-end');
    //     }else{
    //        // diluar dari kondisi diatas kita akan add class navbar-fixed
    //        $('#infor').addClass('text-center');
    //        document.getElementById('infor').classList.add('text-center');
    //     }
    //  });
  }); 