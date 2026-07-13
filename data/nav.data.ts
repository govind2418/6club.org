export interface NavLink { label: string; url: string; }
export interface NavItem { label: string; url: string; children?: NavLink[]; }

export interface NavData {
  primary: NavItem[];
  footer: {
    platform: NavLink[];
    games: NavLink[];
    account: NavLink[];
    support: NavLink[];
    legal: NavLink[];
  };
}

const navData: NavData = {
  primary: [
    { label: 'Home', url: '/' },
    {
      label: 'Games',
      url: '/games',
      children: [
        { label: 'All Game Categories', url: '/games' },
        { label: 'Casino Games', url: '/games/casino' },
        { label: 'Slot Games', url: '/games/slots' },
        { label: 'Lottery Games', url: '/games/lottery' },
        { label: 'Sports Games', url: '/games/sports' },
        { label: 'Fishing Games', url: '/games/fishing' },
        { label: 'Crash Games', url: '/games/crash' },
        { label: 'Arcade Games', url: '/games/arcade' }
      ]
    },
    {
      label: 'Rewards',
      url: '/rewards',
      children: [
        { label: 'Rewards Overview', url: '/rewards' },
        { label: 'Daily Rewards', url: '/rewards/daily' },
        { label: 'Weekly Rewards', url: '/rewards/weekly' },
        { label: 'Monthly Rewards', url: '/rewards/monthly' },
        { label: 'VIP Program', url: '/vip' },
        { label: 'Promotions', url: '/promotions' },
        { label: 'Gift Codes', url: '/gift-code' }
      ]
    },
    {
      label: 'Earn',
      url: '/referral-program',
      children: [
        { label: 'Referral Program', url: '/referral-program' },
        { label: 'Affiliate Program', url: '/affiliate-program' },
        { label: 'Agent Program', url: '/agent-program' }
      ]
    },
    { label: 'Download', url: '/download' },
    { label: 'Blog', url: '/blog' },
    { label: 'Support', url: '/support' }
  ],
  footer: {
    platform: [
      { label: 'About BDG Win', url: '/about' },
      { label: 'Features', url: '/features' },
      { label: 'VIP Program', url: '/vip' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Leaderboard', url: '/leaderboard' },
      { label: 'Announcements', url: '/announcements' }
    ],
    games: [
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Slot Games', url: '/games/slots' },
      { label: 'Lottery Games', url: '/games/lottery' },
      { label: 'Sports Games', url: '/games/sports' },
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Popular Games', url: '/games/popular' }
    ],
    account: [
      { label: 'Register', url: '/register' },
      { label: 'Login', url: '/login' },
      { label: 'Forgot Password', url: '/forgot-password' },
      { label: 'Download App', url: '/download' },
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'Deposit Guide', url: '/deposit-guide' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' }
    ],
    support: [
      { label: 'Help Center', url: '/help-center' },
      { label: 'Support', url: '/support' },
      { label: 'Contact', url: '/contact' },
      { label: 'FAQs', url: '/faqs' },
      { label: 'Security', url: '/security' },
      { label: 'Responsible Gaming', url: '/responsible-gaming' },
      { label: 'Fair Play', url: '/fair-play' }
    ],
    legal: [
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Terms & Conditions', url: '/terms' },
      { label: 'Cookies Policy', url: '/cookies' },
      { label: 'Site Map', url: '/sitemap' }
    ]
  }
}

export default navData;
