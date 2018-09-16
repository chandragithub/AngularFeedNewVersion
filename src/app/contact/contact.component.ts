import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Properties...
  url: string     = 'https://angularfeed.com/server/mailer.php';
  name: string    = '';
  email: string   = '';
  message: string = '';
  title: string   = 'AngularFeed - Contact Us';

  // Constructor bind with Http.
  constructor(private http: Http, private titleService: Title) { 
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {}

  // Sending Mail
  sendMail(form: NgForm) {
    let postVars = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    }
    this.http.post(this.url, postVars)
      .subscribe(
        response => {
          this.name = '';
          this.email = '';
          this.message = '';
        }
      )
  }

}
