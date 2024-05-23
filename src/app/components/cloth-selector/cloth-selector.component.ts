import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import {
  AvatarService,
  ICloth,
  TClothType,
} from 'src/app/services/avatar.service';

@Component({
  selector: 'app-cloth-selector',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cloth-selector.component.html',
  styleUrls: ['./cloth-selector.component.scss'],
})
export class ClothSelectorComponent {
  @Input() type!: TClothType;
  @Output() cloth$ = new EventEmitter<{
    type: TClothType;
    asset: ICloth;
  }>();
  public clothes: ICloth[] = [];

  constructor(private avatarService: AvatarService) {

  }

  ngOnInit() {
    this.clothes =
      this.avatarService.clothes.find((x) => x.type === this.type)?.assets ||
      [];
  }
}
