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
  public selectedRink: any;
  public user = {
    'Name': 'Samuel Chapleau',
    'PreferedPosition': 'Attaquant',
    'FavoriteRink': 'Parc Beaubien',
    'Id': '123456789'
  };

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private http: HTTP, private geolocation: Geolocation) {
    setInterval(() => {
      this.selectedRink = this.selectedRink;
    }, 250);
  }

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

    this.http.get('http://00242053.ngrok.io/api/info', {}, {})
      .then((data: any) => {
        JSON.parse(JSON.parse(data.data)).forEach(element => {
          console.log(element);
          var marker = new google.maps.Marker({
            map: this.map,
            position: { lat: element.Lat, lng: element.Lng }
          });
          var infowindow = new google.maps.InfoWindow({
            content: this.getcontentString(element),
            maxWidth: 200
          });
          marker.addListener('click', () => {
            infowindow.open(this.map, marker);
          });
          google.maps.event.addDomListener(marker, 'click', () => {
            console.log('test');
            this.selectedRink = element;
            console.log(this.selectedRink);
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
  }

  getcontentString(element: any): String {
    console.log(element);
    return '<div id=“content”>' +
      '<div id=“siteNotice”>' +
      '</div>' +
      '<h5 id=“firstHeading” class=“firstHeading”>' + element.Parc + '</h5>' +
      '<div id=“bodyContent”>' +
      '<b>Type</b> :' + element.Nom +
      '</div>' +
      '</div>'
  }

  openDetails(rink) {
    this.navCtrl.push(RinkDetailsPage, rink);
  }

  joinGame(rink: any) {
    this.http.post('http://00242053.ngrok.io/api/rinks/' + rink.Id, this.user, {})
      .then(data => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  getVisibility() {
    return this.selectedRink ? 'visible' : 'hidden';
  }
}
