export interface ThemeConfig {
  isDark: boolean;
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    border: string;
  };
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    bio: string;
    image?: string;
  };
  skills: string[];
  contact: {
    email: string;
    phone?: string;
    social: { platform: string; url: string }[];
  };
}

export interface ThemeContextType {
  theme: ThemeConfig;
  toggleTheme: () => void;
  isDark: boolean;
}