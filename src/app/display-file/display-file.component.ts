import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-file',
  templateUrl: './display-file.component.html',
  styleUrls: ['./display-file.component.css']
})
export class DisplayFileComponent implements OnInit {
  fileList: any;

  constructor(private sanitize : DomSanitizer) { }

  ngOnInit() {
    // this.service.getFiles().subscribe(x => {
    //   console.log(x);
    //   console.log(x[0].fileKey);
    //   console.log(x[0].imageOrVideo);
    //   this.fileList = x;
    //   for (var i = 0; i <= this.fileList.length; i++) {
    //     if (this.fileList[i].fileKey == 1) {

    //       this.fileList[i].imageOrVideo = ('data:image/jpeg;base64,' + this.fileList[i].imageOrVideo);
    //     }
    //     else
    //     {
    //       this.fileList[i].imageOrVideo = ('data:video/mp4;base64,' + this.fileList[i].imageOrVideo);
    //     }
    //     console.log(this.fileList[i].imageOrVideo);
    //   }
    // })
  }

  fetchFile(url: string) {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }
 

}
