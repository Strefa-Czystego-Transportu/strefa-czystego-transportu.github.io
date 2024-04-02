import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next"

export default function CheckZTP() {

    const { t } = useTranslation();

    return (
        <div className="w-full text-end">
            <Link href={t("common.ZTPhref")} isExternal showAnchorIcon className='mt-4 mb-2 font-bold' isBlock>{t("common.checkZTP")}</Link>
        </div>
    )
}
