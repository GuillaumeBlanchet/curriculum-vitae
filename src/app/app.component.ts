import { Component, OnInit } from '@angular/core';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  officegen: any;
  title = 'app';

  ngOnInit() {

  }

  exportWord() {
    const doc = new Document();

    const paragraph = new Paragraph('Hello World');
    const institutionText = new TextRun('Foo Bar').bold();
    const dateText = new TextRun('Github is the best').tab().bold();
    paragraph.addRun(institutionText);
    paragraph.addRun(dateText);

    doc.addParagraph(paragraph);

    const packer = new Packer();

    packer.toBlob(doc).then(blob => {
      saveAs(blob, 'example.docx');
    });
  }
}
