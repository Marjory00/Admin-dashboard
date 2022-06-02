import { Component, OnInit } from '@angular/core';


declare const google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})


export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var myLatlng = new google.maps.Latlng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, // disabled scroll over the map, to avoid scroll through page
      styles: [{
        "featureType": "water",
        "stylers": [{
          "saturation": 43
        }, {
          "lightness": -11
        }, {
          "hue": "#0088ff"
        }]
      }, {
        "featureType": "road",
        "elementType": [{
          "hue": "#ff0000"
        }, {
          "saturation": -100
        }, {
          "lightness": 99
        }]

        }, {
          "featureType": "road",
          "elementType": "geometric.stroke",
          "stylers": [{
            "color": "#808080"
          }, {
            "lightness": 54
          }]
        }, {

        "featureType": "road",
        "elementType": "geometric.stroke",
        "stylers": [{
          "color": "#808080"
        }, {
          "lightness": 54
        }]
      }, {

    "featureType": "landscape.man_made",
    "elementType": "geometric.fill",
    "stylers": [{
      "color": "#ece2d9"
    }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometric.fill",
      "stylers": [{
        "color": "#ccdca1"
      }]

      }, {

              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#767676"
              }]

            }, {

              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "color": "#ffffff"
              }]

            }, {
              "featureType": "poi",
              "stylers": [{
                "visibility": "off"
              }]

            }, {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#b8cb93"

              }]

            }, {
              "featureType": "poi.park",
              "stylers": [{
                "visibility": "on"
              }]

            }, {
              "featureType": "poi.sports_complex",
              "stylers": [{
                "visibility": "on"
              }]

            }, {
              "featureType": "poi.medical",
              "stylers": [{
                "visibility": "on"
              }]
            }, {
              "featureType": "poi.business",
              "stylers": [{
                "visibility": "simplified"
              }]
            }]
          };
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);

          var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
          });

          // To add the marker to the map, call setMap();
          marker.setMap(map);
        }
      }
