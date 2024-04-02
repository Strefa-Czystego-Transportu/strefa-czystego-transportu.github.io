import { IconDefinition, faBabyCarriage, faCalendar, faPersonCane, faTicketAlt, faTruck, faWheelchair } from "@fortawesome/free-solid-svg-icons";

export interface Entry {
    titleTranslationKey?: string,
    descriptionTranslationKey: string,
    icon: IconDefinition,
}

export const config: Entry[] = [
    {
        descriptionTranslationKey: "exclusions.d1",
        icon: faPersonCane,
    },
    {
        descriptionTranslationKey: "exclusions.d2",
        icon: faWheelchair,
    },
    {
        descriptionTranslationKey: "exclusions.d3",
        icon: faBabyCarriage,
    },
    {
        descriptionTranslationKey: "exclusions.d4",
        icon: faTruck,
    },
    {
        descriptionTranslationKey: "exclusions.d5",
        icon: faTicketAlt,
    },
    {
        descriptionTranslationKey: "exclusions.d6",
        icon: faCalendar,
    },
]