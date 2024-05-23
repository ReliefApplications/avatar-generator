import { Component } from '@angular/core';
import {
  AvatarService,
  IAvatar,
  IAvatarBase,
  ICloth,
  TClothType,
} from './services/avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'avatar-generator';
  public avatar!: IAvatar;

  constructor(private avatarService: AvatarService) {
    this.avatar = this.avatarService.avatar;
  }

  onSelectAvatar(avatar: IAvatarBase): void {
    this.avatarService.avatar = {
      ...this.avatarService.avatar,
      baseSrc: avatar.src,
    };
    this.avatar = this.avatarService.avatar;
  }

  onSelectCloth(cloth: { type: TClothType; asset: ICloth }): void {
    const clothes = this.avatarService.avatar.clothes.filter((x) => x.type !== cloth.type);
    clothes.push(cloth);
    this.avatarService.avatar = {
      ...this.avatarService.avatar,
      clothes,
    }
    this.avatar = this.avatarService.avatar;
  }
}
