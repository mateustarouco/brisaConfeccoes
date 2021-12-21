import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageComponent} from "./page.component";
import {MenuComponent} from "../menu/menu.component";
import { CamisetasComponent } from './camisetas/camisetas.component';
import { ProductComponent } from './shared/product/product.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    PageComponent,
    CamisetasComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatFormFieldModule,
    ]
})
export class PageModule { }
