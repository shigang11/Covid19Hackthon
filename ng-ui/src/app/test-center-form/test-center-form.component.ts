import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestCenterService } from '../service/test-center-service.service';
import { TestCenter } from '../model/test-center';

@Component({
  selector: 'app-test-center-form',
  templateUrl: './test-center-form.component.html',
  styleUrls: ['./test-center-form.component.css']
})
export class TestCenterFormComponent implements OnInit {
  testCenter: TestCenter;
  constructor(private route: ActivatedRoute, private router: Router,
    private testCenterService: TestCenterService) {
      this.testCenter = new TestCenter();
    }

  ngOnInit(): void {
  }

  onSubmit(){
    this.testCenterService.add(this.testCenter).subscribe(result =>{
      this.router.navigate(['/testCenters']);
    })
  }

}
