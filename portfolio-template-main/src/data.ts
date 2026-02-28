import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Alex Pak",
  role: "Gameplay Programmer",
  introduction: "",
  description: "Greetings! My name is Alex and I am an aspiring gameplay programmer. Currently, I am pursuing a Bachelors in Computer Game Design at George Mason University. I would say my interest in game development comes from my experience with League of Legends. My personal interests include dancing and gunpla. Thanks for reading!",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Alex_Pak_Game_Dev_Resume.pdf`,
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
      description: "Final solo project combining two course modules, where I implemented multi-phase boss behavior, player action systems, and visual damage feedback to enhance game feel.",
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