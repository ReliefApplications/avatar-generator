import { Injectable } from '@angular/core';

const BASE_SRC_AVATAR = 'assets/avatar';

const BASE_SRC_TSHIRT = 'assets/avatar/t-shirts';

const BASE_SRC_SHOES = 'assets/avatar/shoes';

export interface IAvatar {
  name: string;
  clothes: {
    type: TClothType;
    name: string;
  }[];
}

export interface IAvatarBase {
  name: string;
  src: string;
}

export interface ICloth {
  src: string;
  name: string;
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
    baseSrc: string;
    assets: { src: string; name: string }[];
  }[] = [
    {
      type: 't-shirt',
      assets: [
        {
          src: 'blue.png',
          name: 'blue',
        },
        {
          src: 'red.png',
          name: 'red',
        },
        {
          src: 'green.png',
          name: 'green',
        },
      ],
      baseSrc: BASE_SRC_TSHIRT,
    },
    {
      type: 'shoes',
      assets: [
        {
          src: 'blue.png',
          name: 'blue',
        },
        {
          src: 'orange.png',
          name: 'orange',
        },
        {
          src: 'red.png',
          name: 'red',
        },
      ],
      baseSrc: BASE_SRC_SHOES,
    },
  ];

  public avatar: IAvatar = {
    name: 'lion',
    clothes: [
      {
        type: 't-shirt',
        name: 'red',
      },
    ],
  };

  constructor() {}

  getAvatar() {
    const avatar = this.avatars.find((x) => x.name === this.avatar.name);
    return avatar || this.avatars[0];
  }

  getAvatarClothes() {
    const clothes: ICloth[] = [];
    for (const cloth of this.avatar.clothes) {
      const store = this.clothes.find((x) => x.type === cloth.type);
      if (store) {
        const asset = store.assets.find((asset) => asset.name === cloth.name);
        if (asset) {
          clothes.push({
            src: `${store.baseSrc}/${this.avatar.name}/${asset.src}`,
            name: asset.name,
          });
        }
      }
    }
    return clothes;
  }
}
