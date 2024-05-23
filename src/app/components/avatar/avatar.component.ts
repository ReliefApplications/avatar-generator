import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Konva from 'konva';
import { IAvatar } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() avatar!: IAvatar;

  @ViewChild('stageContainer', { static: false })
  stageContainer!: ElementRef<HTMLDivElement>;

  private stage!: Konva.Stage;
  private layer!: Konva.Layer;

  ngAfterViewInit() {
    this.initializeStage();
    this.updateAvatar();
  }

  ngOnChanges() {
    if (this.stage) {
      this.updateAvatar();
    }
  }

  private initializeStage() {
    this.stage = new Konva.Stage({
      container: this.stageContainer.nativeElement,
      width: 500,
      height: 500,
    });

    this.layer = new Konva.Layer();
    this.stage.add(this.layer);
  }

  private updateAvatar() {
    this.layer.destroyChildren();

    Konva.Image.fromURL(this.avatar.baseSrc, (baseImg) => {
      baseImg.setAttrs({
        x: 0,
        y: 0,
        width: this.stage.width(),
        height: this.stage.height(),
      });

      this.layer.add(baseImg);
      this.avatar.clothes.forEach((x) => {
        const cloth = x.asset;
        Konva.Image.fromURL(cloth.src, (clothImg) => {
          clothImg.setAttrs({
            x: cloth.x,
            y: cloth.y,
            width: this.stage.width() * cloth.ratio,
            height: this.stage.height() * cloth.ratio,
          });
          this.layer.add(clothImg);
        });
      });

      this.layer.draw();
    });
  }
}
