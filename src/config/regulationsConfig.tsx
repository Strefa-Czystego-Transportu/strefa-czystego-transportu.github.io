import { IconDefinition, faCalendar, faMoneyBill1Wave, faScaleBalanced, faSection } from "@fortawesome/free-solid-svg-icons";

export interface Entry {
    titleTranslationKey?: string,
    descriptionTranslationKey: string,
    icon: IconDefinition,
}

export const config: Entry[] = [
    {
        descriptionTranslationKey: "regulations.d1",
        icon: faSection,
    },
    {
        descriptionTranslationKey: "regulations.d3",
        icon: faCalendar,
    },
    {
        descriptionTranslationKey: "regulations.d4",
        icon: faCalendar,
    },
    {
        descriptionTranslationKey: "regulations.d5",
        icon: faScaleBalanced,
    },
    {
        descriptionTranslationKey: "regulations.d6",
        icon: faMoneyBill1Wave,
    },
]