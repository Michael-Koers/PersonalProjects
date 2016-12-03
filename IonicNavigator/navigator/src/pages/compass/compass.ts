import {Component} from '@angular/core';
import {DeviceOrientation, CompassHeading} from 'ionic-native';
import {NavController, Platform} from 'ionic-angular';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html'
})

export class CompassPage {

  public direction: string;
  public directionNumber: string;
  public heading: number;

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then((readySource) => {
      this.initialize();
    }).catch(err => {
      console.log(err);
    });
  }

  initialize() {

    let options = {
      frequency: 1000
    };

    DeviceOrientation.watchHeading(options).subscribe(
      (data: CompassHeading) => {
        let heading: number = data.magneticHeading;
        this.directionNumber = data.magneticHeading.toFixed(0);

        if (heading > 337.5 || heading <= 22.5) {
          this.direction = "north";
        } else if (heading > 22.5 && heading <= 67.5) {
          this.direction = "north-east";
        } else if (heading > 67.5 && heading <= 112.5) {
          this.direction = "east";
        } else if (heading > 112.5 && heading <= 157.5) {
          this.direction = "south-east";
        } else if (heading > 157.5 && heading <= 202.5) {
          this.direction = "south";
        } else if (heading > 202.5 && heading <= 247.5) {
          this.direction = "south-west";
        } else if (heading > 247.5 && heading <= 292.5) {
          this.direction = "west";
        } else if (heading > 292.5 && heading <= 337.5) {
          this.direction = "north-west";
        } else {
          this.direction = "Invalid compass data"
        }
      }
    );
  }
}
