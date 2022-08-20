let map;

const mapOpts = {
      center: {lat: 32.344902, lng: -90.352267},
      mapId: '9a7ff6868a2f9d32',
      zoom: 13,
 };

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), mapOpts);
  
  var marker = new google.maps.Marker({
      position: {
        lat: 32.344902, lng: -90.352267
      },
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "https://i.ibb.co/WvNPSD5/Pin.png",
  });
  
}

window.initMap = initMap;

$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false,
      dotsClass: 'slick-dots',
      infinite: true,
    });
    $('.slidernews').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: true,
        dotsClass: 'slick-dots',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
  });

  

