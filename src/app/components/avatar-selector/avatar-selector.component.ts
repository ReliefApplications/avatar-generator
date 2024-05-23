import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { AvatarService, IAvatarBase } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-avatar-selector',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent {
  @Output() avatar$ = new EventEmitter<IAvatarBase>();

  constructor(public avatarService: AvatarService) {}
}
