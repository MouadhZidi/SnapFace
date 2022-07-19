import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/snap-face.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor( private faceSnapService: FaceSnapService) { }

  faceSnaps!: FaceSnap [];

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getAllFaceSnaps();
    
    }

}
