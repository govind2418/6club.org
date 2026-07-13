/**
 * One entry per route (excluding Home and Blog, which have their own data/views).
 * Consumed by server/controllers/page.controller.js -> views/pages/generic.ejs
 */
module.exports = {
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
      }
    ],
    faqs: [
      { q: 'What kind of platform is BDG Win?', a: 'BDG Win is an online gaming platform offering casino, slot, lottery, sports, crash, fishing and arcade games through a single account and wallet.' },
      { q: 'Do I need separate accounts for different BDG Win games?', a: 'No. One BDG Win account gives you access to every game category, along with shared rewards, referral tracking and VIP status.' },
      { q: 'Is BDG Win available on mobile?', a: 'Yes. BDG Win works on Android via APK, on iOS through our installation guide, and directly in desktop browsers.' },
      { q: 'How do I get started on BDG Win?', a: 'Create an account from the Register page, verify your number, make a deposit using a supported payment method, and choose a game category to begin.' }
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
      }
    ],
    faqs: [
      { q: 'What is the main feature of BDG Win?', a: 'A unified account and wallet that works across all BDG Win game categories, rewards, referrals and VIP status.' },
      { q: 'Can I use BDG Win on both mobile and desktop?', a: 'Yes, the same BDG Win account and balance carry over between the Android app, iOS and desktop browser access.' },
      { q: 'Does BDG Win offer rewards automatically?', a: 'Daily, weekly and monthly rewards are credited based on your activity without needing manual claim codes in most cases.' },
      { q: 'Is BDG Win built for slow internet connections?', a: 'Yes, pages and game screens are kept lightweight so BDG Win loads quickly even on weaker mobile data connections.' }
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
    keywords: ['BDG Win Rewards', 'BDG Win Bonus'],
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
      }
    ],
    faqs: [
      { q: 'How often are BDG Win rewards credited?', a: 'BDG Win runs three reward cycles: daily, weekly and monthly, each crediting automatically once you meet the listed criteria.' },
      { q: 'Do BDG Win rewards expire?', a: 'Reward cycles reset at the start of each new period, so unclaimed daily or weekly criteria do not carry over automatically.' },
      { q: 'Are rewards different for VIP members?', a: 'Yes, higher BDG Win VIP tiers typically unlock larger reward multipliers alongside faster withdrawal processing.' },
      { q: 'Where can I see my BDG Win rewards history?', a: 'Your rewards history, including credited and pending bonuses, is visible from your BDG Win account dashboard.' }
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
    keywords: ['BDG Win VIP', 'BDG Win VIP Program'],
    eyebrow: 'VIP Program',
    h1: 'BDG Win VIP Program',
    intro: 'The BDG Win VIP program rewards consistent players with faster processing, better rates and closer support.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How BDG Win VIP Tiers Work',
        paragraphs: [
          'Every BDG Win account starts at the base tier and moves up based on cumulative activity across games and reward cycles. Each tier increase unlocks a combination of higher reward multipliers, faster withdrawal processing windows and, at higher tiers, a dedicated support contact instead of the general queue.'
        ]
      },
      {
        heading: 'What VIP Status Changes',
        paragraphs: [
          'The most noticeable change players report is withdrawal speed — verified VIP accounts are typically processed ahead of the standard queue. VIP members also get earlier access to new game categories and promotions before they roll out platform-wide.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I join the BDG Win VIP program?', a: 'VIP tiers are unlocked automatically as your account activity and reward history grow — there is no separate VIP application.' },
      { q: 'What does BDG Win VIP status change?', a: 'Higher VIP tiers on BDG Win typically improve withdrawal processing speed, reward multipliers and support access.' },
      { q: 'Can my BDG Win VIP tier drop?', a: 'Tiers are generally based on rolling activity, so extended inactivity can affect your standing at the next review.' },
      { q: 'Is there a cost to reach BDG Win VIP tiers?', a: 'No separate fee is charged — VIP tiers are earned through normal account activity and reward participation.' }
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
    keywords: ['BDG Win Promotions', 'BDG Win Bonus'],
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
        ]
      },
      {
        heading: 'Claiming a Promotion Safely',
        paragraphs: [
          'Always confirm a promotion through your BDG Win account or official app rather than an outside link, and review the terms attached to the offer before it is applied to your wallet.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I find current BDG Win promotions?', a: 'Active BDG Win promotions are listed in your account dashboard and on the Promotions page, each with its own terms.' },
      { q: 'Do BDG Win promotions have wagering requirements?', a: 'Most bonus-based promotions include a wagering condition, shown in the offer details before you claim it.' },
      { q: 'Can I combine multiple BDG Win promotions?', a: 'Combinability depends on each offer\'s terms; some promotions are exclusive and cannot be stacked with others.' },
      { q: 'Are BDG Win promotions available to VIP members only?', a: 'No, most promotions are open to all verified accounts, though some higher-value offers are reserved for VIP tiers.' }
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
    keywords: ['BDG Win Daily Rewards', 'BDG Win Bonus'],
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
      }
    ],
    faqs: [
      { q: 'What counts toward a BDG Win daily streak?', a: 'Logging in and completing qualifying activity, such as playing a round in an active game category, keeps your daily streak advancing.' },
      { q: 'What happens if I miss a day?', a: 'Missing a day generally resets your BDG Win daily streak counter back to the start.' },
      { q: 'How is the daily bonus paid?', a: 'Daily rewards are credited directly to your BDG Win wallet once the streak threshold is met.' },
      { q: 'Can I check my current streak?', a: 'Yes, your current daily streak and reward history are visible from your BDG Win account dashboard.' }
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
    keywords: ['BDG Win Weekly Rewards', 'BDG Win Bonus'],
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
      }
    ],
    faqs: [
      { q: 'When are BDG Win weekly rewards calculated?', a: 'Weekly rewards are reviewed at the end of each seven-day cycle based on your total activity.' },
      { q: 'Does my VIP tier affect weekly rewards?', a: 'Yes, higher BDG Win VIP tiers typically receive a larger cashback percentage on weekly rewards.' },
      { q: 'Is a deposit required for weekly rewards?', a: 'Cashback is based on activity, while reload bonuses specifically require a qualifying deposit during the week.' },
      { q: 'Where do I see my weekly reward amount?', a: 'Your weekly reward total appears in your BDG Win wallet and rewards history once the cycle closes.' }
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
    keywords: ['BDG Win Monthly Rewards', 'BDG Win Bonus'],
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
      }
    ],
    faqs: [
      { q: 'How is the BDG Win monthly reward different from weekly rewards?', a: 'Monthly rewards are calculated over a full calendar month and are typically larger, reflecting sustained activity rather than a single week.' },
      { q: 'Do monthly rewards affect my VIP tier?', a: 'Yes, monthly activity is one of the factors reviewed when your BDG Win VIP tier is reassessed.' },
      { q: 'When are monthly rewards credited?', a: 'Monthly rewards are credited shortly after each calendar month closes, based on your recorded activity.' },
      { q: 'Can I track progress toward the monthly milestone?', a: 'Your current progress toward monthly reward milestones is visible in your BDG Win account dashboard.' }
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
    keywords: ['BDG Win Referral', 'BDG Win Referral Program'],
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
        ]
      },
      {
        heading: 'Getting the Most From Referrals',
        paragraphs: [
          'Referral earnings scale with how active your invited players are, so sharing your link with people who intend to play regularly, rather than just registering once, produces steadier returns over time.'
        ]
      }
    ],
    faqs: [
      { q: 'Where do I find my BDG Win referral link?', a: 'Your unique referral link is available in the referral section of your BDG Win account dashboard.' },
      { q: 'How much can I earn from BDG Win referrals?', a: 'Referral earnings are a share of your invited players\' qualifying activity and scale with how active they remain over time.' },
      { q: 'Is there a limit to how many people I can refer?', a: 'There is no fixed cap listed — you can share your BDG Win referral link with as many people as you like.' },
      { q: 'When are referral earnings paid out?', a: 'Referral earnings accumulate in your account and can be withdrawn through the standard BDG Win withdrawal process.' }
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
        ]
      },
      {
        heading: 'Applying as a BDG Win Affiliate',
        paragraphs: [
          'Affiliate applications are reviewed individually through the Contact page, where you can describe your audience and promotion channels before receiving affiliate account access and tracking links.'
        ]
      }
    ],
    faqs: [
      { q: 'How is the BDG Win affiliate program different from referrals?', a: 'Affiliates get campaign-level tracking and commission structures suited to larger promotion volumes, compared to the simple personal link used for standard referrals.' },
      { q: 'Who can apply for the BDG Win affiliate program?', a: 'Content creators, marketers and site owners with an audience interested in online gaming can apply through the Contact page.' },
      { q: 'How is affiliate commission calculated?', a: 'Commission structures are based on the volume and activity of players brought in through your affiliate tracking links.' },
      { q: 'Do affiliates get dedicated support?', a: 'Approved BDG Win affiliates are given a dedicated contact point separate from general player support.' }
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
    keywords: ['BDG Win Agent', 'BDG Win Agent Program'],
    eyebrow: 'Agent Program',
    h1: 'BDG Win Agent Program',
    intro: 'BDG Win agents manage a network of players and earn based on that network\'s combined activity.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What a BDG Win Agent Does',
        paragraphs: [
          'A BDG Win agent oversees a group of players — helping them register, deposit and understand the platform — in exchange for ongoing earnings tied to that group\'s activity. Agents get a management dashboard separate from the standard player view, showing group-level deposits, activity and earnings.'
        ]
      },
      {
        heading: 'Becoming an Agent',
        paragraphs: [
          'Agent status is granted after an application reviewed through the Contact page, where existing player history and intended network size are considered before access is set up.'
        ]
      }
    ],
    faqs: [
      { q: 'What does a BDG Win agent manage?', a: 'A BDG Win agent manages a group of players and earns based on that group\'s combined deposits and activity.' },
      { q: 'How do I become a BDG Win agent?', a: 'Agent applications are reviewed individually through the Contact page before dashboard access is granted.' },
      { q: 'Is the agent dashboard different from a regular account?', a: 'Yes, agents get a management view showing group-level activity, separate from the standard individual player dashboard.' },
      { q: 'Can an agent also be a referral or affiliate partner?', a: 'Yes, the three programs track different relationships and can be combined depending on your role with BDG Win.' }
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
    keywords: ['BDG Win Game', 'BDG Win Games'],
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
      }
    ],
    faqs: [
      { q: 'How many game categories does BDG Win offer?', a: 'BDG Win organizes games into casino, slots, lottery, sports, crash, fishing, arcade and popular/new game groupings.' },
      { q: 'Do I need a separate wallet for each BDG Win game category?', a: 'No, a single BDG Win wallet and account balance works across every game category.' },
      { q: 'Which BDG Win game category is fastest to play?', a: 'Lottery, Color Prediction and crash games tend to have the shortest round times on BDG Win.' },
      { q: 'Where can I see the newest games on BDG Win?', a: 'The New Games page lists recently added titles across all BDG Win categories.' }
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
    keywords: ['BDG Win Casino', 'BDG Win Casino Games'],
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
      }
    ],
    faqs: [
      { q: 'Are BDG Win casino games live or automated?', a: 'BDG Win offers both live dealer tables and automated classic formats, clearly labeled before you join a table.' },
      { q: 'Are BDG Win casino game odds published?', a: 'Payout ratios and stake limits are shown on each table before you place a bet.' },
      { q: 'Can I move casino winnings to other BDG Win games?', a: 'Yes, all winnings sit in the same BDG Win wallet used across every game category.' },
      { q: 'Is there a minimum stake for BDG Win casino tables?', a: 'Minimum and maximum stakes vary by table and are displayed before you join.' }
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
    keywords: ['BDG Win Slots', 'BDG Win Slot Games'],
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
        ]
      }
    ],
    faqs: [
      { q: 'Can I adjust my stake on BDG Win slots?', a: 'Yes, most BDG Win slot titles allow you to adjust your stake per spin within a set range.' },
      { q: 'How fast do BDG Win slot rounds resolve?', a: 'Slot results display instantly after each spin, with minimal loading time between rounds.' },
      { q: 'Where can I find new BDG Win slot titles?', a: 'New slot releases are listed on the New Games page before entering general rotation.' },
      { q: 'Do BDG Win slots work well on mobile data?', a: 'Yes, slot screens are optimized to load quickly even on slower mobile connections.' }
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
    keywords: ['BDG Win Lottery', 'BDG Win Color Prediction'],
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
        ]
      }
    ],
    faqs: [
      { q: 'What is BDG Win Color Prediction?', a: 'BDG Win Color Prediction is a fast-settling round type where players predict an outcome color, with results confirmed in under a minute.' },
      { q: 'How often do BDG Win lottery draws run?', a: 'Numbered lottery draws run on published fixed schedules visible before you enter a round.' },
      { q: 'Can I see past BDG Win lottery results?', a: 'Yes, your draw and prediction history is available from your account activity log.' },
      { q: 'Is Color Prediction faster than numbered lottery draws?', a: 'Yes, Color Prediction rounds typically settle faster than fixed-schedule numbered lottery draws.' }
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
    keywords: ['BDG Win Sports', 'BDG Win Sports Games'],
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
      }
    ],
    faqs: [
      { q: 'Which sports can I bet on with BDG Win?', a: 'BDG Win sports markets cover cricket, football, tennis and kabaddi, among other disciplines.' },
      { q: 'Does BDG Win offer live in-play betting?', a: 'Yes, live markets update in real time during matches, alongside standard pre-match options.' },
      { q: 'Do sports market results count toward BDG Win rewards?', a: 'Yes, sports activity contributes to the same daily, weekly and monthly reward cycles as other game categories.' },
      { q: 'How is a BDG Win sports market settled?', a: 'Markets settle based on official results of the underlying match or event.' }
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
      }
    ],
    faqs: [
      { q: 'Are BDG Win fishing games skill-based?', a: 'Yes, aiming and timing affect your catches, though payout multipliers are set by the game engine per fish type.' },
      { q: 'What is a boss fish in BDG Win fishing games?', a: 'Boss fish are rare, high-value targets that pay out significantly more than standard fish types.' },
      { q: 'Can multiple players share a BDG Win fishing round?', a: 'Yes, fishing rounds typically run in a shared pool where multiple players can target fish simultaneously.' },
      { q: 'Do fishing games use the same wallet as other BDG Win games?', a: 'Yes, stakes and winnings use the same BDG Win wallet shared across all game categories.' }
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
    keywords: ['BDG Win Crash Games', 'BDG Win Color Prediction'],
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
        ]
      }
    ],
    faqs: [
      { q: 'How do I win in a BDG Win crash game?', a: 'You cash out your stake at a chosen multiplier before the round crashes; waiting longer increases potential payout but also risk.' },
      { q: 'Can I see past BDG Win crash round results?', a: 'Yes, previous crash points are displayed in the round history so you can review recent outcomes.' },
      { q: 'Is there a maximum multiplier in BDG Win crash games?', a: 'Multiplier ceilings vary by game version and are shown within the game interface.' },
      { q: 'Are crash games related to BDG Win Color Prediction?', a: 'Both are fast-settling round types, though crash games use a rising multiplier while Color Prediction is outcome-based.' }
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
      }
    ],
    faqs: [
      { q: 'How long does a typical BDG Win arcade round take?', a: 'Arcade rounds are designed to be short, often resolving in well under a minute.' },
      { q: 'Are BDG Win arcade game stakes lower than other categories?', a: 'Arcade titles generally support lower minimum stakes, matching their faster round pace.' },
      { q: 'Do arcade games contribute to BDG Win rewards?', a: 'Yes, arcade activity counts toward the same daily, weekly and monthly reward cycles as other categories.' },
      { q: 'Are arcade games good for new BDG Win players?', a: 'Their simple rules and short rounds make arcade games a straightforward starting point for new accounts.' }
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
    keywords: ['BDG Win Popular Games', 'BDG Win Game'],
    eyebrow: 'Popular',
    h1: 'BDG Win Popular Games',
    intro: 'Popular games on BDG Win are ranked using active player counts, refreshed on a rolling basis.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How Popularity Is Ranked',
        paragraphs: [
          'BDG Win tracks active sessions across casino, slots, lottery, sports, crash, fishing and arcade categories to determine which titles are currently drawing the most play. This ranking updates regularly, so it reflects recent trends rather than a fixed all-time list.'
        ]
      }
    ],
    faqs: [
      { q: 'How is the BDG Win Popular Games list generated?', a: 'It ranks titles by recent active player counts across all game categories, updated on a rolling basis.' },
      { q: 'Does the popular list include every game category?', a: 'Yes, casino, slots, lottery, sports, crash, fishing and arcade titles are all eligible to appear.' },
      { q: 'How often does the popular ranking change?', a: 'Rankings refresh regularly to reflect recent play trends rather than staying fixed.' },
      { q: 'Where can I find brand-new BDG Win titles instead?', a: 'Recently added games appear on the New Games page before they build enough play to rank as popular.' }
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
    keywords: ['BDG Win New Games', 'BDG Win Game'],
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
      }
    ],
    faqs: [
      { q: 'How often are new games added to BDG Win?', a: 'New titles are added periodically across categories; check this page regularly for the latest releases.' },
      { q: 'Do new BDG Win games count toward rewards immediately?', a: 'Yes, activity on newly released games counts toward daily, weekly and monthly reward cycles like any other title.' },
      { q: 'Can I suggest a new game type for BDG Win?', a: 'Feedback and suggestions can be submitted through the Contact or Support pages.' },
      { q: 'Are new BDG Win games tested before release?', a: 'New titles go through the same fair play and security standards described on our Fair Play page before launch.' }
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
    keywords: ['BDG Win Download', 'BDG Win APK', 'BDG Win App'],
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
      }
    ],
    faqs: [
      { q: 'Is the BDG Win APK safe to install?', a: 'Always download the BDG Win APK from the official source described in our Android Guide to avoid modified or unofficial files.' },
      { q: 'Does BDG Win have an iOS app?', a: 'iOS access follows a guided installation process outlined on our iOS Guide, distinct from the Android APK method.' },
      { q: 'Do I need to download anything to play on desktop?', a: 'No, desktop players can access BDG Win directly through a browser without installing a separate app.' },
      { q: 'Will my account be the same across devices?', a: 'Yes, your BDG Win account, wallet and rewards stay consistent whether you play on Android, iOS or desktop.' }
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
    keywords: ['BDG Win APK', 'BDG Win Android'],
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
      }
    ],
    faqs: [
      { q: 'Why do I need to enable unknown sources for the BDG Win APK?', a: 'Android blocks installation from outside the Play Store by default, so this setting must be enabled once to install the official BDG Win APK.' },
      { q: 'Is enabling unknown sources risky?', a: 'It is safe as long as you only install the BDG Win APK from our official Download page, not from unverified third-party links.' },
      { q: 'Do I need a new account to use the Android app?', a: 'No, your existing BDG Win account works immediately in the app; new players can also register directly from it.' },
      { q: 'How do I update the BDG Win Android app?', a: 'Re-download the latest APK from the Download page whenever a new version is announced.' }
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
    keywords: ['BDG Win iOS', 'BDG Win App'],
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
      }
    ],
    faqs: [
      { q: 'Why does BDG Win on iOS require trusting a profile?', a: 'Because distribution outside the App Store requires a one-time trust step in iOS settings before the app will open.' },
      { q: 'Will my rewards carry over to the iOS app?', a: 'Yes, your BDG Win wallet, rewards and VIP tier are the same across iOS, Android and desktop.' },
      { q: 'What iOS version is required?', a: 'Compatibility details are listed on the Download page installation link for the current release.' },
      { q: 'Is there a separate registration for iOS?', a: 'No, existing accounts log in directly, and new players can register from within the iOS app.' }
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
      }
    ],
    faqs: [
      { q: 'Do I need to install software to play BDG Win on desktop?', a: 'No, BDG Win runs directly in your browser on desktop without any download.' },
      { q: 'Which browsers work best with BDG Win?', a: 'Any current version of major browsers works; keeping your browser updated gives the best performance.' },
      { q: 'Is the desktop experience different from mobile?', a: 'The layout is adapted for larger screens, but game categories, wallet and rewards are identical across devices.' },
      { q: 'Can I switch between desktop and the Android or iOS app?', a: 'Yes, your BDG Win account stays in sync whether you play on desktop, Android or iOS.' }
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
    keywords: ['BDG Win Register', 'BDG Win Registration'],
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
        ]
      }
    ],
    faqs: [
      { q: 'What do I need to register on BDG Win?', a: 'A valid mobile number and a password are all that is required; the number is verified with a one-time code.' },
      { q: 'How long does BDG Win registration take?', a: 'Registration typically takes under a minute once you receive and enter the verification code.' },
      { q: 'Can I change my registered number later?', a: 'Account detail changes are handled through Support — visit the Contact or Support page for help.' },
      { q: 'What should I do right after registering?', a: 'Add a payment method and make your first deposit to unlock full access to BDG Win game categories and rewards.' }
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
    keywords: ['BDG Win Login', 'BDG Win Account'],
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
        ]
      }
    ],
    faqs: [
      { q: 'What do I use to log in to BDG Win?', a: 'Your registered mobile number and password are used to log in on any device.' },
      { q: 'Can I use the same BDG Win login on multiple devices?', a: 'Yes, the same credentials work across Android, iOS and desktop with your account staying in sync.' },
      { q: 'What if I forget my BDG Win password?', a: 'Use the Forgot Password page to reset your password through your registered mobile number.' },
      { q: 'Should I create a new account if I can\'t log in?', a: 'No, use password recovery first — creating a duplicate account will not carry over your existing wallet or rewards.' }
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
    keywords: ['BDG Win Forgot Password', 'BDG Win Login'],
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
      }
    ],
    faqs: [
      { q: 'How do I reset my BDG Win password?', a: 'Enter your registered mobile number, confirm the reset code sent to it, then choose a new password.' },
      { q: 'What if I lost access to my registered mobile number?', a: 'Contact BDG Win Support for identity-verified account recovery in that situation.' },
      { q: 'Will resetting my password affect my wallet or rewards?', a: 'No, resetting your password only changes account access — your wallet, rewards and VIP tier stay the same.' },
      { q: 'How long does a BDG Win password reset take?', a: 'The reset code arrives shortly after you request it, and the new password takes effect immediately after confirmation.' }
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
    keywords: ['BDG Win Payment Methods', 'BDG Win'],
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
        ]
      }
    ],
    faqs: [
      { q: 'What payment methods does BDG Win support?', a: 'BDG Win supports bank transfers, UPI and select digital wallets through verified payment partners.' },
      { q: 'Can I use a different method for withdrawals than deposits?', a: 'Withdrawals are generally processed through the same verified method used for deposits for security consistency.' },
      { q: 'Do all payment methods work in every region?', a: 'Available options can vary slightly by region and account verification status.' },
      { q: 'Is there a fee for BDG Win payment methods?', a: 'Any applicable fees are shown before you confirm a deposit or withdrawal request.' }
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
    keywords: ['BDG Win Deposit', 'BDG Win Deposit Guide'],
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
        ]
      }
    ],
    faqs: [
      { q: 'How long does a BDG Win deposit take to appear?', a: 'Most deposits post to your wallet within minutes once the payment provider confirms the transaction.' },
      { q: 'What should I do if my deposit hasn\'t appeared?', a: 'Check your payment provider\'s transaction history first, then contact Support with your transaction reference.' },
      { q: 'Is there a minimum deposit amount on BDG Win?', a: 'Minimum deposit amounts vary by payment method and are shown before you confirm the transaction.' },
      { q: 'Can I deposit using any payment method listed?', a: 'Yes, any method listed on the Payment Methods page can be used, subject to your account verification status.' }
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
    keywords: ['BDG Win Withdrawal', 'BDG Win Withdrawal Guide'],
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
        ]
      }
    ],
    faqs: [
      { q: 'How long do BDG Win withdrawals take?', a: 'Most verified withdrawal requests are processed the same day, though timing can vary by verification status and VIP tier.' },
      { q: 'Does VIP tier affect withdrawal speed?', a: 'Yes, higher BDG Win VIP tiers are typically prioritized in the withdrawal processing queue.' },
      { q: 'Can I withdraw to a different method than I deposited with?', a: 'Withdrawals generally go through the same verified method used for deposits for security consistency.' },
      { q: 'What if my BDG Win withdrawal is delayed?', a: 'Contact Support with your request details if a withdrawal takes noticeably longer than the usual same-day window.' }
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
        ]
      }
    ],
    faqs: [
      { q: 'How does BDG Win protect my account?', a: 'Encrypted sessions, password-protected login and withdrawal checks against your verified payment method all help protect your BDG Win account.' },
      { q: 'Will BDG Win support ever ask for my password?', a: 'No, official BDG Win support will never ask for your password or OTP codes.' },
      { q: 'What should I do if I suspect unauthorized access?', a: 'Reset your password immediately through the Forgot Password page and contact Support.' },
      { q: 'Does BDG Win security relate to fair play?', a: 'Security covers account protection, while our Fair Play page covers how game outcomes themselves are verified.' }
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
      }
    ],
    faqs: [
      { q: 'How do I set a deposit limit on BDG Win?', a: 'Deposit limits can be set from your account settings, applied before your next deposit is processed.' },
      { q: 'What is the minimum age to use BDG Win?', a: 'Players must be 18 years or older to register and play on BDG Win.' },
      { q: 'Can I take a break from BDG Win temporarily?', a: 'Yes, cooling-off options are available in your account settings to pause activity for a set period.' },
      { q: 'Where can I get help with gaming habits?', a: 'Contact Support for guidance, or use the account limit tools described on this page as a first step.' }
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
      }
    ],
    faqs: [
      { q: 'How does BDG Win ensure fair game outcomes?', a: 'Certified random number generation is used across classic games, slots, lottery and Color Prediction rounds.' },
      { q: 'Are live BDG Win casino tables also fair?', a: 'Yes, live dealer tables show outcomes in real time as they happen, making results independently verifiable.' },
      { q: 'Can previous rounds affect future BDG Win outcomes?', a: 'No, certified random generation means each round is independent of previous results.' },
      { q: 'Where are BDG Win payout ratios shown?', a: 'Payout ratios and odds are published on each individual game before you place a stake.' }
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
      }
    ],
    faqs: [
      { q: 'What information does BDG Win collect at registration?', a: 'Your mobile number and account credentials are collected at registration; verified payment details are added once you transact.' },
      { q: 'Does BDG Win sell my data to third parties?', a: 'No, personal account information is not sold to third parties.' },
      { q: 'Who sees my payment details?', a: 'Payment details are shared only with verified payment partners required to process your transaction.' },
      { q: 'Can I request my BDG Win account data or closure?', a: 'Yes, contact Support to request account data details or closure, subject to standard record-keeping requirements.' }
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
      }
    ],
    faqs: [
      { q: 'What is the minimum age to hold a BDG Win account?', a: 'You must be at least 18 years old to register and hold a BDG Win account.' },
      { q: 'Can I have more than one BDG Win account?', a: 'One account is permitted per individual; duplicates may be restricted or merged.' },
      { q: 'Can someone else use my BDG Win account for them?', a: 'Accounts should be used personally, except under approved arrangements such as the Agent Program.' },
      { q: 'How will I know if terms change?', a: 'Updates are reflected on this page, and continued use after changes take effect means you accept the updated terms.' }
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
      }
    ],
    faqs: [
      { q: 'Does BDG Win use cookies for advertising?', a: 'No, cookies on BDG Win are used for session management and basic preferences, not for third-party advertising sales.' },
      { q: 'Can I use BDG Win without cookies enabled?', a: 'Session cookies are required to stay logged in; disabling them will likely log you out between pages.' },
      { q: 'What type of cookies does BDG Win set?', a: 'Primarily session cookies for login state and lightweight preference cookies for display settings.' },
      { q: 'How do I clear BDG Win cookies?', a: 'Cookies can be cleared through your browser\'s privacy or history settings at any time.' }
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
        ]
      }
    ],
    faqs: [
      { q: 'Where do I start if I am new to BDG Win?', a: 'Begin with the Register and Deposit Guide pages, then explore game categories once your account is funded.' },
      { q: 'Where can I find withdrawal information?', a: 'The Withdrawal Guide and Payment Methods pages cover processing times and supported options.' },
      { q: 'What if my question isn\'t covered in the Help Center?', a: 'Contact the BDG Win support team directly through the Contact page.' },
      { q: 'Does the Help Center cover account security?', a: 'Yes, the Security and Fair Play pages explain account protection and how game outcomes are verified.' }
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
      }
    ],
    faqs: [
      { q: 'Is BDG Win support available 24/7?', a: 'Yes, BDG Win support is reachable around the clock through live chat and email.' },
      { q: 'What information should I include when contacting support?', a: 'Your registered mobile number and a brief description of the issue help speed up the response.' },
      { q: 'Where can I find quick answers without contacting support?', a: 'The Help Center and FAQs pages cover common account, deposit and withdrawal questions.' },
      { q: 'How do I contact BDG Win support directly?', a: 'Use the Contact page to reach the support team by your preferred channel.' }
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
      }
    ],
    faqs: [
      { q: 'How do I contact BDG Win support?', a: 'Email support@bdgwin.ai with your registered mobile number and a description of your question.' },
      { q: 'Can I apply for the affiliate or agent program through this page?', a: 'Yes, partnership applications for the Affiliate and Agent Programs are submitted through the same contact channel.' },
      { q: 'How quickly does BDG Win respond?', a: 'Our team follows up as soon as possible; urgent account issues are prioritized.' },
      { q: 'Is there a self-service option before contacting support?', a: 'Yes, check the Help Center and FAQs pages for answers to common questions first.' }
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
      }
    ],
    faqs: [
      { q: 'How do I register on BDG Win?', a: 'Enter your mobile number, verify with the OTP sent to your device, and set a password — full steps are on the Register page.' },
      { q: 'How do I download the BDG Win app?', a: 'Android users install the APK, iOS users follow a guided browser installation, and desktop needs no download — see the Download page.' },
      { q: 'How long do withdrawals take?', a: 'Most verified BDG Win withdrawal requests are processed the same day, detailed on the Withdrawal Guide page.' },
      { q: 'What is BDG Win Color Prediction?', a: 'A fast-settling round type on the Lottery Games page where players predict an outcome color, resolving in under a minute.' },
      { q: 'How does the BDG Win referral program work?', a: 'You earn a share of your invited friends\' activity through your unique referral link — see the Referral Program page.' }
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
      }
    ],
    faqs: [
      { q: 'How is News different from Announcements?', a: 'News covers broader platform updates and releases, while Announcements covers shorter, more frequent operational notices.' },
      { q: 'Does BDG Win News cover new game releases?', a: 'Yes, major new game category launches are covered here alongside other platform updates.' },
      { q: 'Where do I find gaming strategy content instead?', a: 'Educational and strategy articles are published on the BDG Win Blog.' },
      { q: 'How often is this page updated?', a: 'It updates as significant platform changes occur, rather than on a fixed schedule.' }
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
      }
    ],
    faqs: [
      { q: 'How is BDG Win leaderboard position calculated?', a: 'Ranking is based on combined activity and winnings across all game categories during the current period.' },
      { q: 'Does the leaderboard reset?', a: 'Yes, standings reset at the start of each new ranking period.' },
      { q: 'Do top leaderboard players get extra rewards?', a: 'Top-ranked players may be featured in seasonal promotions alongside standard reward earnings.' },
      { q: 'Which game categories count toward the leaderboard?', a: 'Activity across all BDG Win game categories contributes to your leaderboard position.' }
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
    keywords: ['BDG Win Gift Code'],
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
      }
    ],
    faqs: [
      { q: 'Where do I redeem a BDG Win gift code?', a: 'Gift codes are entered in the redemption field on your account dashboard.' },
      { q: 'Do BDG Win gift codes expire?', a: 'Yes, most gift codes are time-limited and stop working after their listed expiry.' },
      { q: 'Can I use the same gift code twice?', a: 'No, gift codes are generally single-use per account.' },
      { q: 'Where are new gift codes announced?', a: 'New codes are posted on the Announcements page and official BDG Win social channels.' }
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
      }
    ],
    faqs: [
      { q: 'What kind of updates appear in Announcements?', a: 'Maintenance windows, new gift code drops and quick policy notices are posted here.' },
      { q: 'How is Announcements different from News?', a: 'Announcements covers short, frequent notices, while News covers broader platform updates and releases.' },
      { q: 'Are gift codes always announced here first?', a: 'New gift codes are typically posted here alongside official social channels.' },
      { q: 'How often is this page updated?', a: 'It updates frequently, as short notices arise, more often than the News page.' }
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
      { q: 'Where do I find legal and policy pages?', a: 'Privacy Policy, Terms and Cookies pages are grouped in the Legal section below.' }
    ],
    related: [
      { label: 'Home', url: '/' },
      { label: 'Help Center', url: '/help-center' }
    ]
  }
};
