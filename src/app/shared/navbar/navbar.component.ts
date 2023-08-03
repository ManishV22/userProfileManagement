import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  current_url = 'Dashboard';

  
  constructor(config: NgbDropdownConfig,
    private router: Router, private route: ActivatedRoute) {
    config.placement = 'bottom-right';
    debugger;
    // router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    //   this.current_url = event.url;
    //   console.log(event);
    //   console.log(this.current_url);
    // });
    this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url)
    ).subscribe(x => {
      //console.log(x);
      const url = x.split('?')[0].split('/').pop();
      // this.current_url = url.toLocaleUpperCase();
      this.current_url = url.replace(/-/g, ' ')
      //console.log('>> url', this.current_url);
    });
  }

  ngOnInit() {
    let body = document.querySelector('body');
    this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }


  signOut(){
    this.router.navigate(['/login']);
  }
}
