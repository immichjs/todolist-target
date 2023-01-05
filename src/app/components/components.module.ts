import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DarkmodeComponent } from './darkmode/darkmode.component';
import { FooterComponent } from './footer/footer.component';
import { DeleteAllTasksComponent } from './delete-all-tasks/delete-all-tasks.component';

@NgModule({
  declarations: [
    ProfileComponent,
    DarkmodeComponent,
    FooterComponent,
    DeleteAllTasksComponent,
  ],
  imports: [CommonModule],
  exports: [
    ProfileComponent,
    DarkmodeComponent,
    FooterComponent,
    ProfileComponent,
    DeleteAllTasksComponent,
  ],
})
export class ComponentsModule {}
