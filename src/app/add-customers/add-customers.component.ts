import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";

@Component({
  selector: 'add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

  customer: FormGroup;

  constructor(private fb: FormBuilder) {
    this.customer = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      address: ['', [Validators.minLength(10), Validators.maxLength(50)]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6789]\\d{9}$')]],
      cards: this.fb.array([]) // this array will take FormGroup as objects
    })

    this.addNewCard();
  }

  get cards() {
    return this.customer.controls['cards'] as FormArray; // type conversion
  }

  addNewCard() {
    const newCard = this.fb.group({
      company: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]]
    })
    this.cards.push(newCard);
  }

  deleteCard(index: number) {
    this.cards.removeAt(index);
  }

  ngOnInit(): void {

  }

  saveCustomerForm() {
    const formData = this.customer.value;
    formData.name = formData.name.trim(); // leading and trailing
    console.log(formData)
  }

}
