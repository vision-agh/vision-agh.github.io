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
        },{id: "members-msc-krzysztof-błachut",
          title: 'MSc Krzysztof Błachut',
          description: "Profile of MSc Krzysztof Błachut, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/blachut";
            },},{id: "members-msc-michał-daniłowicz",
          title: 'MSc Michał Daniłowicz',
          description: "Profile of MSc Michał Daniłowicz, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/danilowicz";
            },},{id: "members-msc-mateusz-gołąbek",
          title: 'MSc Mateusz Gołąbek',
          description: "Profile of MSc Mateusz Gołąbek, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/golabek";
            },},{id: "members-prof-marek-gorgoń",
          title: 'Prof Marek Gorgoń',
          description: "Profile of Marek Gorgoń, Professor at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/gorgon";
            },},{id: "members-msc-kamil-jeziorek",
          title: 'MSc Kamil Jeziorek',
          description: "Profile of MSc Kamil Jeziorek, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/jeziorek";
            },},{id: "members-msc-marcin-kowalczyk",
          title: 'MSc Marcin Kowalczyk',
          description: "Profile of MSc Marcin Kowalczyk, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kowalczyk";
            },},{id: "members-phd-tomasz-kryjak",
          title: 'PhD Tomasz Kryjak',
          description: "Profile of Tomasz Kryjak, Head of the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kryjak";
            },},{id: "members-msc-konrad-lis",
          title: 'MSc Konrad Lis',
          description: "Profile of MSc Konrad Lis, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/lis";
            },},{id: "members-msc-hubert-szolc",
          title: 'MSc Hubert Szolc',
          description: "Profile of MSc Hubert Szolc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/szolc";
            },},{id: "members-msc-mateusz-wąsala",
          title: 'MSc Mateusz Wąsala',
          description: "Profile of MSc Mateusz Wąsala, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wasala";
            },},{id: "members-msc-piotr-wzorek",
          title: 'MSc Piotr Wzorek',
          description: "Profile of MSc Piotr Wzorek, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wzorek";
            },},{id: "projects-ncn-preludium",
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
