import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  map: any;

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
  openDetails() {
    console.log("Open Details");
  }

  openReserve() {
    console.log("Open Reserve");
  }

}
