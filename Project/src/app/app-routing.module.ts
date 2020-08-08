import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './about/AboutComponent';
import { HomeComponent } from './home/home.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CallComponent } from './call/call.component';
import { SocialComponent } from './social/social.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
{path: 'login',   component: LoginComponent}, //  canActivate: [AuthGuard]
{path: 'signup',  component: SignupComponent},
{path: 'about',   component: AboutComponent},
{path: 'home',    component: HomeComponent},
{path: 'how-it-works', component: HowItWorksComponent},
{path: 'privacy-policy', component: PrivacyPolicyComponent},
{path: 'chatbox',  component: ChatboxComponent},
 {path: 'call', component: CallComponent },
{
  path: 'video-list',
  component: VideoListComponent,
},
{
  path: 'video-detail/:slug',
  component: VideoDetailComponent,
},
{
  path: 'search',
  component: SearchDetailComponent,
},
{ path: 'our-team', component: OurTeamComponent},
{path: 'social', component: SocialComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // providers: [AuthGuard]
})
export class AppRoutingModule { }
