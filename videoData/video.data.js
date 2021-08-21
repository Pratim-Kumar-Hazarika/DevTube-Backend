const videodata = [
    {
      url: "https://www.youtube.com/embed/E8cl_8ktp9M",
      name: "Learn HTML/CSS by creating your portfolio [ Course I ]",
      artist: "Tanay Pratap",
      genre: "course1",
      views: "26,998 views • Feb 3, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s176-c-k-c0x00ffffff-no-rj-mo",
      thumbnail: "https://i.ytimg.com/vi/E8cl_8ktp9M/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/3n1VkrzhxUE",
      name: "CSS - Learn HTML/CSS by creating your portfolio II",
      artist: "Tanay Pratap",
      genre: "course1",
      views: "8,937 views • Feb 4, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s176-c-k-c0x00ffffff-no-rj-mo",
      thumbnail: "https://i.ytimg.com/vi/3n1VkrzhxUE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/UpEupeE7vUE",
      name: "Hosting - Learn HTML/CSS by creating your portfolio III",
      artist: "Tanay Pratap",
      genre: "course1",
      views: "8,774 views • Feb 4, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s176-c-k-c0x00ffffff-no-rj-mo",
      thumbnail: "https://i.ytimg.com/vi/UpEupeE7vUE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/Nyj1nzXLFjM",
      name: "Git n GitHub - Learn HTML/CSS by creating your portfolio IV",
      artist: "Tanay Pratap",
      genre: "course1",
      views: "9,400 views • Feb 11, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s176-c-k-c0x00ffffff-no-rj-mo",
      thumbnail: "https://i.ytimg.com/vi/Nyj1nzXLFjM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/oUO3-XQAEsY",
      name: "Continuous Delivery - Learn HTML/CSS by creating your portfolio V",
      artist: "Tanay Pratap",
      genre: "course1",
      views: "6,592 views • Feb 12, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s176-c-k-c0x00ffffff-no-rj-mo",
      thumbnail: "https://i.ytimg.com/vi/oUO3-XQAEsY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/8aGhZQkoFbQ",
      name: "What the heck is the event loop anyway?",
      artist: "JSConf",
      genre: "js-talks",
      views: "1,972,359 views • Oct 9, 2014",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/8aGhZQkoFbQ/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/Wo0qiGPSV-s",
      name: "Immutable data structures for functional JS ",
      artist: "JSConf",
      genre: "js-talks",
      views: "259,360 views • May 14, 2017",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Wo0qiGPSV-s/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/e-5obm1G_FY",
      name: "Learning Functional Programming with JavaScript",
      artist: "JSConf",
      genre: "js-talks",
      views: "2,329,416 views • Jun 14, 2016",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSUOEQunmzvzQOeAWEorFZiXGHQ6LEMMR02wzNQ9w=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/e-5obm1G_FY/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/fE-yQeVRrzw",
      name: "Scaling Myntra API Gateway to 30kqps built on Go lang with GraphQL",
      artist: "GraphQL Asia",
      genre: "graphQl-talks",
      views: "495 views • May 14, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSFIcHwo5qli_rSH6R_mq5qEyK08JPLMsMisxHx=s176-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/fE-yQeVRrzw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/XUgGl8mGu1M",
      name: "Rewriting Wiki in Teams with Apollo + GraphQL at Microsoft's scale",
      artist: "GraphQL Asia",
      genre: "graphQl-talks",
      views: "4,232 views • May 14, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSFIcHwo5qli_rSH6R_mq5qEyK08JPLMsMisxHx=s176-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/XUgGl8mGu1M/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/f7s0XpKb0VM",
      name: "Live Queries implementation with Apollo & GraphQL - Kiran Kumar Abburi",
      artist: "GraphQL Asia",
      genre: "graphQl-talks",
      views: "813 views  • May 14, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSFIcHwo5qli_rSH6R_mq5qEyK08JPLMsMisxHx=s176-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/f7s0XpKb0VM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/oLXGM0kiNNc",
      name: "DRY when writing a GraphQL React App by Tanay Pratap",
      artist: "GraphQL Asia",
      genre: "graphQl-talks",
      views: "745 views • Nov 10, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLSFIcHwo5qli_rSH6R_mq5qEyK08JPLMsMisxHx=s176-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/oLXGM0kiNNc/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/dN15USae2ik",
      name: "ReactJS for Absolute Beginners",
      artist: "Tanay Pratap",
      genre: "react-course",
      views: "22,471 views •  Jun 16, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/dN15USae2ik/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/9pRhkECs1rM",
      name: "Revision Session for ReactJS Beginners",
      artist: "Tanay Pratap",
      genre: "react-course",
      views: "3,833 views •Sep 18, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/9pRhkECs1rM/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/BqPoQCCJ_Ds",
      name: "Props and Components for ReactJS Beginners",
      artist: "Tanay Pratap",
      genre: "react-course",
      views: "3,982 • Sep 22, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/BqPoQCCJ_Ds/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/Icr3pGbz3iE",
      name: "Getting started with React Hooks",
      artist: "Tanay Pratap",
      genre: "react-course",
      views: "10,229 views • Jul 19, 2020",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Icr3pGbz3iE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/Z5iWr6Srsj8",
      name: "React Typescript Tutorial",
      artist: "Ben Awad",
      genre: "typescript",
      views: "329,803 views • Sep 5, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/Z5iWr6Srsj8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/OkIDr8QSrLg",
      name: " Using Typescript in React",
      artist: "Ben Awad",
      genre: "typescript",
      views: "53,699 views• Apr 19, 2018",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/OkIDr8QSrLg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/se72XMlG1Ro",
      name: " Typescript Basics",
      artist: "Ben Awad",
      genre: "typescript",
      views: "20,060 views • Apr 17, 2018",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/se72XMlG1Ro/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/nViEqpgwxHE",
      name: "Typescript Generics Tutorial",
      artist: "Ben Awad",
      genre: "typescript",
      views: "104,311 views •Aug 26, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLScd3qE7Blu2CtRbzkfBzbEwE3_bIpO-dRaQjTPTg=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/nViEqpgwxHE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/5ZZG4SOzPkw",
      name: "14 Books for Growth and Startups ft. Priyadeep Sinha ",
      artist: "Tanay Pratap",
      genre: "teaWithTanay",
      views: "1,688 views •S ep 7, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/5ZZG4SOzPkw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/PU4zArf71Yg",
      name: "Programming Projects ft. Rachit Gulati",
      artist: "Tanay Pratap",
      genre: "teaWithTanay",
      views: "3,190 views • Sep 14, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/PU4zArf71Yg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/cXFMlxKx9A8",
      name: "Building Communities ft. Anubha from GirlScript",
      artist: "Tanay Pratap",
      genre: "teaWithTanay",
      views: "1,064 views• Sep 21, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/cXFMlxKx9A8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    },
    {
      url: "https://www.youtube.com/embed/QhnU7kO8u_I",
      name: "Getting Started with Open Source ft. Rahul Kadyan",
      artist: "Tanay Pratap",
      genre: "teaWithTanay",
      views: "2,052 views • Sep 29, 2019",
      image:
        "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s88-c-k-c0x00ffffff-no-rj",
      thumbnail: "https://i.ytimg.com/vi/QhnU7kO8u_I/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBrXTq56Ki9NN5HZAYt9zdQqK9Vxg"
    }
  ];
  
  
  module.exports = videodata;