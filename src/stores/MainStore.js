import { observable, computed, action } from 'mobx';

class MainStore {
  // Observables
  @observable politicians = [];
  @observable zipCode = null;

  // Constructor
  constructor(args) {
    const { politicians } = args;
    this.politicians = politicians;
  }

  // Computeds
  @computed get filteredPotilicians() {
    return this.politicians.filter((p, i) => p.zipCode === this.zipCode);
  }

  // Actions
  @action searchPoliticiansByZipCode(zipCode) {
    this.zipCode = zipCode;
  }
  @action addRecipient(politician) {
    politician.isSelected = true;
  }
  @action removeRecipient(politician) {
    politician.isSelected = false;
  }
}