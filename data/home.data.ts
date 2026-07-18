export interface HomeCategory { title: string; description: string; icon: string; url: string; }
export interface HomeFeature { icon: string; title: string; description: string; }
export interface HomeReward { icon: string; title: string; description: string; url: string; }
export interface HomeTestimonial { quote: string; name: string; role: string; }
export interface HomeFaq { q: string; a: string; }

export interface HomeData {
  categories: HomeCategory[];
  features: HomeFeature[];
  whyChooseUs: HomeFeature[];
  rewards: HomeReward[];
  testimonials: HomeTestimonial[];
  faqs: HomeFaq[];
}

const homeData: HomeData = {
  categories: [
    {
      title: 'Casino Games',
      description: 'Live dealer tables and classic table games with real-time results and transparent odds.',
      icon: 'spade',
      url: '/games/casino'
    },
    {
      title: 'Slot Games',
      description: 'Hundreds of themed slot reels with adjustable stakes and instant round results.',
      icon: 'coins',
      url: '/games/slots'
    },
    {
      title: 'Lottery & Color Prediction',
      description: 'Fast draw lottery and color prediction rounds that settle in under a minute.',
      icon: 'ticket',
      url: '/games/lottery'
    },
    {
      title: 'Sports Games',
      description: 'Pre-match and live markets across cricket, football, tennis and kabaddi.',
      icon: 'trophy',
      url: '/games/sports'
    },
    {
      title: 'Crash Games',
      description: 'Watch the multiplier climb and cash out before the round ends.',
      icon: 'rocket',
      url: '/games/crash'
    },
    {
      title: 'Fishing Games',
      description: 'Skill-based arcade fishing rounds with multiplier catches and boss fish payouts.',
      icon: 'anchor',
      url: '/games/fishing'
    },
    {
      title: 'Arcade Games',
      description: 'Short, casual rounds built for quick sessions between bigger games.',
      icon: 'gamepad-2',
      url: '/games/arcade'
    },
    {
      title: 'Popular Games',
      description: 'The most played titles this month, ranked by active players.',
      icon: 'flame',
      url: '/games/popular'
    }
  ],

  features: [
    {
      icon: 'zap',
      title: 'Fast BDG Win Registration',
      description: 'Create a BDG Win account with just a mobile number and start playing in under a minute.'
    },
    {
      icon: 'shield-check',
      title: 'Secure Platform',
      description: 'Encrypted sessions, verified payment partners and account-level withdrawal protection.'
    },
    {
      icon: 'sparkles',
      title: 'Modern Experience',
      description: 'A fast, distraction-free interface tuned for both mobile data connections and desktop play.'
    },
    {
      icon: 'gift',
      title: 'Premium Rewards',
      description: 'Daily, weekly and monthly BDG Win rewards plus a VIP ladder that unlocks better rates.'
    }
  ],

  whyChooseUs: [
    {
      icon: 'timer',
      title: 'Same-Day Withdrawals',
      description: 'Most BDG Win withdrawal requests are processed the same day through verified channels.'
    },
    {
      icon: 'badge-check',
      title: 'Fair Play Certified',
      description: 'Game outcomes on BDG Win use certified random number generation, explained on our Fair Play page.'
    },
    {
      icon: 'headset',
      title: '24/7 Player Support',
      description: 'The BDG Win support team is reachable around the clock through live chat and email.'
    },
    {
      icon: 'smartphone',
      title: 'Play On Any Device',
      description: 'BDG Win runs on Android, iOS and desktop browsers from a single account.'
    }
  ],

  rewards: [
    { icon: 'sunrise', title: 'Daily Rewards', description: 'Log in daily to collect streak bonuses and free spins.', url: '/rewards/daily' },
    { icon: 'calendar-days', title: 'Weekly Rewards', description: 'Weekly cashback and reload bonuses based on your play.', url: '/rewards/weekly' },
    { icon: 'calendar-range', title: 'Monthly Rewards', description: 'Milestone bonuses for consistent monthly players.', url: '/rewards/monthly' },
    { icon: 'crown', title: 'VIP Program', description: 'Tiered benefits with faster withdrawals and dedicated support.', url: '/vip' }
  ],

  testimonials: [
    {
      quote: 'I registered on BDG Win in a couple of minutes and my first withdrawal cleared the same evening. The Color Prediction rounds are quick and easy to follow.',
      name: 'Ritika S.',
      role: 'BDG Win Player, Lucknow'
    },
    {
      quote: 'The referral program on BDG Win is straightforward — I track every invite and payout from one dashboard without asking support for updates.',
      name: 'Arjun M.',
      role: 'BDG Win Affiliate'
    },
    {
      quote: 'BDG Win Crash Games load fast even on a weak mobile connection, and the VIP tier upgrade actually changed my withdrawal speed.',
      name: 'Priya D.',
      role: 'BDG Win VIP Member'
    }
  ],

  faqs: [
    {
      q: 'What is BDG Win?',
      a: 'BDG Win is an online gaming platform offering casino, slot, lottery, sports, crash, fishing and arcade games under one account, with dedicated rewards, referral and VIP programs.'
    },
    {
      q: 'What is BDG Game?',
      a: '"BDG Game" refers to the full BDG Win game catalog — casino, slots, lottery, sports, crash, fishing and arcade titles — all playable from a single BDG Win account and wallet.'
    },
    {
      q: 'How do I create a BDG Win account?',
      a: 'Go to the BDG Win Register page, enter your mobile number, set a password and verify with the OTP sent to your device. The full walkthrough is on our Register guide.'
    },
    {
      q: 'How do I login to BDG Win?',
      a: 'Go to the BDG Win Login page, enter your registered mobile number and password to access your account. Use the password reset option on that page if you can’t remember your credentials.'
    },
    {
      q: 'Is BDG Win safe to use?',
      a: 'BDG Win uses encrypted sessions, verified payment partners and account-level protections. Details are covered on our Security and Fair Play pages.'
    },
    {
      q: 'How do I download the BDG Win app?',
      a: 'Visit the BDG Win Download page for direct Android APK, iOS and desktop installation guides.'
    },
    {
      q: 'How long do BDG Win withdrawals take?',
      a: 'Most verified withdrawal requests are processed the same day. Processing times and steps are explained on the Withdrawal Guide page.'
    },
    {
      q: 'Does BDG Win have a referral program?',
      a: 'Yes. The BDG Win Referral Program lets you earn a share of your invited friends’ activity, tracked from your account dashboard.'
    },
    {
      q: 'Does BDG Win have a VIP program?',
      a: 'Yes. The BDG Win VIP Program rewards consistent play with faster withdrawals, higher reward multipliers and dedicated support as your tier increases.'
    },
    {
      q: 'Can I try different BDG Win game categories with one account?',
      a: 'Yes, casino, slots, lottery, sports, crash, fishing and arcade games all share the same account, wallet and rewards, so switching categories doesn’t require a new deposit or account.'
    },
    {
      q: 'Is there a minimum age to register on BDG Win?',
      a: 'Yes, players must be 18 years or older to register. See our Responsible Gaming page for account limit tools and guidance.'
    }
  ]
}

export default homeData;
