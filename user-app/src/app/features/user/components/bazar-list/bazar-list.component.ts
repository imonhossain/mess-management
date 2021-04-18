import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-bazar-list',
  templateUrl: './bazar-list.component.html',
  styleUrls: ['./bazar-list.component.css']
})
export class BazarListComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) { 

  }
  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
