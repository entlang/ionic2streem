import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";
import { MentionsPage } from "../pages/mentions/mentions";
import { LoginPage } from "../pages/login/login";
import { LoginService } from "../services/login";
import { DateFormat } from "../pipes/dateFormat";

@NgModule({
    declarations: [
        MyApp,
        MentionsPage,
        LoginPage,
        DateFormat
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MentionsPage,
        LoginPage
    ],
    providers: [LoginService]
})
export class AppModule {
}