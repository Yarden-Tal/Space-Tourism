export interface HeaderLink {
  title: string;
  num: string;
  link: string;
}

export interface Planet {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface Tech {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}
