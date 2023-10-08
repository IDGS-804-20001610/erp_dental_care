import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CheckboxCustomEvent } from '@ionic/angular';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-supplies-a',
  templateUrl: './supplies-a.component.html',
  styleUrls: ['./supplies-a.component.scss'],
})
export class SuppliesAComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }

  data: any[] = [];
  supply: any = null

  supplyForm = this.formBuilder.group({
    name: null,
    cost: null,
    price: null,
    is_salable: null,
    buy_unit: null,
    use_unit: null,
    equivalence: null,
    image: null
  });

  supplyEditForm = this.formBuilder.group({
    name: null,
    cost: null,
    price: null,
    is_salable: null,
    buy_unit: null,
    use_unit: null,
    equivalence: null,
    image: null
  });

  modalAdd = false
  modalDetails = false
  modalEdit = false
  modalDelete = false

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.getSupplies().subscribe((response) => { this.data = response });
  }

  openAdd() {
    this.modalAdd = true
  }

  onSubmit() {
 
    this.api.insertSupply(this.supplyForm.value).subscribe(
      (response) => {
        this.modalAdd = false
        this.supplyForm.reset();
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
    this.api.updateSupply(this.supply.id, this.supplyForm.value).subscribe(
      (response) => { this.modalEdit = false }
    );
    this.supplyEditForm.reset();
  }

  openDetails(id: any) {

    this.modalDetails = true

    this.api.getSupply(id).subscribe((response) => {
      this.supply = response;
    })
  }

  openEdit(id: any) {
    this.modalEdit = true
    this.api.getSupply(id).subscribe((response) => {
      this.supply = response
      console.log(this.supply);
      
      this.supplyEditForm.value.is_salable = this.supply.is_salable
    })
    
  }

  openDelete(id: any) {
    this.modalDelete = true
    this.api.getSupply(id).subscribe((response) => {
      this.supply = response
    })
  }

  editSupply(id: any) {
    this.api.updateSupply(id, this.supplyForm.value).subscribe(
      (response) => {
        this.supply = null
        this.modalEdit = false
        this.getData();
      }
    )
  }

  deleteSupply() {
    this.api.deleteSupply(this.supply.id).subscribe(
      (response) => {
        this.modalDelete = false
        this.getData();
      }
    )
  }




  // Secondary Functions

  readonly phoneMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();


}
