import { Component, OnInit } from '@angular/core';
import { FUTVService,FUTV_IMAGES } from 'src/services/futv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  foto = " "
  imgFile = [];
  arreglo = [];
  arregloFinal: string[] = [];


  constructor(private FUTService:FUTVService){}

  ngOnInit(){
    this.obtenerImagenes()
  }

  onSelectedFile(event: any) {
    this.imgFile = event.target.files
    console.log(this.imgFile)
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.foto = event.target.result;
      }
    }
  }

  guardar(foto:any){
      console.log(foto)
      console.log(this.imgFile[0])
     // console.log()
      this.FUTService.addImage(this.imgFile).subscribe();
  }

  obtenerImagenes(){
    this.FUTService.getImages().subscribe(
      res=>{
        this.arreglo=<any>res;
        console.log(this.arreglo)
      },
      err => console.log(err)
    );
  }

  servirImagenes(){
    for (let index = 0; index < this.arreglo.length; index++) {
      this.arregloFinal.push(this.FUTService.getImagesFinal(this.arreglo[index]))
      console.log(index)

    }//fin for


  }//final servirImagenes


}
