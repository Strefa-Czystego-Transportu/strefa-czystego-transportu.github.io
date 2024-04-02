import { IconDefinition, faBus, faCar, faHeart } from "@fortawesome/free-solid-svg-icons";

export interface Entry {
    titleTranslationKey?: string,
    descriptionTranslationKey: string,
    icon: IconDefinition,
}

export const config: Entry[] = [
    {
        titleTranslationKey: "about.faq.t1",
        descriptionTranslationKey: "about.faq.d1",
        icon: faHeart,
    },
    {
        titleTranslationKey: "about.faq.t2",
        descriptionTranslationKey: "about.faq.d2",
        icon: faCar,
    },
    {
        titleTranslationKey: "about.faq.t3",
        descriptionTranslationKey: "about.faq.d3",
        icon: faBus,
    },
]