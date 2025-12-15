import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationAgent, DataService, UseCase, SecurityFeature, IntegrationFeature } from '../services/data.service';
@Component({
  selector: 'app-bfsi-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bfsi-page.html',
  styleUrl: './bfsi-page.css',
})
export class BfsiPage {
  agents: ApplicationAgent[] = [];
  useCases: UseCase[] = [];
  securityFeatures: SecurityFeature[] = [];
  integrationFeatures: IntegrationFeature[] = [];
  companies = [
    { name: 'DataBricks', logo: 'assets/images/databricks-logo.png' },
    { name: 'Finastra', logo: 'assets/images/Finastra_Logo.png' },
    { name: 'FIS', logo: 'assets/images/FIS_logo.png' },
    { name: 'Fiserv', logo: 'assets/images/Fiserv-Logo.png' },
    { name: 'Jack Henry', logo: 'assets/images/jack-henry-logo.png' },
    { name: 'Salesforce', logo: 'assets/images/salesforce-logo.png' },
  ];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.agents = this.dataService.getApplicationAgents();
    this.useCases = this.dataService.getUseCases();
    this.securityFeatures = this.dataService.getSecurityFeatures();
    this.integrationFeatures = this.dataService.getIntegrationFeatures();
  }
  getIconClass(icon: string): string {
    return icon;
  }

}
