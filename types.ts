export enum Page {
  HOME = 'home',
  BUSINESS = 'business',
  INDIVIDUALS = 'individuals',
  PARTNERS = 'partners',
  TOOLS = 'tools',
  ABOUT = 'about',
  CONTACT = 'contact',
  IMMEDIATE_CARE = 'immediate-care',
}

export interface NavItem {
  label: string;
  page: Page;
  icon?: boolean;
}

export enum UserType {
  BUSINESS_OWNER = 'Business Owner',
  INDIVIDUAL = 'Individual',
  ADVISOR = 'Financial Advisor',
}

export interface AiResponse {
  text: string;
  loading: boolean;
  error?: string;
}