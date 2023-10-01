import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostResolver } from './post.resolver';

const routes: Routes = [{
  path: 'post',
  component: PostComponent,
  resolve: {
    post: PostResolver, 
  },
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
