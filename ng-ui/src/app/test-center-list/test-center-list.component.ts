import { Component, OnInit } from '@angular/core';
import { TestCenter } from '../model/test-center';
import { TestCenterService } from '../service/test-center-service.service';

@Component({
  selector: 'app-test-center-list',
  templateUrl: './test-center-list.component.html',
  styleUrls: ['./test-center-list.component.css']
})
export class TestCenterListComponent implements OnInit {

  testCenters: TestCenter[];

  constructor(private testCenterService: TestCenterService) { }

  ngOnInit(): void {
    this.testCenterService.getAll().subscribe(data => {
      this.testCenters = data;
    })
  }

}
