import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Entry } from "../config/faqConfig";
import { useTranslation } from "react-i18next";

export default function InformationCard({ data }: { data: Entry }) {
    const { t } = useTranslation();

    return (
        <Card className="p-4" shadow="sm">
            {data.descriptionTranslationKey ? <h4 className="font-bold mb-2">{t(data.titleTranslationKey!)}</h4> : <></>}
            <CardBody className="flex flex-row items-center p-0">
                <div className="w-12 flex flex-row items-center justify-center">
                    <FontAwesomeIcon icon={data.icon} size="2xl" className="text-default-400 dark:text-default ml-2" />
                </div>
                <Divider orientation="vertical" className="mx-4 h-full" />
                <p className="text-sm">
                    {t(data.descriptionTranslationKey)}
                </p>
            </CardBody>
        </Card>
    )
}
