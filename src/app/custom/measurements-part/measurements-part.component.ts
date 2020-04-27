import { Component, OnInit, Input  } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-measurements-part',
  templateUrl: './measurements-part.component.html',
  styleUrls: ['./measurements-part.component.scss']
})

export class MeasurementsPartComponent implements OnInit {

  @Input() part: any;
  displayedColumns: string[] = ['Control','Dev','DevOutTol', 'Quality'];
  
  constructor(private sanitizer: DomSanitizer) { }

  sanitize(value){
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  ngOnInit(): void {
    /*this.tableData.forEach((data)=>{
      this.dataSource.push({control:data.control,dev:data.dev,devOutTol:data.devOutTol,quality:data.quality})
    })*/
  }

}
