type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  subtitle: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
    mail: "kbuiblue@gmail.com",
    title: "Hi, I’m Khanh 👋",
    subtitle: "AKA *Marshall*",
    profile: "/profile-pic.jpeg",
    description:
        `Xin chào, I am a *Vietnamese frontend developer* with *over 1 year* of web experience. I work primarily with *NextJS and Typescript*. 
         Outside of work, I collect guitars and play indie video games.`,
    socials: [
        {
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/k-bui/",
        },
        {
            label: "Github",
            link: "https://github.com/kbuiblue",
        },
    ],
};

export default presentation;
