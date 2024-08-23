import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const appConfig: ApplicationConfig = {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyC-RjXmjgrUs1upCJVeiei0vMi3uE5UMc0",
  //   authDomain: "telo2-1bf67.firebaseapp.com",
  //   projectId: "telo2-1bf67",
  //   storageBucket: "telo2-1bf67.appspot.com",
  //   messagingSenderId: "370017290620",
  //   appId: "1:370017290620:web:fd706e363f0a603f5d7cf9",
  //   measurementId: "G-DYXRQN4RSP"
  // };
  // // Initialize Firebases
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  providers: [provideRouter(routes),
    provideAuth0({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideAnimations()
  ]
};
