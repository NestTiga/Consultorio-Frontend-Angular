import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { SimpleLayoutComponent } from './simple-layout/simple-layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
  ],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
  ],
})
export class LayoutModule {}
