import { Injectable } from '@angular/core';

const BASE_SRC_AVATAR = 'assets/avatar';

const BASE_SRC_TSHIRT = 'assets/avatar/t-shirts';

const BASE_SRC_SHOES = 'assets/avatar/shoes';

export interface IAvatar {
  baseSrc: string;
  clothes: {
    type: TClothType;
    asset: ICloth;
  }[];
}

export interface IAvatarBase {
  name: string;
  src: string;
}

export interface ICloth {
  src: string;
  name: string;
  x: number;
  y: number;
  ratio: number;
}

export type TClothType = 't-shirt' | 'shoes';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  public avatars: IAvatarBase[] = [
    {
      name: 'bear',
      src: BASE_SRC_AVATAR + '/avatar-bear.png',
    },
    {
      name: 'rabbit',
      src: BASE_SRC_AVATAR + '/avatar-rabbit.png',
    },
    {
      name: 'lion',
      src: BASE_SRC_AVATAR + '/avatar-lion.png',
    },
  ];

  public clothes: {
    type: TClothType;
    assets: ICloth[];
  }[] = [
    {
      type: 't-shirt',
      assets: [
        {
          src: BASE_SRC_TSHIRT + '/lion/blue.png',
          name: 'blue',
          x: 0,
          y: 0,
          ratio: 1,
        },
        {
          src: BASE_SRC_TSHIRT + '/lion/red.png',
          name: 'red',
          x: 0,
          y: 0,
          ratio: 1,
        },
        {
          src: BASE_SRC_TSHIRT + '/lion/green.png',
          name: 'green',
          x: 0,
          y: 0,
          ratio: 1,
        },
      ],
    },
    {
      type: 'shoes',
      assets: [
        {
          src: BASE_SRC_SHOES + '/lion/blue.png',
          name: 'blue',
          x: 0,
          y: 0,
          ratio: 1,
        },
        {
          src: BASE_SRC_SHOES + '/lion/orange.png',
          name: 'orange',
          x: 0,
          y: 0,
          ratio: 1,
        },
        {
          src: BASE_SRC_SHOES + '/lion/red.png',
          name: 'red',
          x: 0,
          y: 0,
          ratio: 1,
        },
      ]
    }
  ];

  public avatar: IAvatar = {
    baseSrc: this.avatars[0].src,
    clothes: [
      {
        type: 't-shirt',
        asset: {
          src: BASE_SRC_TSHIRT + '/france.png',
          name: 't-shirt france',
          x: 130,
          y: 120,
          ratio: 0.5,
        },
      },
    ],
  };

  constructor() {}
}
