import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { SpotifyUserComponent } from './spotify-user/spotify-user.component';
import { SpotifyCallbackTokenComponent } from './spotify-callback-token/spotify-callback-token.component';
import { SpotifyUserPlaylistComponent } from './spotify-user-playlist/spotify-user-playlist.component';
import { SpotifyService } from '../services/spotify-service/spotify-service';
import { SpotifyPlaylistFormComponent } from './spotify-playlist-form/spotify-playlist-form.component';
import { SpotifyPlaylistDeleteComponent } from './spotify-playlist-delete/spotify-playlist-delete.component';


@NgModule({
    declarations: [SpotifyLoginComponent, SpotifyUserComponent, SpotifyCallbackTokenComponent, SpotifyUserPlaylistComponent, SpotifyPlaylistFormComponent, SpotifyPlaylistDeleteComponent],
    imports: [HttpClientModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule, AngularFontAwesomeModule],
    providers: [SpotifyService],
    exports: [SpotifyLoginComponent]    
})
export class SpotifyModule { }