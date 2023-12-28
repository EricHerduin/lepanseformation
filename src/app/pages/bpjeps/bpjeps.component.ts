import { Component } from '@angular/core';
import { DownloadService } from 'src/app/services/download.service';

@Component({
  selector: 'app-bpjeps',
  templateUrl: './bpjeps.component.html',
  styleUrls: ['./bpjeps.component.scss'],
})
export class BpjepsComponent {
  constructor(private DownloadService: DownloadService) {}

  downloadPDF(fileLink: string): void {
    this.DownloadService.downloadPDF(fileLink);
  }
}
