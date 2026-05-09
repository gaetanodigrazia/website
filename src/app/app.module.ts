import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HomeComponent } from "./pages/home/home.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app.routing.module";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { BiographyComponent } from "./pages/biography/biography.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SettingsComponent,
    ProjectsComponent,
    ArticlesComponent,
    BiographyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
