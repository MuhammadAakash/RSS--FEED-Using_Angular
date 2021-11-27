import { Route } from "@angular/router";
import { EnglishComponent } from "./english.component";

export const EnglishRoutes: Route[] = [
    {
        path: '',
        component:EnglishComponent,
        data: {breadCrumb:'English'}
    }
]