import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-files',
  templateUrl: './post-files.component.html',
  styleUrls: ['./post-files.component.css']
})
export class PostFilesComponent implements OnInit {
  myFiles: any;

  constructor( private router : Router) { }

  ngOnInit() {
  }

  postFileForm = new FormGroup({
    name : new FormControl(''),
    fileKey: new FormControl('')
  })

  insertFiles(value) {
    const file = value.target.files[0];
    console.log(file);
    this.myFiles = file;
  }

  postFile() {
    var formdata = new FormData();
    console.log(this.postFileForm.value.fileKey);
    const data = this.postFileForm.value;
    formdata.append("data", JSON.stringify(data));
    formdata.append("files", this.myFiles);
    // this.service.postFiles(formdata).subscribe(x => {
    //   console.log(x);
    // })
  }

  displayFile()
  {
    this.router.navigate(['display']);
  }

}
