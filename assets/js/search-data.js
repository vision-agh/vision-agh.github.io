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
        },{id: "nav-collaboration",
          title: "Collaboration",
          description: "Academic and industrial partners we work with.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/collaboration/";
          },
        },{id: "members-krzysztof-błachut-msc",
          title: 'Krzysztof Błachut, MSc',
          description: "Profile of Krzysztof Błachut, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/blachut";
            },},{id: "members-michał-daniłowicz-msc",
          title: 'Michał Daniłowicz, MSc',
          description: "Profile of Michał Daniłowicz, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/danilowicz";
            },},{id: "members-mateusz-gołąbek-msc",
          title: 'Mateusz Gołąbek, MSc',
          description: "Profile of Mateusz Gołąbek, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/golabek";
            },},{id: "members-prof-marek-gorgoń",
          title: 'Prof Marek Gorgoń',
          description: "Profile of Marek Gorgoń, Professor at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/gorgon";
            },},{id: "members-kamil-jeziorek-msc",
          title: 'Kamil Jeziorek, MSc',
          description: "Profile of Kamil Jeziorek, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/jeziorek";
            },},{id: "members-marcin-kowalczyk-msc",
          title: 'Marcin Kowalczyk, MSc',
          description: "Profile of Marcin Kowalczyk, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kowalczyk";
            },},{id: "members-tomasz-kryjak-phd",
          title: 'Tomasz Kryjak, PhD',
          description: "Profile of Tomasz Kryjak, Leader of the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/kryjak";
            },},{id: "members-konrad-lis-msc",
          title: 'Konrad Lis, MSc',
          description: "Profile of Konrad Lis, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/lis";
            },},{id: "members-remigiusz-mietła-msc",
          title: 'Remigiusz Mietła, MSc',
          description: "Profile of Remigiusz Mietła, MSc, Research/Lab Engineer at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/mietla";
            },},{id: "members-błażej-szargut-msc",
          title: 'Błażej Szargut, MSc',
          description: "Profile of Błażej Szargut, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/szargut";
            },},{id: "members-hubert-szolc-msc",
          title: 'Hubert Szolc, MSc',
          description: "Profile of Hubert Szolc, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/szolc";
            },},{id: "members-mateusz-wąsala-msc",
          title: 'Mateusz Wąsala, MSc',
          description: "Profile of Mateusz Wąsala, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wasala";
            },},{id: "members-piotr-wzorek-msc",
          title: 'Piotr Wzorek, MSc',
          description: "Profile of Piotr Wzorek, MSc, Doctoral Researcher at the Embedded Perception and Autonomous Systems Group.",
          section: "Members",handler: () => {
              window.location.href = "/members/wzorek";
            },},{id: "projects-ncbr-artiq",
          title: 'NCBR ARTIQ',
          description: "ARTIQ programme (NCBR &amp; NCN)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/artiq";
            },},{id: "projects-fp3-iam4rail",
          title: 'FP3-IAM4RAIL',
          description: "EU-Rail FP3 project funded by Horizon Europe",
          section: "Projects",handler: () => {
              window.location.href = "/projects/iam4rail";
            },},{id: "projects-idub-agh",
          title: 'IDUB AGH',
          description: "Initiative for Excellence – Research University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/idub_event_uav";
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
              window.location.href = "/projects/preludium_kryjak";
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
          description: "National Science Centre, Poland (Sonata 12)",
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
