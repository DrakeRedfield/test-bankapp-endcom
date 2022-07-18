import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-card-modal',
  templateUrl: './new-card-modal.component.html',
  styleUrls: ['./new-card-modal.component.scss']
})
export class NewCardModalComponent implements OnInit {

  newCardForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [Validators.minLength(3), Validators.required]),
    accountNumber: new FormControl('', [Validators.minLength(3), Validators.required]),
    issuer: new FormControl('', [Validators.minLength(3), Validators.required]),
    cardName: new FormControl('', [Validators.minLength(3), Validators.required]),
    marca: new FormControl('', [Validators.minLength(3), Validators.required]),
    status: new FormControl('', [Validators.minLength(3), Validators.required]),
    fund: new FormControl('', [Validators.minLength(3), Validators.required]),
    accountType: new FormControl('', [Validators.minLength(3), Validators.required]),
  });

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit() {
    console.log(this.newCardForm);
    if( this.newCardForm.invalid ){
      this.newCardForm.markAllAsTouched()
      return;
    }

    this.closeModal()
  }

  isFieldInvalid(fieldName: string) {
    const field = this.newCardForm.get(fieldName);
    return field?.invalid && field?.touched;
  }

}
