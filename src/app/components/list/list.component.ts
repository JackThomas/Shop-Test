import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public items: Product[] = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.get().subscribe((response: Product[]) => {
      this.items = response;
    });
  }
}
