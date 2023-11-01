import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-services-a',
  templateUrl: './services-a.component.html',
  styleUrls: ['./services-a.component.scss'],
})
export class ServicesAComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }

  data: any[] = [];
  supplies: any[] = [];
  service: any = null

  serviceForm = this.formBuilder.group({
    name: null,
    price: null,
    
  });

  serviceEditForm = this.formBuilder.group({
    name: null,
    price: null,
    
  });

  modalAdd = false
  modalDetails = false
  modalEdit = false
  modalDelete = false

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getServices().subscribe((response) => { this.data = response });
    this.api.getSupplies().subscribe((response) => { this.supplies = response });
  }

  openAdd() {
    this.modalAdd = true
  }

  onSubmit() {
 
    this.api.insertService(this.serviceForm.value).subscribe(
      (response) => {
        this.modalAdd = false
        this.serviceForm.reset();
        this.getData()
      }
    );
  }

  onWillDismiss() {
    this.modalAdd = false
    this.modalDetails = false
    this.modalEdit = false
    this.modalDelete = false
  }

  onSubmitEdit() {
    console.log(this.serviceEditForm.value);
    
    this.api.updateService(this.service.id, this.serviceEditForm.value).subscribe(
      (response) => { 
        this.service = null
        this.modalEdit = false
        this.getData();
      }
    );
    this.serviceEditForm.reset();
  }

  openDetails(id: any) {

    this.modalDetails = true

    this.api.getService(id).subscribe((response) => {
      this.service = response;
    })
  }

  openEdit(id: any) {
    this.modalEdit = true
    this.api.getService(id).subscribe((response) => {
      this.service = response
    })
    
  }

  openDelete(id: any) {
    this.modalDelete = true
    this.api.getService(id).subscribe((response) => {
      this.service = response
    })
  }


  deleteService() {
    this.api.deleteService(this.service.id).subscribe(
      (response) => {
        this.modalDelete = false
        this.getData();
      }
    )
  }

}
