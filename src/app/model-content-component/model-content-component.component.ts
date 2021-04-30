import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal ,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-content-component',
  templateUrl: './model-content-component.component.html',
  styleUrls: ['./model-content-component.component.css']
})

export class ModelContentComponentComponent implements OnInit {
    constructor(private modalService: NgbModal,public activeModal:NgbActiveModal){}
    @Input() public hero:any;
    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    
    ngOnInit() {
      console.log("inmodelcontent",this.hero);
    }
    passBack() {
      console.log("inmodelcontent",this.hero);

    this.passEntry.emit(this.hero);
    this.activeModal.close(this.hero);

    }
    
  }
