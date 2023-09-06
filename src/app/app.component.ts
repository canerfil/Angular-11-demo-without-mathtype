import { Component, OnInit, ViewChild } from '@angular/core';

import * as ClassicEditor from '../ckeditor';

// Import common resources.
// import * as Generic from 'resources/demos/imports';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  Editor = ClassicEditor;

  // Use the viewChild Decorator to get the ckeditor instance
  @ViewChild("myEditor", { static: false }) myEditor: any;

  ngOnInit() {
    // Define the button update
    // document.getElementById('btn_update').addEventListener('click', (e) => {
    //   e.preventDefault();
    //   Generic.updateContent(this.myEditor.editorInstance.getData(), 'transform_content');
    // });
  }

  // Initializate the editors content.
  public content: string ;


  title = 'Demo CKEditor 5 on Angular';
}

// Get and set the editor and wiris versions in this order.
// Generic.setEditorAndWirisVersion('5.0.0', packageInfo.version);
