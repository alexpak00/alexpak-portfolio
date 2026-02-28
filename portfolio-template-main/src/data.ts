import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Alex Pak",
  role: "Gameplay Programmer",
  introduction: "",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/alexpak00",
    itchIO: "https://alexsixpak.itch.io/",
    linkedIn: "https://www.linkedin.com/in/alex-pak-6882851b4/",
  }
};

export const games: Game[] = [
  {
    name: "Cybersin",
    description: "Collaborative group project where I was primarily responsible for designing and implementing enemy and boss AI systems.",
    genres: ["2D Topdown", "Soft Bullethell", "Action"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    /*  { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },*/
    ],
    media: [
      { source: "/images/games/Cybersin/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtube.com/embed/XR_96G_w2kw", type: MediaType.YouTube },
      { source: "https://youtube.com/embed/NHJIXRmesz4", type: MediaType.YouTube },
      { source: "/images/games/Cybersin/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Cybersin/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Cybersin/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/Cybersin/Screenshot_5.png", type: MediaType.Image }
    ],
  },
  {
    name: "Ascendant",
    description: "Solo-developed project focused on movement-based mechanics and dynamic camera system implementation.",
      genres: ["3D", " Platformer", "Movement"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    /*  { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },*/
    ],
    media: [
      { source: "/images/games/Ascendant/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtube.com/embed/XTITqLQVZwI", type: MediaType.YouTube },
      { source: "/images/games/Ascendant/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Ascendant/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/Ascendant/Screenshot_4.png", type: MediaType.Image }
    ],
  },
  {
    name: "Dungeon Dive",
    description: "A 2D Platformer",
      genres: ["3D", " Boss Rush", "Action"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    /*  { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },*/
    ],
    media: [
      { source: "/images/games/Dungeon_Dive/Screenshot_1.png", type: MediaType.Image },
      { source: "https://youtube.com/embed/yfft9e8mZL0", type: MediaType.YouTube },
      { source: "https://youtube.com/embed/pxjy-ctwC70", type: MediaType.YouTube },
      { source: "/images/games/Dungeon_Dive/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Dungeon_Dive/Screenshot_3.png", type: MediaType.Image }
    ],
    }
];