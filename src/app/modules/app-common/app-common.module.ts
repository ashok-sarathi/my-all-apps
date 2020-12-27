import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './service/student.service';

const API = [
  StudentService
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppCommonModule {
  static forRoot(): ModuleWithProviders<AppCommonModule> {
    return <ModuleWithProviders<AppCommonModule>>{
      ngModule: AppCommonModule,
      providers: [...API]
    }
  }
}
