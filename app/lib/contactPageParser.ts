// app/data/contactPage.ts
import { load } from "js-yaml";

import rawContactPage from "../../content/settings/contact-page.yml?raw";

export type ContactInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export type ContactPageSettings = {
  headline: string;
  subheader: string;
  contactInfo: ContactInfoItem[];
};

export function getContactPageSettings(): ContactPageSettings {
  return load(rawContactPage) as ContactPageSettings;
}