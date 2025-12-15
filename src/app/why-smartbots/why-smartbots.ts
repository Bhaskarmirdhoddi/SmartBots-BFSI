import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, WhySmartBots } from '../services/data.service';

@Component({
  selector: 'app-why-smartbots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-smartbots.html',
  styleUrl: './why-smartbots.css',
})
export class WhySmartbots {
  whySmartBots: WhySmartBots[] = [];
  expandedItem: number | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.whySmartBots = this.dataService.getWhySmartBots();
  }

  toggleItem(id: number): void {
    this.expandedItem = this.expandedItem === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedItem === id;
  }
}
