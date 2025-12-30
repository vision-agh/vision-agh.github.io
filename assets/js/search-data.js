// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/team";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-conferences",
          title: "Conferences",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "members-msc-krzysztof-błachut",
          title: 'Msc Krzysztof Błachut',
          description: "Profile of Msc Krzysztof Błachut, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/blachut";
            },},{id: "members-msc-michał-daniłowicz",
          title: 'Msc Michał Daniłowicz',
          description: "Profile of Msc Michał Daniłowicz, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/danilowicz";
            },},{id: "members-prof-marek-gorgoń",
          title: 'Prof Marek Gorgoń',
          description: "Profile of Marek Gorgon, Head of the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/gorgon";
            },},{id: "members-msc-kamil-jeziorek",
          title: 'Msc Kamil Jeziorek',
          description: "Profile of Msc Kamil Jeziorek, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/jeziorek";
            },},{id: "members-msc-marcin-kowalczyk",
          title: 'Msc Marcin Kowalczyk',
          description: "Profile of Msc Marcin Kowalczyk, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kowalczyk";
            },},{id: "members-phd-tomasz-kryjak",
          title: 'PhD Tomasz Kryjak',
          description: "Profile of Tomasz Kryjak, Member of the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kryjak";
            },},{id: "members-msc-olivier-lichota",
          title: 'Msc Olivier Lichota',
          description: "Profile of Msc Olivier Lichota, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/lichota";
            },},{id: "members-msc-konrad-lis",
          title: 'Msc Konrad Lis',
          description: "Profile of Msc Konrad Lis, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/lis";
            },},{id: "members-msc-hubert-szolc",
          title: 'Msc Hubert Szolc',
          description: "Profile of Msc Hubert Szolc, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/szolc";
            },},{id: "members-msc-mateusz-wąsala",
          title: 'Msc Mateusz Wąsala',
          description: "Profile of Msc Mateusz Wąsala, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wasala";
            },},{id: "members-msc-piotr-wzorek",
          title: 'Msc Piotr Wzorek',
          description: "Profile of Msc Piotr Wzorek, Doctoral Researcher at the Embedded Vision Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wzorek";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-ncn-preludium",
          title: 'NCN Preludium',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/preludium_jeziorek";
            },},{id: "projects-ncn-preludium",
          title: 'NCN Preludium',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/preludium_kowalczyk";
            },},{id: "projects-ncn-preludium",
          title: 'NCN Preludium',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/preludium_wasala";
            },},{id: "projects-ncn-preludium",
          title: 'NCN Preludium',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/preludium_wzorek";
            },},{id: "projects-ncn-sonata",
          title: 'NCN Sonata',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sonata_kryjak";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
