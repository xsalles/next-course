import { Facebook, Link, Linkedin, Slack } from "lucide-react";

interface ShareButtonProps {
    name: string;
    icon: React.ReactNode;
    text: string;
    url: string
}

export const shareButtons: ShareButtonProps[] = [
    {
        name: "Linkedin",
        icon: <Linkedin width={16} height={16} />,
        text: "Linkedin",
        url: "https://www.linkedin.com/in/pedro-sales-00090a274/"
    },
    {
        name: "Facebook",
        icon: <Facebook width={16} height={16} />,
        text: "Facebook",
        url: "https://www.facebook.com/?locale2=en_US&_rdr"
    },
    {
        name: "Slack",
        icon: <Slack width={16} height={16}/>,
        text: "Slack",
        url: "https://slack.com/"
    },
    {
        name: "Link",
        icon: <Link width={16} height={16}/>,
        text: "Copiar link",
        url: "https://www.example.com"
    }
]