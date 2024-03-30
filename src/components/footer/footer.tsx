import { IconDefinition, faBaby, faDog, faHeart, faPersonBiking, faSeedling, faTemperatureArrowUp, faWheelchair, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function animation(n: number, id: number, icon: IconDefinition = faHeart, animateDefinition: { [key: string]: number[] } = { opacity: [0, 1, 0] }, duration: number = 4) {
  return <motion.span
    key={id}
    className="w-full flex flex-row justify-center content-center absolute top-0 left-0"
    animate={animateDefinition}
    transition={{
      duration,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeat: Infinity,
      repeatDelay: duration * (n - 1) / 2.0,
      delay: duration * id / 2.0
    }}
  >
    <FontAwesomeIcon icon={icon} size="lg" className="text-primary" />

  </motion.span>
}

const icons = [
  faTemperatureArrowUp,
  faWheelchair,
  faWind,
  faBaby,
  faSeedling,
  faDog
]

const animations = <span className="relative overflow-y-clip ml-1">
  {/* placeholder */}
  <FontAwesomeIcon icon={faPersonBiking} size="lg" className="text-transparent" />
  {
    icons.map((icon, id) => animation(icons.length - 1, id, icon))
  }
</span>

export default function Footer() {

  const { t } = useTranslation();

  return (
    <div className="mt-1 mb-3">

      <p className="text-2xs md:text-xs">
        {t("footer.phrase1.text1")}
        <span className="relative">
          <FontAwesomeIcon icon={faHeart} size="lg" className="text-primary mx-1" />
          {animation(1, 0, faHeart, { "scale": [1.1, 1, 1.1] }, 2)}
        </span>
        {t("footer.phrase1.text2")}
        <Link href="https://socjologia.uj.edu.pl/" className="text-2xs md:text-xs" isExternal>{t("footer.phrase1.sociology")}</Link>
        {t("footer.phrase1.text3")}
        &nbsp;
        {t("footer.phrase2.text1")}
        {animations}
        .
      </p>
    </div>
  );
}
