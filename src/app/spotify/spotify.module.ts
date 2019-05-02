import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpotifyUserComponent } from './spotify-user/spotify-user.component';
import { SpotifyCallbackTokenComponent } from './spotify-callback-token/spotify-callback-token.component';

@NgModule({
    declarations: [SpotifyLoginComponent, SpotifyUserComponent, SpotifyCallbackTokenComponent],
    imports: [HttpClientModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [SpotifyLoginComponent]    
})
export class SpotifyModule { }