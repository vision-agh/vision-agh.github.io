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
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "publications by categories in reversed chronological order",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repos",
          title: "Repos",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
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
            },},{id: "members-dr-tomasz-kryjak",
          title: 'Dr. Tomasz Kryjak',
          description: "Profile of Tomasz Kryjak, Head of the Embedded Vision Systems Group.",
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
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
