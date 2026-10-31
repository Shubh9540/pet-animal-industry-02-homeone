import type { CSSProperties } from 'react';

export interface ThemeFontsData {
  primary: string;
  heading: string;
  navigation: string;
}

export interface ThemeData {
  fonts: ThemeFontsData;
}

export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-navigation': string;
};

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
  hasDropdown?: boolean;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  phoneNumber?: string;
  phoneUrl?: string;
  phoneCaption?: string;
  favoritesUrl?: string;
  favoritesLabel?: string;
  contactButton: { text: string; url: string; icon: string };
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
}



export interface GalleryItem {
  id: string;
  image: string;
  imageAlt: string;
    category: string;
}

export interface GalleryData {
  subtitle: string;
  title: string;
  highlightedTitle: string;
  description: string;
  openLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  images: GalleryItem[];
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface GalleryImageProps {
  item: GalleryItem;
  index: number;
  openLabel: string;
  onOpen: (index: number) => void;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface FaqData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  expandLabel: string;
  collapseLabel: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface HeroData {
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  image: string;
  imageAlt: string;
  trustLead: string;
  trustHighlight: string;
  ctaText?: string;
  ctaUrl?: string;
  ctaIconLabel?: string;
}

export interface HeroProps {
  data?: HeroData;
}

export interface AboutUsData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  description: string;
  imageMain: string;
  imageMainAlt: string;
  buttonText?: string;
  buttonUrl?: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  showButton?: boolean;
}

export interface PaginationItem {
  id: string;
  label: string;
  page: number;
}

export interface OurServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  url: string;
}

export interface OurServiceData {
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  highlightedTitle: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  services: OurServiceItem[];
}

export interface OurServiceProps {
  data?: OurServiceData;
  limit?: number;
}
export interface CareData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  arrowLabel: string;
  buttonUrl: string;
}

export interface CareProps {
  data?: CareData;
}
export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
  rating: number;
}

export interface TestimonialsData {
  subtitle: string;
  title1: string;
  highlightedTitle: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  slideLabel: string;
  image: string;
  imageAlt: string;
  testimonials: TestimonialItem[];
}

export interface TestimonialProps {
  data?: TestimonialsData;
}

export interface OurTeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface OurTeamData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  members: OurTeamMember[];
}

export interface OurTeamProps {
  data?: OurTeamData;
}

export interface FooterSocialLink {
  id: string;
  icon: string;
  label: string;
  url: string;
}

export interface FooterQuickLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterContactItem {
  id: string;
  icon: string;
  value: string;
  url?: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  footerImage: string;
  footerImageAlt: string;
  copyrightText: string;
  quickLinksTitle: string;
  contactTitle: string;
  socialTitle: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterQuickLink[];
  contactItems: FooterContactItem[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared?: {
    Topbar?: string;
    Header?: string;
    Footer?: string;
  };
  pages?: {
    home?: {
      components: TemplateComponentItem[];
    };
  };
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  number?: string;
  icon?: string;
}

export interface WhyChooseUsData {
  badge?: string;
  subtitle?: string;
  title: string;
  highlightedTitle: string;
  description?: string;
  features: WhyChooseUsFeature[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactServiceOption {
  id: string;
  label: string;
  value: string;
}

export interface ContactData {
  intro: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    servicePlaceholder: string;
    serviceOptions: ContactServiceOption[];
    messagePlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  visual: {
    image: string;
    imageAlt: string;
  };
  contactItems: ContactInfoItem[];
}

export interface ContactProps {
  data?: ContactData;
}

export interface BookAppointmentFormOption {
  id: string;
  title: string;
  value: string;
}

export interface BookAppointmentField {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required: boolean;
  width: string;
  options?: BookAppointmentFormOption[];
}

export interface AppointmentFieldProps {
  field: BookAppointmentField;
}

export interface BookAppointmentData {
  intro: {
    eyebrow: string;
    title: string;
    highlightedTitle: string;
  };
  form: {
    fields: BookAppointmentField[];
    buttonText: string;
    successMessage: string;
  };
}

export interface BookAppointmentProps {
  data?: BookAppointmentData;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface PetTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Pet: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { PetHeader2?: HeaderData } };
        Hero?: { variants?: { PetHero2?: HeroData } };
        AboutUs?: { variants?: { PetAboutUs2?: AboutUsData } };
        WhyChooseUs?: { variants?: { PetWhyChooseUs2?: WhyChooseUsData } };
        OurService?: { variants?: { PetOurService2?: OurServiceData } };
        Care?: { variants?: { PetCare2?: CareData } };
        Gallery?: { variants?: { PetGallery2?: GalleryData } };
        OurTeam?: { variants?: { PetOurTeam2?: OurTeamData } };
        Testimonials?: { variants?: { PetTestimonials2?: TestimonialsData } };
        Faq?: { variants?: { PetFaq2?: FaqData } };
        Contact?: { variants?: { PetContact2?: ContactData } };
        BookAppointment?: { variants?: { PetBookAppointment2?: BookAppointmentData } };
      };
    };
  };
}
