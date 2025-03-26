import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  standalone: false,
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.scss'
})
export class YoutubeComponent {
  constructor(private domSanitizer: DomSanitizer) {}

  safeUrl!: SafeUrl;

  @Input() set ytURL(url: string) {
    this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
