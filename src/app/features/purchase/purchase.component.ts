import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaseComponent {}
