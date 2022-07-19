import { Component,OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/snap-face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;

snapButton!: string;

constructor(private faceSnapsService: FaceSnapService,
            private route : Router) { }

ngOnInit(){ 
  
  this.snapButton= "Oh Snap !";
}

onSnap(){
  if (this.snapButton ==="Oh Snap !") {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButton = "Oops UnSnap !"
  }
  else {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButton = "Oh Snap !"
  }

} 

onViewFaceSnap(){
this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}
