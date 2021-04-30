import { Component, OnInit } from '@angular/core';
import { FlickerServiceService } from './flicker-service.service';
import { FlickerResponse } from './models/flickerresponse';
import {NgbModal,NgbActiveModal, ModalDismissReasons} 
      from '@ng-bootstrap/ng-bootstrap';
import { ModelContentComponentComponent } from './model-content-component/model-content-component.component';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private modalService: NgbModal){}
  public hero = {
    name: '',
    //age: 26
    }

  ngOnInit() {
  }

  updateOpenModel(row:any){
    console.log(row);
    this.hero = row;
    this.openModelForEdit(this.hero);
  }


   findHeroId(){
    let max =0;
    console.log("id111",this.heroes)
    let hero_Id = this.heroes.forEach(hero=>{
      hero.id > max ? max=hero.id : max=max;
      });
    return max;
   }

  openModelForEdit(heroUpdate:any){
    const modalRef =  this.modalService.open(ModelContentComponentComponent);
    modalRef.componentInstance.hero = this.hero;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      if(heroUpdate ){
        this.heroes.filter(hero=>hero.id ===heroUpdate.id )
      }
      });
      this.hero = {name:''};
  }

  open() { 
    const modalRef =  this.modalService.open(ModelContentComponentComponent);
    modalRef.componentInstance.hero = this.hero;
    let hero_Id = this.findHeroId();
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.heroes.push({"id":hero_Id+1,...receivedEntry});
      console.log(receivedEntry);

      });
  }
  title = 'Hero List';
  searchText: any;
  heroes = [
    { id: 1, name: 'Mr. Nice', country: 'India' },
    { id: 2, name: 'Narco' , country: 'USA'},
    { id: 3, name: 'Bombasto' , country: 'UK'},
    { id: 4, name: 'Celeritas' , country: 'Canada' },
    { id: 5, name: 'Magneta' , country: 'Russia'},
    { id: 6, name: 'RubberMan' , country: 'China'},
    { id: 7, name: 'Dynama' , country: 'Germany'},
    { id: 8, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 9, name: 'Magma' , country: 'South Africa'},
    { id: 10, name: 'Tornado' , country: 'Sri Lanka'}
  ];
}
