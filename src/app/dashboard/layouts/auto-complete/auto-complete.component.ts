import { Component } from '@angular/core';
import {AutoCompleteModule } from 'primeng/autocomplete';
import { CountryService } from '../../../interfaces/countryservice';
import { FormsModule } from '@angular/forms';


interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [
    AutoCompleteModule,
    FormsModule
  ],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.css',
  providers: [CountryService]
})
export class AutoCompleteComponent {
  filteredCountries: any[] = [];

  countries: any[] | undefined;

  selectedCountryAdvanced: any[] | undefined;

  constructor(private countryService: CountryService) {}

  ngOnInit() {
      this.countryService.getCountries().then((countries) => {
          this.countries = countries;
      });
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
      let filtered: any[] = [];
      let query = event.query;

      for (let i = 0; i < (this.countries as any[]).length; i++) {
          let country = (this.countries as any[])[i];
          if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }

      this.filteredCountries = filtered;
  }
}
