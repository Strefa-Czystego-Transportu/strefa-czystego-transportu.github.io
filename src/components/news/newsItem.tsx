import { Card, CardHeader, CardBody, Image, CardFooter, Link, Button } from "@nextui-org/react";
import { NewsData } from "./newsData";
import { useTranslation } from "react-i18next";

export default function NewsItem({ data }: { data: NewsData }) {

    const { t } = useTranslation();

    return <>
        <Card className="p-4" shadow="md">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <small className="text-default-500">{data.date}</small>
                <h4 className="font-bold text-large line-clamp-2">{data.title}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <div className="flex flex-col justify-end h-full">
                    <Image
                        alt="Card background"
                        className="w-full object-cover rounded-xl"
                        src={data.imageUrl}
                    />
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-col items-end">
                    <p className="line-clamp-3 text-justify">
                        {data.desc}
                    </p>
                    <Button
                        href={data.href} isExternal
                        as={Link}
                        className="mt-4"
                        color="primary"
                        radius="lg"
                        variant="flat"
                    >
                        {t("news.readMore")}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </>
}
