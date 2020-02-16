import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { CoursesComponent } from './container/courses/courses.component';
import { CourseListComponent } from './container/courses/course-list/course-list.component';
import { CarouselComponent } from './container/carousel/carousel.component';
import { FooterComponent } from './container/footer/footer.component';
import { CourseDescriptionComponent } from './container/courses/course-description/course-description.component';
import { CourseItemComponent } from './container/courses/course-list/course-item/course-item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    CoursesComponent,
    CourseListComponent,
    CarouselComponent,
    FooterComponent,
    CourseDescriptionComponent,
    CourseItemComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
