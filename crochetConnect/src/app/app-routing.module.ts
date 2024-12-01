import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blank',
    pathMatch: 'full', // Redirect to 'blank' on the base path
  },
  {
    path: 'blank',
    loadChildren: () =>
      import('./blank/blank.module').then((m) => m.BlankPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
