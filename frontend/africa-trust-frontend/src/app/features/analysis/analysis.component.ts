import { Component } from '@angular/core';
import { AnalysisService } from '../../core/services/analysis.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent {

  selectedFile: File | null = null;
  previewUrl: any = null;
  isImage = false;
  isVideo = false;
  result: any = null;
  loading = false;
  errorMessage: string | null = null;

  constructor(private analysisService: AnalysisService) { }

  onFileSelected(event: any) {
    this.errorMessage = null;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      // Validation simple
      const maxSizeMB = 50;
      if (file.size / 1024 / 1024 > maxSizeMB) {
        this.errorMessage = `Fichier trop volumineux (> ${maxSizeMB}MB).`;
        return;
      }

      this.selectedFile = file;
      this.result = null;

      const mime = file.type;
      this.isImage = mime.startsWith('image/');
      this.isVideo = mime.startsWith('video/');

      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  analyze() {
    if (!this.selectedFile) return;

    this.loading = true;
    this.result = null;
    this.errorMessage = null;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.analysisService.deepfakeAnalysis(formData).subscribe({
      next: (res) => { this.result = res; this.loading = false; },
      error: (err) => { 
        console.error(err); 
        this.errorMessage = 'Erreur lors de l’analyse. Réessayez.'; 
        this.loading = false; 
      }
    });
  }
}