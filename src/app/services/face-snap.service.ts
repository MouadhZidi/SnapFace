import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/snap-face.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
         title: 'Archivale',
       description : 'Une description pour Archivale',
        url : 'https://lessecretsdusahara.files.wordpress.com/2015/08/ammi-majus.jpg?w=300&h=278',
       createDate: new Date(),
       snaps: 200,
       location: 'Paris'
        },
  
        {
            id: 2,
          title: 'Book',
       description : 'Une description pour Archivale',
        url : 'https://lessecretsdusahara.files.wordpress.com/2015/08/ammi-majus.jpg?w=300&h=278',
       createDate: new Date(),
       snaps: 0,
       location: 'Lyon'
        },
        {
            id: 3,
        title: 'Tarif',
        description : 'Une description pour Archivale',
         url : 'https://lessecretsdusahara.files.wordpress.com/2015/08/ammi-majus.jpg?w=300&h=278',
        createDate: new Date(),
        snaps: 0,
        location: 'Tunisie'
         },
      ]

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }
      
      getFaceSnapById(faceSnapId: number) : FaceSnap{
        const faceSnap =this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapId);
        if (!faceSnap){
          throw new Error ('Snap not found!');
      }
      else {
          return faceSnap;
      }

      }
      snapFaceSnapById(faceSnapId: number , snapType : 'snap' | 'unsnap' ) : void { 
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

      }

}