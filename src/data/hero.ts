type Social = {
  label: string;
  link: string;
};

type hero = {
  mail: string;
  title: string;
  subtitle: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const hero: hero = {
    mail: "kbuiblue@gmail.com",
    title: "Hi, I’m Khanh 👋",
    subtitle: "AKA *Marshall*",
    profile: "/src/content/images/profile-pic.jpeg",
    description:
        `As a support developer with *2 years of experience in web development*, I strike the balance between technical ability and communication skills.`,
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

export default hero;
