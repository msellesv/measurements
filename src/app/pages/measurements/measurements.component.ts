import { Component } from '@angular/core';
import { MeasurementsService } from '../../services/measurements.service';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})

export class MeasurementsComponent {

  constructor(public measurementService: MeasurementsService) { this.measurementService }

  ngOnInit() { }


}
