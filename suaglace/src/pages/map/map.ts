import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Geolocation } from '@ionic-native/geolocation';
import { RinkDetailsPage } from '../rink-details/rink-details';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: any;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private http: HTTP, private geolocation: Geolocation) { }

  ionViewDidLoad() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(45.504429, -73.612904);

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

    this.http.get('http://00242053.ngrok.io/api/info', {}, {})
      .then((data: any) => {
        JSON.parse(JSON.parse(data.data)).forEach(element => {
          var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: element.Lat, lng: element.Lng }
          });
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.geolocation.getCurrentPosition().then((resp) => {
      var pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.map.setCenter(pos);
      var icon = {
        url: 'http://simpleicon.com/wp-content/uploads/map-marker-17.png',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(25, 41.5)
      };
      var marker = new google.maps.Marker({
        map: this.map,
        position: pos,
        icon: icon
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    const contentString = '<div id="content">' +
      '<div id="siteNotice">' +
      '</div>' +
      '<h5 id="firstHeading" class="firstHeading">Patinoire HEC</h5>' +
      '<div id="bodyContent">' +
      '<b>Adresse</b> : 3000 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 2A7' +
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
    marker.addListener('click', () => {
      infowindow.open(this.map, marker);
    });

    google.maps.event.addDomListener(marker, 'click', function() {
      console.log("test")
  });

  }
  openDetails(rink) {
    this.navCtrl.push(RinkDetailsPage)
  }

  openReserve() {
    console.log("Open Reserve");
  }

}
