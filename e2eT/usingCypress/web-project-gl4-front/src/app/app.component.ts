import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { genres } from './utilities/store';
import { GenresService } from './services/genres.service';
import { DbGenre } from './dto/genres/genre';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    private transparentNavbarPages = ['/home','/register/login' ,'/register/signup' ,'/nucleoicons', '/not-found'];

    constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location, private genresService: GenresService) { }
    ngOnInit() {
        this.listGenres(); // get the genres list from the backend
        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar?.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                if (this.isNavbarTransparent())
                    navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                if (this.isNavbarTransparent())
                    navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    }

    isNavbarTransparent() {
        const pageUrl = this.location.prepareExternalUrl(this.location.path());

        const transparentNavbarPages = ['/home','/register/login' ,'/register/signup' ,'/nucleoicons', '/not-found', '/account'];
        return transparentNavbarPages.findIndex((el) => el === pageUrl)  !== -1 ;
    }

    removeFooter() {
        let pageUrl = this.location.prepareExternalUrl(this.location.path());
        const noFooterPages = ['/register/login' ,'/register/signup' ,'/nucleoicons', '/not-found'];
        return noFooterPages.findIndex((el) => el === pageUrl)  === -1 ;
    }

    listGenres() {
        this.genresService.listGenres().subscribe((genresResult:DbGenre[]) => {
            genres.next(genresResult);
        })
    }
}
