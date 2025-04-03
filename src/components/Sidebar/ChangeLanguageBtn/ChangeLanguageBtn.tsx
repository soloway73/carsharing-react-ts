import { useTranslation } from "react-i18next";
import "../../../i18n/i18n";

export const ChangeLanguageBtn = ({ className }: { className?: string }) => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = async () => {
    const currentLanguage = i18n.language;
    const lang = currentLanguage === "en" ? "ru" : "en";
    await i18n.changeLanguage(lang);
  };

  return (
    <button className={className} onClick={() => changeLanguage()}>
      {t("menu.changeLanguage")}
    </button>
  );
};
