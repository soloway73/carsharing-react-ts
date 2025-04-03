export interface ITranslationSlide {
  title: string;
  description: string;
  button: string;
}
export interface TranslationTypes {
  menu: {
    parking: string;
    fuel: string;
    insurance: string;
    service: string;
  };
  mainPage: {
    title: string;
    description: string;
    button: string;
    city: string;
    slider: ITranslationSlide[];
  };
}
