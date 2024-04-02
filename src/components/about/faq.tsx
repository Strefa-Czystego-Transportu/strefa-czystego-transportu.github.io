import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Entry } from "../../config/faqConfig";
import { useTranslation } from "react-i18next";

export default function Faq({ data }: { data: Entry }) {
    const { t } = useTranslation();

    return (
        <Card className="p-4" shadow="sm">
            <h4 className="font-bold mb-2">{t(data.titleTranslationKey)}</h4>
            <CardBody className="flex flex-row items-stretch p-0">
                <div className="flex flex-col items-center justify-center ml-2">
                    <FontAwesomeIcon icon={data.icon} size="2xl" className="text-default-400 dark:text-default" />
                </div>
                <Divider orientation="vertical" className="mx-4 h-full" />
                <div className="">
                    <p className="text-tiny">
                        {t(data.descriptionTranslationKey)}
                    </p>
                </div>
            </CardBody>
        </Card>
    )
}
