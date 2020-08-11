import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular Reactive Forms Validation";

  contactForm = new FormGroup({
    firstname: new FormControl("", [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastname: new FormControl("", [
      Validators.required,
      Validators.maxLength(25),
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    email: new FormControl("", [Validators.email, Validators.required]),
    gender: new FormControl("", [Validators.required]),
    isMarried: new FormControl("", [Validators.required]),
    country: new FormControl("", [Validators.required]),
    address: new FormGroup({
      city: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [Validators.required])
    })
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }

  countryList: country[] = [
    new country("1", "Italy"),
    new country("2", "USA"),
    new country("3", "England")
  ];

  get firstname() {
    return this.contactForm.get("firstname");
  }

  get lastname() {
    return this.contactForm.get("lastname");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get gender() {
    return this.contactForm.get("gender");
  }

  get isMarried() {
    return this.contactForm.get("isMarried");
  }

  get country() {
    return this.contactForm.get("country");
  }

  get city() {
    return this.contactForm.get("address").get("city");
  }

  get street() {
    return this.contactForm.get("address").get("street");
  }

  get pincode() {
    return this.contactForm.get("address").get("pincode");
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
