// TS interface
export interface Photo {
  // interface is the preferred way
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  attribution?: object;
  pretty?: (x?: boolean, y?: {}) => {};
}

const test = { name: "Kevin" };

export default test;

class Snap implements Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  attribution: object;

  constructor(snap: Photo) {
    this.albumId = snap.albumId;
    this.id = this.getId();
    this.title = snap.title;
    this.url = snap.url;
    this.thumbnailUrl = snap.thumbnailUrl;
    this.attribution = snap.attribution;
  }

  getId() {
    return Math.random();
  }

  printPretty() {
    return `${this.title}: ${this.url}`;
  }
}

class LoRes extends Snap {
  constructor(snap: Photo) {
    super(snap);
    this.url = this.thumbnailUrl;
  }
}

let photos: Photo[] = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
];

const snap1 = new Snap(photos[3]);
// Duck typing => if it looks like, quacks like a duck - it must be a duck

const snap2 = new Snap({
  albumId: 1,
  id: 10,
  title: "Nearly Coffee",
  url: "https://doesnotexist.com",
  thumbnailUrl: "",
});

const snap3 = {
  albumId: 1,
  id: 10,
  title: "Nearly Coffee",
  url: "https://doesnotexist.com",
  thumbnailUrl: "",
};

// console.log(snap1.printPretty());
// console.log(snap2.printPretty());
