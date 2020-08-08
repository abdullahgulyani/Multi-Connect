import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatExpansionModule,
        MatSidenavModule,
        MatSelectModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        } from '@angular/material';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { MianComponent } from './main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/AboutComponent';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './utility/safe.pipe';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CallComponent } from './call/call.component';
import { OpenviduSessionModule } from 'openvidu-angular';
import {SocialComponent} from './social/social.component';
@NgModule({
  declarations: [
    AppComponent,
    MianComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    HowItWorksComponent,
    PrivacyPolicyComponent,
    ChatboxComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    SearchComponent,
    SearchDetailComponent,
    OurTeamComponent,
    CallComponent,
    SocialComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSelectModule,
    LayoutModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    OpenviduSessionModule,

  ],
  providers: [

 // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
 // {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
