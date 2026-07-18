export interface PageSectionImage {
  src: string;
  alt: string;
  caption: string;
}

export interface PageSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  image?: PageSectionImage;
}

export interface PageFaq {
  q: string;
  a: string;
}

export interface PageLink {
  label: string;
  url: string | null;
}

export interface PageEntry {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  eyebrow?: string;
  h1: string;
  intro?: string;
  breadcrumbTrail: PageLink[];
  sections?: PageSection[];
  faqs?: PageFaq[];
  related?: PageLink[];
}

const pagesData: Record<string, PageEntry> = {
  '/about': {
    metaTitle: 'About BDG Win – Our Platform and How It Works',
    metaDescription:
      'Learn what BDG Win is, how the platform is structured, and how casino, slot, lottery, sports and crash games sit under one secure account.',
    keywords: ['BDG Win', 'About BDG Win', 'BDG Win platform'],
    eyebrow: 'About Us',
    h1: 'About BDG Win',
    intro:
      'BDG Win is an online gaming platform built around one account, one wallet and one set of rewards that carry across every game you play.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What BDG Win Offers',
        paragraphs: [
          'BDG Win brings together casino tables, slot reels, lottery and Color Prediction rounds, sports markets, crash multipliers, fishing and arcade titles under a single login. Instead of juggling separate accounts for each game type, players move between categories from one dashboard, with one wallet balance and one rewards ledger.',
          'The platform is organized around speed: registration takes under a minute, deposits post instantly once confirmed, and most withdrawal requests are processed the same day through verified payment partners.'
        ]
      },
      {
        heading: 'How the BDG Win Account Works',
        paragraphs: [
          'Every BDG Win account tracks activity across games, rewards claimed, referral earnings and VIP progress in one place. Daily, weekly and monthly rewards are credited automatically based on play, and the VIP ladder unlocks better withdrawal speeds and dedicated support as you move up tiers.',
          'Account security, fair play standards and responsible gaming controls apply platform-wide, regardless of which game category you use.'
        ]
      },
      {
        heading: 'Getting Started on BDG Win',
        paragraphs: [
          'Creating an account starts with a mobile number and a password, confirmed by a one-time code — most players are through registration in under a minute. From there, adding a payment method and making a first deposit unlocks every game category immediately, without a separate approval step for each one.',
          'Once you\'re in, the dashboard becomes the single place to check your wallet balance, see which daily or weekly rewards are still open, track referral earnings and follow your VIP progress. Nothing about that view changes depending on which game you played last.'
        ]
      },
      {
        heading: 'Built for Long-Term Play, Not Just a First Session',
        paragraphs: [
          'A lot of gaming platforms optimize for a single sign-up bonus and little else. BDG Win\'s reward structure is built the opposite way — daily streaks, weekly cashback and monthly milestones only pay off if you keep coming back, and the VIP ladder is designed to reward months of activity, not a single deposit.',
          'That\'s also why account security and fair play standards apply the same way to a first-time player and a long-time VIP member: the platform is built to hold up over a long relationship with an account, not just a first session.'
        ]
      }
    ],
    faqs: [
      { q: 'What kind of platform is BDG Win?', a: 'BDG Win is an online gaming platform offering casino, slot, lottery, sports, crash, fishing and arcade games through a single account and wallet.' },
      { q: 'Do I need separate accounts for different BDG Win games?', a: 'No. One BDG Win account gives you access to every game category, along with shared rewards, referral tracking and VIP status.' },
      { q: 'Is BDG Win available on mobile?', a: 'Yes. BDG Win works on Android via APK, on iOS through our installation guide, and directly in desktop browsers.' },
      { q: 'How do I get started on BDG Win?', a: 'Create an account from the Register page, verify your number, make a deposit using a supported payment method, and choose a game category to begin.' },
      { q: 'Is BDG Win free to explore before depositing?', a: 'You can create an account and look through game categories, rewards and rules before making a deposit; placing real stakes requires a funded wallet.' },
      { q: 'Does BDG Win work the same way in every game category?', a: 'The account, wallet, rewards and VIP structure work identically across casino, slots, lottery, sports, crash, fishing and arcade titles — only the game rules themselves differ.' }
    ],
    related: [
      { label: 'BDG Win Features', url: '/features' },
      { label: 'Game Categories', url: '/games' },
      { label: 'Register on BDG Win', url: '/register' }
    ]
  },

  '/features': {
    metaTitle: 'BDG Win Features – What Makes the Platform Different',
    metaDescription:
      'Explore the core features of BDG Win: fast registration, secure payments, a unified wallet, rewards system and cross-device play.',
    keywords: ['BDG Win Features', 'BDG Win'],
    eyebrow: 'Platform',
    h1: 'BDG Win Features',
    intro: 'A breakdown of the features that shape day-to-day play on BDG Win, from account setup to payouts.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Account & Access',
        paragraphs: [
          'BDG Win registration only requires a mobile number and a password, verified with an OTP. Once verified, the same login works across Android, iOS and desktop browsers, so your balance, rewards and game history stay in sync no matter which device you use.'
        ]
      },
      {
        heading: 'Wallet & Rewards',
        paragraphs: [
          'A single wallet handles deposits and withdrawals across every game category. On top of that, BDG Win layers daily, weekly and monthly rewards, a referral program that pays out on invited players\' activity, and a VIP ladder that improves withdrawal speed and support access as you climb tiers.'
        ]
      },
      {
        heading: 'Games & Performance',
        paragraphs: [
          'The platform is built to load quickly even on limited mobile data — pages stay lightweight, and game screens are optimized so rounds start without long buffering waits.'
        ]
      },
      {
        heading: 'Support That Matches How You Play',
        paragraphs: [
          'Because BDG Win runs 24/7 across time zones, support isn\'t limited to business hours — live chat and email are staffed around the clock, and VIP tiers get a dedicated contact instead of the general queue once withdrawal speed and account history start to matter more.',
          'Most support requests fall into a small number of categories — payment status, verification and account access — and the Help Center is organized around those categories first, so a straightforward question doesn\'t need a support ticket to answer.'
        ]
      },
      {
        heading: 'Trust Controls Built Into the Platform, Not Bolted On',
        paragraphs: [
          'Fair play and responsible gaming aren\'t separate add-ons on BDG Win — outcome generation, deposit limits and session tools are part of the same account settings every player already uses for wallet and rewards management.',
          'That means turning on a deposit limit or reviewing how a game\'s outcomes are generated takes the same number of steps as checking a reward balance, rather than requiring a separate request to support.'
        ]
      }
    ],
    faqs: [
      { q: 'What is the main feature of BDG Win?', a: 'A unified account and wallet that works across all BDG Win game categories, rewards, referrals and VIP status.' },
      { q: 'Can I use BDG Win on both mobile and desktop?', a: 'Yes, the same BDG Win account and balance carry over between the Android app, iOS and desktop browser access.' },
      { q: 'Does BDG Win offer rewards automatically?', a: 'Daily, weekly and monthly rewards are credited based on your activity without needing manual claim codes in most cases.' },
      { q: 'Is BDG Win built for slow internet connections?', a: 'Yes, pages and game screens are kept lightweight so BDG Win loads quickly even on weaker mobile data connections.' },
      { q: 'Does BDG Win support cost extra or need a premium plan?', a: 'No, live chat and email support are available to every account at no extra cost, with VIP tiers simply getting a dedicated contact.' },
      { q: 'Can I set my own limits on BDG Win?', a: 'Yes, deposit and session limits are available directly from account settings for any player who wants them.' }
    ],
    related: [
      { label: 'About BDG Win', url: '/about' },
      { label: 'BDG Win Rewards', url: '/rewards' },
      { label: 'BDG Win VIP Program', url: '/vip' }
    ]
  },

  '/rewards': {
    metaTitle: 'BDG Win Rewards – Daily, Weekly & Monthly Bonuses',
    metaDescription:
      'See how BDG Win rewards work, including daily login bonuses, weekly cashback, monthly milestones and how they connect to the VIP program.',
    keywords: ['BDG Win Rewards', 'BDG Win Bonus', 'BDG Rewards'],
    eyebrow: 'Rewards',
    h1: 'BDG Win Rewards',
    intro: 'BDG Win rewards are structured around three cycles — daily, weekly and monthly — each with its own criteria.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How BDG Win Rewards Are Structured',
        paragraphs: [
          'Daily rewards on BDG Win are tied to login streaks and small activity milestones. Weekly rewards add cashback and reload bonuses based on how much you played that week. Monthly rewards recognize consistent players with larger milestone bonuses.',
          'Rewards are credited to your BDG Win wallet automatically once criteria are met, and your history is visible from your account dashboard.'
        ]
      },
      {
        heading: 'Connecting Rewards to VIP Status',
        paragraphs: [
          'As you accumulate activity across these reward cycles, your BDG Win VIP tier increases, unlocking faster withdrawals, higher reward multipliers and access to dedicated support.'
        ]
      },
      {
        heading: 'Getting the Most Out of Every Cycle',
        paragraphs: [
          'Because the three cycles run on different clocks, it helps to think of them separately rather than as one combined bonus. Daily rewards reward showing up; weekly rewards reward how much you actually played; monthly rewards reward doing both consistently across a full month.',
          'Players who track all three from the dashboard tend to notice a pattern quickly — a quiet week doesn\'t erase monthly progress, but a broken daily streak does reset that specific counter, so it\'s worth checking in even on days you don\'t plan to play much.'
        ]
      }
    ],
    faqs: [
      { q: 'How often are BDG Win rewards credited?', a: 'BDG Win runs three reward cycles: daily, weekly and monthly, each crediting automatically once you meet the listed criteria.' },
      { q: 'Do BDG Win rewards expire?', a: 'Reward cycles reset at the start of each new period, so unclaimed daily or weekly criteria do not carry over automatically.' },
      { q: 'Are rewards different for VIP members?', a: 'Yes, higher BDG Win VIP tiers typically unlock larger reward multipliers alongside faster withdrawal processing.' },
      { q: 'Where can I see my BDG Win rewards history?', a: 'Your rewards history, including credited and pending bonuses, is visible from your BDG Win account dashboard.' },
      { q: 'Can I earn from all three reward cycles at once?', a: 'Yes, daily, weekly and monthly rewards run independently, so qualifying activity can credit toward all three at the same time.' },
      { q: 'Do rewards affect my withdrawal limits?', a: 'Reward credits sit in the same wallet as deposits, so they follow the same withdrawal rules described on the Withdrawal Guide.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/vip': {
    metaTitle: 'BDG Win VIP Program – Membership Tiers and Benefits',
    metaDescription:
      'Understand how the BDG Win VIP program is structured, what each tier unlocks, and how to progress from your regular account.',
    keywords: ['BDG Win VIP', 'BDG Win VIP Program', 'BDG VIP'],
    eyebrow: 'VIP Program',
    h1: 'BDG Win VIP Program',
    intro: 'The BDG Win VIP program rewards consistent players with faster processing, better rates and closer support.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How BDG Win VIP Tiers Work',
        paragraphs: [
          'Every BDG Win account starts at the base tier and moves up based on cumulative activity across games and reward cycles. Each tier increase unlocks a combination of higher reward multipliers, faster withdrawal processing windows and, at higher tiers, a dedicated support contact instead of the general queue.'
        ],
        image: {
          src: '/images/screenshots/vip-tier-progress.webp',
          alt: 'BDG Win VIP profile screen showing tier badge, experience points and unlocked benefits',
          caption: 'A BDG Win VIP profile showing tier badge, accumulated experience and the benefits that unlock at that level — level-up rewards, a monthly reward and an improved rebate rate.'
        }
      },
      {
        heading: 'What VIP Status Changes',
        paragraphs: [
          'The most noticeable change players report is withdrawal speed — verified VIP accounts are typically processed ahead of the standard queue. VIP members also get earlier access to new game categories and promotions before they roll out platform-wide.'
        ]
      },
      {
        heading: 'Moving Up the VIP Ladder',
        paragraphs: [
          'Tier reviews look at combined activity across daily, weekly and monthly reward cycles rather than a single deposit or session, so steady play across a few weeks moves your tier more reliably than one large deposit followed by inactivity.',
          'Each step up the ladder tends to compound with the last one — a faster withdrawal window plus a larger reward multiplier plus, eventually, a dedicated support contact instead of the general queue. None of these require a separate request; they apply automatically once your tier updates.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I join the BDG Win VIP program?', a: 'VIP tiers are unlocked automatically as your account activity and reward history grow — there is no separate VIP application.' },
      { q: 'What does BDG Win VIP status change?', a: 'Higher VIP tiers on BDG Win typically improve withdrawal processing speed, reward multipliers and support access.' },
      { q: 'Can my BDG Win VIP tier drop?', a: 'Tiers are generally based on rolling activity, so extended inactivity can affect your standing at the next review.' },
      { q: 'Is there a cost to reach BDG Win VIP tiers?', a: 'No separate fee is charged — VIP tiers are earned through normal account activity and reward participation.' },
      { q: 'How often is my BDG Win VIP tier reviewed?', a: 'Tier reviews generally align with the monthly reward cycle, factoring in recent daily and weekly activity as well.' },
      { q: 'Do higher VIP tiers get early access to new games?', a: 'Yes, VIP members typically see new game categories and promotions before they roll out to all accounts.' }
    ],
    related: [
      { label: 'BDG Win Rewards', url: '/rewards' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' }
    ]
  },

  '/promotions': {
    metaTitle: 'BDG Win Promotions – Current Bonuses and Offers',
    metaDescription:
      'Browse current BDG Win promotions, how bonus offers are applied to your account, and where to check terms before claiming.',
    keywords: ['BDG Win Promotions', 'BDG Win Bonus', 'BDG Promotions'],
    eyebrow: 'Promotions',
    h1: 'BDG Win Promotions',
    intro: 'BDG Win promotions run alongside the standard rewards cycle, covering seasonal and game-specific offers.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Types of BDG Win Promotions',
        paragraphs: [
          'Promotions on BDG Win typically fall into three groups: welcome offers for new accounts, reload bonuses tied to deposits, and game-specific promotions that run for a limited time on categories like slots or crash games.',
          'Each promotion lists its own eligibility window and wagering conditions, shown on the offer itself before you opt in.'
        ],
        image: {
          src: '/images/screenshots/promo-first-bet-boost.webp',
          alt: 'BDG Win promotion offering a bonus percentage boost on a player\'s first bet of the day',
          caption: 'An example BDG Win promotion adding a bonus percentage to a player\'s first bet of the day, with the eligibility window and boost calculation shown before it applies.'
        }
      },
      {
        heading: 'Claiming a Promotion Safely',
        paragraphs: [
          'Always confirm a promotion through your BDG Win account or official app rather than an outside link, and review the terms attached to the offer before it is applied to your wallet.'
        ],
        image: {
          src: '/images/screenshots/promotions-hub.webp',
          alt: 'BDG Win promotions and activity hub listing invitation bonus, betting rebate, super jackpot and attendance bonus',
          caption: 'BDG Win\'s promotions hub, where offers like the invitation bonus, betting rebate, invite wheel and attendance bonus are listed together with terms attached to each.'
        }
      },
      {
        heading: 'Where Promotions Fit Alongside Rewards',
        paragraphs: [
          'Promotions and the standard daily, weekly and monthly reward cycles run independently of each other, so opting into a seasonal offer doesn\'t use up or replace anything from your regular rewards. Think of promotions as short-term additions layered on top of a cycle that keeps running either way.',
          'Because they\'re time-limited, it\'s worth checking the Promotions page and your account dashboard periodically rather than assuming an offer you saw once is still live — expired or superseded promotions are removed from the active list as soon as their window closes.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I find current BDG Win promotions?', a: 'Active BDG Win promotions are listed in your account dashboard and on the Promotions page, each with its own terms.' },
      { q: 'Do BDG Win promotions have wagering requirements?', a: 'Most bonus-based promotions include a wagering condition, shown in the offer details before you claim it.' },
      { q: 'Can I combine multiple BDG Win promotions?', a: 'Combinability depends on each offer\'s terms; some promotions are exclusive and cannot be stacked with others.' },
      { q: 'Are BDG Win promotions available to VIP members only?', a: 'No, most promotions are open to all verified accounts, though some higher-value offers are reserved for VIP tiers.' },
      { q: 'Do promotions replace my daily, weekly or monthly rewards?', a: 'No, promotions run alongside the standard reward cycles rather than replacing them.' },
      { q: 'How do I know when a BDG Win promotion has ended?', a: 'Expired promotions are removed from the active list on the Promotions page and your account dashboard.' }
    ],
    related: [
      { label: 'BDG Win Rewards', url: '/rewards' },
      { label: 'Gift Codes', url: '/gift-code' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/rewards/daily': {
    metaTitle: 'BDG Win Daily Rewards – Login Streaks and Bonuses',
    metaDescription:
      'How BDG Win daily rewards work, including login streak bonuses and small daily activity milestones.',
    keywords: ['BDG Win Daily Rewards', 'BDG Win Bonus', 'BDG Rewards'],
    eyebrow: 'Daily Rewards',
    h1: 'BDG Win Daily Rewards',
    intro: 'Daily rewards on BDG Win are designed for players who check in and play a little each day.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'How the Daily Cycle Works',
        paragraphs: [
          'Each day you log in and place qualifying activity on BDG Win, your streak counter advances. Streaks that reach set thresholds unlock a small bonus credited directly to your wallet, visible in your rewards history the same day.',
          'Missing a day typically resets the streak counter, so consistency matters more than volume for this particular reward cycle.'
        ]
      },
      {
        heading: 'Getting the Most From Daily Rewards',
        paragraphs: [
          'Because thresholds are based on streak length rather than stake size, a short qualifying session each day keeps the streak alive just as well as a longer one — the daily cycle rewards showing up, not how much you deposit on any single day.',
          'If a streak does break, the counter simply restarts rather than penalizing your account in any other way, so there\'s no downside to picking a daily habit back up after a missed day or two.'
        ]
      }
    ],
    faqs: [
      { q: 'What counts toward a BDG Win daily streak?', a: 'Logging in and completing qualifying activity, such as playing a round in an active game category, keeps your daily streak advancing.' },
      { q: 'What happens if I miss a day?', a: 'Missing a day generally resets your BDG Win daily streak counter back to the start.' },
      { q: 'How is the daily bonus paid?', a: 'Daily rewards are credited directly to your BDG Win wallet once the streak threshold is met.' },
      { q: 'Can I check my current streak?', a: 'Yes, your current daily streak and reward history are visible from your BDG Win account dashboard.' },
      { q: 'Does a bigger deposit increase my daily reward?', a: 'No, daily rewards are based on streak length and qualifying activity rather than deposit size.' },
      { q: 'Is there a limit to how long a BDG Win daily streak can run?', a: 'Streaks can continue indefinitely as long as you keep meeting the daily qualifying activity.' }
    ],
    related: [
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'Rewards Overview', url: '/rewards' }
    ]
  },

  '/rewards/weekly': {
    metaTitle: 'BDG Win Weekly Rewards – Cashback and Reload Bonuses',
    metaDescription:
      'Details on BDG Win weekly rewards, including cashback calculations and reload bonuses based on weekly activity.',
    keywords: ['BDG Win Weekly Rewards', 'BDG Win Bonus', 'BDG Rewards'],
    eyebrow: 'Weekly Rewards',
    h1: 'BDG Win Weekly Rewards',
    intro: 'Weekly rewards on BDG Win look at your total activity across the previous seven days.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'How Weekly Cashback Is Calculated',
        paragraphs: [
          'At the close of each weekly cycle, BDG Win reviews your play across all game categories and calculates a cashback percentage based on your activity level and current VIP tier. Reload bonuses may also apply if you made qualifying deposits during the week.',
          'Weekly rewards are credited shortly after the cycle closes and appear in your wallet with a matching entry in your rewards history.'
        ]
      },
      {
        heading: 'Getting the Most From Weekly Cashback',
        paragraphs: [
          'Since cashback is calculated across every game category combined, activity doesn\'t need to sit in one category to count — a week split between slots and sports markets is reviewed the same way as a week spent entirely on one category.',
          'Reload bonuses are the one part of the weekly cycle that depends on deposits specifically, so a week with a qualifying deposit can combine both cashback and a reload bonus, while a no-deposit week is still eligible for cashback alone based on activity.'
        ]
      }
    ],
    faqs: [
      { q: 'When are BDG Win weekly rewards calculated?', a: 'Weekly rewards are reviewed at the end of each seven-day cycle based on your total activity.' },
      { q: 'Does my VIP tier affect weekly rewards?', a: 'Yes, higher BDG Win VIP tiers typically receive a larger cashback percentage on weekly rewards.' },
      { q: 'Is a deposit required for weekly rewards?', a: 'Cashback is based on activity, while reload bonuses specifically require a qualifying deposit during the week.' },
      { q: 'Where do I see my weekly reward amount?', a: 'Your weekly reward total appears in your BDG Win wallet and rewards history once the cycle closes.' },
      { q: 'Does cashback apply across every BDG Win game category?', a: 'Yes, weekly cashback reviews combined activity across all game categories rather than just one.' },
      { q: 'Can I get both cashback and a reload bonus in the same week?', a: 'Yes, if you made a qualifying deposit during a week with qualifying activity, both can apply together.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/rewards/monthly': {
    metaTitle: 'BDG Win Monthly Rewards – Milestone Bonuses',
    metaDescription:
      'How BDG Win monthly rewards recognize consistent players with milestone bonuses tied to a full month of activity.',
    keywords: ['BDG Win Monthly Rewards', 'BDG Win Bonus', 'BDG Rewards'],
    eyebrow: 'Monthly Rewards',
    h1: 'BDG Win Monthly Rewards',
    intro: 'Monthly rewards are the largest of the three BDG Win reward cycles, built around sustained play.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'Qualifying for Monthly Milestones',
        paragraphs: [
          'BDG Win tracks combined daily and weekly activity across a full calendar month. Reaching set milestones unlocks a monthly bonus, generally larger than daily or weekly rewards since it reflects a longer commitment period.',
          'Monthly rewards also factor into VIP tier reviews, so consistent months of activity can move you up the VIP ladder faster.'
        ]
      },
      {
        heading: 'Planning Around the Monthly Cycle',
        paragraphs: [
          'Because the monthly milestone looks at the full calendar month rather than any single week, a slower week doesn\'t rule out reaching the milestone if the rest of the month makes up for it — it\'s the combined total that gets reviewed at month\'s end, not a strict week-by-week pace.',
          'Players aiming for a VIP tier increase often treat the monthly milestone as the clearest signal of where they stand, since it\'s reviewed on the same rolling basis VIP tiers use.'
        ]
      }
    ],
    faqs: [
      { q: 'How is the BDG Win monthly reward different from weekly rewards?', a: 'Monthly rewards are calculated over a full calendar month and are typically larger, reflecting sustained activity rather than a single week.' },
      { q: 'Do monthly rewards affect my VIP tier?', a: 'Yes, monthly activity is one of the factors reviewed when your BDG Win VIP tier is reassessed.' },
      { q: 'When are monthly rewards credited?', a: 'Monthly rewards are credited shortly after each calendar month closes, based on your recorded activity.' },
      { q: 'Can I track progress toward the monthly milestone?', a: 'Your current progress toward monthly reward milestones is visible in your BDG Win account dashboard.' },
      { q: 'Does a slow week rule out my monthly milestone?', a: 'No, the monthly milestone reviews combined activity across the full month, so other weeks can offset a slower one.' },
      { q: 'Is the monthly reward the best signal of my VIP progress?', a: 'It\'s a strong one, since monthly totals are reviewed on the same rolling basis used for VIP tier reassessments.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/referral-program': {
    metaTitle: 'BDG Win Referral Program – Earn by Inviting Friends',
    metaDescription:
      'How the BDG Win referral program works: share your link, track invited players and earn from their activity over time.',
    keywords: ['BDG Win Referral', 'BDG Win Referral Program', 'BDG Referral'],
    eyebrow: 'Referral Program',
    h1: 'BDG Win Referral Program',
    intro: 'The BDG Win referral program pays you a share of activity generated by players you invite.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How Referrals Are Tracked',
        paragraphs: [
          'Every BDG Win account has a unique referral link found in the dashboard. When someone registers using your link and starts playing, that account is tagged to your referral profile, and a share of their qualifying activity is credited to you on an ongoing basis.',
          'You can track pending and paid referral earnings, along with the number of active invited players, from the same dashboard section.'
        ],
        image: {
          src: '/images/screenshots/invitation-bonus-received.webp',
          alt: 'BDG Win invitation bonus screen showing rewards credited per invited friend',
          caption: 'A BDG Win invitation bonus screen showing rewards credited once an invited friend registers and completes a qualifying deposit.'
        }
      },
      {
        heading: 'Getting the Most From Referrals',
        paragraphs: [
          'Referral earnings scale with how active your invited players are, so sharing your link with people who intend to play regularly, rather than just registering once, produces steadier returns over time.'
        ],
        image: {
          src: '/images/screenshots/invite-wheel-cashout.webp',
          alt: 'BDG Win Invite Wheel showing spin-based bonus amounts added to a referrer\'s balance',
          caption: 'The BDG Win Invite Wheel, which adds spin-based bonus amounts to a referrer\'s balance as more invited friends join.'
        }
      },
      {
        heading: 'Reading Your Referral Dashboard',
        paragraphs: [
          'The referral section separates pending earnings from paid ones, along with a count of active versus inactive invited players, so it\'s easy to see at a glance whether recent invites are actually playing or just registered once.',
          'Because tracking is tied to the link itself rather than a manual code entry, there\'s nothing extra an invited player needs to do beyond registering through your link — the connection is made automatically the moment their account is created.'
        ]
      }
    ],
    faqs: [
      { q: 'Where do I find my BDG Win referral link?', a: 'Your unique referral link is available in the referral section of your BDG Win account dashboard.' },
      { q: 'How much can I earn from BDG Win referrals?', a: 'Referral earnings are a share of your invited players\' qualifying activity and scale with how active they remain over time.' },
      { q: 'Is there a limit to how many people I can refer?', a: 'There is no fixed cap listed — you can share your BDG Win referral link with as many people as you like.' },
      { q: 'When are referral earnings paid out?', a: 'Referral earnings accumulate in your account and can be withdrawn through the standard BDG Win withdrawal process.' },
      { q: 'Does an invited player need to enter a code?', a: 'No, registering through your referral link automatically tags the new account to your referral profile.' },
      { q: 'Can I see which invited players are still active?', a: 'Yes, the referral dashboard separates active and inactive invited players so you can see who is still playing.' }
    ],
    related: [
      { label: 'Affiliate Program', url: '/affiliate-program' },
      { label: 'Agent Program', url: '/agent-program' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' }
    ]
  },

  '/affiliate-program': {
    metaTitle: 'BDG Win Affiliate Program – Partner and Earn Commission',
    metaDescription:
      'Details on the BDG Win affiliate program for content creators and marketers who want to promote the platform for ongoing commission.',
    keywords: ['BDG Win Affiliate Program', 'BDG Win Affiliate'],
    eyebrow: 'Affiliate Program',
    h1: 'BDG Win Affiliate Program',
    intro: 'The BDG Win affiliate program is built for creators and marketers driving larger volumes of new players.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How Affiliate Tracking Differs From Referrals',
        paragraphs: [
          'While the standard referral program suits individual players sharing a personal link, the BDG Win affiliate program is designed for larger-scale promotion — think content channels, communities or marketing campaigns. Affiliates get dedicated tracking links, campaign-level reporting and commission structures based on player volume and activity.'
        ],
        image: {
          src: '/images/screenshots/agent-program-rules.webp',
          alt: 'BDG Win promotion partner program rules explaining subordinate levels for invited players',
          caption: 'BDG Win\'s promotion partner rules, explaining how subordinate levels are counted when an invited player goes on to invite others — the same underlying structure affiliate tracking builds on.'
        }
      },
      {
        heading: 'Applying as a BDG Win Affiliate',
        paragraphs: [
          'Affiliate applications are reviewed individually through the Contact page, where you can describe your audience and promotion channels before receiving affiliate account access and tracking links.'
        ]
      },
      {
        heading: 'What Campaign-Level Reporting Looks Like',
        paragraphs: [
          'Where a standard referral link only shows one running total, affiliate tracking breaks activity down by campaign or channel, so you can see which specific link, page or promotion is actually converting rather than treating all traffic as one number.',
          'That level of detail is mainly useful once volume passes what a single personal link can meaningfully track — which is the main reason the affiliate program exists as a separate tier rather than simply raising referral limits.'
        ]
      }
    ],
    faqs: [
      { q: 'How is the BDG Win affiliate program different from referrals?', a: 'Affiliates get campaign-level tracking and commission structures suited to larger promotion volumes, compared to the simple personal link used for standard referrals.' },
      { q: 'Who can apply for the BDG Win affiliate program?', a: 'Content creators, marketers and site owners with an audience interested in online gaming can apply through the Contact page.' },
      { q: 'How is affiliate commission calculated?', a: 'Commission structures are based on the volume and activity of players brought in through your affiliate tracking links.' },
      { q: 'Do affiliates get dedicated support?', a: 'Approved BDG Win affiliates are given a dedicated contact point separate from general player support.' },
      { q: 'Can I run multiple campaigns as a BDG Win affiliate?', a: 'Yes, affiliate tracking is built to report on multiple campaigns or channels separately.' },
      { q: 'Do I need an existing audience to apply?', a: 'An existing audience interested in online gaming is expected, though the exact size is reviewed case by case through the Contact page.' }
    ],
    related: [
      { label: 'Referral Program', url: '/referral-program' },
      { label: 'Agent Program', url: '/agent-program' },
      { label: 'Contact', url: '/contact' }
    ]
  },

  '/agent-program': {
    metaTitle: 'BDG Win Agent Program – Become a BDG Win Agent',
    metaDescription:
      'How the BDG Win agent program works for individuals managing groups of players, including responsibilities and earnings structure.',
    keywords: ['BDG Win Agent', 'BDG Win Agent Program', 'BDG Agent'],
    eyebrow: 'Agent Program',
    h1: 'BDG Win Agent Program',
    intro: 'BDG Win agents manage a network of players and earn based on that network\'s combined activity.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What a BDG Win Agent Does',
        paragraphs: [
          'A BDG Win agent oversees a group of players — helping them register, deposit and understand the platform — in exchange for ongoing earnings tied to that group\'s activity. Agents get a management dashboard separate from the standard player view, showing group-level deposits, activity and earnings.'
        ],
        image: {
          src: '/images/screenshots/agency-commission-dashboard.webp',
          alt: 'BDG Win agent Agency dashboard showing direct and team subordinate counts and commission total',
          caption: 'A BDG Win agent\'s Agency dashboard, showing direct and team subordinate counts, deposit numbers and the previous day\'s total commission.'
        }
      },
      {
        heading: 'Becoming an Agent',
        paragraphs: [
          'Agent status is granted after an application reviewed through the Contact page, where existing player history and intended network size are considered before access is set up.'
        ],
        image: {
          src: '/images/screenshots/rebate-ratio-table.webp',
          alt: 'BDG Win rebate ratio table showing commission percentages by level and subordinate depth',
          caption: 'BDG Win\'s rebate ratio table, showing how commission percentages change across rebate levels and subordinate depth for lottery, casino and sports.'
        }
      },
      {
        heading: 'Managing a Player Network Day to Day',
        paragraphs: [
          'Beyond onboarding, most of an agent\'s ongoing work is checking group-level activity from the management dashboard and helping individual players with account or deposit questions before they escalate to general support.',
          'Because earnings track combined group activity rather than any single player, an agent\'s incentives line up with helping the whole network stay active — a handful of highly active players and a larger group of occasional ones both contribute to the same running total.'
        ]
      }
    ],
    faqs: [
      { q: 'What does a BDG Win agent manage?', a: 'A BDG Win agent manages a group of players and earns based on that group\'s combined deposits and activity.' },
      { q: 'How do I become a BDG Win agent?', a: 'Agent applications are reviewed individually through the Contact page before dashboard access is granted.' },
      { q: 'Is the agent dashboard different from a regular account?', a: 'Yes, agents get a management view showing group-level activity, separate from the standard individual player dashboard.' },
      { q: 'Can an agent also be a referral or affiliate partner?', a: 'Yes, the three programs track different relationships and can be combined depending on your role with BDG Win.' },
      { q: 'Do agent earnings depend on one specific player?', a: 'No, agent earnings are based on the combined activity of the whole managed group rather than any single player.' },
      { q: 'What kind of support questions does an agent typically handle?', a: 'Agents commonly help with account setup and deposit questions before they would otherwise go to general support.' }
    ],
    related: [
      { label: 'Affiliate Program', url: '/affiliate-program' },
      { label: 'Referral Program', url: '/referral-program' },
      { label: 'Contact', url: '/contact' }
    ]
  },

  '/games': {
    metaTitle: 'BDG Win Game Categories – Casino, Slots, Lottery & More',
    metaDescription:
      'Browse every BDG Win game category, including casino, slots, lottery, sports, crash, fishing and arcade games.',
    keywords: ['BDG Win Game', 'BDG Win Games', 'BDG Game'],
    eyebrow: 'Games',
    h1: 'BDG Win Game Categories',
    intro: 'Every BDG Win game category sits under one account, so you can move between them without switching wallets.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Choosing a Category',
        paragraphs: [
          'Casino and slot games suit players who prefer classic formats with visible odds. Lottery and Color Prediction rounds are built for fast, simple rounds. Sports games cover pre-match and live markets, while crash, fishing and arcade titles offer quicker, skill-influenced sessions.',
          'Your BDG Win balance, rewards progress and VIP tier apply across all categories equally, so switching between them does not reset any progress.'
        ]
      },
      {
        heading: 'Moving Between Categories Without Losing Progress',
        paragraphs: [
          'Because every category draws from the same wallet, there\'s no transfer step between, say, a casino table and a slot title — a balance built up in one category is immediately available in another. Rewards and VIP progress work the same way, tracking combined activity rather than resetting per category.',
          'This is also why trying a new category carries little friction: switching from lottery to sports markets for a session doesn\'t require a new account, a separate deposit or starting your reward cycle over.'
        ]
      }
    ],
    faqs: [
      { q: 'How many game categories does BDG Win offer?', a: 'BDG Win organizes games into casino, slots, lottery, sports, crash, fishing, arcade and popular/new game groupings.' },
      { q: 'Do I need a separate wallet for each BDG Win game category?', a: 'No, a single BDG Win wallet and account balance works across every game category.' },
      { q: 'Which BDG Win game category is fastest to play?', a: 'Lottery, Color Prediction and crash games tend to have the shortest round times on BDG Win.' },
      { q: 'Where can I see the newest games on BDG Win?', a: 'The New Games page lists recently added titles across all BDG Win categories.' },
      { q: 'Does switching game categories reset my rewards progress?', a: 'No, daily, weekly and monthly reward progress tracks combined activity across every category.' },
      { q: 'Can I try a new BDG Win game category without a new deposit?', a: 'Yes, your existing wallet balance works across every category, so no separate deposit is needed to try something new.' }
    ],
    related: [
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Slot Games', url: '/games/slots' },
      { label: 'Popular Games', url: '/games/popular' }
    ]
  },

  '/games/casino': {
    metaTitle: 'BDG Win Casino Games – Live Tables and Classic Formats',
    metaDescription:
      'Play BDG Win casino games including live dealer tables and classic table game formats with transparent odds.',
    keywords: ['BDG Win Casino', 'BDG Win Casino Games', 'BDG Casino'],
    eyebrow: 'Casino',
    h1: 'BDG Win Casino Games',
    intro: 'BDG Win casino games cover live dealer tables and classic formats with clearly stated odds.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Live Tables and Classic Formats',
        paragraphs: [
          'Live dealer tables on BDG Win stream in real time with visible card or wheel outcomes, while classic formats run on certified random outcome generation. Both formats display stake limits and payout ratios before you join a round.',
          'Casino games sit in the same wallet as every other BDG Win category, so winnings are available for withdrawal or reuse across slots, lottery or sports without a transfer step.'
        ]
      },
      {
        heading: 'Choosing Between Live and Classic Tables',
        paragraphs: [
          'Live dealer tables suit players who want to see a real dealer and shuffle in real time, streamed continuously rather than generated on demand. Classic formats resolve faster since there\'s no stream to wait on, which suits shorter sessions or lower-bandwidth connections.',
          'Both formats are held to the same fair play standards, so the choice comes down to preferred pace and format rather than one being more reliable than the other.'
        ]
      }
    ],
    faqs: [
      { q: 'Are BDG Win casino games live or automated?', a: 'BDG Win offers both live dealer tables and automated classic formats, clearly labeled before you join a table.' },
      { q: 'Are BDG Win casino game odds published?', a: 'Payout ratios and stake limits are shown on each table before you place a bet.' },
      { q: 'Can I move casino winnings to other BDG Win games?', a: 'Yes, all winnings sit in the same BDG Win wallet used across every game category.' },
      { q: 'Is there a minimum stake for BDG Win casino tables?', a: 'Minimum and maximum stakes vary by table and are displayed before you join.' },
      { q: 'Which loads faster, live or classic casino tables?', a: 'Classic formats typically resolve faster since there is no live video stream to wait on.' },
      { q: 'Are live dealer tables held to the same fairness standards as classic tables?', a: 'Yes, both formats follow the same fair play standards described on our Fair Play page.' }
    ],
    related: [
      { label: 'Slot Games', url: '/games/slots' },
      { label: 'Lottery Games', url: '/games/lottery' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/slots': {
    metaTitle: 'BDG Win Slots – Themed Reels and Instant Results',
    metaDescription:
      'Explore BDG Win slot games with themed reels, adjustable stakes and instant round results across desktop and mobile.',
    keywords: ['BDG Win Slots', 'BDG Win Slot Games', 'BDG Slots', 'BDG Slot'],
    eyebrow: 'Slots',
    h1: 'BDG Win Slot Games',
    intro: 'BDG Win slots cover a wide range of themes, all running on the same fast, low-bandwidth interface.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How BDG Win Slots Are Organized',
        paragraphs: [
          'Slot titles on BDG Win are grouped by theme and volatility, with stake ranges adjustable per spin. Round results are generated and displayed instantly, without long loading animations, which keeps sessions quick even on limited mobile data.',
          'New slot titles are added periodically and appear first on the New Games page before moving into general rotation.'
        ],
        image: {
          src: '/images/screenshots/slots-provider-grid.webp',
          alt: 'BDG Win slots screen showing titles from multiple game studios grouped for browsing',
          caption: 'A sample of the slot titles available on BDG Win, grouped for quick browsing across multiple game studios.'
        }
      },
      {
        heading: 'Matching a Title to Your Play Style',
        paragraphs: [
          'Themes and volatility are shown together on each slot title, so it\'s possible to filter toward the combination that fits a session — a themed reel with steadier, smaller payouts for longer sessions, or a higher-volatility title for shorter ones with bigger swings.',
          'Because stakes adjust per spin, the same title can suit a cautious session and a more aggressive one just by changing the stake range rather than switching games entirely.'
        ]
      }
    ],
    faqs: [
      { q: 'Can I adjust my stake on BDG Win slots?', a: 'Yes, most BDG Win slot titles allow you to adjust your stake per spin within a set range.' },
      { q: 'How fast do BDG Win slot rounds resolve?', a: 'Slot results display instantly after each spin, with minimal loading time between rounds.' },
      { q: 'Where can I find new BDG Win slot titles?', a: 'New slot releases are listed on the New Games page before entering general rotation.' },
      { q: 'Do BDG Win slots work well on mobile data?', a: 'Yes, slot screens are optimized to load quickly even on slower mobile connections.' },
      { q: 'How do I know a slot title\'s volatility before playing?', a: 'Volatility is shown alongside the theme on each BDG Win slot title before you spin.' },
      { q: 'Can I change my approach without switching slot titles?', a: 'Yes, adjusting your stake range within the same title is often enough to change pace without switching games.' }
    ],
    related: [
      { label: 'New Games', url: '/games/new' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Arcade Games', url: '/games/arcade' }
    ]
  },

  '/games/lottery': {
    metaTitle: 'BDG Win Lottery & Color Prediction Games',
    metaDescription:
      'Play BDG Win lottery draws and Color Prediction rounds with fast settlement times and clear result history.',
    keywords: ['BDG Win Lottery', 'BDG Win Color Prediction', 'BDG Lottery', 'BDG Color Prediction'],
    eyebrow: 'Lottery',
    h1: 'BDG Win Lottery Games',
    intro: 'BDG Win lottery games include numbered draws and Color Prediction rounds that settle quickly.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Lottery Draws and Color Prediction',
        paragraphs: [
          'Numbered lottery draws on BDG Win run on fixed schedules with published draw times, while BDG Win Color Prediction rounds settle in under a minute, letting you place several rounds in a short session.',
          'Every draw and prediction round result is logged in your history, so you can review outcomes and timing at any point from your account.'
        ],
        image: {
          src: '/images/screenshots/lottery-wingo-k3-5d.webp',
          alt: 'BDG Win lottery category listing Win Go, MotoRace, K3 and 5D draw formats',
          caption: 'BDG Win\'s lottery category, listing draw formats side by side, each with its own guess-number style and settlement time.'
        }
      },
      {
        heading: 'Reading Your Round History',
        paragraphs: [
          'Every settled round — whether a numbered draw or a Color Prediction cycle — logs its outcome, timing and your entry in the same history view, so comparing recent results doesn\'t require jumping between separate screens for each format.',
          'That shared history is also where the certified random outcome generation described on our Fair Play page becomes visible in practice: each entry reflects an independently generated result, not a running pattern carried over from the previous round.'
        ]
      }
    ],
    faqs: [
      { q: 'What is BDG Win Color Prediction?', a: 'BDG Win Color Prediction is a fast-settling round type where players predict an outcome color, with results confirmed in under a minute.' },
      { q: 'How often do BDG Win lottery draws run?', a: 'Numbered lottery draws run on published fixed schedules visible before you enter a round.' },
      { q: 'Can I see past BDG Win lottery results?', a: 'Yes, your draw and prediction history is available from your account activity log.' },
      { q: 'Is Color Prediction faster than numbered lottery draws?', a: 'Yes, Color Prediction rounds typically settle faster than fixed-schedule numbered lottery draws.' },
      { q: 'Are numbered draws and Color Prediction results shown in the same place?', a: 'Yes, both formats log to the same round history view in your account.' },
      { q: 'Does a past Color Prediction round influence the next one?', a: 'No, each round uses independent certified random generation regardless of previous outcomes.' }
    ],
    related: [
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/sports': {
    metaTitle: 'BDG Win Sports Games – Cricket, Football & Live Markets',
    metaDescription:
      'Bet on BDG Win sports markets across cricket, football, tennis and kabaddi, with both pre-match and live options.',
    keywords: ['BDG Win Sports', 'BDG Win Sports Games', 'BDG Sports'],
    eyebrow: 'Sports',
    h1: 'BDG Win Sports Games',
    intro: 'BDG Win sports markets cover major disciplines with both pre-match and in-play options.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Available Markets',
        paragraphs: [
          'Cricket, football, tennis and kabaddi make up the core BDG Win sports offering, with markets available before matches start and updated live as events progress. Odds adjust in real time during live markets, shown alongside each fixture.',
          'Settlement follows official match results, and your sports activity contributes toward the same reward cycles as other BDG Win game categories.'
        ]
      },
      {
        heading: 'Pre-Match vs Live Markets',
        paragraphs: [
          'Pre-match markets open ahead of a fixture and give a fixed view of the odds before anything on the field has happened, which suits players who prefer to research and place a market ahead of time. Live markets take over once the fixture starts, adjusting continuously as the match unfolds.',
          'Both feed into the same match settlement and reward tracking, so there\'s no separate account state to manage depending on which type of market you use.'
        ]
      }
    ],
    faqs: [
      { q: 'Which sports can I bet on with BDG Win?', a: 'BDG Win sports markets cover cricket, football, tennis and kabaddi, among other disciplines.' },
      { q: 'Does BDG Win offer live in-play betting?', a: 'Yes, live markets update in real time during matches, alongside standard pre-match options.' },
      { q: 'Do sports market results count toward BDG Win rewards?', a: 'Yes, sports activity contributes to the same daily, weekly and monthly reward cycles as other game categories.' },
      { q: 'How is a BDG Win sports market settled?', a: 'Markets settle based on official results of the underlying match or event.' },
      { q: 'Can I switch from a pre-match market to a live one mid-fixture?', a: 'Yes, live markets become available once a fixture starts, alongside any pre-match position you already hold.' },
      { q: 'Do pre-match and live markets use the same wallet?', a: 'Yes, both market types draw from and settle to the same BDG Win wallet.' }
    ],
    related: [
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Leaderboard', url: '/leaderboard' }
    ]
  },

  '/games/fishing': {
    metaTitle: 'BDG Win Fishing Games – Skill-Based Arcade Rounds',
    metaDescription:
      'Play BDG Win fishing games with multiplier catches, boss fish payouts and skill-based aiming mechanics.',
    keywords: ['BDG Win Fishing Games', 'BDG Win'],
    eyebrow: 'Fishing',
    h1: 'BDG Win Fishing Games',
    intro: 'BDG Win fishing games combine aiming skill with multiplier-based payouts on different fish types.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How Fishing Rounds Work',
        paragraphs: [
          'Each BDG Win fishing round places you in a shared pool where different fish types carry different point multipliers. Landing a catch pays based on the fish value and your stake per shot, with rare boss fish offering the largest payouts.',
          'Because outcomes depend partly on timing and aim, fishing rounds feel more active than pure chance-based formats while still running on BDG Win\'s certified game engine.'
        ]
      },
      {
        heading: 'Shared Pools and Payout Timing',
        paragraphs: [
          'Since a fishing round runs as a shared pool, the fish on screen and their point values are visible to every player in that round at the same time — landing a catch is a mix of aim, timing and picking a target before someone else does.',
          'Payouts are calculated per catch rather than at the end of a round, so a session\'s results build up continuously and are reflected in your wallet as they happen rather than all at once.'
        ]
      }
    ],
    faqs: [
      { q: 'Are BDG Win fishing games skill-based?', a: 'Yes, aiming and timing affect your catches, though payout multipliers are set by the game engine per fish type.' },
      { q: 'What is a boss fish in BDG Win fishing games?', a: 'Boss fish are rare, high-value targets that pay out significantly more than standard fish types.' },
      { q: 'Can multiple players share a BDG Win fishing round?', a: 'Yes, fishing rounds typically run in a shared pool where multiple players can target fish simultaneously.' },
      { q: 'Do fishing games use the same wallet as other BDG Win games?', a: 'Yes, stakes and winnings use the same BDG Win wallet shared across all game categories.' },
      { q: 'Are fishing payouts credited per catch or at the end of a round?', a: 'Payouts are credited per catch as they happen, rather than all at once at the end of a round.' },
      { q: 'Can other players target the same fish as me?', a: 'Yes, since rounds run in a shared pool, timing matters because other players can target the same fish.' }
    ],
    related: [
      { label: 'Arcade Games', url: '/games/arcade' },
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Popular Games', url: '/games/popular' }
    ]
  },

  '/games/crash': {
    metaTitle: 'BDG Win Crash Games – Multiplier Cash-Out Rounds',
    metaDescription:
      'Play BDG Win crash games where a rising multiplier can be cashed out any time before the round ends.',
    keywords: ['BDG Win Crash Games', 'BDG Win Color Prediction', 'BDG Color Prediction'],
    eyebrow: 'Crash',
    h1: 'BDG Win Crash Games',
    intro: 'BDG Win crash games are built around a simple rule: cash out before the multiplier crashes.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How a Crash Round Plays Out',
        paragraphs: [
          'Each round starts a rising multiplier applied to your stake. You choose when to cash out — the longer you wait, the higher the potential payout, but the round can crash at any moment, ending it at zero if you have not cashed out yet.',
          'Round history and crash points are logged and visible after each round, similar to how BDG Win Color Prediction results are tracked, giving you a clear record of past outcomes.'
        ],
        image: {
          src: '/images/screenshots/mini-games-grid.webp',
          alt: 'BDG Win mini games list including crash-style titles alongside quick-round games',
          caption: 'BDG Win\'s mini games list, where crash-style titles sit alongside other quick-round formats.'
        }
      },
      {
        heading: 'Setting a Cash-Out Approach Before You Play',
        paragraphs: [
          'Because the round can end at any moment, many players decide on a target multiplier before the round starts rather than reacting in the moment — a fixed target removes the split-second decision under pressure once the multiplier is climbing quickly.',
          'The visible round history is useful for this exactly because it shows a spread of recent crash points rather than a single number, which is a more realistic picture of typical outcomes than any one round on its own.'
        ],
        image: {
          src: '/images/screenshots/aviator-bonus.webp',
          alt: 'BDG Win crash game bonus promotion tied to total turnover, with bonus tiers by wagering amount',
          caption: 'A BDG Win crash-game bonus tied to total turnover, with bonus tiers shown by wagering amount.'
        }
      }
    ],
    faqs: [
      { q: 'How do I win in a BDG Win crash game?', a: 'You cash out your stake at a chosen multiplier before the round crashes; waiting longer increases potential payout but also risk.' },
      { q: 'Can I see past BDG Win crash round results?', a: 'Yes, previous crash points are displayed in the round history so you can review recent outcomes.' },
      { q: 'Is there a maximum multiplier in BDG Win crash games?', a: 'Multiplier ceilings vary by game version and are shown within the game interface.' },
      { q: 'Are crash games related to BDG Win Color Prediction?', a: 'Both are fast-settling round types, though crash games use a rising multiplier while Color Prediction is outcome-based.' },
      { q: 'Should I decide my cash-out point before or during a round?', a: 'Many players find it easier to set a target multiplier before the round starts rather than deciding mid-round.' },
      { q: 'Does one round\'s crash point affect the next one?', a: 'No, each crash round settles independently, the same way BDG Win Color Prediction rounds do.' }
    ],
    related: [
      { label: 'Lottery & Color Prediction', url: '/games/lottery' },
      { label: 'Fishing Games', url: '/games/fishing' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/arcade': {
    metaTitle: 'BDG Win Arcade Games – Quick Casual Rounds',
    metaDescription:
      'Play short, casual BDG Win arcade games designed for quick sessions between bigger game categories.',
    keywords: ['BDG Win Arcade Games', 'BDG Win'],
    eyebrow: 'Arcade',
    h1: 'BDG Win Arcade Games',
    intro: 'BDG Win arcade games are built for short sessions rather than long, sustained play.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'What Makes Arcade Games Different',
        paragraphs: [
          'Arcade titles on BDG Win run shorter rounds with simpler rules than casino or sports markets, making them a natural fit for quick breaks between other game categories. Stakes are generally lower, matching the faster round pace.'
        ]
      },
      {
        heading: 'When Arcade Titles Make Sense',
        paragraphs: [
          'Arcade games work well in two specific situations — filling a short gap between longer sessions in another category, or as a low-stake way to get comfortable with the BDG Win interface before moving to formats with more moving parts, like live casino tables or sports markets.',
          'Because rules stay simple across the category, switching between different arcade titles doesn\'t require relearning much, which is part of why they suit quick, casual sessions rather than long, focused ones.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does a typical BDG Win arcade round take?', a: 'Arcade rounds are designed to be short, often resolving in well under a minute.' },
      { q: 'Are BDG Win arcade game stakes lower than other categories?', a: 'Arcade titles generally support lower minimum stakes, matching their faster round pace.' },
      { q: 'Do arcade games contribute to BDG Win rewards?', a: 'Yes, arcade activity counts toward the same daily, weekly and monthly reward cycles as other categories.' },
      { q: 'Are arcade games good for new BDG Win players?', a: 'Their simple rules and short rounds make arcade games a straightforward starting point for new accounts.' },
      { q: 'Are arcade game rules consistent across different titles?', a: 'Yes, arcade titles generally share simple, similar rules, so switching between them takes little adjustment.' },
      { q: 'Are arcade games a good way to fill a short break?', a: 'Yes, their short round times make them a natural fit for quick sessions between other categories.' }
    ],
    related: [
      { label: 'Fishing Games', url: '/games/fishing' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'New Games', url: '/games/new' }
    ]
  },

  '/games/popular': {
    metaTitle: 'BDG Win Popular Games – Most Played This Month',
    metaDescription:
      'See the most played BDG Win games this month, ranked by active player counts across all categories.',
    keywords: ['BDG Win Popular Games', 'BDG Win Game', 'BDG Game'],
    eyebrow: 'Popular',
    h1: 'BDG Win Popular Games',
    intro: 'Popular games on BDG Win are ranked using active player counts, refreshed on a rolling basis.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How Popularity Is Ranked',
        paragraphs: [
          'BDG Win tracks active sessions across casino, slots, lottery, sports, crash, fishing and arcade categories to determine which titles are currently drawing the most play. This ranking updates regularly, so it reflects recent trends rather than a fixed all-time list.'
        ],
        image: {
          src: '/images/screenshots/popular-games-rtp.webp',
          alt: 'BDG Win popular games list ranked with published RTP percentages',
          caption: 'BDG Win\'s popular games list, showing top titles ranked alongside their published RTP percentage.'
        }
      },
      {
        heading: 'Using the Popular List to Try Something New',
        paragraphs: [
          'Because ranking is based on recent activity rather than an all-time leaderboard, the list is a reasonable starting point when you want to try a game outside your usual category without researching each option individually — a title near the top is, by definition, one a large number of current players are actively choosing.',
          'It updates on the same rolling basis across every category, so a strong week for sports markets or a new slot release can shift the list noticeably compared to the month before.'
        ]
      }
    ],
    faqs: [
      { q: 'How is the BDG Win Popular Games list generated?', a: 'It ranks titles by recent active player counts across all game categories, updated on a rolling basis.' },
      { q: 'Does the popular list include every game category?', a: 'Yes, casino, slots, lottery, sports, crash, fishing and arcade titles are all eligible to appear.' },
      { q: 'How often does the popular ranking change?', a: 'Rankings refresh regularly to reflect recent play trends rather than staying fixed.' },
      { q: 'Where can I find brand-new BDG Win titles instead?', a: 'Recently added games appear on the New Games page before they build enough play to rank as popular.' },
      { q: 'Is the popular list a good way to try a new game category?', a: 'Yes, since it reflects what a large number of current players are actively choosing right now.' },
      { q: 'Can a new game release shift the popular ranking quickly?', a: 'Yes, because the list updates on a rolling basis, a strong week for any title can move it noticeably.' }
    ],
    related: [
      { label: 'New Games', url: '/games/new' },
      { label: 'Leaderboard', url: '/leaderboard' },
      { label: 'Game Categories', url: '/games' }
    ]
  },

  '/games/new': {
    metaTitle: 'New BDG Win Games – Latest Releases',
    metaDescription:
      'Browse the newest games added to BDG Win across casino, slots, lottery, sports, crash, fishing and arcade categories.',
    keywords: ['BDG Win New Games', 'BDG Win Game', 'BDG Game'],
    eyebrow: 'New Releases',
    h1: 'New BDG Win Games',
    intro: 'New titles are added to BDG Win periodically across every game category.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Where New Titles Appear First',
        paragraphs: [
          'Before a new game moves into general category listings, it appears here first. This gives early players a chance to try new casino tables, slot themes or arcade formats as soon as they go live on BDG Win.'
        ]
      },
      {
        heading: 'From New Release to General Rotation',
        paragraphs: [
          'A new title typically spends some time listed here specifically so early players can surface any issues before it moves into its permanent category page alongside established games. This staged rollout is the same reason a slot or arcade title might appear on both the New Games page and its category page for a period before settling into general rotation only.',
          'Checking this page periodically is the most direct way to see what\'s launched recently, since new releases can arrive in any category — a new casino table and a new arcade title can go live in the same week without either displacing the other.'
        ]
      }
    ],
    faqs: [
      { q: 'How often are new games added to BDG Win?', a: 'New titles are added periodically across categories; check this page regularly for the latest releases.' },
      { q: 'Do new BDG Win games count toward rewards immediately?', a: 'Yes, activity on newly released games counts toward daily, weekly and monthly reward cycles like any other title.' },
      { q: 'Can I suggest a new game type for BDG Win?', a: 'Feedback and suggestions can be submitted through the Contact or Support pages.' },
      { q: 'Are new BDG Win games tested before release?', a: 'New titles go through the same fair play and security standards described on our Fair Play page before launch.' },
      { q: 'How long does a game stay listed as new before moving to general rotation?', a: 'New titles are typically listed here for a period before settling permanently into their category page.' },
      { q: 'Can multiple new games launch in different categories at once?', a: 'Yes, new releases across different categories can go live in the same week without affecting each other.' }
    ],
    related: [
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Game Categories', url: '/games' },
      { label: 'Announcements', url: '/announcements' }
    ]
  },

  '/download': {
    metaTitle: 'BDG Win Download – Android, iOS and Desktop',
    metaDescription:
      'Download BDG Win for Android via APK, install on iOS, or play instantly on desktop without downloading anything.',
    keywords: ['BDG Win Download', 'BDG Win APK', 'BDG Win App', 'BDG Download', 'BDG APK', 'BDG App'],
    eyebrow: 'Download',
    h1: 'Download BDG Win',
    intro: 'BDG Win is available as an Android APK, through an iOS installation guide, or directly on desktop browsers.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Choosing Your Platform',
        paragraphs: [
          'Android users install the BDG Win APK directly, following the steps on our Android Guide. iOS players follow a browser-based installation process detailed on our iOS Guide, since distribution methods differ from Android. Desktop users can skip installation entirely and play directly through a browser.',
          'Whichever platform you choose, your account, wallet and rewards remain the same — installing the app just changes how you access BDG Win, not what your account contains.'
        ]
      },
      {
        heading: 'Picking the Right Option for How You Play',
        paragraphs: [
          'If BDG Win is mostly a phone habit, the Android APK or iOS installation gives a faster, app-like way back in each time without opening a browser and re-entering a URL. If you mainly play at a desk, skipping installation and using a browser directly is the lower-friction option since there\'s nothing to keep updated.',
          'None of these choices are permanent — an account created through the desktop browser works identically if you install the Android APK later, and vice versa, since everything ties back to the same login rather than the device it was created on.'
        ]
      }
    ],
    faqs: [
      { q: 'Is the BDG Win APK safe to install?', a: 'Always download the BDG Win APK from the official source described in our Android Guide to avoid modified or unofficial files.' },
      { q: 'Does BDG Win have an iOS app?', a: 'iOS access follows a guided installation process outlined on our iOS Guide, distinct from the Android APK method.' },
      { q: 'Do I need to download anything to play on desktop?', a: 'No, desktop players can access BDG Win directly through a browser without installing a separate app.' },
      { q: 'Will my account be the same across devices?', a: 'Yes, your BDG Win account, wallet and rewards stay consistent whether you play on Android, iOS or desktop.' },
      { q: 'Can I switch platforms after creating my account?', a: 'Yes, an account created on one platform works identically if you install BDG Win on another later.' },
      { q: 'Which platform is best if I mostly play on my phone?', a: 'The Android APK or iOS installation gives faster, app-like access compared to opening a browser each time.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Desktop Guide', url: '/download/desktop' }
    ]
  },

  '/download/android': {
    metaTitle: 'BDG Win Android Guide – Install the APK Step by Step',
    metaDescription:
      'Step-by-step guide to downloading and installing the BDG Win APK on Android devices safely.',
    keywords: ['BDG Win APK', 'BDG Win Android', 'BDG APK'],
    eyebrow: 'Android Guide',
    h1: 'BDG Win Android Installation Guide',
    intro: 'Installing the BDG Win APK on Android takes a few extra steps compared to a Play Store app.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'Installation Steps',
        paragraphs: [
          'Download the BDG Win APK file from the official Download page rather than a third-party link. Before opening the file, allow installation from unknown sources in your Android settings, since the app is distributed outside the Play Store. Once installed, open the app and log in with your existing BDG Win account, or register directly from the app if you are new.',
          'Keep the app updated by re-downloading the APK from the official page whenever a new version is announced on our Announcements page.'
        ]
      },
      {
        heading: 'If Installation Doesn\'t Go Smoothly',
        paragraphs: [
          'Most installation issues come down to one of two things: unknown sources not being enabled for the specific browser or file manager used to open the APK, or an older partially-installed version conflicting with the new file. Uninstalling any previous version before installing a fresh APK usually clears this up.',
          'If the app installs but won\'t log in, double-check that you\'re using the same registered mobile number as on other devices — installation and login are separate steps, and a successful install doesn\'t mean the login step is complete yet.'
        ]
      }
    ],
    faqs: [
      { q: 'Why do I need to enable unknown sources for the BDG Win APK?', a: 'Android blocks installation from outside the Play Store by default, so this setting must be enabled once to install the official BDG Win APK.' },
      { q: 'Is enabling unknown sources risky?', a: 'It is safe as long as you only install the BDG Win APK from our official Download page, not from unverified third-party links.' },
      { q: 'Do I need a new account to use the Android app?', a: 'No, your existing BDG Win account works immediately in the app; new players can also register directly from it.' },
      { q: 'How do I update the BDG Win Android app?', a: 'Re-download the latest APK from the Download page whenever a new version is announced.' },
      { q: 'What if the BDG Win APK won\'t install?', a: 'Uninstall any previous version first, then confirm unknown sources is enabled for the app you used to open the file.' },
      { q: 'The app installed but won\'t log in — what should I check?', a: 'Confirm you\'re using the same registered mobile number as your other devices, since installation and login are separate steps.' }
    ],
    related: [
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Desktop Guide', url: '/download/desktop' },
      { label: 'Announcements', url: '/announcements' }
    ]
  },

  '/download/ios': {
    metaTitle: 'BDG Win iOS Guide – How to Access BDG Win on iPhone',
    metaDescription:
      'Guide to accessing BDG Win on iOS devices, including installation steps and how your account carries over.',
    keywords: ['BDG Win iOS', 'BDG Win App', 'BDG App'],
    eyebrow: 'iOS Guide',
    h1: 'BDG Win iOS Installation Guide',
    intro: 'BDG Win on iOS follows a different distribution path than the Android APK.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'Getting Set Up on iPhone',
        paragraphs: [
          'From the Download page, open the iOS link on your iPhone or iPad and follow the on-screen installation prompts. Depending on your iOS version, you may need to trust the app profile once in your device settings before it opens normally.',
          'After installation, log in with your existing BDG Win credentials — your wallet balance, rewards and VIP tier carry over exactly as they appear on Android or desktop.'
        ]
      },
      {
        heading: 'Why iOS Installation Looks Different From Android',
        paragraphs: [
          'Apple\'s App Store review process doesn\'t accommodate every category BDG Win offers, which is why iOS access uses a direct installation link and a one-time device-trust step instead of a standard App Store listing. It\'s an extra step, but a one-time one — future updates don\'t require repeating the trust step unless iOS itself resets app permissions.',
          'This distribution method is common across the online gaming industry for the same reason, so the extra step isn\'t unique to BDG Win specifically.'
        ]
      }
    ],
    faqs: [
      { q: 'Why does BDG Win on iOS require trusting a profile?', a: 'Because distribution outside the App Store requires a one-time trust step in iOS settings before the app will open.' },
      { q: 'Will my rewards carry over to the iOS app?', a: 'Yes, your BDG Win wallet, rewards and VIP tier are the same across iOS, Android and desktop.' },
      { q: 'What iOS version is required?', a: 'Compatibility details are listed on the Download page installation link for the current release.' },
      { q: 'Is there a separate registration for iOS?', a: 'No, existing accounts log in directly, and new players can register from within the iOS app.' },
      { q: 'Do I need to repeat the trust step after every update?', a: 'No, the device-trust step is generally one-time unless iOS resets app permissions.' },
      { q: 'Why isn\'t BDG Win listed directly in the App Store?', a: 'App Store review policies don\'t accommodate every game category BDG Win offers, so a direct installation link is used instead.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'Desktop Guide', url: '/download/desktop' },
      { label: 'Login', url: '/login' }
    ]
  },

  '/download/desktop': {
    metaTitle: 'BDG Win Desktop Guide – Play Without Downloading',
    metaDescription:
      'How to play BDG Win directly from a desktop browser without installing any additional software.',
    keywords: ['BDG Win Desktop', 'BDG Win'],
    eyebrow: 'Desktop Guide',
    h1: 'BDG Win Desktop Guide',
    intro: 'Desktop access to BDG Win does not require downloading or installing anything.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'Playing on Desktop',
        paragraphs: [
          'Open BDG Win directly in any modern desktop browser and log in with your existing account, or register if you are new. The desktop layout mirrors the same game categories, wallet and rewards system used on mobile, so nothing about your account changes based on device.',
          'For the best performance, keep your browser updated and avoid unnecessary extensions that can slow page loading.'
        ]
      },
      {
        heading: 'When Desktop Play Makes the Most Sense',
        paragraphs: [
          'A larger screen is the clearest advantage for formats with more visual detail — live dealer casino tables and sports markets with several simultaneous fixtures are easier to follow on desktop than a phone screen, even though both work fine on mobile too.',
          'Because there\'s nothing to install, desktop is also a convenient way to check your account from a shared or borrowed computer without leaving an app installed behind — just remember to log out when you\'re done on a device that isn\'t your own.'
        ]
      }
    ],
    faqs: [
      { q: 'Do I need to install software to play BDG Win on desktop?', a: 'No, BDG Win runs directly in your browser on desktop without any download.' },
      { q: 'Which browsers work best with BDG Win?', a: 'Any current version of major browsers works; keeping your browser updated gives the best performance.' },
      { q: 'Is the desktop experience different from mobile?', a: 'The layout is adapted for larger screens, but game categories, wallet and rewards are identical across devices.' },
      { q: 'Can I switch between desktop and the Android or iOS app?', a: 'Yes, your BDG Win account stays in sync whether you play on desktop, Android or iOS.' },
      { q: 'Is desktop better for watching live casino tables or sports markets?', a: 'A larger screen can make it easier to follow visual detail, though both formats work fully on mobile as well.' },
      { q: 'Is it safe to use BDG Win on a shared or borrowed computer?', a: 'Yes, since nothing is installed, just remember to log out when finished on a device that isn\'t your own.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Register', url: '/register' }
    ]
  },

  '/register': {
    metaTitle: 'BDG Win Register – Create Your Account in Minutes',
    metaDescription:
      'Step-by-step guide to BDG Win registration: verify your number, set a password and start playing in under a minute.',
    keywords: ['BDG Win Register', 'BDG Win Registration', 'BDG Register'],
    eyebrow: 'Register',
    h1: 'Register on BDG Win',
    intro: 'Creating a BDG Win account takes a mobile number, an OTP verification step and a password.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Registration Steps',
        paragraphs: [
          'Enter your mobile number on the registration form, then confirm the one-time code sent to that number. Once verified, set a password for your account — this is what you will use to log in going forward alongside your registered number.',
          'After registration, add a payment method from the Payment Methods page and make your first deposit to unlock full access to every BDG Win game category.'
        ],
        image: {
          src: '/images/screenshots/register-screen.webp',
          alt: 'BDG Win registration form asking for phone number, password and invite code',
          caption: 'The BDG Win registration form, asking for a phone number, a password and confirmation before your account is created.'
        }
      },
      {
        heading: 'What to Have Ready Before You Start',
        paragraphs: [
          'Registration goes fastest when you have an active mobile number in hand to receive the one-time code, since the code expires after a short window and you\'ll need to request a new one if it lapses before you enter it.',
          'It also helps to decide your payment method in advance — registration itself only needs a number and a password, but you won\'t be able to place a real stake in any game category until a deposit clears, so lining up a supported payment method ahead of time shortens the gap between registering and actually playing.'
        ]
      }
    ],
    faqs: [
      { q: 'What do I need to register on BDG Win?', a: 'A valid mobile number and a password are all that is required; the number is verified with a one-time code.' },
      { q: 'How long does BDG Win registration take?', a: 'Registration typically takes under a minute once you receive and enter the verification code.' },
      { q: 'Can I change my registered number later?', a: 'Account detail changes are handled through Support — visit the Contact or Support page for help.' },
      { q: 'What should I do right after registering?', a: 'Add a payment method and make your first deposit to unlock full access to BDG Win game categories and rewards.' },
      { q: 'What happens if my verification code expires?', a: 'You can request a new one-time code if the original expires before you enter it.' },
      { q: 'Can I browse BDG Win before completing registration?', a: 'General information pages are visible without an account, but game categories and rewards require registering first.' }
    ],
    related: [
      { label: 'Login', url: '/login' },
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'Deposit Guide', url: '/deposit-guide' }
    ]
  },

  '/login': {
    metaTitle: 'BDG Win Login – Access Your Account',
    metaDescription:
      'Log in to your BDG Win account using your registered mobile number and password, with steps for recovery if needed.',
    keywords: ['BDG Win Login', 'BDG Win Account', 'BDG Login'],
    eyebrow: 'Login',
    h1: 'BDG Win Login',
    intro: 'Log in to BDG Win with your registered mobile number and password from any supported device.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Logging In',
        paragraphs: [
          'Enter your registered mobile number and password on the login form. The same credentials work across Android, iOS and desktop, so your wallet, rewards and VIP tier stay consistent regardless of which device you log in from.',
          'If you cannot remember your password, use the Forgot Password page to reset it through your registered number rather than creating a new account.'
        ],
        image: {
          src: '/images/screenshots/login-screen.webp',
          alt: 'BDG Win login screen with phone number and password fields',
          caption: 'The BDG Win login screen, using a registered mobile number and password, with phone or email login tabs.'
        }
      },
      {
        heading: 'Staying Logged In Safely',
        paragraphs: [
          'Most devices let you stay logged in between sessions, which is convenient on a personal phone or computer but worth avoiding on a shared or public device — logging out manually afterward keeps your wallet and account details from being visible to the next person who uses it.',
          'If you ever see login activity you don\'t recognize, changing your password immediately through the Forgot Password flow is the fastest way to secure the account, and Support can help review recent activity if anything looks unfamiliar.'
        ]
      }
    ],
    faqs: [
      { q: 'What do I use to log in to BDG Win?', a: 'Your registered mobile number and password are used to log in on any device.' },
      { q: 'Can I use the same BDG Win login on multiple devices?', a: 'Yes, the same credentials work across Android, iOS and desktop with your account staying in sync.' },
      { q: 'What if I forget my BDG Win password?', a: 'Use the Forgot Password page to reset your password through your registered mobile number.' },
      { q: 'Should I create a new account if I can\'t log in?', a: 'No, use password recovery first — creating a duplicate account will not carry over your existing wallet or rewards.' },
      { q: 'Is it safe to stay logged in on a shared device?', a: 'It\'s best to log out manually on any shared or public device rather than relying on it staying signed in.' },
      { q: 'What should I do if I see unfamiliar login activity?', a: 'Reset your password immediately through the Forgot Password page and contact Support if anything looks unfamiliar.' }
    ],
    related: [
      { label: 'Forgot Password', url: '/forgot-password' },
      { label: 'Register', url: '/register' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/forgot-password': {
    metaTitle: 'BDG Win Forgot Password – Reset Your Account Access',
    metaDescription:
      'Reset your BDG Win password using your registered mobile number if you cannot access your account.',
    keywords: ['BDG Win Forgot Password', 'BDG Win Login', 'BDG Login'],
    eyebrow: 'Account Recovery',
    h1: 'BDG Win Forgot Password',
    intro: 'Reset a forgotten BDG Win password using the mobile number linked to your account.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Resetting Your Password',
        paragraphs: [
          'Enter the mobile number registered to your BDG Win account and request a reset code. Confirm the code sent to your number, then choose a new password. Once set, log in normally using your number and the new password.',
          'If you no longer have access to your registered number, contact Support directly for identity-verified account recovery.'
        ]
      },
      {
        heading: 'Choosing a Password That Holds Up',
        paragraphs: [
          'Since your registered number and password are the only two things standing between anyone and your wallet, it\'s worth choosing a new password you haven\'t reused on another account, rather than a quick variation of the old one.',
          'If you reset your password because you suspect someone else had access, it\'s also worth reviewing your recent activity from the account dashboard afterward, just to confirm nothing changed while you were locked out.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I reset my BDG Win password?', a: 'Enter your registered mobile number, confirm the reset code sent to it, then choose a new password.' },
      { q: 'What if I lost access to my registered mobile number?', a: 'Contact BDG Win Support for identity-verified account recovery in that situation.' },
      { q: 'Will resetting my password affect my wallet or rewards?', a: 'No, resetting your password only changes account access — your wallet, rewards and VIP tier stay the same.' },
      { q: 'How long does a BDG Win password reset take?', a: 'The reset code arrives shortly after you request it, and the new password takes effect immediately after confirmation.' },
      { q: 'Should I reuse a password from another account?', a: 'It\'s best to choose a password you haven\'t used elsewhere, especially when resetting after a suspected access issue.' },
      { q: 'Should I check my account activity after a password reset?', a: 'It\'s a good habit, particularly if the reset was prompted by suspected unauthorized access.' }
    ],
    related: [
      { label: 'Login', url: '/login' },
      { label: 'Support', url: '/support' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/payment-methods': {
    metaTitle: 'BDG Win Payment Methods – Supported Deposit Options',
    metaDescription:
      'See the payment methods supported on BDG Win for deposits and withdrawals, and how to add one to your account.',
    keywords: ['BDG Win Payment Methods', 'BDG Win', 'BDG Payment Methods'],
    eyebrow: 'Payment Methods',
    h1: 'BDG Win Payment Methods',
    intro: 'BDG Win supports a range of verified payment methods for both deposits and withdrawals.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Supported Options',
        paragraphs: [
          'Bank transfers, UPI and select digital wallets are supported for BDG Win deposits and withdrawals, all routed through verified payment partners. Available options may vary slightly depending on your region and account verification status.',
          'Add a payment method from your account settings before making your first deposit — this same method is generally used for withdrawals as well, keeping transactions consistent and traceable.'
        ],
        image: {
          src: '/images/screenshots/wallet-split-view.webp',
          alt: 'BDG Win wallet summary showing main wallet and third-party wallet balances',
          caption: 'A BDG Win wallet summary showing the split between main wallet and third-party wallet balances, with quick links to deposit and withdrawal history.'
        }
      },
      {
        heading: 'Why Deposits and Withdrawals Use the Same Method',
        paragraphs: [
          'Routing both deposits and withdrawals through the same verified method is a security measure as much as a convenience one — it means funds always return to a source that\'s already been confirmed as belonging to you, rather than an arbitrary destination entered at withdrawal time.',
          'If your usual method stops being available for any reason, adding a new verified method is straightforward from account settings, though a newly added method typically needs its own verification before it can be used for withdrawals.'
        ]
      }
    ],
    faqs: [
      { q: 'What payment methods does BDG Win support?', a: 'BDG Win supports bank transfers, UPI and select digital wallets through verified payment partners.' },
      { q: 'Can I use a different method for withdrawals than deposits?', a: 'Withdrawals are generally processed through the same verified method used for deposits for security consistency.' },
      { q: 'Do all payment methods work in every region?', a: 'Available options can vary slightly by region and account verification status.' },
      { q: 'Is there a fee for BDG Win payment methods?', a: 'Any applicable fees are shown before you confirm a deposit or withdrawal request.' },
      { q: 'Why must deposits and withdrawals use the same method?', a: 'It keeps funds tied to a verified source, which is a security measure alongside a convenience.' },
      { q: 'Can I add a new payment method later?', a: 'Yes, from account settings, though a newly added method typically needs its own verification before withdrawals.' }
    ],
    related: [
      { label: 'Deposit Guide', url: '/deposit-guide' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/deposit-guide': {
    metaTitle: 'BDG Win Deposit Guide – How to Add Funds',
    metaDescription:
      'Step-by-step BDG Win deposit guide covering payment methods, confirmation times and troubleshooting tips.',
    keywords: ['BDG Win Deposit', 'BDG Win Deposit Guide', 'BDG Deposit'],
    eyebrow: 'Deposit Guide',
    h1: 'BDG Win Deposit Guide',
    intro: 'Adding funds to your BDG Win wallet takes a few steps through a verified payment method.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Making a Deposit',
        paragraphs: [
          'From your account dashboard, choose a payment method from the Payment Methods page, enter the deposit amount, and confirm through your chosen provider. Most deposits post to your BDG Win wallet within minutes once the payment provider confirms the transaction.',
          'If a deposit does not appear after a reasonable wait, check your payment provider\'s transaction history first, then contact Support with the transaction reference if it still has not posted.'
        ],
        image: {
          src: '/images/screenshots/deposit-channels.webp',
          alt: 'BDG Win deposit screen showing supported payment channels and quick-select amounts',
          caption: 'The BDG Win Deposit screen, showing supported channels alongside quick-select deposit amounts.'
        }
      },
      {
        heading: 'Avoiding the Most Common Deposit Delays',
        paragraphs: [
          'The two most common causes of a slow deposit are a mismatch between the account holder name on the payment method and your registered BDG Win details, and a temporary delay on the payment provider\'s side rather than anything on BDG Win\'s end — checking the provider\'s own transaction status first usually clarifies which one it is.',
          'Keeping your transaction reference handy when a deposit is delayed speeds up the process considerably if you do need to contact Support, since it lets the request be traced directly rather than searched for by amount and approximate time.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does a BDG Win deposit take to appear?', a: 'Most deposits post to your wallet within minutes once the payment provider confirms the transaction.' },
      { q: 'What should I do if my deposit hasn\'t appeared?', a: 'Check your payment provider\'s transaction history first, then contact Support with your transaction reference.' },
      { q: 'Is there a minimum deposit amount on BDG Win?', a: 'Minimum deposit amounts vary by payment method and are shown before you confirm the transaction.' },
      { q: 'Can I deposit using any payment method listed?', a: 'Yes, any method listed on the Payment Methods page can be used, subject to your account verification status.' },
      { q: 'What\'s the most common reason a BDG Win deposit is delayed?', a: 'A name mismatch between the payment method and your registered details, or a delay on the payment provider\'s side.' },
      { q: 'What information should I have ready if I contact Support about a deposit?', a: 'Your transaction reference lets Support trace the request directly rather than searching by amount and time.' }
    ],
    related: [
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' },
      { label: 'Support', url: '/support' }
    ]
  },

  '/withdrawal-guide': {
    metaTitle: 'BDG Win Withdrawal Guide – How Payouts Are Processed',
    metaDescription:
      'How BDG Win withdrawals are processed, typical processing times and how VIP tier affects payout speed.',
    keywords: ['BDG Win Withdrawal', 'BDG Win Withdrawal Guide', 'BDG Withdrawal'],
    eyebrow: 'Withdrawal Guide',
    h1: 'BDG Win Withdrawal Guide',
    intro: 'Withdrawals on BDG Win are processed through the same verified method used for your deposits.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Requesting a Withdrawal',
        paragraphs: [
          'From your wallet, request a withdrawal to your verified payment method and confirm the amount. Most requests are reviewed and processed the same day, though processing speed can vary based on your account verification status and current VIP tier.',
          'Higher BDG Win VIP tiers are typically prioritized in the withdrawal queue, resulting in faster payout confirmation compared to base-tier accounts.'
        ],
        image: {
          src: '/images/screenshots/withdraw-screen.webp',
          alt: 'BDG Win withdraw screen showing available balance and a saved payout method',
          caption: 'The BDG Win Withdraw screen, showing available balance, supported payout methods and a saved withdrawal address.'
        }
      },
      {
        heading: 'Habits That Keep Withdrawals Fast',
        paragraphs: [
          'Keeping your payment method\'s verification current is the single biggest factor in withdrawal speed — a lapsed or mismatched verification is the most common reason a request gets pulled into manual review instead of processing automatically.',
          'Double-checking the withdrawal amount before confirming also avoids a common slowdown: requests that need to be corrected and resubmitted simply take longer than one confirmed correctly on the first attempt.'
        ]
      }
    ],
    faqs: [
      { q: 'How long do BDG Win withdrawals take?', a: 'Most verified withdrawal requests are processed the same day, though timing can vary by verification status and VIP tier.' },
      { q: 'Does VIP tier affect withdrawal speed?', a: 'Yes, higher BDG Win VIP tiers are typically prioritized in the withdrawal processing queue.' },
      { q: 'Can I withdraw to a different method than I deposited with?', a: 'Withdrawals generally go through the same verified method used for deposits for security consistency.' },
      { q: 'What if my BDG Win withdrawal is delayed?', a: 'Contact Support with your request details if a withdrawal takes noticeably longer than the usual same-day window.' },
      { q: 'What most commonly sends a withdrawal to manual review?', a: 'A lapsed or mismatched payment method verification is the most common cause.' },
      { q: 'Does double-checking my withdrawal amount matter?', a: 'Yes, requests that need correcting and resubmitting take longer than ones confirmed correctly the first time.' }
    ],
    related: [
      { label: 'Deposit Guide', url: '/deposit-guide' },
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/security': {
    metaTitle: 'BDG Win Security – How Your Account Is Protected',
    metaDescription:
      'An overview of BDG Win security measures, including account protection, encrypted sessions and payment verification.',
    keywords: ['BDG Win Security', 'BDG Win'],
    eyebrow: 'Security',
    h1: 'BDG Win Security',
    intro: 'BDG Win applies account-level and platform-level protections across every game category.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Account Protection',
        paragraphs: [
          'Every BDG Win session is encrypted, and login access requires your registered mobile number alongside your password. Withdrawal requests are checked against your verified payment method to reduce the risk of unauthorized transfers.',
          'We recommend using a unique password for your BDG Win account and never sharing your login details, OTP codes or password with anyone claiming to be BDG Win support — official support will never ask for your password.'
        ],
        image: {
          src: '/images/screenshots/account-wallet-overview.webp',
          alt: 'BDG Win account overview showing UID, VIP tier, last login timestamp and wallet balance',
          caption: 'A BDG Win account overview showing your UID, VIP tier and last login timestamp alongside your wallet balance — everything tied to one encrypted, password-protected session.'
        }
      },
      {
        heading: 'Recognizing and Avoiding Common Scams',
        paragraphs: [
          'Most account compromises don\'t come from a security flaw in the platform itself — they come from a message or call claiming to be BDG Win support asking for a password, OTP code or a "verification link" outside the app. Genuine BDG Win communication never requires you to share these details to fix an account issue.',
          'If you receive an unexpected OTP code you didn\'t request, treat it as a sign someone else has your registered number and attempted to log in — change your password immediately rather than ignoring it.'
        ]
      }
    ],
    faqs: [
      { q: 'How does BDG Win protect my account?', a: 'Encrypted sessions, password-protected login and withdrawal checks against your verified payment method all help protect your BDG Win account.' },
      { q: 'Will BDG Win support ever ask for my password?', a: 'No, official BDG Win support will never ask for your password or OTP codes.' },
      { q: 'What should I do if I suspect unauthorized access?', a: 'Reset your password immediately through the Forgot Password page and contact Support.' },
      { q: 'Does BDG Win security relate to fair play?', a: 'Security covers account protection, while our Fair Play page covers how game outcomes themselves are verified.' },
      { q: 'What should I do if I get an OTP code I didn\'t request?', a: 'Treat it as a sign someone attempted to log in and change your password immediately.' },
      { q: 'How can I tell a scam message from real BDG Win support?', a: 'Genuine support will never ask you to share your password, OTP code or click an outside verification link.' }
    ],
    related: [
      { label: 'Fair Play', url: '/fair-play' },
      { label: 'Responsible Gaming', url: '/responsible-gaming' },
      { label: 'Forgot Password', url: '/forgot-password' }
    ]
  },

  '/responsible-gaming': {
    metaTitle: 'BDG Win Responsible Gaming – Play Within Your Limits',
    metaDescription:
      'BDG Win responsible gaming guidance, including setting deposit and time limits and recognizing when to take a break.',
    keywords: ['BDG Win Responsible Gaming', 'BDG Win'],
    eyebrow: 'Responsible Gaming',
    h1: 'BDG Win Responsible Gaming',
    intro: 'BDG Win encourages players to set limits and treat gaming as entertainment, not income.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Setting Limits',
        paragraphs: [
          'Your BDG Win account settings let you set personal deposit limits and session reminders, helping you keep track of both spending and time spent playing. We recommend setting these limits before you start playing rather than after a losing session.',
          'Players must be 18 years or older to register on BDG Win. If gaming starts to feel like an obligation rather than entertainment, consider taking a break using the cooling-off options in your account settings.'
        ]
      },
      {
        heading: 'Signs Worth Paying Attention To',
        paragraphs: [
          'It\'s easier to notice a shift in your own habits than to wait for a clear warning sign — playing specifically to recover a previous loss, spending noticeably longer than planned on a regular basis, or feeling anxious about checking your balance are all worth treating as a cue to set a limit rather than waiting for things to get harder to manage.',
          'None of the tools on this page require explaining yourself to anyone — deposit limits, session reminders and cooling-off periods are all set directly from account settings, privately and reversibly, for exactly the reason that acting early should be easy.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I set a deposit limit on BDG Win?', a: 'Deposit limits can be set from your account settings, applied before your next deposit is processed.' },
      { q: 'What is the minimum age to use BDG Win?', a: 'Players must be 18 years or older to register and play on BDG Win.' },
      { q: 'Can I take a break from BDG Win temporarily?', a: 'Yes, cooling-off options are available in your account settings to pause activity for a set period.' },
      { q: 'Where can I get help with gaming habits?', a: 'Contact Support for guidance, or use the account limit tools described on this page as a first step.' },
      { q: 'What are early signs worth paying attention to?', a: 'Playing to recover a loss, spending longer than planned regularly, or feeling anxious about your balance are worth treating as a cue to set a limit.' },
      { q: 'Do I need to explain myself to set a limit or cooling-off period?', a: 'No, these tools are set privately and reversibly from account settings without needing to explain anything.' }
    ],
    related: [
      { label: 'Security', url: '/security' },
      { label: 'Fair Play', url: '/fair-play' },
      { label: 'Support', url: '/support' }
    ]
  },

  '/fair-play': {
    metaTitle: 'BDG Win Fair Play – How Game Outcomes Are Verified',
    metaDescription:
      'Learn how BDG Win ensures fair play across casino, slot, lottery and crash games using certified outcome generation.',
    keywords: ['BDG Win Fair Play', 'BDG Win'],
    eyebrow: 'Fair Play',
    h1: 'BDG Win Fair Play',
    intro: 'BDG Win uses certified random outcome generation to keep game results fair and independently verifiable.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How Outcomes Are Generated',
        paragraphs: [
          'Classic casino formats, slots, lottery draws and Color Prediction rounds on BDG Win use certified random number generation, meaning outcomes are not influenced by previous rounds or by individual account history. Live dealer tables display outcomes in real time, verifiable as they happen.',
          'Payout ratios and odds are published on each game before you play, so you always know the terms of a round before placing a stake.'
        ]
      },
      {
        heading: 'Why Independence Between Rounds Matters',
        paragraphs: [
          'A common misconception in fast-cycle formats like Color Prediction or crash games is that a run of similar outcomes makes a different one "due" next. Certified random generation specifically rules this out — each round is generated independently, so no amount of round history changes the odds of what comes next.',
          'This is also why the same fairness standard applies whether a round settles in under a minute or runs on a scheduled draw: the generation method is what\'s certified, not the speed of the format built around it.'
        ]
      }
    ],
    faqs: [
      { q: 'How does BDG Win ensure fair game outcomes?', a: 'Certified random number generation is used across classic games, slots, lottery and Color Prediction rounds.' },
      { q: 'Are live BDG Win casino tables also fair?', a: 'Yes, live dealer tables show outcomes in real time as they happen, making results independently verifiable.' },
      { q: 'Can previous rounds affect future BDG Win outcomes?', a: 'No, certified random generation means each round is independent of previous results.' },
      { q: 'Where are BDG Win payout ratios shown?', a: 'Payout ratios and odds are published on each individual game before you place a stake.' },
      { q: 'Does a streak of similar outcomes make a different one more likely next?', a: 'No, certified random generation means a streak has no bearing on the next round\'s outcome.' },
      { q: 'Does fairness certification differ between fast and scheduled game formats?', a: 'No, the same certified generation standard applies regardless of how quickly a format settles.' }
    ],
    related: [
      { label: 'Security', url: '/security' },
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Crash Games', url: '/games/crash' }
    ]
  },

  '/privacy-policy': {
    metaTitle: 'BDG Win Privacy Policy',
    metaDescription:
      'Read the BDG Win privacy policy covering what account data is collected, how it is used and how it is protected.',
    keywords: ['BDG Win Privacy Policy'],
    eyebrow: 'Legal',
    h1: 'BDG Win Privacy Policy',
    intro: 'This policy explains what information BDG Win collects and how it is used across your account.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Information We Collect',
        paragraphs: [
          'When you register for BDG Win, we collect your mobile number, account credentials and, once you make a transaction, verified payment details needed to process deposits and withdrawals. We also record gameplay activity to calculate rewards, VIP tier and referral earnings.'
        ]
      },
      {
        heading: 'How Information Is Used',
        paragraphs: [
          'Account data is used to operate your BDG Win wallet, apply rewards correctly, verify withdrawal requests, and respond to support inquiries. We do not sell personal account information to third parties. Payment details are shared only with verified payment partners required to complete a transaction.'
        ]
      },
      {
        heading: 'Your Choices',
        paragraphs: [
          'You can request details about the data associated with your account, or request account closure, by contacting Support. Some transaction records may be retained as required for financial and regulatory record-keeping even after account closure.'
        ]
      },
      {
        heading: 'How Long We Retain Your Information',
        paragraphs: [
          'Active account data is kept for as long as your account remains open, so your rewards history, VIP progress and referral records stay accurate and available to you. After a closure request, most account data is removed within a reasonable period, while transaction records required for financial and regulatory record-keeping are retained separately for the period required by applicable rules.',
          'If you have questions about what specific data is retained after closure, Support can provide details relevant to your account on request.'
        ]
      }
    ],
    faqs: [
      { q: 'What information does BDG Win collect at registration?', a: 'Your mobile number and account credentials are collected at registration; verified payment details are added once you transact.' },
      { q: 'Does BDG Win sell my data to third parties?', a: 'No, personal account information is not sold to third parties.' },
      { q: 'Who sees my payment details?', a: 'Payment details are shared only with verified payment partners required to process your transaction.' },
      { q: 'Can I request my BDG Win account data or closure?', a: 'Yes, contact Support to request account data details or closure, subject to standard record-keeping requirements.' },
      { q: 'How long is my data kept after I close my account?', a: 'Most account data is removed within a reasonable period after closure, while certain transaction records are retained separately as required by regulation.' },
      { q: 'Can I ask what specific data BDG Win holds on my account?', a: 'Yes, contact Support to request details about the data associated with your account.' }
    ],
    related: [
      { label: 'Terms & Conditions', url: '/terms' },
      { label: 'Cookies Policy', url: '/cookies' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/terms': {
    metaTitle: 'BDG Win Terms & Conditions',
    metaDescription:
      'Read the BDG Win terms and conditions covering account eligibility, acceptable use, rewards and withdrawal rules.',
    keywords: ['BDG Win Terms', 'BDG Win Terms and Conditions'],
    eyebrow: 'Legal',
    h1: 'BDG Win Terms & Conditions',
    intro: 'These terms govern your use of the BDG Win platform, account and associated reward programs.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Account Eligibility',
        paragraphs: [
          'You must be at least 18 years old and provide accurate registration information to hold a BDG Win account. One account is permitted per individual; duplicate accounts may be restricted or merged at our discretion.'
        ]
      },
      {
        heading: 'Acceptable Use',
        paragraphs: [
          'BDG Win accounts must be used personally and not on behalf of a third party without prior approval, such as through the Agent Program. Any attempt to exploit reward systems, referral tracking or game mechanics outside intended use may result in account review or restriction.'
        ]
      },
      {
        heading: 'Rewards, Withdrawals and Changes',
        paragraphs: [
          'Reward eligibility and withdrawal processing follow the terms described on the Rewards and Withdrawal Guide pages. BDG Win may update these terms periodically; continued use of the account after changes take effect constitutes acceptance of the updated terms.'
        ]
      },
      {
        heading: 'Suspension and Account Review',
        paragraphs: [
          'BDG Win may review or temporarily restrict an account where activity appears to conflict with these terms — including suspected duplicate accounts, reward system exploitation, or payment verification issues — while the matter is looked into. Where possible, affected players are notified through the account or registered contact details.',
          'A restriction is not automatically permanent; resolving the underlying issue, such as completing verification or clarifying account history through Support, is generally the path back to normal account access.'
        ]
      }
    ],
    faqs: [
      { q: 'What is the minimum age to hold a BDG Win account?', a: 'You must be at least 18 years old to register and hold a BDG Win account.' },
      { q: 'Can I have more than one BDG Win account?', a: 'One account is permitted per individual; duplicates may be restricted or merged.' },
      { q: 'Can someone else use my BDG Win account for them?', a: 'Accounts should be used personally, except under approved arrangements such as the Agent Program.' },
      { q: 'How will I know if terms change?', a: 'Updates are reflected on this page, and continued use after changes take effect means you accept the updated terms.' },
      { q: 'Why might my BDG Win account be restricted?', a: 'Accounts may be reviewed or restricted for suspected duplicate registration, reward exploitation, or payment verification issues.' },
      { q: 'Is an account restriction permanent?', a: 'Not necessarily — resolving the underlying issue through Support is generally the path back to normal access.' }
    ],
    related: [
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Responsible Gaming', url: '/responsible-gaming' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/cookies': {
    metaTitle: 'BDG Win Cookies Policy',
    metaDescription:
      'How BDG Win uses cookies to keep you logged in, remember preferences and understand site usage.',
    keywords: ['BDG Win Cookies Policy'],
    eyebrow: 'Legal',
    h1: 'BDG Win Cookies Policy',
    intro: 'BDG Win uses a small number of cookies to keep sessions secure and remember basic preferences.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Why We Use Cookies',
        paragraphs: [
          'Session cookies keep you logged in to BDG Win as you move between pages, without needing to re-enter your credentials on every page load. A small set of preference cookies remember display settings so the site behaves consistently on repeat visits.',
          'BDG Win does not use cookies to sell your browsing activity to third-party advertisers.'
        ]
      },
      {
        heading: 'Managing Your Cookie Preferences',
        paragraphs: [
          'Because BDG Win\'s cookie usage is limited to session management and basic preferences rather than advertising trackers, there\'s little practical difference in your experience whether cookies are managed through your browser settings or left at default — the main effect of blocking session cookies specifically is being logged out between page loads.',
          'Most browsers let you review and clear cookies on a per-site basis rather than all at once, which is a reasonable way to reset your BDG Win session specifically without affecting other sites you use.'
        ]
      }
    ],
    faqs: [
      { q: 'Does BDG Win use cookies for advertising?', a: 'No, cookies on BDG Win are used for session management and basic preferences, not for third-party advertising sales.' },
      { q: 'Can I use BDG Win without cookies enabled?', a: 'Session cookies are required to stay logged in; disabling them will likely log you out between pages.' },
      { q: 'What type of cookies does BDG Win set?', a: 'Primarily session cookies for login state and lightweight preference cookies for display settings.' },
      { q: 'How do I clear BDG Win cookies?', a: 'Cookies can be cleared through your browser\'s privacy or history settings at any time.' },
      { q: 'Can I clear cookies for BDG Win specifically without affecting other sites?', a: 'Yes, most browsers allow clearing cookies on a per-site basis.' },
      { q: 'What happens if I block session cookies on BDG Win?', a: 'You will likely be logged out between pages, since session cookies are what keep you signed in as you navigate.' }
    ],
    related: [
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Terms & Conditions', url: '/terms' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/help-center': {
    metaTitle: 'BDG Win Help Center – Guides and Answers',
    metaDescription:
      'The BDG Win Help Center collects guides on registration, deposits, withdrawals, rewards and account security.',
    keywords: ['BDG Win Help Center', 'BDG Win Support'],
    eyebrow: 'Help Center',
    h1: 'BDG Win Help Center',
    intro: 'The Help Center brings together BDG Win guides on the topics players ask about most.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Popular Topics',
        paragraphs: [
          'Start with the Register, Login and Deposit Guide pages if you are setting up your account for the first time. For payout questions, the Withdrawal Guide and Payment Methods pages cover processing details, while the Security and Fair Play pages explain how BDG Win protects accounts and verifies game outcomes.',
          'If a guide does not answer your question, reach the support team directly through the Contact page.'
        ],
        image: {
          src: '/images/screenshots/self-service-center.webp',
          alt: 'BDG Win Self Service Center listing common self-help topics like deposit and withdrawal issues',
          caption: 'BDG Win\'s Self Service Center, listing common self-help topics such as deposit issues, IFSC modification and withdrawal problems.'
        }
      },
      {
        heading: 'Finding the Right Guide Quickly',
        paragraphs: [
          'Most Help Center visits fall into one of three categories: getting an account set up, understanding how money moves in and out of the wallet, or understanding how a specific game category works. Grouping guides this way is intentional — it\'s usually faster to recognize which of the three a question falls under than to search by exact wording.',
          'If a question spans more than one guide, such as how a reward interacts with a withdrawal, the related links at the bottom of each guide are the fastest way to move between connected topics without starting a new search.'
        ]
      }
    ],
    faqs: [
      { q: 'Where do I start if I am new to BDG Win?', a: 'Begin with the Register and Deposit Guide pages, then explore game categories once your account is funded.' },
      { q: 'Where can I find withdrawal information?', a: 'The Withdrawal Guide and Payment Methods pages cover processing times and supported options.' },
      { q: 'What if my question isn\'t covered in the Help Center?', a: 'Contact the BDG Win support team directly through the Contact page.' },
      { q: 'Does the Help Center cover account security?', a: 'Yes, the Security and Fair Play pages explain account protection and how game outcomes are verified.' },
      { q: 'How are Help Center guides organized?', a: 'Guides are grouped around account setup, payments, and individual game categories, since most questions fall into one of those areas.' },
      { q: 'What if my question touches more than one guide?', a: 'Use the related links at the bottom of each guide to move between connected topics quickly.' }
    ],
    related: [
      { label: 'Support', url: '/support' },
      { label: 'FAQs', url: '/faqs' },
      { label: 'Contact', url: '/contact' }
    ]
  },

  '/support': {
    metaTitle: 'BDG Win Support – Get Help With Your Account',
    metaDescription:
      'Reach BDG Win player support for help with account access, deposits, withdrawals or general questions.',
    keywords: ['BDG Win Support'],
    eyebrow: 'Support',
    h1: 'BDG Win Support',
    intro: 'BDG Win support is available around the clock through live chat and email.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How to Reach Support',
        paragraphs: [
          'For account access issues, deposit or withdrawal questions, or general platform questions, reach the BDG Win support team through the Contact page. Include your registered mobile number and a brief description of the issue to speed up the response.',
          'For self-service answers to common questions, check the Help Center and FAQs pages first — many account and payment questions are answered there without needing to wait for a response.'
        ]
      },
      {
        heading: 'What Makes a Support Request Faster to Resolve',
        paragraphs: [
          'Requests that include specifics — a transaction reference for a payment issue, the approximate time an error occurred, or which device and platform you were using — are generally resolved faster than a general description, since the support team doesn\'t need a follow-up message just to gather basic details.',
          'For account access or payment issues specifically, having your registered mobile number ready from the start avoids an extra back-and-forth step before the actual issue can even be looked into.'
        ]
      }
    ],
    faqs: [
      { q: 'Is BDG Win support available 24/7?', a: 'Yes, BDG Win support is reachable around the clock through live chat and email.' },
      { q: 'What information should I include when contacting support?', a: 'Your registered mobile number and a brief description of the issue help speed up the response.' },
      { q: 'Where can I find quick answers without contacting support?', a: 'The Help Center and FAQs pages cover common account, deposit and withdrawal questions.' },
      { q: 'How do I contact BDG Win support directly?', a: 'Use the Contact page to reach the support team by your preferred channel.' },
      { q: 'What details make a support request resolve faster?', a: 'Including a transaction reference, approximate time of the issue, and device or platform used helps avoid follow-up questions.' },
      { q: 'Do VIP tiers get a different support channel?', a: 'Yes, higher VIP tiers typically get a dedicated support contact instead of the general queue.' }
    ],
    related: [
      { label: 'Help Center', url: '/help-center' },
      { label: 'FAQs', url: '/faqs' },
      { label: 'Contact', url: '/contact' }
    ]
  },

  '/contact': {
    metaTitle: 'Contact BDG Win – Reach Our Support Team',
    metaDescription:
      'Contact BDG Win for player support, affiliate or agent program applications, or general platform questions.',
    keywords: ['BDG Win Contact'],
    eyebrow: 'Contact',
    h1: 'Contact BDG Win',
    intro: 'Reach BDG Win for account support, partnership applications, or general questions about the platform.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Ways to Reach Us',
        paragraphs: [
          `Player support requests, affiliate or agent program applications, and general platform questions can all be submitted through this page. Email us directly at ${'support@bdgwin.ai'} with your registered mobile number and a description of your question, and our team will follow up as soon as possible.`
        ]
      },
      {
        heading: 'Choosing the Right Reason for Your Message',
        paragraphs: [
          'A player support question, a partnership application and a general platform question all move through the same inbox but are prioritized differently — account-access and payment issues are treated as time-sensitive, while partnership applications and general questions are reviewed in the order received.',
          'Mentioning which category your message falls into up front, alongside your registered mobile number for account-related questions, helps route it to the right response faster.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I contact BDG Win support?', a: 'Email support@bdgwin.ai with your registered mobile number and a description of your question.' },
      { q: 'Can I apply for the affiliate or agent program through this page?', a: 'Yes, partnership applications for the Affiliate and Agent Programs are submitted through the same contact channel.' },
      { q: 'How quickly does BDG Win respond?', a: 'Our team follows up as soon as possible; urgent account issues are prioritized.' },
      { q: 'Is there a self-service option before contacting support?', a: 'Yes, check the Help Center and FAQs pages for answers to common questions first.' },
      { q: 'Are all contact messages treated with the same priority?', a: 'No, account-access and payment issues are treated as time-sensitive, while partnership and general questions are reviewed in order received.' },
      { q: 'Should I mention what my message is about upfront?', a: 'Yes, stating your category and registered mobile number for account questions helps route your message faster.' }
    ],
    related: [
      { label: 'Support', url: '/support' },
      { label: 'Help Center', url: '/help-center' },
      { label: 'Affiliate Program', url: '/affiliate-program' }
    ]
  },

  '/faqs': {
    metaTitle: 'BDG Win FAQs – Frequently Asked Questions',
    metaDescription:
      'Answers to the most common BDG Win questions covering registration, deposits, withdrawals, rewards and security.',
    keywords: ['BDG Win FAQs', 'BDG Win FAQ'],
    eyebrow: 'FAQs',
    h1: 'BDG Win Frequently Asked Questions',
    intro: 'Common questions about registering, playing and managing your BDG Win account in one place.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Before You Start',
        paragraphs: [
          'This page collects the questions asked most often across registration, payments, rewards and security. For a deeper walkthrough of any topic, the linked guides below cover each process step by step.'
        ]
      },
      {
        heading: 'How to Use This Page',
        paragraphs: [
          'Each answer here is intentionally short — the goal is to confirm the basic shape of an answer quickly, not replace the full guide on a topic. Where a question needs more detail than fits in a short answer, it links through to the page built specifically around that topic.',
          'If a question you have isn\'t listed here, it\'s worth checking the Help Center first, since it\'s organized by topic area rather than by individual question and may cover something more specific than what\'s collected on this page.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I register on BDG Win?', a: 'Enter your mobile number, verify with the OTP sent to your device, and set a password — full steps are on the Register page.' },
      { q: 'How do I download the BDG Win app?', a: 'Android users install the APK, iOS users follow a guided browser installation, and desktop needs no download — see the Download page.' },
      { q: 'How long do withdrawals take?', a: 'Most verified BDG Win withdrawal requests are processed the same day, detailed on the Withdrawal Guide page.' },
      { q: 'What is BDG Win Color Prediction?', a: 'A fast-settling round type on the Lottery Games page where players predict an outcome color, resolving in under a minute.' },
      { q: 'How does the BDG Win referral program work?', a: 'You earn a share of your invited friends\' activity through your unique referral link — see the Referral Program page.' },
      { q: 'How do I join the BDG Win VIP program?', a: 'VIP tiers unlock automatically as your account activity grows — see the VIP Program page for how tiers work.' },
      { q: 'Is BDG Win safe to use?', a: 'BDG Win uses encrypted sessions, verified payment partners and certified fair play standards — see the Security and Fair Play pages for details.' },
      { q: 'What should I do if I forget my BDG Win password?', a: 'Use the Forgot Password page to reset it through your registered mobile number rather than creating a new account.' },
      { q: 'Can I set limits on my BDG Win account?', a: 'Yes, deposit limits and cooling-off options are available from account settings — see the Responsible Gaming page.' }
    ],
    related: [
      { label: 'Help Center', url: '/help-center' },
      { label: 'Support', url: '/support' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/news': {
    metaTitle: 'BDG Win News – Platform Updates',
    metaDescription:
      'Read the latest BDG Win news covering platform updates, new game releases and policy changes.',
    keywords: ['BDG Win News'],
    eyebrow: 'News',
    h1: 'BDG Win News',
    intro: 'Platform-level news covering updates, releases and policy changes across BDG Win.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What You Will Find Here',
        paragraphs: [
          'This page tracks broader platform news — payment method updates, new game category launches and policy changes — separate from the shorter, more frequent notices on our Announcements page. For educational articles and strategy content, visit the Blog.'
        ]
      },
      {
        heading: 'Why We Separate News From Announcements and the Blog',
        paragraphs: [
          'Splitting updates across three pages is intentional rather than redundant: News is for changes that affect how the platform works, Announcements is for short-lived operational notices like maintenance windows, and the Blog is for longer explainer content that doesn\'t change over time the way a news item does.',
          'If you\'re only interested in substantive changes — a new payment method, a new game category, or a policy update — this page is the fastest way to catch up without wading through day-to-day operational notices.'
        ]
      }
    ],
    faqs: [
      { q: 'How is News different from Announcements?', a: 'News covers broader platform updates and releases, while Announcements covers shorter, more frequent operational notices.' },
      { q: 'Does BDG Win News cover new game releases?', a: 'Yes, major new game category launches are covered here alongside other platform updates.' },
      { q: 'Where do I find gaming strategy content instead?', a: 'Educational and strategy articles are published on the BDG Win Blog.' },
      { q: 'How often is this page updated?', a: 'It updates as significant platform changes occur, rather than on a fixed schedule.' },
      { q: 'Why does BDG Win separate News, Announcements and the Blog?', a: 'Each serves a different purpose — substantive changes, short-lived operational notices, and longer explainer content, respectively.' },
      { q: 'Is News the fastest way to catch up on major changes?', a: 'Yes, since it focuses on substantive updates rather than day-to-day operational notices.' }
    ],
    related: [
      { label: 'Announcements', url: '/announcements' },
      { label: 'Blog', url: '/blog' },
      { label: 'Leaderboard', url: '/leaderboard' }
    ]
  },

  '/leaderboard': {
    metaTitle: 'BDG Win Leaderboard – Top Players This Period',
    metaDescription:
      'See the current BDG Win leaderboard ranking top players by activity and winnings across game categories.',
    keywords: ['BDG Win Leaderboard'],
    eyebrow: 'Leaderboard',
    h1: 'BDG Win Leaderboard',
    intro: 'The BDG Win leaderboard ranks top players by activity across all game categories for the current period.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How Ranking Works',
        paragraphs: [
          'Leaderboard position is based on combined activity and winnings across BDG Win game categories during the current ranking period. Standings reset at the start of each new period, giving every player a fresh chance to climb the rankings.',
          'Top-ranked players may be featured in seasonal promotions in addition to the standard rewards earned through normal play.'
        ]
      },
      {
        heading: 'Climbing the Rankings Over a Period',
        paragraphs: [
          'Because ranking combines activity and winnings across every category rather than just one, there\'s no single "best" category for moving up — steady play across a favorite category counts the same as the same volume spread across several. What matters is the combined total by the time the period closes.',
          'Since standings reset at the start of each new period, a slow start doesn\'t rule out a strong finish — many players find their position shifts the most in the final stretch of a ranking period as combined totals catch up.'
        ]
      }
    ],
    faqs: [
      { q: 'How is BDG Win leaderboard position calculated?', a: 'Ranking is based on combined activity and winnings across all game categories during the current period.' },
      { q: 'Does the leaderboard reset?', a: 'Yes, standings reset at the start of each new ranking period.' },
      { q: 'Do top leaderboard players get extra rewards?', a: 'Top-ranked players may be featured in seasonal promotions alongside standard reward earnings.' },
      { q: 'Which game categories count toward the leaderboard?', a: 'Activity across all BDG Win game categories contributes to your leaderboard position.' },
      { q: 'Is one game category better than another for climbing the leaderboard?', a: 'No, combined activity and winnings across every category count equally toward your position.' },
      { q: 'Can a slow start still lead to a strong leaderboard finish?', a: 'Yes, since ranking reviews the combined total for the full period rather than an early pace.' }
    ],
    related: [
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'VIP Program', url: '/vip' },
      { label: 'Promotions', url: '/promotions' }
    ]
  },

  '/gift-code': {
    metaTitle: 'BDG Win Gift Code – Redeem Bonus Codes',
    metaDescription:
      'How to redeem a BDG Win gift code for bonus credit, and where new codes are announced.',
    keywords: ['BDG Win Gift Code', 'BDG Win Bonus', 'BDG Bonus'],
    eyebrow: 'Gift Codes',
    h1: 'BDG Win Gift Code',
    intro: 'Redeem BDG Win gift codes from your account dashboard for bonus wallet credit.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Redeeming a Gift Code',
        paragraphs: [
          'Enter a valid gift code in the redemption field on your account dashboard. Codes are typically time-limited and single-use per account, crediting bonus balance directly to your wallet once accepted.',
          'New gift codes are announced through the Announcements page and official BDG Win social channels — always confirm a code through an official source before entering it.'
        ]
      },
      {
        heading: 'Avoiding Invalid or Unofficial Codes',
        paragraphs: [
          'Because gift codes are simple to share, unofficial versions and expired codes circulate more than official ones on any given day — the only way to confirm a code is genuinely current is checking it against the Announcements page or an official BDG Win social channel directly, rather than a forwarded message or third-party post.',
          'If a code doesn\'t redeem, the most common reasons are that it has already expired, already been used on that account, or was never an official code to begin with — checking the Announcements page resolves most of these quickly.'
        ]
      }
    ],
    faqs: [
      { q: 'Where do I redeem a BDG Win gift code?', a: 'Gift codes are entered in the redemption field on your account dashboard.' },
      { q: 'Do BDG Win gift codes expire?', a: 'Yes, most gift codes are time-limited and stop working after their listed expiry.' },
      { q: 'Can I use the same gift code twice?', a: 'No, gift codes are generally single-use per account.' },
      { q: 'Where are new gift codes announced?', a: 'New codes are posted on the Announcements page and official BDG Win social channels.' },
      { q: 'Why might a gift code fail to redeem?', a: 'The most common reasons are an expired code, a code already used on that account, or a code that was never official.' },
      { q: 'How do I confirm a gift code is genuinely official?', a: 'Check it against the Announcements page or an official BDG Win social channel before entering it.' }
    ],
    related: [
      { label: 'Announcements', url: '/announcements' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Rewards', url: '/rewards' }
    ]
  },

  '/announcements': {
    metaTitle: 'BDG Win Announcements – Latest Notices',
    metaDescription:
      'Short, frequent BDG Win announcements covering maintenance windows, new codes and quick policy notices.',
    keywords: ['BDG Win Announcements'],
    eyebrow: 'Announcements',
    h1: 'BDG Win Announcements',
    intro: 'Short-form notices covering day-to-day BDG Win updates, separate from full News articles.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Gets Posted Here',
        paragraphs: [
          'Maintenance windows, new gift code drops, and quick policy notices are posted here as they happen. For longer platform updates and feature launches, check the News page instead.'
        ]
      },
      {
        heading: 'Making This Page Part of Your Routine',
        paragraphs: [
          'Because notices here are short-lived by nature — a maintenance window closes, a gift code expires — checking in periodically catches more than searching after the fact once something\'s already changed. Pairing this page with the Gift Code page is a reasonable habit if bonus codes specifically are what you\'re watching for.',
          'If a notice affects account access directly, such as a maintenance window, it\'s generally posted here with enough lead time to plan a session around it rather than being a surprise mid-play.'
        ]
      }
    ],
    faqs: [
      { q: 'What kind of updates appear in Announcements?', a: 'Maintenance windows, new gift code drops and quick policy notices are posted here.' },
      { q: 'How is Announcements different from News?', a: 'Announcements covers short, frequent notices, while News covers broader platform updates and releases.' },
      { q: 'Are gift codes always announced here first?', a: 'New gift codes are typically posted here alongside official social channels.' },
      { q: 'How often is this page updated?', a: 'It updates frequently, as short notices arise, more often than the News page.' },
      { q: 'Will I get advance notice of a maintenance window?', a: 'Maintenance windows are generally posted here with enough lead time to plan around them.' },
      { q: 'Should I check this page regularly if I want gift codes?', a: 'Yes, pairing this page with the Gift Code page is a reasonable habit for catching new codes.' }
    ],
    related: [
      { label: 'News', url: '/news' },
      { label: 'Gift Codes', url: '/gift-code' },
      { label: 'Blog', url: '/blog' }
    ]
  },

  '/sitemap': {
    metaTitle: 'BDG Win Site Map – Full Page Directory',
    metaDescription:
      'A complete directory of every BDG Win page, organized by games, rewards, account and support sections.',
    keywords: ['BDG Win Site Map'],
    eyebrow: 'Site Map',
    h1: 'BDG Win Site Map',
    intro: 'A full directory of BDG Win pages, organized by section for quick navigation.',
    breadcrumbTrail: [],
    sections: [],
    faqs: [
      { q: 'What is this page for?', a: 'The Site Map lists every BDG Win page in one place, organized by section, to help you find any page quickly.' },
      { q: 'Is this different from sitemap.xml?', a: 'Yes, this is a human-readable directory; sitemap.xml is the machine-readable version used by search engines.' },
      { q: 'Where do I find game category pages?', a: 'All game category pages are grouped together in the Games section of this directory.' },
      { q: 'Where do I find legal and policy pages?', a: 'Privacy Policy, Terms and Cookies pages are grouped in the Legal section below.' },
      { q: 'Where do I find reward and VIP-related pages?', a: 'Rewards, the VIP Program and Promotions are grouped together in the Rewards & VIP section.' },
      { q: 'Where are the blog and article pages listed?', a: 'Blog categories and the main Blog listing are grouped in the Blog section of this directory.' }
    ],
    related: [
      { label: 'Home', url: '/' },
      { label: 'Help Center', url: '/help-center' }
    ]
  }
}

export default pagesData;
