import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";
import { SelectItem } from "primeng/api";
import { SelectItemGroup } from "primeng/api";
import { FormBuilder } from "@angular/forms";
import { FormArray } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  cities: City[];

  selectedCity1: City;
  weekdays = [
    { name: "Sun", code: "1" },
    { name: "mon", code: "2" },
    { name: "tue", code: "3" },
    { name: "wed", code: "4" },
    { name: "thu", code: "5" },
    { name: "fri", code: "6" },
    { name: "sat", code: "7" }
  ];
  repeats = [
    { name: "Daily", code: "0" },
    { name: "Weekdays", code: "1" },
    { name: "Monthly", code: "2" },
    { name: "Yearly", code: "3" }
  ];

  constructor(private fb: FormBuilder) {
    // this.items = [];
    // for (let i = 0; i < 10000; i++) {
    //   this.items.push({ label: "Item " + i, value: "Item " + i });
    // }
  }

  dropdownForm = this.fb.group({
    selectedCity: ["Daily"],
    selected_days: [this.weekdays]
  });

  onSubmit() {
    console.log(this.dropdownForm.value);

  }
}
