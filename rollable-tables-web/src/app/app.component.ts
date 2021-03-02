import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;

  constructor(private cdRef: ChangeDetectorRef, private ngZone: NgZone) { }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ngZone.run(() => this.cdRef.detectChanges());
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
