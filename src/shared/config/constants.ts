import classNames from "classnames";
//
import { CoreDataTypes, MenuProps } from "./types";


// whenever wee need to change default className value we will use this
export const cx = classNames;

// brand image
export const logo_white = "/images/logo/lonely-white.png";
export const logo_black = "/images/logo/lonely-black.png";

// menu items
export const menuItems: MenuProps[] = [
    {
        src: "home.svg",
        className: "!w-[65px] !h-[45px]",
        label: "Home",
        to : "__hero"
    },
    {
        src: "roots.svg",
        className: "",
        label: "Our Roots",
        to : "__root"
    },
    {
        src: "core.svg",
        className: "!w-[90px] !h-[37px]",
        label: "Our Core",
        to : "__core"
    },
    {
        src: "how-to-wl.svg",
        className: "!w-[102.63px] !h-[46px]",
        label: "How To WL?",
        to : "__space"
    },
    {
        src: "farm.svg",
        className: "!w-[72px] !h-[37px]",
        label: "The Farm",
        to : ""
    }
]

// social media
export const socialMedia = [
    {
        icon: "discord",
        link: "https://",
        className: "hover:text-[#7289da]"
    },
    {
        icon: "twitter",
        link: "https://",
        className: "hover:text-[#00acee]"
    }
]


// core data
export const coreData: CoreDataTypes[] = [
    {
        label: "Community",
        description: {
            __html: "<p>Story driven art.<br/> Story driven expansion. <br/> Story driven utility. <br/> <p class='mr' >Community determined story.</p> <br/> Through DAO voting the story of The Looney Fruits will make dramatic twists that will have drastic consequences, the on going story determines utility releases. <br/><br/> What is the first step in regrowing what the fruits have lost? Could the Fruit Root World War be stirring? <span class='mr' >DAO Discussed and DAO Decided<span/> </span>",
        }
    },
    {
        label: "Animation Studio",
        description: {
            __html: `The Looney Fruits Animation Studio aims to recreate the glory days of NFT story telling while adding a unique spin to create a fully immersive story/experience based NFT project by creating the following content: <br/><br/> - Animated series<br/>- Surrounding animated content<br/>- Live Animated TV "Live from inside Metaverse"<br/>- Live Animated Fruit Discord meetups<br/>- Audiobooks<br/>- Lore chapters<br/>- Animated announcements<br/>- Story-themed Twitter spaces (more info to come)<br/>`,
        }
    },
    {
        label: "Collection",
        description: {
            __html: "- Eth Blockchain <br/> - Small Collection Size<br/> - 120 Traits<br/> - Individual trait paths for rare fruit bases",
        }
    },
    {
        label: "Collaboration",
        description: {
            __html: "Looney Fruits Animation Studio will partner with different NFT projects to help build out immersive content that will elevate the user experience and engage the ecosystem in new and exciting ways. <br/> <br/>Looney Fruits Animations Studios: <br/>- Provides services in building out broadcasting frameworks, scenes, and animated rigs. <br/>- Creates animated content for other communities, Animated by Looney Fruits Animation Studio. DAO Voted <br/>- Produces quality surrounding worlds that NFT communities are lacking <br/> <br/>These partnerships will allow Looney Fruits to expand its reach and impact, while also contributing to the development of the wider NFT Ecosystem.",
        }
    }
]