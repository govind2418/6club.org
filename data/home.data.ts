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
      description: 'Live-dealer tables and classic table formats on 6 Club, streamed in real time with fully transparent odds.',
      icon: 'spade',
      url: '/games/casino'
    },
    {
      title: 'Slot Games',
      description: 'Hundreds of themed 6 Club Slots reels, with stakes you control and results that land instantly.',
      icon: 'coins',
      url: '/games/slots'
    },
    {
      title: 'Lottery & Color Prediction',
      description: '6 Club Lottery draws and Colour Prediction rounds that settle in under sixty seconds.',
      icon: 'ticket',
      url: '/games/lottery'
    },
    {
      title: 'Sports Games',
      description: '6 Club Sports markets, pre-match and live, spanning cricket, football, tennis and kabaddi.',
      icon: 'trophy',
      url: '/games/sports'
    },
    {
      title: 'Crash Games',
      description: '6 Club Aviator-style rounds — watch the multiplier climb and cash out on your terms.',
      icon: 'rocket',
      url: '/games/crash'
    },
    {
      title: 'Fishing Games',
      description: 'Skill-based 6 Club Mini Games with multiplier catches and the occasional boss-fish payout.',
      icon: 'anchor',
      url: '/games/fishing'
    },
    {
      title: 'Arcade Games',
      description: 'Short, casual 6 Club Mini Games built for a quick round between bigger sessions.',
      icon: 'gamepad-2',
      url: '/games/arcade'
    },
    {
      title: 'Popular Games',
      description: 'This month\'s most-played 6 Club Games, ranked by how many players are actually online.',
      icon: 'flame',
      url: '/games/popular'
    }
  ],

  features: [
    {
      icon: 'zap',
      title: '6 Club Register in Seconds',
      description: 'All it takes is a mobile number — 6 Club Register and you\'re placing your first bet in under a minute.'
    },
    {
      icon: 'shield-check',
      title: 'Built on a Secure 6 Club Platform',
      description: 'Every session is encrypted, every payment partner is verified, and withdrawals carry account-level checks.'
    },
    {
      icon: 'sparkles',
      title: 'A Modern, Lightweight Interface',
      description: 'A fast, clutter-free layout that stays smooth on a slow mobile connection and just as sharp on desktop.'
    },
    {
      icon: 'gift',
      title: '6 Club Bonus, Every Cycle',
      description: 'Daily, weekly and monthly 6 Club Bonus drops, topped off by a VIP ladder that unlocks better rates.'
    }
  ],

  whyChooseUs: [
    {
      icon: 'timer',
      title: 'Same-Day Withdrawals',
      description: 'Verified 6 Club withdrawal requests are usually cleared the same day, not days later.'
    },
    {
      icon: 'badge-check',
      title: 'Fair Play Certified',
      description: 'Every outcome on 6 Club runs through certified random number generation — the Fair Play page walks through how.'
    },
    {
      icon: 'headset',
      title: '24/7 Player Support',
      description: '6 Club Support and Customer Care answer around the clock over live chat and email.'
    },
    {
      icon: 'smartphone',
      title: 'Play On Any Device',
      description: 'The same 6 Club account carries across Android, iOS and desktop browsers without missing a beat.'
    }
  ],

  rewards: [
    { icon: 'sunrise', title: '6 Club Daily Bonus', description: 'Check in every day for streak bonuses and the occasional free spin.', url: '/rewards/daily' },
    { icon: 'calendar-days', title: '6 Club Weekly Rewards', description: 'Weekly cashback and reload bonuses that scale with how much you play.', url: '/rewards/weekly' },
    { icon: 'calendar-range', title: '6 Club Monthly Rewards', description: 'Bigger milestone bonuses for players who stay active month to month.', url: '/rewards/monthly' },
    { icon: 'crown', title: '6 Club VIP Program', description: 'Climb the tiers for faster withdrawals, better rates and closer support.', url: '/vip' }
  ],

  testimonials: [
    {
      quote: 'Signing up on 6 Club took me about two minutes, and my very first withdrawal was in my account by that evening. The Colour Prediction rounds are simple enough that I picked them up right away.',
      name: 'Ritika S.',
      role: '6 Club Player, Lucknow'
    },
    {
      quote: 'What I like about the 6 Club Referral setup is how little effort it takes to track — every invite, every pending payout, all in one dashboard, no messaging support for updates.',
      name: 'Arjun M.',
      role: '6 Club Affiliate'
    },
    {
      quote: 'The Aviator rounds on 6 Club barely stutter even on my patchy mobile data, and moving up a VIP tier genuinely sped up how fast my withdrawals clear.',
      name: 'Priya D.',
      role: '6 Club VIP Member'
    }
  ],

  faqs: [
    {
      q: 'What is 6 Club?',
      a: '6 Club (also written 6club) is an online gaming platform bringing casino, slot, lottery, sports, crash, fishing and arcade games under one account, alongside its own rewards, referral and VIP programs.'
    },
    {
      q: 'What is 6 Club Games?',
      a: '"6 Club Games" is shorthand for the whole catalog — casino, slots, lottery, sports, crash, fishing and arcade titles — all reachable from a single 6 Club account and wallet.'
    },
    {
      q: 'How do I register on 6 Club?',
      a: 'Open 6 Club Register, add your mobile number, set a password and confirm the OTP sent to your device. The Register guide covers each step in more detail.'
    },
    {
      q: 'How do I login to 6 Club?',
      a: 'Head to 6 Club Login, then enter your registered mobile number and password. Forgotten your password? Use the reset option on that same page.'
    },
    {
      q: 'Is 6 Club safe to use?',
      a: 'Yes — 6 Club runs on encrypted sessions, verified payment partners and account-level protections, all explained in more depth on the Security and Fair Play pages.'
    },
    {
      q: 'How do I download the 6 Club app?',
      a: 'Head to 6 Club Download for the Android APK, plus separate iOS and desktop installation guides.'
    },
    {
      q: 'How long do 6 Club withdrawals take?',
      a: 'Verified withdrawal requests are usually processed the same day — the Withdrawal Guide page breaks down timing and the steps involved.'
    },
    {
      q: 'Does 6 Club have a referral program?',
      a: 'Yes — the 6 Club Referral program pays you a share of your invited friends\' activity, with every invite and payout tracked from your dashboard.'
    },
    {
      q: 'Does 6 Club have a VIP program?',
      a: 'Yes — 6 Club VIP rewards consistent players with faster withdrawals, stronger reward multipliers and closer support as your tier climbs.'
    },
    {
      q: 'Can I play different 6 Club game categories with one account?',
      a: 'Yes — casino, slots, lottery, sports, crash, fishing and arcade all share the same account, wallet and rewards, so switching categories never needs a new deposit or a second account.'
    },
    {
      q: 'Is there a minimum age to register on 6 Club?',
      a: 'Yes — you must be 18 or older to register. The Responsible Gaming page has guidance and limit-setting tools if you need them.'
    }
  ]
}

export default homeData;
