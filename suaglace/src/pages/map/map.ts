import { Component, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { Geolocation } from '@ionic-native/geolocation';

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

    var data = JSON.parse('[  {      "Ouvert":  true,      "Id":  "ed3f4403-a246-4a86-be65-ddca783234fc",      "Nom":  "Grande patinoire avec bandes",      "Resurface":  true,      "Lng":  -83.66922150000001,      "Condition":  "Bonne",      "Arrose":  false,      "Arrondissement":  "Le Plateau-Mont-Royal",      "Parc":  "La Fontaine",      "Deblaye":  true,      "DateMaj":  "2018-01-20 06:13:14",      "Lat":  42.63734609999999  },  {      "Ouvert":  true,      "Id":  "b86a0e70-9ca3-45ee-a038-0c3032033944",      "Nom":  "Grande patinoire de hockey",      "Resurface":  true,      "Lng":  -73.58992910000001,      "Condition":  "Excellente",      "Arrose":  true,      "Arrondissement":  "Outremont",      "Parc":  "Parc Beaubien",      "Deblaye":  true,      "DateMaj":  "2018-01-18 15:09:31",      "Lat":  45.5535893  },  {      "Ouvert":  true,      "Id":  "bf17a3a3-f74b-4e57-8b3a-d730eb64f467",      "Nom":  "Pat. avec bandes - près chalet",      "Resurface":  false,      "Lng":  -73.6743104,      "Condition":  "Bonne",      "Arrose":  false,      "Arrondissement":  "Lachine",      "Parc":  "parc LaSalle",      "Deblaye":  true,      "DateMaj":  "2018-01-19 18:39:14",      "Lat":  45.43865390000001  },  {      "Ouvert":  true,      "Id":  "e532974f-b937-4853-98de-feeea23e992b",      "Nom":  "Pat. avec bandes - près 10e Avenue",      "Resurface":  false,      "Lng":  -73.6743104,      "Condition":  "Bonne",      "Arrose":  false,      "Arrondissement":  "Lachine",      "Parc":  "Parc LaSalle",      "Deblaye":  true,      "DateMaj":  "2018-01-19 18:39:14",      "Lat":  45.43865390000001  },  {      "Ouvert":  true,      "Id":  "fcad354b-fba1-47be-b48c-9c5eacdda5ae",      "Nom":  "Patinoire # 1",      "Resurface":  true,      "Lng":  -73.8837685,      "Condition":  "Excellente",      "Arrose":  true,      "Arrondissement":  "L\u0027Île-Bizard - Sainte-Geneviève",      "Parc":  "Parc Eugène-Dostie",      "Deblaye":  true,      "DateMaj":  "2018-01-18 14:28:55",      "Lat":  45.48753749999999  },  {      "Ouvert":  true,      "Id":  "86129e93-7048-4ef8-b838-83f835230122",      "Nom":  "Patinoire # 1",      "Resurface":  true,      "Lng":  -73.872079,      "Condition":  "Mauvaise",      "Arrose":  true,      "Arrondissement":  "L\u0027Île-Bizard - Sainte-Geneviève",      "Parc":  "Parc Jonathan-Wilson",      "Deblaye":  true,      "DateMaj":  "2018-01-18 14:28:55",      "Lat":  45.5001962  },  {      "Ouvert":  true,      "Id":  "31a55146-1d41-4a85-b237-a9d4ac0d5e1a",      "Nom":  "Patinoire # 1",      "Resurface":  true,      "Lng":  -73.8823419,      "Condition":  "Mauvaise",      "Arrose":  true,      "Arrondissement":  "L\u0027Île-Bizard - Sainte-Geneviève",      "Parc":  "Parc Joseph-Avila-Proulx",      "Deblaye":  true,      "DateMaj":  "2018-01-18 14:28:55",      "Lat":  45.4968458  },  {      "Ouvert":  true,      "Id":  "70d59276-29be-445d-a71e-740057d270f6",      "Nom":  "Patinoire # 1",      "Resurface":  true,      "Lng":  -73.8665503,      "Condition":  "Excellente",      "Arrose":  true,      "Arrondissement":  "L\u0027Île-Bizard - Sainte-Geneviève",      "Parc":  "Parc Robert-Sauvé",      "Deblaye":  true,      "DateMaj":  "2018-01-18 14:28:55",      "Lat":  45.4809719  },  {      "Ouvert":  true,      "Id":  "ffd61195-7964-4618-8d83-bb9dd919d9c4",      "Nom":  "Patinoire # 2",      "Resurface":  true,      "Lng":  -73.8837685,      "Condition":  "Excellente",      "Arrose":  true,      "Arrondissement":  "L\u0027Île-Bizard - Sainte-Geneviève",      "Parc":  "Parc Eugène-Dostie",      "Deblaye":  true,      "DateMaj":  "2018-01-18 14:28:55",      "Lat":  45.48753749999999  },  {      "Ouvert":  true,      "Id":  "3b4ed59c-d794-4124-b08d-5676761ec24e",      "Nom":  "Patinoire à bandes",      "Resurface":  true,      "Lng":  -73.52745470000001,      "Condition":  "Bonne",      "Arrose":  false,      "Arrondissement":  "Mercier - Hochelaga-Maisonneuve",      "Parc":  "Liébert",      "Deblaye":  true,      "DateMaj":  "2018-01-19 16:35:36",      "Lat":  45.596348  },  {      "Ouvert":  true,      "Id":  "f9ddf006-059e-4f24-a39e-6642dbb02cab",      "Nom":  "Patinoire à bandes",      "Resurface":  false,      "Lng":  -73.5847928,      "Condition":  "Excellente",      "Arrose":  true,      "Arrondissement":  "Verdun",      "Parc":  "Parc Beurling",      "Deblaye":  true,      "DateMaj":  "2018-01-19 09:01:59",      "Lat":  45.4481554  }]');

    data.forEach(element => {
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
      google.maps.event.addDomListener(marker, 'click', function () {
        console.log('test');
      });
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

  openDetails() {

  }

  openReserve() {
    console.log('Open Reserve');
  }
}
