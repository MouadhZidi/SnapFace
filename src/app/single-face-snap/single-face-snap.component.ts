import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/snap-face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  snapButton!: string;
  
  constructor(private faceSnapsService: FaceSnapService,
              private route : ActivatedRoute) { }
  
  ngOnInit(){ 
    
    this.snapButton= "Oh Snap !";
    const faceSnapId = +this.route.snapshot.params['id']; 
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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

}
