import { NgModule } from '@angular/core';
import { YesnoPipe } from './yesno.pipe';



@NgModule({
    declarations: [
        YesnoPipe
    ],
    imports: [],
    exports: [
        YesnoPipe
    ],
    providers: [],
})
export class PipeModule { }