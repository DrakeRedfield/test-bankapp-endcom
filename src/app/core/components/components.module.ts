import { NgModule } from "@angular/core";
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FundsCardComponent } from './cards/funds-card/funds-card.component';
import { CardBankComponent } from './cards/card-bank/card-bank.component';
import { LogoComponent } from './logo/logo.component';
import { UserDataComponent } from './user-data/user-data.component';
import { MovementsTableComponent } from './movements-table/movements-table.component';
import { CommonModule } from '@angular/common';
import { FundsSectionComponent } from './funds-section/funds-section.component';

@NgModule({
    declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FundsCardComponent,
    CardBankComponent,
    LogoComponent,
    UserDataComponent,
    MovementsTableComponent,
    FundsSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FundsCardComponent,
    CardBankComponent,
    LogoComponent,
    UserDataComponent,
    MovementsTableComponent,
    FundsSectionComponent
  ]
})
export class ComponentsModule {}
