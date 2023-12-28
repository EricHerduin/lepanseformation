// download.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  downloadPDF(fileLink: string): void {
    // Logique de téléchargement en utilisant le lien du fichier
    window.open(fileLink, '_blank');
  }
}
