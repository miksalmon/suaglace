import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: any;

  constructor(public navCtrl: NavController, private http: HTTP) { }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(45.504384, -73.612883);

    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      scaleControl: false,
      mapTypeControl: false,
      zoomControl: false,
      clickableIcons: false,
      fullscreenControl: false
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    const HEC = new google.maps.LatLng(45.503363, -73.620758);

    this.http.get('http://dcabb22e.ngrok.io/api/server', {}, {})
      .then((data: any) => {
        JSON.parse(JSON.parse(data.data)).forEach(value => {
          var geocoder = new google.maps.Geocoder;
          geocoder.geocode({
            address: value.Parc,
            componentRestrictions: {
              country: 'CA',
              locality: 'Montreal'
            }
          }, (results, status) => {
            if (status == 'OK') {
              this.map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                map: this.map,
                position: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() }
              });
            }
          });
        });
      })
      .catch(error => {
        console.log(error);
      });

    const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h5 id="firstHeading" class="firstHeading">Patinoire HEC</h5>' +
      '<div id="bodyContent">' +
      '<b>Adresse</b> : 3000 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 2A7' +
      '<br>' + '<br>' +
      '<button type="button" class="btn btn-outline-primary btn-lg viewDetails">Reserve</button>' +
      '<button type="button" class="btn btn-primary btn-lg viewDetails">View Details</button>' +
      '</div>' +
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    var marker = new google.maps.Marker({
      position: HEC,
      map: this.map,
      title: 'HEC Montreal'
    });
    marker.addListener('click', function () {
      infowindow.open(this.map, marker);
    });
  }
}
