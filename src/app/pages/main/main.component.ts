import { Component, OnInit } from '@angular/core';
import { MeasurementsService } from '../../services/measurements.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public measurementService: MeasurementsService) { this.measurementService }

  ngOnInit(): void {
  }

}
