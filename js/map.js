    var locations = [
      
      ['Sky Tower', -36.8484, 174.7622, 1],
      ['War Memorial Museum', -36.8604, 174.7778, 2],
      ['One Tree Hill', -36.9000, 174.7833, 3],
      ['Kelly Tarlton Sea Life Aquarium', -36.8469, 174.8174, 4],
      ['Kaipara Coast Sculpture Gardens', -36.5877, 174.4859, 5],

      ['Tepapa Museum', -41.2905, 174.7821, 6],
      ['The Weta Cave', -41.3064, 174.8243, 7],
      ['Beehive', -41.2784, 174.7767, 8],
      ['Mount Victoria', -41.2965, 174.7854, 9],
      ['Zealandia', -41.2901, 174.7536, 10],

      ['Banks Peninsula', -43.7500, 173.0000, 11],
      ['Botanic Gardens', -43.5307, 172.6202, 12],
      ['Airforce Museum', -43.5470, 172.5476, 13],
      ['Willowbank Wildlife Reserve', -43.4633, 172.5942, 14],
      ['Christchurch Gondola', -43.5848, 172.7077, 15],

      ['Toitu Otago Settlers Museum', -45.8770, 170.5058, 16],
      ['Olveston Historic Homes', -45.8661, 170.5025, 17],
      ['Larnach Castle', -45.8616, 170.6272, 18],
      ['Penguin Place', -45.7963, 170.7309, 19],
      ['Christchurch Gondola', -45.8744, 170.5029, 20],

    ];

var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: new google.maps.LatLng(-40.1, 172),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

 var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

//SELECT FUNCTION 

var markerData= [
        {lat: -36.8485 , lng: 174.7633  , zoom: 10 , name: "Auckland"},
        {lat: -41.2865 , lng: 174.7762  , zoom: 12 , name: "Wellington"},
        {lat: -43.5321 , lng: 172.6362  , zoom: 9 , name: "Christchurch"},
        {lat: -45.8788 , lng: 170.5028  , zoom: 12 , name: "Dunedin"},
    ];

markerData.forEach(function(data) {
    // Create a marker on given position
    var newmarker= new google.maps.Marker({
        map:map,
        position:{lat:data.lat, lng:data.lng},
        title: data.name
    });


    // Create an option on the SELECT control
    jQuery("#selectlocation").append('<option value="'+[data.lat, data.lng,data.zoom].join('|')+'">'+data.name+'</option>');
});

$(document).on('change','#selectlocation',function() {
    var latlngzoom = jQuery(this).val().split('|');
    var newzoom = 1*latlngzoom[2],
    newlat = 1*latlngzoom[0],
    newlng = 1*latlngzoom[1];
    map.setZoom(newzoom);
    map.setCenter({lat:newlat, lng:newlng});
});