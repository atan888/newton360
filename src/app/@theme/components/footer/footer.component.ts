import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Copyright <b><a href="http://http://newton360.com" target="_blank">Newton360, LL.</a></b> 2018. All Rights Reserved.</span>
    <span style="text-align:right"> 360 Newton Drive, Charlottesville, VA  22902</span>
    <!--
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>-->
  `,
})
export class FooterComponent {
}
