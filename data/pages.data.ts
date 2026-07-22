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
  itemList?: { label: string; url: string; description: string }[];
}

const pagesData: Record<string, PageEntry> = {
  '/about-us': {
    metaTitle: 'About 6 Club – What Is 6 Club & How the Platform Works',
    metaDescription:
      'What is 6 Club? Learn how the 6 Club platform works, from one secure account to casino, slot, lottery, sports and crash games in a single wallet.',
    keywords: ['6 Club', 'About 6 Club', '6 Club platform', 'What is 6 Club', 'What is 6club', '6 Club Platform'],
    eyebrow: 'About Us',
    h1: 'About 6 Club',
    intro:
      '6 Club — sometimes written 6club — is the 6 Club Official Website, built around a simple idea: one login, one wallet, one set of rewards, no matter which game you open.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What You Get in a Single 6 Club Login',
        paragraphs: [
          'Casino tables, slot reels, Lottery and Colour Prediction rounds, sports markets, crash multipliers, fishing and arcade titles all sit behind the same sign-in. There\'s no separate account to open for each game type — one dashboard, one balance, one rewards ledger covers everything.',
          'Speed is the other half of the pitch: 6 Club Register finishes in under a minute, deposits confirm almost instantly, and most withdrawal requests clear the same day once a verified payment partner processes them.'
        ]
      },
      {
        heading: 'What Your Account Actually Tracks',
        paragraphs: [
          'Behind the scenes, a 6 Club account keeps a running tally of game activity, claimed rewards, referral earnings and VIP standing — all in one place rather than scattered across separate systems. Daily, weekly and monthly bonuses post automatically as you play, and moving up the VIP ladder brings faster withdrawals and more direct support.',
          'None of that changes based on which category you\'re in. Security checks, fair-play standards and the responsible-gaming controls apply the same way whether you\'re at a casino table or a sports market.'
        ]
      },
      {
        heading: 'From Zero to Playing',
        paragraphs: [
          'A mobile number, a password and a one-time code are all it takes to open an account — most players clear registration in well under a minute. Add a payment method after that and your first deposit switches on every game category at once; there\'s no separate unlock step per category.',
          'Once you\'re signed in, the dashboard doubles as a control room: wallet balance, open daily or weekly rewards, referral earnings and VIP progress, all in the same view regardless of what you played last.'
        ]
      },
      {
        heading: 'Designed for the Long Run, Not Just Day One',
        paragraphs: [
          'Plenty of gaming sites front-load a single signup bonus and stop there. 6 Club\'s reward system is deliberately the opposite — daily streaks, weekly cashback and monthly milestones only pay off if you keep showing up, and the VIP ladder is built around months of activity rather than one big deposit.',
          'That same logic extends to security and fair play: the standards a first-time player gets are identical to what a long-time VIP account gets, because the platform is built around a lasting relationship with an account, not a single session.'
        ]
      }
    ],
    faqs: [
      { q: 'What exactly is 6 Club?', a: '6 Club is a single-account gaming platform spanning casino, slots, lottery, sports, crash, fishing and arcade titles, all wired into one wallet.' },
      { q: 'Do different 6 Club games need different accounts?', a: 'No — one login covers every category, and rewards, referral tracking and VIP status all carry across the same account.' },
      { q: 'Can I play 6 Club from a phone?', a: 'Yes — Android via the official APK, iOS through the installation guide, or straight from a desktop browser, no app required.' },
      { q: 'What\'s the fastest way to start on 6 Club?', a: 'Register, verify your number, add a supported payment method, deposit, then pick whichever category you want to open first.' },
      { q: 'Can I look around before depositing anything?', a: 'Yes — browsing categories, rewards and rules doesn\'t need a funded wallet; only placing a real stake does.' },
      { q: 'Does every game category behave the same way account-wise?', a: 'Yes — the wallet, rewards and VIP mechanics are identical everywhere; only the rules of the game itself change from category to category.' }
    ],
    related: [
      { label: '6 Club Features', url: '/features' },
      { label: 'Game Categories', url: '/games' },
      { label: 'Register on 6 Club', url: '/register' }
    ]
  },

  '/features': {
    metaTitle: '6 Club Features – 6 Club Platform Guide to What Makes It Different',
    metaDescription:
      'Explore 6 Club Platform features: fast registration, secure payments, a unified wallet and rewards system that make 6 Club stand out.',
    keywords: ['6 Club Features', '6 Club', '6 Club Platform'],
    eyebrow: 'Platform',
    h1: '6 Club Features',
    intro: 'A closer look at what actually shapes day-to-day play on 6 Club — from opening an account to getting paid out.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Getting In',
        paragraphs: [
          'A mobile number, a password and an OTP confirmation are the entire signup checklist. Once verified, that same login carries across Android, iOS and desktop browsers, so your balance, rewards and game history never fall out of sync between devices.'
        ]
      },
      {
        heading: 'One Wallet, Layered Rewards',
        paragraphs: [
          'Deposits and withdrawals run through a single wallet no matter which category you\'re playing. On top of that base, 6 Club stacks daily, weekly and monthly rewards, a referral program paying out on friends\' activity, and a VIP ladder that speeds up withdrawals and support the higher you climb.'
        ]
      },
      {
        heading: 'Built to Stay Fast',
        paragraphs: [
          'Pages are kept deliberately lightweight, and game screens are tuned to start rounds without long buffering — the platform is built to hold up on a shaky mobile connection, not just a fast office wifi.'
        ]
      },
      {
        heading: 'Support Without the Waiting',
        paragraphs: [
          'Running 24/7 across time zones means support can\'t just be a 9-to-5 desk — live chat and email are staffed around the clock, and higher VIP tiers skip the general queue for a dedicated contact once withdrawal speed and history start mattering more.',
          'Most requests boil down to a handful of themes — payment status, verification, account access — so the Help Center is built around those exact themes first, meaning a lot of simple questions never need a ticket at all.'
        ]
      },
      {
        heading: 'Safety Settings, Not Afterthoughts',
        paragraphs: [
          'Fair play and responsible gaming aren\'t bolted-on extras here — outcome generation, deposit limits and session tools live in the same account settings you already use for wallet and rewards management.',
          'Practically, that means switching on a deposit limit or checking how a game\'s outcomes get generated takes exactly as many clicks as checking a reward balance — no separate support request required.'
        ]
      }
    ],
    faqs: [
      { q: 'What\'s the single biggest feature 6 Club offers?', a: 'One account and one wallet that work identically across every game category, reward cycle and VIP tier.' },
      { q: 'Does 6 Club work the same on mobile and desktop?', a: 'Yes — your account and balance carry over seamlessly between the Android app, iOS and any desktop browser.' },
      { q: 'Are rewards automatic, or do I need a code?', a: 'Daily, weekly and monthly rewards credit automatically off your activity in most cases, no manual claim code needed.' },
      { q: 'Does 6 Club hold up on slow mobile data?', a: 'Yes — pages and game screens are built lightweight specifically so 6 Club stays fast on weaker connections.' },
      { q: 'Is there an extra cost for better support?', a: 'No — live chat and email are free for every account; VIP tiers just get a dedicated contact instead of the shared queue.' },
      { q: 'Can I cap my own spending on 6 Club?', a: 'Yes — deposit and session limits sit directly in account settings for any player who wants to set them.' }
    ],
    related: [
      { label: 'About 6 Club', url: '/about-us' },
      { label: '6 Club Rewards', url: '/rewards' },
      { label: '6 Club VIP Program', url: '/vip' }
    ]
  },

  '/rewards': {
    metaTitle: '6 Club Rewards – Daily Bonus, Weekly Cashback & VIP Perks',
    metaDescription:
      '6 Club Rewards explained: daily bonus streaks, weekly cashback, monthly milestones and how they connect to the 6 Club VIP program.',
    keywords: ['6 Club Rewards', '6 Club Bonus'],
    eyebrow: 'Rewards',
    h1: '6 Club Rewards',
    intro: 'Three separate clocks — daily, weekly and monthly — each with its own criteria, make up the 6 Club rewards system.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Three Cycles, Three Purposes',
        paragraphs: [
          'Daily rewards track login streaks and small activity thresholds. Weekly rewards layer in cashback and reload bonuses scaled to how much you played that week. Monthly rewards go to consistent players in the form of bigger milestone bonuses.',
          'Every one of these lands in your wallet automatically once its criteria are met — no claim button to hunt for — and the full history sits in your account dashboard.'
        ]
      },
      {
        heading: 'How This Feeds Into VIP',
        paragraphs: [
          'Activity across all three cycles adds up over time, and that combined total is what pushes your VIP tier upward — bringing faster withdrawals, bigger multipliers and closer support along with it.'
        ]
      },
      {
        heading: 'Treating the Three Cycles Separately',
        paragraphs: [
          'Since each cycle runs on its own clock, it helps not to lump them together mentally. Daily rewards are about showing up; weekly is about volume; monthly is about doing both consistently for a full month straight.',
          'Players who watch all three from the dashboard usually spot this pattern fast: a quiet week won\'t wreck your monthly total, but a broken daily streak resets that one counter specifically — worth a quick login even on days you don\'t plan to play much.'
        ]
      }
    ],
    faqs: [
      { q: 'How many reward cycles does 6 Club run?', a: 'Three — daily, weekly and monthly — each crediting automatically the moment you hit its criteria.' },
      { q: 'Do unclaimed 6 Club rewards roll over?', a: 'No — each cycle resets at the start of its next period, so unmet daily or weekly criteria don\'t carry forward.' },
      { q: 'Do VIP members get bigger rewards?', a: 'Yes — higher VIP tiers generally come with larger multipliers on top of the standard reward amounts.' },
      { q: 'Where do I check my reward history?', a: 'Your full history — credited and pending — lives in the 6 Club account dashboard.' },
      { q: 'Can all three cycles pay out in the same week?', a: 'Yes — daily, weekly and monthly run independently, so qualifying activity can trigger all three together.' },
      { q: 'Do reward credits change my withdrawal rules?', a: 'No — reward money sits in the same wallet as deposits and follows the same rules covered on the Withdrawal Guide.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/vip': {
    metaTitle: '6 Club VIP – Membership Tiers, Rewards & Exclusive Benefits',
    metaDescription:
      '6 Club VIP program guide: tier benefits, faster withdrawals and how 6 Club VIP Rewards grow the more consistently you play.',
    keywords: ['6 Club VIP', '6 Club VIP Program', '6 Club VIP Rewards'],
    eyebrow: 'VIP Program',
    h1: '6 Club VIP Program',
    intro: '6 Club VIP is the tier ladder that rewards players who stick around — faster processing, better rates and support that\'s easier to reach.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Climbing the Ladder',
        paragraphs: [
          'Every account starts at the base tier and climbs based on cumulative activity across games and reward cycles combined. Each step up brings some mix of stronger reward multipliers, quicker withdrawal windows and — once you\'re high enough — a named support contact instead of the shared queue.'
        ],
        image: {
          src: '/images/screenshots/6club-vip-tier-progress.webp',
          alt: '6 Club VIP profile screen showing tier badge, experience points and unlocked benefits',
          caption: 'A 6 Club VIP profile showing tier badge, accumulated experience and the benefits that unlock at that level — level-up rewards, a monthly reward and an improved rebate rate.'
        }
      },
      {
        heading: 'What Actually Changes Once You\'re VIP',
        paragraphs: [
          'Withdrawal speed is the change players notice first — verified VIP accounts jump ahead of the standard queue. Early access to new game categories and promotions before they go live platform-wide is the other perk that tends to stand out.'
        ]
      },
      {
        heading: 'What Moves the Needle on Tier Reviews',
        paragraphs: [
          'Reviews look at your combined daily, weekly and monthly activity, not a single deposit or one big session — so a few steady weeks of play move your tier more reliably than one large deposit followed by silence.',
          'Benefits tend to stack as you climb: a faster withdrawal window, then a bigger multiplier, then eventually a dedicated contact instead of the general queue. None of it needs a separate request — it all switches on automatically the moment your tier updates.'
        ]
      }
    ],
    faqs: [
      { q: 'Is there an application to join 6 Club VIP?', a: 'No — tiers unlock automatically as account activity and reward history build up; there\'s nothing separate to apply for.' },
      { q: 'What does VIP status actually unlock?', a: 'Faster withdrawal processing, stronger reward multipliers, and better support access as tiers climb.' },
      { q: 'Can a VIP tier drop back down?', a: 'Tiers track rolling activity, so a long stretch of inactivity can affect your standing at the next review.' },
      { q: 'Does reaching a VIP tier cost anything extra?', a: 'No separate fee — tiers are earned purely through normal play and reward participation.' },
      { q: 'How often does my tier get reviewed?', a: 'Reviews generally line up with the monthly reward cycle, folding in recent daily and weekly activity too.' },
      { q: 'Do VIP accounts see new games before everyone else?', a: 'Yes — VIP members typically get a first look at new categories and promotions ahead of the wider rollout.' }
    ],
    related: [
      { label: '6 Club Rewards', url: '/rewards' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' }
    ]
  },

  '/promotions': {
    metaTitle: '6 Club Promotions – Current Bonus Offers & Welcome Bonus',
    metaDescription:
      'Browse current 6 Club Promotions including the 6 Club Welcome Bonus, seasonal offers and how bonus terms apply to your account.',
    keywords: ['6 Club Promotions', '6 Club Bonus', '6 Club Welcome Bonus'],
    eyebrow: 'Promotions',
    h1: '6 Club Promotions',
    intro: 'Promotions sit alongside the standard 6 Club rewards cycle — seasonal offers and game-specific bonuses that come and go on their own schedule.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'The Three Kinds of Promotions You\'ll See',
        paragraphs: [
          'Most 6 Club promotions fall into one of three buckets: welcome offers for brand-new accounts, reload bonuses tied to a deposit, and time-limited offers built around a specific category like slots or crash games.',
          'Every offer carries its own eligibility window and wagering conditions, spelled out on the promotion itself before you opt in — nothing is applied without you seeing the terms first.'
        ],
        image: {
          src: '/images/screenshots/promo-first-bet-boost.webp',
          alt: '6 Club promotion offering a bonus percentage boost on a player\'s first bet of the day',
          caption: 'An example 6 Club promotion adding a bonus percentage to a player\'s first bet of the day, with the eligibility window and boost calculation shown before it applies.'
        }
      },
      {
        heading: 'Claiming an Offer Without Getting Burned',
        paragraphs: [
          'Confirm any promotion from inside your 6 Club account or the official app — never through an outside link — and give the attached terms an actual read before the bonus lands in your wallet.'
        ],
        image: {
          src: '/images/screenshots/promotions-hub.webp',
          alt: '6 Club promotions and activity hub listing invitation bonus, betting rebate, super jackpot and attendance bonus',
          caption: '6 Club\'s promotions hub, where offers like the invitation bonus, betting rebate, invite wheel and attendance bonus are listed together with terms attached to each.'
        }
      },
      {
        heading: 'Promotions and Regular Rewards Don\'t Compete',
        paragraphs: [
          'A seasonal offer runs completely independently of your daily, weekly and monthly cycles — claiming one doesn\'t use up or cancel out the other. Think of a promotion as a short-term extra stacked on top of a reward system that keeps ticking either way.',
          'Because these offers are time-boxed, it\'s worth glancing at the Promotions page and your dashboard now and then rather than assuming something you saw once is still running — anything expired or replaced drops off the active list the moment its window closes.'
        ],
        image: {
          src: '/images/screenshots/6club-recharge-bonus-banner.webp',
          alt: '6 Club recharge bonus banner shown alongside the game category grid',
          caption: 'A seasonal 6 Club recharge bonus banner sitting above the game category grid — a short-term addition layered on top of the standard reward cycle, not a replacement for it.'
        }
      }
    ],
    faqs: [
      { q: 'Where do current promotions show up?', a: 'Live offers are listed on both the Promotions page and your account dashboard, each with its own attached terms.' },
      { q: 'Is there always a wagering requirement?', a: 'Most bonus-style promotions carry one, and it\'s shown in the offer details before you claim anything.' },
      { q: 'Can two promotions be claimed together?', a: 'It depends on each offer\'s terms — some are exclusive and won\'t stack with others.' },
      { q: 'Are promotions reserved for VIP accounts?', a: 'No — most are open to any verified account, though a few higher-value offers are VIP-only.' },
      { q: 'Do promotions cancel out my regular rewards?', a: 'No — they run alongside the daily, weekly and monthly cycles rather than replacing them.' },
      { q: 'How do I know a promotion has expired?', a: 'It simply disappears from the active list on the Promotions page and dashboard once its window closes.' }
    ],
    related: [
      { label: '6 Club Rewards', url: '/rewards' },
      { label: 'Gift Codes', url: '/gift-code' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/rewards/daily': {
    metaTitle: '6 Club Daily Bonus – Login Streaks & Daily Rewards',
    metaDescription:
      'How the 6 Club Daily Bonus works: login streak rewards and small daily activity milestones that build every day you play.',
    keywords: ['6 Club Daily Rewards', '6 Club Bonus', '6 Club Rewards', '6 Club Daily Bonus'],
    eyebrow: 'Daily Rewards',
    h1: '6 Club Daily Rewards',
    intro: 'The Daily Bonus is built for players who just check in and play a little every day — no big sessions required.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'What Keeps the Streak Moving',
        paragraphs: [
          'Log in and clock qualifying activity on any given day, and your streak counter ticks forward. Hit one of the set thresholds and a small bonus lands straight in your wallet, showing up in your rewards history that same day.',
          'Skip a day, though, and the counter usually resets — this particular cycle rewards showing up consistently far more than it rewards how much you play in any one sitting.'
        ]
      },
      {
        heading: 'Making the Streak Work for You',
        paragraphs: [
          'Thresholds key off streak length, not stake size, so a quick five-minute session counts exactly the same as a long one for keeping the streak alive — this cycle is about showing up, not how much you deposit that day.',
          'A broken streak just starts over — there\'s no other penalty attached — so picking the habit back up after missing a day or two costs you nothing beyond the reset itself.'
        ]
      }
    ],
    faqs: [
      { q: 'What actually counts toward the daily streak?', a: 'Logging in and completing some qualifying activity — like a round in any active game category — keeps the streak advancing.' },
      { q: 'What happens if I skip a day?', a: 'Your streak counter typically resets back to zero.' },
      { q: 'Where does the daily bonus get paid?', a: 'Straight into your wallet, automatically, once the streak threshold is hit.' },
      { q: 'Can I see my current streak count?', a: 'Yes — it\'s visible in your account dashboard alongside your reward history.' },
      { q: 'Will depositing more money boost my daily bonus?', a: 'No — this cycle is driven by streak length and qualifying activity, not deposit size.' },
      { q: 'Is there a cap on how long a streak can run?', a: 'No cap — it keeps going as long as you keep meeting the daily activity requirement.' }
    ],
    related: [
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'Rewards Overview', url: '/rewards' }
    ]
  },

  '/rewards/weekly': {
    metaTitle: '6 Club Weekly Rewards – Cashback & Reload Bonus',
    metaDescription:
      'Details on 6 Club weekly rewards, including cashback calculations and reload bonuses based on your weekly activity.',
    keywords: ['6 Club Weekly Rewards', '6 Club Bonus', '6 Club Rewards'],
    eyebrow: 'Weekly Rewards',
    h1: '6 Club Weekly Rewards',
    intro: 'Weekly rewards look back at everything you did over the previous seven days and pay out based on that total.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'How the Cashback Number Gets Set',
        paragraphs: [
          'When a weekly cycle closes, 6 Club looks at your combined play across every category and works out a cashback percentage based on activity level and current VIP tier. Made a qualifying deposit that week too? A reload bonus can stack on top.',
          'Both land in your wallet shortly after the cycle ends, with a matching line in your rewards history.'
        ]
      },
      {
        heading: 'Spreading Play Across Categories Still Counts',
        paragraphs: [
          'Cashback is calculated on combined activity, so there\'s no need to stick to one category — a week split between slots and sports markets gets reviewed exactly the same as a week spent entirely on one.',
          'The reload bonus is the one piece tied specifically to deposits: make a qualifying one during the week and you can pick up cashback and a reload bonus together, while a no-deposit week still earns cashback on activity alone.'
        ]
      }
    ],
    faqs: [
      { q: 'When does 6 Club calculate the weekly reward?', a: 'At the close of every seven-day cycle, based on your total activity across that period.' },
      { q: 'Does my VIP tier change the weekly payout?', a: 'Yes — higher tiers generally pull a larger cashback percentage.' },
      { q: 'Do I need to deposit to get a weekly reward?', a: 'Cashback runs off activity alone; the reload bonus specifically needs a qualifying deposit that week.' },
      { q: 'Where does my weekly total show up?', a: 'In your wallet and rewards history, right after the cycle closes.' },
      { q: 'Does cashback cover every game category or just one?', a: 'Every category — activity is combined across all of them, not tracked per category.' },
      { q: 'Can cashback and a reload bonus land in the same week?', a: 'Yes — a qualifying deposit alongside qualifying activity earns both together.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Monthly Rewards', url: '/rewards/monthly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/rewards/monthly': {
    metaTitle: '6 Club Monthly Rewards – Milestone Bonus for Consistent Players',
    metaDescription:
      'How 6 Club monthly rewards recognize consistent players with milestone bonuses tied to a full month of activity.',
    keywords: ['6 Club Monthly Rewards', '6 Club Bonus', '6 Club Rewards'],
    eyebrow: 'Monthly Rewards',
    h1: '6 Club Monthly Rewards',
    intro: 'Monthly rewards are the biggest of 6 Club\'s three cycles — the payoff for sustained play over a full calendar month.',
    breadcrumbTrail: [{ label: 'Rewards', url: '/rewards' }],
    sections: [
      {
        heading: 'What It Takes to Hit a Milestone',
        paragraphs: [
          '6 Club adds up your daily and weekly activity across an entire calendar month, and crossing a set milestone unlocks a bonus that\'s typically bigger than anything from the daily or weekly cycles — the size reflects the longer time commitment behind it.',
          'These totals also feed into VIP tier reviews, so a run of consistent months can push you up the ladder faster than sporadic bursts of activity.'
        ]
      },
      {
        heading: 'Thinking in Months, Not Weeks',
        paragraphs: [
          'Because the milestone looks at the whole month, a slower week doesn\'t sink your chances if the rest of the month picks up the slack — it\'s the combined total at month\'s end that gets reviewed, not a strict week-by-week pace.',
          'Players chasing a VIP upgrade often treat the monthly figure as their clearest gauge, since it\'s assessed on roughly the same rolling schedule VIP reviews use.'
        ]
      }
    ],
    faqs: [
      { q: 'How does the monthly reward differ from the weekly one?', a: 'It\'s calculated over a full calendar month and is usually larger, reflecting sustained play rather than a single week.' },
      { q: 'Does monthly activity affect my VIP tier?', a: 'Yes — it\'s one of the inputs reviewed whenever your VIP tier gets reassessed.' },
      { q: 'When does the monthly bonus get credited?', a: 'Shortly after each calendar month closes, based on the activity recorded during it.' },
      { q: 'Can I track my progress toward the milestone mid-month?', a: 'Yes — current progress is visible any time in your account dashboard.' },
      { q: 'Does one bad week ruin my monthly milestone?', a: 'No — the review covers the whole month, so stronger weeks can offset a slower one.' },
      { q: 'Is the monthly total a good signal for VIP progress?', a: 'It\'s a strong one, since it\'s reviewed on roughly the same rolling basis as VIP tier reassessments.' }
    ],
    related: [
      { label: 'Daily Rewards', url: '/rewards/daily' },
      { label: 'Weekly Rewards', url: '/rewards/weekly' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/referral-program': {
    metaTitle: '6 Club Referral – Invite Code & Earn by Inviting Friends',
    metaDescription:
      'How the 6 Club Referral program works: share your 6 Club Invite Code, track invited players and earn from their activity over time.',
    keywords: ['6 Club Referral', '6 Club Referral Program', '6 Club Invite Code'],
    eyebrow: 'Referral Program',
    h1: '6 Club Referral Program',
    intro: 'Invite friends to 6 Club and earn an ongoing share of what they play — that\'s the entire referral program in one line.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How a Referral Actually Gets Tracked',
        paragraphs: [
          'Your dashboard holds a unique referral link tied to your account. The moment someone signs up through it and starts playing, that account gets tagged to your referral profile — and a share of their qualifying activity keeps flowing to you for as long as they stay active.',
          'Pending earnings, paid-out totals and the number of currently active invited players all sit in that same dashboard section.'
        ],
        image: {
          src: '/images/screenshots/invitation-bonus-received.webp',
          alt: '6 Club invitation bonus screen showing rewards credited per invited friend',
          caption: 'A 6 Club invitation bonus screen showing rewards credited once an invited friend registers and completes a qualifying deposit.'
        }
      },
      {
        heading: 'Who to Actually Invite',
        paragraphs: [
          'Earnings scale with how active your invited players stay — so sending your link to people who genuinely plan to keep playing, rather than just sign up once, is what produces steady returns rather than a one-time bump.'
        ],
        image: {
          src: '/images/screenshots/invite-wheel-cashout.webp',
          alt: '6 Club Invite Wheel showing spin-based bonus amounts added to a referrer\'s balance',
          caption: 'The 6 Club Invite Wheel, which adds spin-based bonus amounts to a referrer\'s balance as more invited friends join.'
        }
      },
      {
        heading: 'Reading the Dashboard at a Glance',
        paragraphs: [
          'Pending earnings sit separately from paid ones, and active invited players are split out from inactive ones — so a quick glance tells you whether recent invites are actually playing or just registered and disappeared.',
          'Because everything ties to the link itself rather than a code someone has to type in, an invited player doesn\'t need to do anything extra — the connection forms automatically the second their account exists.'
        ],
        image: {
          src: '/images/screenshots/6club-invite-commission-poster.webp',
          alt: '6 Club shareable invite poster with a scannable QR code and commission rate',
          caption: 'A shareable 6 Club invite poster with a scannable QR code — one of several ready-made formats for sending your referral link to friends.'
        }
      }
    ],
    faqs: [
      { q: 'Where\'s my referral link kept?', a: 'In the referral section of your account dashboard, ready to copy and share.' },
      { q: 'What determines how much I earn from referrals?', a: 'A share of your invited players\' qualifying activity — the more active they stay, the more it adds up over time.' },
      { q: 'Is there a cap on how many people I can invite?', a: 'No fixed cap — share your link with as many people as you want.' },
      { q: 'How do I actually get paid my referral earnings?', a: 'They accumulate in your wallet and withdraw through the same standard 6 Club withdrawal process as everything else.' },
      { q: 'Does my invited friend need to type in a code?', a: 'No — signing up through your link tags their account to you automatically, no code required.' },
      { q: 'Can I tell which invites are still actually playing?', a: 'Yes — the dashboard splits active from inactive invited players so that\'s visible at a glance.' }
    ],
    related: [
      { label: 'Affiliate Program', url: '/affiliate-program' },
      { label: 'Agent Program', url: '/agent-program' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' }
    ]
  },

  '/affiliate-program': {
    metaTitle: '6 Club Affiliate Program – Partner With 6 Club and Earn Commission',
    metaDescription:
      'Details on the 6 Club Affiliate Program for creators and marketers who want to promote 6 Club for ongoing commission.',
    keywords: ['6 Club Affiliate Program', '6 Club Affiliate', '6 Club Invite Code'],
    eyebrow: 'Affiliate Program',
    h1: '6 Club Affiliate Program',
    intro: 'Built for creators, marketers and communities bringing in new players at scale — not just a personal referral link.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Affiliates vs. Regular Referrals',
        paragraphs: [
          'A standard referral link works fine for a single player sharing with friends, but the affiliate program is built for something bigger — content channels, communities, full marketing campaigns. Affiliates get their own tracking links, campaign-level reporting, and commission structures tied to volume and activity rather than a flat per-friend share.'
        ],
        image: {
          src: '/images/screenshots/agent-program-rules.webp',
          alt: '6 Club promotion partner program rules explaining subordinate levels for invited players',
          caption: '6 Club\'s promotion partner rules, explaining how subordinate levels are counted when an invited player goes on to invite others — the same underlying structure affiliate tracking builds on.'
        }
      },
      {
        heading: 'Applying for Affiliate Access',
        paragraphs: [
          'Applications go through the Contact page individually — describe your audience and how you plan to promote, and access to tracking links plus an affiliate account gets set up from there.'
        ]
      },
      {
        heading: 'Why Campaign-Level Data Matters',
        paragraphs: [
          'A personal referral link gives you one running number. Affiliate tracking breaks it down by campaign or channel instead, so you can tell exactly which link, page or promotion is converting rather than treating every visitor as one undifferentiated pile.',
          'That granularity only really pays off once your volume outgrows what a single link can meaningfully show — which is precisely why this exists as its own tier rather than just a higher referral cap.'
        ]
      }
    ],
    faqs: [
      { q: 'How does the affiliate tier differ from a regular referral?', a: 'Affiliates get campaign-level tracking and commission tiers built for volume, rather than the flat personal-link setup referrals use.' },
      { q: 'Who\'s eligible to become an affiliate?', a: 'Creators, marketers and site owners with a gaming-interested audience — apply through the Contact page.' },
      { q: 'How does commission get worked out?', a: 'It scales with the volume and activity of players your tracking links bring in.' },
      { q: 'Do approved affiliates get their own support contact?', a: 'Yes — a dedicated point of contact separate from the general player support queue.' },
      { q: 'Can I run several campaigns under one affiliate account?', a: 'Yes — tracking is built to report on multiple campaigns or channels independently.' },
      { q: 'Do I need a large existing audience to apply?', a: 'Some gaming-interested audience is expected, but size is judged case by case during the Contact page review.' }
    ],
    related: [
      { label: 'Referral Program', url: '/referral-program' },
      { label: 'Agent Program', url: '/agent-program' },
      { label: 'Contact', url: '/contact-us' }
    ]
  },

  '/agent-program': {
    metaTitle: '6 Club Agent Program – Become a 6 Club Agent',
    metaDescription:
      'How the 6 Club Agent Program works for individuals managing groups of players, including referral earnings and responsibilities.',
    keywords: ['6 Club Agent', '6 Club Agent Program', '6 Club Referral'],
    eyebrow: 'Agent Program',
    h1: '6 Club Agent Program',
    intro: 'Agents manage a whole network of players and earn from that network\'s combined activity, not just their own play.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What the Role Actually Involves',
        paragraphs: [
          'An agent looks after a group of players — helping them register, deposit and get comfortable with the platform — in return for ongoing earnings tied to that group\'s activity. A separate management dashboard shows group-level deposits, activity and earnings, distinct from the standard player view.'
        ],
        image: {
          src: '/images/screenshots/agency-commission-dashboard.webp',
          alt: '6 Club agent Agency dashboard showing direct and team subordinate counts and commission total',
          caption: 'A 6 Club agent\'s Agency dashboard, showing direct and team subordinate counts, deposit numbers and the previous day\'s total commission.'
        }
      },
      {
        heading: 'Getting Agent Access',
        paragraphs: [
          'Status is granted after a Contact-page application — existing player history and how large a network you\'re planning both factor into the review before access gets switched on.'
        ],
        image: {
          src: '/images/screenshots/rebate-ratio-table.webp',
          alt: '6 Club rebate ratio table showing commission percentages by level and subordinate depth',
          caption: '6 Club\'s rebate ratio table, showing how commission percentages change across rebate levels and subordinate depth for lottery, casino and sports.'
        }
      },
      {
        heading: 'The Day-to-Day Once You\'re Set Up',
        paragraphs: [
          'Past the initial onboarding, an agent\'s routine is mostly checking group activity from the management dashboard and fielding account or deposit questions from individual players before they ever reach general support.',
          'Since earnings track the group\'s combined activity rather than any single player, the incentive naturally lines up with keeping the whole network engaged — a few highly active players and a larger pool of occasional ones both feed the same running total.'
        ],
        image: {
          src: '/images/screenshots/6club-agent-recruitment-banner.webp',
          alt: '6 Club agent recruitment banner shown above the game category grid',
          caption: 'A 6 Club agent recruitment banner — this is the kind of promotion an agent\'s network sees, tying back to the same account structure the agent manages.'
        }
      }
    ],
    faqs: [
      { q: 'What is an agent actually responsible for?', a: 'Managing a group of players and earning based on that group\'s combined deposits and activity.' },
      { q: 'How do I get set up as an agent?', a: 'Apply through the Contact page — applications are reviewed individually before dashboard access is granted.' },
      { q: 'Does the agent dashboard look different from a regular account?', a: 'Yes — it\'s a management view built around group-level activity, separate from the standard player dashboard.' },
      { q: 'Can someone be an agent and an affiliate at the same time?', a: 'Yes — the three programs track different relationships and can overlap depending on your role.' },
      { q: 'Do earnings hinge on one particular top player?', a: 'No — they\'re based on the combined activity of the whole managed group, not any single account.' },
      { q: 'What support questions land on an agent\'s desk most often?', a: 'Account setup and deposit questions, usually before they\'d otherwise reach general support.' }
    ],
    related: [
      { label: 'Affiliate Program', url: '/affiliate-program' },
      { label: 'Referral Program', url: '/referral-program' },
      { label: 'Contact', url: '/contact-us' }
    ]
  },

  '/games': {
    metaTitle: '6 Club Games – Casino, Slots, Lottery, Aviator & Sports',
    metaDescription:
      'Browse every 6 Club Games category: Casino, Slots, Lottery, Aviator, Sports and Mini Games, all under one 6 Club account.',
    keywords: ['6 Club Game', '6 Club Games', '6club Games', '6 Club Mini Games'],
    eyebrow: 'Games',
    h1: '6 Club Game Categories',
    intro: 'One account, every category — casino, slots, lottery, sports, crash and more, with nothing to switch between them.',
    breadcrumbTrail: [],
    itemList: [
      { label: 'Casino Games', url: '/games/casino', description: 'Live dealer tables and classic table games.' },
      { label: 'Slot Games', url: '/games/slots', description: 'Themed reels with adjustable stakes.' },
      { label: 'Lottery & Color Prediction', url: '/games/lottery', description: 'Numbered draws and fast prediction rounds.' },
      { label: 'Sports Games', url: '/games/sports', description: 'Pre-match and live markets across major sports.' },
      { label: 'Crash Games', url: '/games/crash', description: 'Cash out a rising multiplier before it crashes.' },
      { label: 'Fishing Games', url: '/games/fishing', description: 'Skill-based rounds with multiplier catches.' },
      { label: 'Arcade Games', url: '/games/arcade', description: 'Short, casual rounds for quick sessions.' },
      { label: 'Popular Games', url: '/games/popular', description: 'The most played titles this month.' }
    ],
    sections: [
      {
        heading: 'Which Category Fits You',
        paragraphs: [
          'Casino and slots suit anyone who likes classic formats with visible odds. Lottery and Colour Prediction are built for quick, simple rounds. Sports covers both pre-match and live markets, while crash, fishing and arcade lean into faster, skill-touched sessions.',
          'Whichever you pick, your balance, reward progress and VIP tier travel with you — nothing resets when you switch.'
        ]
      },
      {
        heading: 'Switching Categories Costs You Nothing',
        paragraphs: [
          'Every category draws from the same wallet, so there\'s no transfer step moving from a casino table to a slot title — a balance built in one shows up instantly in the other. Rewards and VIP progress work the same way, tracking your combined activity rather than resetting per category.',
          'That\'s exactly why trying something new is low-friction: hopping from Lottery to a Sports market mid-session needs no new account, no fresh deposit, and doesn\'t restart your reward cycle.'
        ]
      }
    ],
    faqs: [
      { q: 'How many categories are there to choose from?', a: 'Casino, slots, lottery, sports, crash, fishing, arcade, plus popular and new-release groupings.' },
      { q: 'Is a separate wallet needed per category?', a: 'No — one wallet and balance covers every category on the platform.' },
      { q: 'Which category has the quickest rounds?', a: 'Lottery, Colour Prediction and crash-style games generally settle the fastest.' },
      { q: 'Where do the newest additions show up?', a: 'The New Games page lists everything recently added across every category.' },
      { q: 'Does switching categories reset my reward progress?', a: 'No — daily, weekly and monthly progress tracks combined activity no matter which category it comes from.' },
      { q: 'Do I need a fresh deposit to try a different category?', a: 'No — your existing balance already works everywhere, so trying something new costs nothing extra.' }
    ],
    related: [
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Slot Games', url: '/games/slots' },
      { label: 'Popular Games', url: '/games/popular' }
    ]
  },

  '/games/casino': {
    metaTitle: '6 Club Casino – Live Tables & Classic Casino Games',
    metaDescription:
      'Play 6 Club Casino games including live dealer tables and classic formats with transparent, verified odds.',
    keywords: ['6 Club Casino', '6 Club Casino Games'],
    eyebrow: 'Casino',
    h1: '6 Club Casino Games',
    intro: 'Live dealer tables and classic formats, side by side, with the odds spelled out before you ever place a stake.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Live Tables vs. Classic Formats',
        paragraphs: [
          'Live dealer tables stream in real time with visible card or wheel outcomes, while classic formats run on certified random generation instead. Either way, stake limits and payout ratios are shown up front, before you join a round.',
          'Winnings land in the same wallet used everywhere else on the platform — nothing needs transferring before you can spend it on slots, lottery or sports.'
        ]
      },
      {
        heading: 'Picking a Format That Matches Your Pace',
        paragraphs: [
          'Live tables suit anyone who wants to watch an actual dealer and shuffle happen in real time, streamed continuously rather than generated instantly. Classic formats resolve quicker since there\'s no stream to wait for, which fits shorter sessions or a weaker connection better.',
          'Both run under the same fair play standards, so the decision really comes down to pace and preference — neither format is more reliable than the other.'
        ]
      }
    ],
    faqs: [
      { q: 'Are the casino games live-streamed or computer-generated?', a: 'Both — live dealer tables and automated classic formats, each clearly labeled before you join.' },
      { q: 'Are the odds published anywhere?', a: 'Yes — payout ratios and stake limits show on every table before you place a bet.' },
      { q: 'Can casino winnings move over to other games?', a: 'Yes — everything sits in the same wallet used across the whole platform.' },
      { q: 'Is there a minimum stake at the tables?', a: 'Minimums and maximums vary by table and display before you join.' },
      { q: 'Which resolves faster, live or classic tables?', a: 'Classic formats, generally, since there\'s no live stream to wait on.' },
      { q: 'Are live tables held to the same fairness rules as classic ones?', a: 'Yes — both follow the identical standards described on the Fair Play page.' }
    ],
    related: [
      { label: 'Slot Games', url: '/games/slots' },
      { label: 'Lottery Games', url: '/games/lottery' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/slots': {
    metaTitle: '6 Club Slots – Themed Reels & Instant Results',
    metaDescription:
      'Explore 6 Club Slots with themed reels, adjustable stakes and instant round results across desktop and mobile.',
    keywords: ['6 Club Slots', '6 Club Slot Games', '6 Club Slot'],
    eyebrow: 'Slots',
    h1: '6 Club Slot Games',
    intro: 'A wide spread of slot themes, all running through the same fast, low-bandwidth-friendly interface.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How the Slot Library Is Sorted',
        paragraphs: [
          'Titles are grouped by theme and volatility, with a stake range you can adjust per spin. Results generate and display instantly — no long loading animation eating into your session, even on a weak mobile connection.',
          'New titles surface first on the New Games page before folding into general rotation.'
        ],
        image: {
          src: '/images/screenshots/slots-provider-grid.webp',
          alt: '6 Club slots screen showing titles from multiple game studios grouped for browsing',
          caption: 'A sample of the slot titles available on 6 Club, grouped for quick browsing across multiple game studios.'
        }
      },
      {
        heading: 'Matching a Title to How You Want to Play',
        paragraphs: [
          'Theme and volatility sit right next to each other on every title, so you can filter toward whatever fits the session — a steadier reel with smaller, more frequent payouts for a longer sit-down, or a high-volatility title for a shorter session with bigger swings.',
          'Since stakes adjust per spin, the same title can flex between a cautious approach and an aggressive one just by changing the range — no need to switch games to change pace.'
        ]
      }
    ],
    faqs: [
      { q: 'Can I change my stake between spins?', a: 'Yes — most titles let you adjust the stake per spin within a set range.' },
      { q: 'How quickly do slot rounds settle?', a: 'Instantly after each spin, with barely any wait between rounds.' },
      { q: 'Where do new slot titles show up first?', a: 'On the New Games page, before they move into general rotation.' },
      { q: 'Are slots optimized for weaker mobile connections?', a: 'Yes — the screens are built to load quickly even on a slower connection.' },
      { q: 'How do I check a title\'s volatility before spinning?', a: 'It\'s displayed right alongside the theme on each title.' },
      { q: 'Can I change pace without switching titles?', a: 'Yes — adjusting the stake range within the same title is usually enough.' }
    ],
    related: [
      { label: 'New Games', url: '/games/new' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Arcade Games', url: '/games/arcade' }
    ]
  },

  '/games/lottery': {
    metaTitle: '6 Club Lottery & Colour Prediction Games',
    metaDescription:
      'Play 6 Club Lottery draws and 6 Club Colour Prediction rounds with fast settlement times and a clear result history.',
    keywords: ['6 Club Lottery', '6 Club Color Prediction', '6 Club Colour Prediction', '6 Club Wingo', '6 Club Colour Prediction Game', '6 Club Lottery Games'],
    eyebrow: 'Lottery',
    h1: '6 Club Lottery Games',
    intro: 'Numbered draws on a fixed schedule, plus Colour Prediction rounds that settle in under a minute.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'Two Formats, Two Different Paces',
        paragraphs: [
          'Numbered draws run to a published schedule, so you always know when the next one lands. Colour Prediction moves much faster — under a minute per round — letting you fit several rounds into a short session.',
          'Every result, whichever format, logs to your history, so reviewing outcomes and timing later is just a case of checking your account.'
        ],
        image: {
          src: '/images/screenshots/lottery-wingo-k3-5d.webp',
          alt: '6 Club lottery category listing Win Go, MotoRace, K3 and 5D draw formats',
          caption: '6 Club\'s lottery category, listing draw formats side by side, each with its own guess-number style and settlement time.'
        }
      },
      {
        heading: 'One History View for Both Formats',
        paragraphs: [
          'A settled numbered draw and a settled Colour Prediction round both log to the exact same history screen — outcome, timing, your entry — so comparing recent results never means jumping between separate views.',
          'That shared log is also where the certified random generation covered on the Fair Play page becomes concrete: each entry is its own independently generated result, not a continuation of whatever pattern showed up last round.'
        ],
        image: {
          src: '/images/screenshots/6club-wingo-live-round.webp',
          alt: '6 Club Win Go round in progress with a live countdown and number grid',
          caption: 'A 6 Club Win Go round in progress — the countdown, draw ID and number grid all update together as the round settles.'
        }
      }
    ],
    faqs: [
      { q: 'What exactly is Colour Prediction?', a: 'A fast-settling round type where you predict an outcome colour, confirmed in under a minute.' },
      { q: 'How frequently do numbered draws happen?', a: 'On a published fixed schedule, visible before you enter any round.' },
      { q: 'Can I look back at past results?', a: 'Yes — your full draw and prediction history sits in your account activity log.' },
      { q: 'Which settles faster, Colour Prediction or numbered draws?', a: 'Colour Prediction, typically, since numbered draws run on a fixed schedule.' },
      { q: 'Do both formats log to the same place?', a: 'Yes — one shared round history view covers both.' },
      { q: 'Does a past round affect the next one?', a: 'No — each round is generated independently, regardless of what came before.' }
    ],
    related: [
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/sports': {
    metaTitle: '6 Club Sports – Cricket, Football & Live Betting Markets',
    metaDescription:
      'Bet on 6 Club Sports markets across cricket, football, tennis and kabaddi, with pre-match and live options.',
    keywords: ['6 Club Sports', '6 Club Sports Games'],
    eyebrow: 'Sports',
    h1: '6 Club Sports Games',
    intro: 'Cricket, football, tennis and kabaddi markets, open both before kickoff and live as the action unfolds.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'What\'s On Offer',
        paragraphs: [
          'Cricket, football, tennis and kabaddi anchor the sports lineup, with markets open ahead of a fixture and updating live once it kicks off. Odds move in real time during live play, shown right alongside the fixture.',
          'Settlement follows the official result, and everything you do here counts toward the same reward cycles as any other category.'
        ]
      },
      {
        heading: 'Betting Ahead of Time vs. Betting Live',
        paragraphs: [
          'Pre-match markets open before a fixture starts and give you a fixed set of odds to research and act on ahead of time. Live markets take over once play begins, shifting continuously as the match develops.',
          'Both feed the same settlement process and the same reward tracking — there\'s no separate account state depending on which type of market you\'re using.'
        ]
      }
    ],
    faqs: [
      { q: 'Which sports are covered?', a: 'Cricket, football, tennis and kabaddi, among other disciplines.' },
      { q: 'Is live, in-play betting available?', a: 'Yes — live markets update in real time alongside the standard pre-match options.' },
      { q: 'Do sports results count toward the reward cycles?', a: 'Yes — sports activity feeds the same daily, weekly and monthly cycles as every other category.' },
      { q: 'How does a market actually settle?', a: 'Based on the official result of the underlying match or event.' },
      { q: 'Can I move from a pre-match bet into a live one mid-fixture?', a: 'Yes — live markets open the moment a fixture starts, alongside whatever pre-match position you already hold.' },
      { q: 'Do pre-match and live markets share the same wallet?', a: 'Yes — both draw from and settle to the same wallet.' }
    ],
    related: [
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Leaderboard', url: '/leaderboard' }
    ]
  },

  '/games/fishing': {
    metaTitle: '6 Club Fishing Games – Skill-Based Mini Games',
    metaDescription:
      'Play 6 Club fishing games, one of the platform\'s popular 6 Club Mini Games, with multiplier catches and skill-based aiming.',
    keywords: ['6 Club Fishing Games', '6 Club', '6 Club Mini Games'],
    eyebrow: 'Fishing',
    h1: '6 Club Fishing Games',
    intro: 'Aiming skill meets multiplier payouts here — different fish types pay differently, and timing matters.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'The Basic Rules of a Round',
        paragraphs: [
          'Every round drops you into a shared pool where each fish type carries its own point multiplier. Land a catch and you\'re paid based on that fish\'s value and your stake per shot — rare boss fish carry the biggest payouts by far.',
          'Because timing and aim genuinely matter, these rounds feel more hands-on than pure chance formats, even though the underlying engine is the same certified system used elsewhere.'
        ]
      },
      {
        heading: 'Why the Pool Being Shared Matters',
        paragraphs: [
          'Everyone in the round sees the same fish and the same point values at the same time — landing a catch comes down to aim, timing, and getting to a target before someone else does.',
          'Payouts credit per catch, not at the end of the round, so your results build up continuously and hit your wallet as they happen rather than in one lump sum afterward.'
        ]
      }
    ],
    faqs: [
      { q: 'Is there real skill involved, or is it pure luck?', a: 'Aim and timing genuinely affect your catches, though the payout multiplier per fish is set by the game engine.' },
      { q: 'What makes a boss fish special?', a: 'It\'s a rare, high-value target that pays out well above standard fish types.' },
      { q: 'Do other players share the same round as me?', a: 'Yes — rounds typically run as a shared pool with multiple players targeting fish at once.' },
      { q: 'Does this use a separate wallet from other games?', a: 'No — stakes and winnings run through the same wallet shared across the whole platform.' },
      { q: 'When do payouts actually land — per catch or at the end?', a: 'Per catch, credited the moment it happens.' },
      { q: 'Can someone else grab the fish I\'m aiming at?', a: 'Yes — since the pool is shared, timing matters because others can target the same fish.' }
    ],
    related: [
      { label: 'Arcade Games', url: '/games/arcade' },
      { label: 'Crash Games', url: '/games/crash' },
      { label: 'Popular Games', url: '/games/popular' }
    ]
  },

  '/games/crash': {
    metaTitle: '6 Club Aviator & Crash Games – Multiplier Cash-Out Rounds',
    metaDescription:
      '6 Club Aviator and other crash games: a rising multiplier that can be cashed out any time before the round ends.',
    keywords: ['6 Club Crash Games', '6 Club Color Prediction', '6 Club Aviator'],
    eyebrow: 'Crash',
    h1: '6 Club Crash Games',
    intro: 'One simple rule drives crash and Aviator-style games here: cash out before the multiplier crashes.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How One Round Plays Out',
        paragraphs: [
          'A rising multiplier applies to your stake from the moment a round starts. You pick the moment to cash out — wait longer for a bigger potential payout, but the round can crash at any second and zero out anything you haven\'t already banked.',
          'Crash points and round history log automatically, much like Colour Prediction results do, giving you a clear record to look back on.'
        ],
        image: {
          src: '/images/screenshots/mini-games-grid.webp',
          alt: '6 Club mini games list including crash-style titles alongside quick-round games',
          caption: '6 Club\'s mini games list, where crash-style titles sit alongside other quick-round formats.'
        }
      },
      {
        heading: 'Deciding Your Cash-Out Point in Advance',
        paragraphs: [
          'Since a round can end without warning, plenty of players settle on a target multiplier before it even starts rather than reacting under pressure once the number\'s climbing fast — a fixed target takes the split-second decision out of the equation.',
          'That\'s exactly what the round history is useful for: it shows a spread of recent crash points rather than one number, which paints a far more realistic picture of typical outcomes than any single round would on its own.'
        ],
        image: {
          src: '/images/screenshots/aviator-bonus.webp',
          alt: '6 Club crash game bonus promotion tied to total turnover, with bonus tiers by wagering amount',
          caption: 'A 6 Club crash-game bonus tied to total turnover, with bonus tiers shown by wagering amount.'
        }
      }
    ],
    faqs: [
      { q: 'What\'s the actual way to win here?', a: 'Cash out at a multiplier of your choosing before the round crashes — waiting longer raises both potential payout and risk.' },
      { q: 'Can I look back at previous crash points?', a: 'Yes — the round history displays past results so you can review recent outcomes.' },
      { q: 'Is there a ceiling on how high the multiplier can climb?', a: 'It varies by game version and is shown directly in the game interface.' },
      { q: 'How does this compare to Colour Prediction?', a: 'Both settle fast, but crash games ride a rising multiplier while Colour Prediction is a straight outcome guess.' },
      { q: 'Should I pick my cash-out point ahead of time or decide live?', a: 'Most players find setting a target before the round starts easier than deciding mid-climb.' },
      { q: 'Does the last round\'s crash point predict the next one?', a: 'No — each round settles independently, exactly like Colour Prediction rounds do.' }
    ],
    related: [
      { label: 'Lottery & Color Prediction', url: '/games/lottery' },
      { label: 'Fishing Games', url: '/games/fishing' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/games/arcade': {
    metaTitle: '6 Club Arcade – Quick Casual Mini Games',
    metaDescription:
      'Play short, casual 6 Club Mini Games in the arcade category, designed for quick sessions between bigger game types.',
    keywords: ['6 Club Arcade Games', '6 Club', '6 Club Mini Games'],
    eyebrow: 'Arcade',
    h1: '6 Club Arcade Games',
    intro: 'Short, casual rounds built for a quick break, not a long sustained session.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'What Sets Arcade Apart',
        paragraphs: [
          'Rounds here run shorter and simpler than casino or sports markets, making them a natural fit for a quick break between other categories. Stakes stay generally lower too, matching the faster pace.'
        ]
      },
      {
        heading: 'When Arcade Actually Makes Sense',
        paragraphs: [
          'Two situations, mainly: filling a short gap between longer sessions elsewhere, or getting comfortable with the platform\'s interface at low stakes before moving on to something with more moving parts, like live casino tables or sports markets.',
          'Since the rules stay simple across the whole category, hopping between different arcade titles takes almost no relearning — part of why they suit quick, casual play rather than long, focused sessions.'
        ]
      }
    ],
    faqs: [
      { q: 'How long does a typical round last?', a: 'Rounds are designed short, often resolving in well under a minute.' },
      { q: 'Are stakes lower here than other categories?', a: 'Generally yes — lower minimums match the faster round pace.' },
      { q: 'Does arcade play count toward the reward cycles?', a: 'Yes — it contributes to the same daily, weekly and monthly cycles as everything else.' },
      { q: 'Is this a good starting point for new players?', a: 'Yes — simple rules and short rounds make it an easy entry point for a new account.' },
      { q: 'Are the rules consistent across different arcade titles?', a: 'Yes — they generally share similar, simple rules, so switching between them is easy.' },
      { q: 'Is it good for filling a short break?', a: 'Yes — short round times make it a natural fit between longer sessions elsewhere.' }
    ],
    related: [
      { label: 'Fishing Games', url: '/games/fishing' },
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'New Games', url: '/games/new' }
    ]
  },

  '/games/popular': {
    metaTitle: '6 Club Popular Games – Most Played This Month',
    metaDescription:
      'See the most played 6 Club Games this month, ranked by active player counts across every category.',
    keywords: ['6 Club Popular Games', '6 Club Game', '6club Games'],
    eyebrow: 'Popular',
    h1: '6 Club Popular Games',
    intro: 'Ranked by active player counts and refreshed on a rolling basis — this is what\'s actually drawing a crowd right now.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'How the Ranking Gets Built',
        paragraphs: [
          'Active sessions across casino, slots, lottery, sports, crash, fishing and arcade all feed into this list, showing which titles are pulling the most play right now. It refreshes regularly, so it tracks recent trends rather than sitting as a fixed all-time chart.'
        ],
        image: {
          src: '/images/screenshots/popular-games-rtp.webp',
          alt: '6 Club popular games list ranked with published RTP percentages',
          caption: '6 Club\'s popular games list, showing top titles ranked alongside their published RTP percentage.'
        }
      },
      {
        heading: 'A Shortcut for Trying Something New',
        paragraphs: [
          'Since the ranking reflects recent activity rather than an all-time chart, it\'s a decent starting point if you want to branch outside your usual category without researching every option yourself — anything near the top is, by definition, something a lot of current players are actively choosing.',
          'It refreshes on that same rolling basis across every category, so a strong week for sports or a new slot release can shuffle the list noticeably compared to the month before.'
        ],
        image: {
          src: '/images/screenshots/6club-wingo-bet-slip.webp',
          alt: '6 Club bet slip showing stake and quantity selection for a popular lottery round',
          caption: 'A bet slip for one of 6 Club\'s most popular formats, with stake and quantity set before confirming.'
        }
      }
    ],
    faqs: [
      { q: 'How is this ranking put together?', a: 'By recent active player counts across every category, refreshed on a rolling basis.' },
      { q: 'Does it cover all categories or just some?', a: 'All of them — casino, slots, lottery, sports, crash, fishing and arcade are all eligible.' },
      { q: 'How often does the list change?', a: 'Regularly — it tracks recent trends rather than staying fixed.' },
      { q: 'Where do I find titles too new to rank here yet?', a: 'The New Games page — new releases show up there before they build enough play to appear here.' },
      { q: 'Is this a good way to discover a new category?', a: 'Yes — it reflects what a lot of current players are actually choosing right now.' },
      { q: 'Can one big release shake up the ranking fast?', a: 'Yes — since it updates on a rolling basis, a strong week for any title can move it noticeably.' }
    ],
    related: [
      { label: 'New Games', url: '/games/new' },
      { label: 'Leaderboard', url: '/leaderboard' },
      { label: 'Game Categories', url: '/games' }
    ]
  },

  '/games/new': {
    metaTitle: 'New 6 Club Games – Latest Releases',
    metaDescription:
      'Browse the newest 6 Club Games added across Casino, Slots, Lottery, Sports, Aviator, Fishing and Arcade.',
    keywords: ['6 Club New Games', '6 Club Game', '6club Games'],
    eyebrow: 'New Releases',
    h1: 'New 6 Club Games',
    intro: 'Fresh titles land here periodically, across every category — this is the first stop before general rotation.',
    breadcrumbTrail: [{ label: 'Games', url: '/games' }],
    sections: [
      {
        heading: 'The First Place a New Title Shows Up',
        paragraphs: [
          'Before anything moves into its permanent category listing, it appears here first — giving early players a shot at a new casino table, slot theme or arcade format the moment it goes live.'
        ]
      },
      {
        heading: 'From "New" to Just Part of the Rotation',
        paragraphs: [
          'A title usually sits here for a stretch specifically so early players can flag anything off before it settles permanently into its category page alongside established titles — which is why a slot or arcade game might briefly appear on both this page and its category page at once.',
          'Checking in here periodically is the fastest way to catch what\'s just launched, since new releases can land in any category at any time — a new casino table and a new arcade title can both go live the same week without one bumping the other.'
        ]
      }
    ],
    faqs: [
      { q: 'How regularly do new games get added?', a: 'Periodically, across categories — check back here for the latest.' },
      { q: 'Do new releases count toward rewards right away?', a: 'Yes — activity on a brand-new title counts toward the daily, weekly and monthly cycles just like anything established.' },
      { q: 'Can I suggest a game type I\'d like to see?', a: 'Yes — feedback goes through the Contact or Support pages.' },
      { q: 'Are new titles tested before launch?', a: 'Yes — they go through the same fair play and security checks as everything else before going live.' },
      { q: 'How long does something stay listed as "new"?', a: 'Typically a set period before it settles permanently into its own category page.' },
      { q: 'Can multiple categories get new releases in the same week?', a: 'Yes — different categories can launch new titles simultaneously without affecting each other.' }
    ],
    related: [
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'Game Categories', url: '/games' },
      { label: 'Announcements', url: '/announcements' }
    ]
  },

  '/download': {
    metaTitle: '6 Club Download – Official 6 Club App for Android, iOS & Desktop',
    metaDescription:
      'Download 6 Club App on Android via APK, install on iOS, or play instantly on desktop — the official 6 Club App download hub.',
    keywords: ['6 Club Download', '6 Club APK', '6 Club App', '6club App', '6club Download', 'Download 6 Club App', 'Official 6 Club App', '6 Club App Download'],
    eyebrow: 'Download',
    h1: 'Download 6 Club',
    intro: 'The official 6 Club App (6club App) is available as an Android APK, through an iOS installation guide, or directly on desktop browsers.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Pick Your Platform',
        paragraphs: [
          'Android players install the APK directly — the Android Guide walks through it. iOS follows a different, browser-based install process since Apple\'s distribution rules differ, covered in the iOS Guide. Desktop skips installation entirely; just play straight through a browser.',
          'Whatever you pick, your account, wallet and rewards stay exactly the same — installing an app only changes how you reach 6 Club, never what\'s inside the account.'
        ]
      },
      {
        heading: 'Matching the Platform to How You Actually Play',
        paragraphs: [
          'If 6 Club is mostly a phone thing for you, the Android APK or iOS install gives a faster, app-like return trip each time instead of typing a URL into a browser. Mostly at a desk instead? Skipping installation and using a browser is the lower-friction call, since there\'s nothing to keep updated.',
          'None of this locks you in — an account started on desktop works exactly the same if you install the Android APK later, and the reverse holds too, since everything ties back to the login, not the device it began on.'
        ]
      }
    ],
    faqs: [
      { q: 'Is the APK safe?', a: 'Only if downloaded from the official source in the Android Guide — that\'s the only way to avoid modified files.' },
      { q: 'Is there an actual iOS app?', a: 'Access follows a guided installation process, different from the Android APK method — see the iOS Guide.' },
      { q: 'Do desktop players need to download anything?', a: 'No — desktop works straight through a browser, no separate app needed.' },
      { q: 'Does my account stay the same across every platform?', a: 'Yes — account, wallet and rewards stay identical whether you\'re on Android, iOS or desktop.' },
      { q: 'Can I switch platforms after I\'ve already registered?', a: 'Yes — an account works the same no matter which platform you add later.' },
      { q: 'Which option suits someone who mostly plays on their phone?', a: 'The Android APK or iOS install, for that quicker, app-like return each time.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Desktop Guide', url: '/download/desktop' }
    ]
  },

  '/download/android': {
    metaTitle: '6 Club APK – Install the Official 6 Club App on Android',
    metaDescription:
      'Step-by-step guide to downloading the 6 Club APK latest version and installing 6 Club on Android devices safely.',
    keywords: ['6 Club APK', '6 Club Android', '6club APK', 'Install 6 Club', '6 Club APK Latest Version'],
    eyebrow: 'Android Guide',
    h1: '6 Club Android Installation Guide',
    intro: 'Installing the 6 Club APK on Android takes a few extra steps compared to a Play Store app.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'The Install Process, Step by Step',
        paragraphs: [
          'Grab the APK from the official Download page — never a third-party link. Before opening it, flip on installation from unknown sources in your Android settings, since this app ships outside the Play Store. Once it\'s installed, open it and sign in with your existing account, or register fresh if you\'re new.',
          'To stay updated, just re-download the APK from the official page whenever a new version shows up on the Announcements page.'
        ]
      },
      {
        heading: 'When the Install Doesn\'t Go As Planned',
        paragraphs: [
          'Almost every installation hiccup traces back to one of two things: unknown sources not enabled for whichever app opened the file, or a half-installed older version conflicting with the new one. Uninstalling anything old before installing fresh usually fixes it.',
          'If the app installs fine but login fails, check that you\'re using the same registered number as your other devices — installing and logging in are two separate steps, and finishing one doesn\'t mean the other\'s done.'
        ]
      }
    ],
    faqs: [
      { q: 'Why does Android ask me to allow unknown sources?', a: 'Because the app is distributed outside the Play Store, so that setting has to be switched on once to install it.' },
      { q: 'Is turning that setting on actually risky?', a: 'Not if you only ever install the APK from the official Download page — avoid unverified third-party links.' },
      { q: 'Do I need to register again for the Android app specifically?', a: 'No — your existing account works right away; new players can also sign up directly inside the app.' },
      { q: 'How do updates work for the Android app?', a: 'Re-download the latest APK from the Download page whenever a new version gets announced.' },
      { q: 'What if the APK just won\'t install?', a: 'Uninstall any older version first, then double-check unknown sources is enabled for the app you\'re using to open the file.' },
      { q: 'It installed but I can\'t log in — what\'s wrong?', a: 'Make sure you\'re using the same registered number as on your other devices — install and login aren\'t the same step.' }
    ],
    related: [
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Desktop Guide', url: '/download/desktop' },
      { label: 'Announcements', url: '/announcements' }
    ]
  },

  '/download/ios': {
    metaTitle: '6 Club App on iOS – How to Access 6 Club on iPhone',
    metaDescription:
      'Guide to using the 6 Club App on iOS devices, including installation steps and how your 6 Club account carries over.',
    keywords: ['6 Club iOS', '6 Club App', 'Install 6 Club', 'Official 6 Club App'],
    eyebrow: 'iOS Guide',
    h1: '6 Club iOS Installation Guide',
    intro: '6 Club on iOS follows a different distribution path than the Android APK.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'Setting Up on iPhone or iPad',
        paragraphs: [
          'Open the iOS link from the Download page on your device and follow the on-screen prompts. Depending on your iOS version, you might need to trust the app profile once in device settings before it\'ll open properly.',
          'Once it\'s in, log in with your usual credentials — wallet balance, rewards and VIP tier show up exactly as they do on Android or desktop.'
        ]
      },
      {
        heading: 'Why This Looks Nothing Like the Android Install',
        paragraphs: [
          'Apple\'s App Store review process simply doesn\'t accommodate every category 6 Club runs, so iOS access relies on a direct installation link plus a one-time device-trust step instead of a normal App Store listing. It\'s extra friction, but only once — future updates don\'t repeat the trust step unless iOS itself resets app permissions.',
          'This isn\'t a 6 Club quirk, either — it\'s a common distribution pattern across online gaming generally, for the exact same App Store restriction.'
        ]
      }
    ],
    faqs: [
      { q: 'Why do I have to trust a profile on iOS?', a: 'Since distribution happens outside the App Store, iOS requires that one-time trust step before the app will open.' },
      { q: 'Do my rewards and VIP tier show up the same way on iOS?', a: 'Yes — wallet, rewards and VIP tier are identical across iOS, Android and desktop.' },
      { q: 'Is there a minimum iOS version needed?', a: 'Current compatibility details are listed right on the Download page install link.' },
      { q: 'Do I register separately for iOS?', a: 'No — existing accounts just log in, and new players can register from inside the app itself.' },
      { q: 'Does every update require re-trusting the app?', a: 'No — that step is generally one-time, unless iOS resets your app permissions.' },
      { q: 'Why isn\'t this just a normal App Store download?', a: 'App Store review rules don\'t accommodate every category on the platform, so a direct link is used instead.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'Desktop Guide', url: '/download/desktop' },
      { label: 'Login', url: '/login' }
    ]
  },

  '/download/desktop': {
    metaTitle: '6 Club Desktop – Play 6 Club Without Downloading',
    metaDescription:
      'How to play 6 Club directly from a desktop browser without installing the 6 Club App or any extra software.',
    keywords: ['6 Club Desktop', '6 Club', 'Official 6 Club App'],
    eyebrow: 'Desktop Guide',
    h1: '6 Club Desktop Guide',
    intro: 'Desktop access to 6 Club does not require downloading or installing anything.',
    breadcrumbTrail: [{ label: 'Download', url: '/download' }],
    sections: [
      {
        heading: 'Just Open a Browser',
        paragraphs: [
          'Load 6 Club in any modern desktop browser and sign in with your existing account, or register on the spot if you\'re new. The layout adapts to the bigger screen, but the same game categories, wallet and reward system carry over exactly as they are on mobile.',
          'For the smoothest performance, keep your browser current and skip unnecessary extensions that can drag down page speed.'
        ]
      },
      {
        heading: 'Where Desktop Genuinely Has an Edge',
        paragraphs: [
          'A bigger screen mainly helps with visually dense formats — live dealer tables and sports markets juggling several fixtures at once are easier to follow on desktop, even though both run perfectly well on mobile too.',
          'Since nothing gets installed, desktop is also a handy way to check your account from a borrowed or shared computer without leaving an app behind — just log out afterward if it isn\'t your own device.'
        ]
      }
    ],
    faqs: [
      { q: 'Do I need to install anything for desktop play?', a: 'No — it runs straight in your browser, no download required.' },
      { q: 'Which browser works best?', a: 'Any current version of a major browser; keeping it updated gives the best performance.' },
      { q: 'Is the desktop experience different from mobile in any real way?', a: 'The layout adapts to a bigger screen, but game categories, wallet and rewards stay identical.' },
      { q: 'Can I bounce between desktop and the mobile app freely?', a: 'Yes — your account stays in sync no matter which one you use.' },
      { q: 'Is desktop better for watching live tables or multi-match sports?', a: 'A larger screen helps with visual detail, though both formats work fully on mobile as well.' },
      { q: 'Is it safe on a shared or borrowed computer?', a: 'Yes — since nothing installs, just remember to log out when you\'re done.' }
    ],
    related: [
      { label: 'Android Guide', url: '/download/android' },
      { label: 'iOS Guide', url: '/download/ios' },
      { label: 'Register', url: '/register' }
    ]
  },

  '/register': {
    metaTitle: '6 Club Register – Create 6 Club Account in Minutes',
    metaDescription:
      'Sign Up 6 Club in under a minute: verify your number, set a password and join 6 Club to start playing right away.',
    keywords: ['6 Club Register', '6 Club Registration', '6club Register', 'Create 6 Club Account', 'Join 6 Club', 'Sign Up 6 Club', '6 Club Register New Account'],
    eyebrow: 'Register',
    h1: 'Register on 6 Club',
    intro: 'Join 6 Club in minutes: creating a 6 Club (6club) account takes a mobile number, an OTP verification step and a password.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Registering Actually Involves',
        paragraphs: [
          'Type your mobile number into the registration form, then confirm the one-time code sent to it. Once that\'s verified, set a password — that combination is what you\'ll use to log in from here on.',
          'From there, head to Payment Methods, add one, and make your first deposit — that\'s what switches on full access to every game category.'
        ],
        image: {
          src: '/images/screenshots/6club-register-screen.webp',
          alt: '6 Club registration form asking for phone number, password and invite code',
          caption: 'The 6 Club registration form, asking for a phone number, a password and confirmation before your account is created.'
        }
      },
      {
        heading: 'Before You Even Open the Form',
        paragraphs: [
          'Have your phone within reach — the one-time code expires after a short window, so if it lapses before you enter it, you\'ll need to request a fresh one.',
          'It\'s also worth deciding on a payment method beforehand. Registering itself only needs a number and a password, but you can\'t place a real stake anywhere until a deposit clears, so having a method ready cuts the gap between signing up and actually playing.'
        ]
      }
    ],
    faqs: [
      { q: 'What\'s actually required to sign up?', a: 'Just a valid mobile number and a password — the number gets verified with a one-time code.' },
      { q: 'How long does the whole process take?', a: 'Usually under a minute once the verification code arrives and you enter it.' },
      { q: 'Can I change my number after registering?', a: 'Yes, but it\'s handled through Support — reach out via the Contact or Support page.' },
      { q: 'What\'s the very next step after signing up?', a: 'Add a payment method and make a first deposit — that unlocks every game category and reward.' },
      { q: 'My code expired before I entered it — now what?', a: 'Just request a new one-time code.' },
      { q: 'Can I look around before finishing registration?', a: 'General info pages are open without an account, but game categories and rewards need you registered first.' }
    ],
    related: [
      { label: 'Login', url: '/login' },
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'Deposit Guide', url: '/deposit-guide' }
    ]
  },

  '/login': {
    metaTitle: '6 Club Login – Official 6 Club Sign In Page',
    metaDescription:
      '6 Club Login using your registered mobile number and password. Member login steps, plus recovery help if you\'re signed out.',
    keywords: ['6 Club Login', '6 Club Account', '6 Club Sign In', '6 Club Member Login', '6 Club Login Guide', '6 Club Login Official Website'],
    eyebrow: 'Login',
    h1: '6 Club Login',
    intro: 'Log in to 6 Club (also written 6club) — the official 6 Club Login page — with your registered mobile number and password from any supported device.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Signing In',
        paragraphs: [
          'Type your registered mobile number and password into the login form. The same pair works on Android, iOS and desktop alike, so your wallet, rewards and VIP tier look identical no matter which device you sign in from.',
          'Blanked on your password? Use the Forgot Password page to reset it through your registered number — there\'s no need to create a fresh account.'
        ],
        image: {
          src: '/images/screenshots/6club-login-screen.webp',
          alt: '6 Club login screen with phone number and password fields',
          caption: 'The 6 Club login screen, using a registered mobile number and password, with phone or email login tabs.'
        }
      },
      {
        heading: 'Keeping a Session Secure',
        paragraphs: [
          'Staying logged in between visits is convenient on your own phone or laptop, but worth switching off on a shared or public device — logging out manually keeps your wallet and account details from being visible to whoever uses it next.',
          'Notice login activity you don\'t recognize? Change your password immediately through Forgot Password — that\'s the fastest fix — and Support can help review recent activity if anything still looks off.'
        ],
        image: {
          src: '/images/screenshots/6club-login-mockup.webp',
          alt: '6 Club login screen with phone number and password fields',
          caption: 'The 6 Club login screen, ready for a registered mobile number and password on any device.'
        }
      }
    ],
    faqs: [
      { q: 'What credentials do I log in with?', a: 'Your registered mobile number and password — the same pair works on any device.' },
      { q: 'Can I be logged in on more than one device at once?', a: 'Yes — the same credentials work across Android, iOS and desktop, staying in sync.' },
      { q: 'I\'ve forgotten my password — what now?', a: 'Head to Forgot Password and reset it through your registered mobile number.' },
      { q: 'Should I just make a new account if login fails?', a: 'No — try password recovery first; a duplicate account won\'t inherit your existing wallet or rewards.' },
      { q: 'Is staying signed in on a shared device a bad idea?', a: 'It\'s safer to log out manually on any device that isn\'t only yours.' },
      { q: 'What if I spot login activity I don\'t recognize?', a: 'Reset your password right away through Forgot Password, and loop in Support if anything still seems off.' }
    ],
    related: [
      { label: 'Forgot Password', url: '/forgot-password' },
      { label: 'Register', url: '/register' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/forgot-password': {
    metaTitle: '6 Club Forgot Password – Reset Your 6 Club Account Login',
    metaDescription:
      'Reset your 6 Club account login using your registered mobile number if you can\'t remember your password.',
    keywords: ['6 Club Forgot Password', '6 Club Login', '6 Club Account Login'],
    eyebrow: 'Account Recovery',
    h1: '6 Club Forgot Password',
    intro: 'Reset a forgotten 6 Club password using the mobile number linked to your account.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'The Reset Flow',
        paragraphs: [
          'Enter the mobile number tied to your account and request a reset code. Confirm the code once it arrives, pick a new password, and you\'re back to logging in normally with your number and the new password.',
          'Lost access to that number entirely? Contact Support directly for identity-verified recovery.'
        ]
      },
      {
        heading: 'Picking a Password Worth Trusting',
        paragraphs: [
          'Your number and password are the only two things standing between anyone and your wallet, so it\'s worth choosing something you haven\'t reused elsewhere rather than a slight tweak on the old one.',
          'If the reset was prompted by a suspicion someone else had access, it\'s worth a quick look at your recent account activity afterward too, just to confirm nothing shifted while you were locked out.'
        ]
      }
    ],
    faqs: [
      { q: 'What are the steps to reset my password?', a: 'Enter your registered number, confirm the code sent to it, then set a new password.' },
      { q: 'I no longer have my registered number — what do I do?', a: 'Contact Support directly for identity-verified account recovery.' },
      { q: 'Does resetting my password touch my wallet or rewards?', a: 'No — it only changes account access; wallet, rewards and VIP tier stay untouched.' },
      { q: 'How long does the whole reset take?', a: 'The code arrives quickly, and the new password takes effect the moment you confirm it.' },
      { q: 'Is it fine to reuse an old password from elsewhere?', a: 'Better not to, especially if this reset followed a suspected access issue.' },
      { q: 'Should I check my activity log after resetting?', a: 'It\'s a sensible habit, particularly if unauthorized access was the reason for the reset.' }
    ],
    related: [
      { label: 'Login', url: '/login' },
      { label: 'Support', url: '/support' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/payment-methods': {
    metaTitle: '6 Club Wallet – Supported Payment Methods',
    metaDescription:
      'See the payment methods supported in your 6 Club Wallet for deposits and withdrawals, and how to add one to your account.',
    keywords: ['6 Club Payment Methods', '6 Club', '6 Club Wallet', '6 Club Payment', '6 Club Deposit and Withdrawal'],
    eyebrow: 'Payment Methods',
    h1: '6 Club Payment Methods',
    intro: '6 Club supports a range of verified payment methods for both deposits and withdrawals.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Supported Options',
        paragraphs: [
          'Bank transfers, UPI and a handful of digital wallets cover both deposits and withdrawals, all routed through verified partners. Exact options can shift slightly depending on your region and verification status.',
          'Add a method from account settings before that first deposit — it\'ll generally be the same one used for withdrawals too, which keeps transactions consistent and easy to trace.'
        ],
        image: {
          src: '/images/screenshots/wallet-split-view.webp',
          alt: '6 Club wallet summary showing main wallet and third-party wallet balances',
          caption: 'A 6 Club wallet summary showing the split between main wallet and third-party wallet balances, with quick links to deposit and withdrawal history.'
        }
      },
      {
        heading: 'The Logic Behind Matching Deposit and Withdrawal Methods',
        paragraphs: [
          'Routing both through the same verified channel is as much a security measure as a convenience — funds always return to a source already confirmed as yours, rather than some arbitrary destination typed in at withdrawal time.',
          'If your usual method stops working for whatever reason, adding a new verified one from account settings is straightforward, though it typically needs its own verification pass before it can handle withdrawals.'
        ]
      }
    ],
    faqs: [
      { q: 'What payment options are actually supported?', a: 'Bank transfers, UPI and select digital wallets, all through verified payment partners.' },
      { q: 'Can my deposit and withdrawal methods differ?', a: 'Generally no — withdrawals go through the same verified method as deposits, for security consistency.' },
      { q: 'Does every option work in every region?', a: 'Not always — availability can shift slightly by region and verification status.' },
      { q: 'Are there fees attached to any method?', a: 'Any applicable fee shows up before you confirm a deposit or withdrawal.' },
      { q: 'Why does the same method have to cover both directions?', a: 'It keeps funds tied to a source already confirmed as yours — security first, convenience second.' },
      { q: 'Can I add another method down the line?', a: 'Yes, from account settings — though a freshly added one usually needs its own verification before withdrawals.' }
    ],
    related: [
      { label: 'Deposit Guide', url: '/deposit-guide' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/deposit-guide': {
    metaTitle: '6 Club Deposit Guide – How to Recharge Your Wallet',
    metaDescription:
      'Step-by-step 6 Club deposit and recharge guide covering payment methods, confirmation times and troubleshooting tips.',
    keywords: ['6 Club Deposit', '6 Club Deposit Guide', '6 Club Recharge'],
    eyebrow: 'Deposit Guide',
    h1: '6 Club Deposit Guide',
    intro: 'Adding funds to your 6 Club wallet takes a few steps through a verified payment method.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Putting Money In',
        paragraphs: [
          'From the dashboard, pick a method off the Payment Methods page, enter an amount, and confirm through your chosen provider. Most deposits hit the wallet within minutes of the provider confirming the transaction.',
          'Nothing showing up after a reasonable wait? Check your provider\'s own transaction history first, then reach Support with the transaction reference if it\'s still missing.'
        ],
        image: {
          src: '/images/screenshots/deposit-channels.webp',
          alt: '6 Club deposit screen showing supported payment channels and quick-select amounts',
          caption: 'The 6 Club Deposit screen, showing supported channels alongside quick-select deposit amounts.'
        }
      },
      {
        heading: 'Why Deposits Sometimes Lag',
        paragraphs: [
          'Two things usually explain a slow deposit: a mismatch between the account holder name on the payment method and your registered details, or a delay sitting on the payment provider\'s side rather than anything on the platform. Checking the provider\'s own transaction status first usually tells you which.',
          'Hang onto your transaction reference if a deposit is delayed — it lets Support trace the exact request instead of hunting by amount and rough time, which speeds things up considerably.'
        ]
      }
    ],
    faqs: [
      { q: 'How fast does a deposit typically post?', a: 'Within minutes of the payment provider confirming it, in most cases.' },
      { q: 'What if my deposit still hasn\'t shown up?', a: 'Check your provider\'s transaction history first, then contact Support with your transaction reference.' },
      { q: 'Is there a minimum amount for a deposit?', a: 'It varies by method and shows before you confirm the transaction.' },
      { q: 'Can I use any method listed on the Payment Methods page?', a: 'Yes, subject to your account\'s current verification status.' },
      { q: 'What most commonly causes a delayed deposit?', a: 'A name mismatch between the payment method and your registered details, or a hiccup on the provider\'s end.' },
      { q: 'What should I have ready before messaging Support about a deposit?', a: 'Your transaction reference — it lets them trace the request directly instead of searching by amount and time.' }
    ],
    related: [
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'Withdrawal Guide', url: '/withdrawal-guide' },
      { label: 'Support', url: '/support' }
    ]
  },

  '/withdrawal-guide': {
    metaTitle: '6 Club Withdrawal Guide – How Payouts Are Processed',
    metaDescription:
      'How 6 Club withdrawal requests are processed, typical payment times and how your VIP tier affects payout speed.',
    keywords: ['6 Club Withdrawal', '6 Club Withdrawal Guide', '6 Club Balance', '6 Club Transactions'],
    eyebrow: 'Withdrawal Guide',
    h1: '6 Club Withdrawal Guide',
    intro: 'Withdrawals on 6 Club are processed through the same verified method used for your deposits.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Sending a Withdrawal Request',
        paragraphs: [
          'From your wallet, request a payout to your verified method and confirm the amount. Most requests get reviewed and cleared the same day, though speed can shift depending on your verification status and current VIP tier.',
          'Higher VIP tiers jump ahead in the withdrawal queue, so payout confirmation lands faster than it would on a base-tier account.'
        ],
        image: {
          src: '/images/screenshots/withdraw-screen.webp',
          alt: '6 Club withdraw screen showing available balance and a saved payout method',
          caption: 'The 6 Club Withdraw screen, showing available balance, supported payout methods and a saved withdrawal address.'
        }
      },
      {
        heading: 'What Keeps a Withdrawal Moving Quickly',
        paragraphs: [
          'Current verification on your payment method is the single biggest lever here — a lapsed or mismatched verification is the most common reason a request gets pulled into manual review instead of clearing automatically.',
          'Double-checking the amount before hitting confirm avoids the other common slowdown: a request that needs correcting and resubmitting always takes longer than one confirmed right the first time.'
        ]
      }
    ],
    faqs: [
      { q: 'What\'s the typical withdrawal timeline?', a: 'Most verified requests clear the same day, though verification status and VIP tier can shift that.' },
      { q: 'Does a higher VIP tier speed things up?', a: 'Yes — higher tiers get prioritized in the withdrawal queue.' },
      { q: 'Can I send a withdrawal to a different method than I deposited with?', a: 'Generally no — withdrawals follow the same verified method as deposits, for security.' },
      { q: 'My withdrawal is taking longer than expected — what now?', a: 'Contact Support with your request details if it runs noticeably past the usual same-day window.' },
      { q: 'What most often triggers manual review?', a: 'A lapsed or mismatched verification on the payment method.' },
      { q: 'Does getting the amount right the first time actually matter?', a: 'Yes — a request needing correction and resubmission always takes longer than one confirmed correctly upfront.' }
    ],
    related: [
      { label: 'Deposit Guide', url: '/deposit-guide' },
      { label: 'Payment Methods', url: '/payment-methods' },
      { label: 'VIP Program', url: '/vip' }
    ]
  },

  '/security': {
    metaTitle: '6 Club Security – Is 6 Club Safe? Account Protection Explained',
    metaDescription:
      '6 Club security overview: encrypted sessions, verified payments and how 6 Club keeps your account and balance protected.',
    keywords: ['6 Club Security', '6 Club', 'Is 6 Club Safe'],
    eyebrow: 'Security',
    h1: '6 Club Security',
    intro: '6 Club applies account-level and platform-level protections across every game category.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How the Account Itself Is Protected',
        paragraphs: [
          'Every session runs encrypted, and getting in requires your registered number alongside your password. Withdrawal requests get checked against your verified payment method specifically to cut the risk of an unauthorized transfer slipping through.',
          'Use a password you haven\'t reused anywhere else, and never hand over login details, OTP codes or your password to anyone claiming to be support — genuine support staff will never ask for it.'
        ],
        image: {
          src: '/images/screenshots/6club-account-wallet-overview.webp',
          alt: '6 Club account overview showing UID, VIP tier, last login timestamp and wallet balance',
          caption: 'A 6 Club account overview showing your UID, VIP tier and last login timestamp alongside your wallet balance — everything tied to one encrypted, password-protected session.'
        }
      },
      {
        heading: 'Spotting the Scams That Actually Cause Problems',
        paragraphs: [
          'Most compromised accounts have nothing to do with a platform flaw — they trace back to a message or call posing as support, asking for a password, OTP code or a "verification link" outside the app. Real communication from us never needs those details to fix anything.',
          'An OTP code you didn\'t ask for is a red flag someone else has your number and is trying to log in — change your password right away instead of brushing it off.'
        ]
      }
    ],
    faqs: [
      { q: 'What actually protects my account here?', a: 'Encrypted sessions, password-protected login, and withdrawal checks against your verified payment method.' },
      { q: 'Would support ever ask for my password?', a: 'No — genuine support never asks for your password or OTP codes.' },
      { q: 'I think someone accessed my account without permission — what do I do?', a: 'Reset your password immediately via Forgot Password, then contact Support.' },
      { q: 'How does this page relate to Fair Play?', a: 'This one covers account protection; Fair Play covers how game outcomes themselves get verified.' },
      { q: 'What if I get an OTP I never requested?', a: 'Treat it as a login attempt by someone else and change your password immediately.' },
      { q: 'How do I spot a scam message pretending to be support?', a: 'Real support never asks for your password, an OTP code, or a click on an outside verification link.' }
    ],
    related: [
      { label: 'Fair Play', url: '/fair-play' },
      { label: 'Responsible Gaming', url: '/responsible-gaming' },
      { label: 'Forgot Password', url: '/forgot-password' }
    ]
  },

  '/responsible-gaming': {
    metaTitle: '6 Club Responsible Gaming – Play Within Your Limits',
    metaDescription:
      '6 Club responsible gaming guidance, including setting deposit and time limits and recognizing when to take a break.',
    keywords: ['6 Club Responsible Gaming', '6 Club', '6 Club Guide'],
    eyebrow: 'Responsible Gaming',
    h1: '6 Club Responsible Gaming',
    intro: '6 Club encourages players to set limits and treat gaming as entertainment, not income.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Setting Your Own Boundaries',
        paragraphs: [
          'Account settings let you set personal deposit limits and session reminders — one way to track both spending and time without relying on memory. It\'s far better to set these before you start playing than after a rough session.',
          'You need to be 18 or older to register at all. And if play starts feeling like an obligation instead of entertainment, the cooling-off options in account settings let you step away for a while.'
        ]
      },
      {
        heading: 'Signs That Are Worth Noticing Early',
        paragraphs: [
          'A shift in your own habits is usually easier to catch than waiting for some obvious red flag — chasing a previous loss, regularly playing longer than you meant to, or feeling anxious checking your balance are all reasons to set a limit now rather than later.',
          'None of the tools here require explaining yourself to anyone. Deposit limits, session reminders and cooling-off periods are all set privately and reversibly, right from account settings — precisely so that acting on it early is easy.'
        ]
      }
    ],
    faqs: [
      { q: 'How do I actually set a deposit limit?', a: 'From account settings — it applies from your very next deposit onward.' },
      { q: 'What\'s the minimum age to play?', a: 'You must be 18 or older to register at all.' },
      { q: 'Can I pause my account for a while?', a: 'Yes — cooling-off options in account settings pause activity for a set period.' },
      { q: 'Where do I go for help with gaming habits?', a: 'Contact Support, or start with the limit tools described right here.' },
      { q: 'What early warning signs should I actually watch for?', a: 'Chasing a loss, playing longer than planned regularly, or feeling anxious about your balance — all worth a limit.' },
      { q: 'Do I need to justify setting a limit to anyone?', a: 'No — these tools are private and reversible, set directly from account settings.' }
    ],
    related: [
      { label: 'Security', url: '/security' },
      { label: 'Fair Play', url: '/fair-play' },
      { label: 'Support', url: '/support' }
    ]
  },

  '/fair-play': {
    metaTitle: '6 Club Fair Play – How Game Outcomes Are Verified',
    metaDescription:
      'Learn how 6 Club ensures fair play across Casino, Slots, Lottery and Aviator games using certified outcome generation.',
    keywords: ['6 Club Fair Play', '6 Club', 'Is 6 Club Safe'],
    eyebrow: 'Fair Play',
    h1: '6 Club Fair Play',
    intro: '6 Club uses certified random outcome generation to keep game results fair and independently verifiable.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'How an Outcome Actually Gets Decided',
        paragraphs: [
          'Classic casino formats, slots, lottery draws and Colour Prediction rounds all run on certified random number generation — nothing about a previous round or your own account history nudges the result. Live dealer tables work differently: outcomes display in real time, verifiable as they happen.',
          'Every game publishes its payout ratios and odds before you play, so the terms of a round are never a surprise after the fact.'
        ]
      },
      {
        heading: 'Why One Round Never "Owes" You the Next',
        paragraphs: [
          'A common misread in fast formats like Colour Prediction or crash games is assuming a run of similar outcomes makes something different "due" next. Certified random generation rules that out entirely — every round generates independently, so no amount of history shifts what comes next.',
          'And that standard doesn\'t bend for speed either: a round settling in under a minute and a scheduled draw both answer to the exact same certification, since it\'s the generation method being certified, not the pace of the format around it.'
        ]
      }
    ],
    faqs: [
      { q: 'How is fairness actually enforced across games?', a: 'Certified random number generation runs behind classic games, slots, lottery and Colour Prediction.' },
      { q: 'Are live casino tables fair the same way?', a: 'Yes — outcomes show in real time as they happen, which makes them independently verifiable.' },
      { q: 'Can a previous round influence the next one?', a: 'No — certified random generation makes every round independent of what came before.' },
      { q: 'Where do I find the payout ratios for a game?', a: 'Published directly on each game, before you place a stake.' },
      { q: 'Does a streak make the opposite outcome more likely next?', a: 'No — a streak has zero bearing on what the next round generates.' },
      { q: 'Do fast and scheduled formats get held to different fairness standards?', a: 'No — the same certification standard covers both, regardless of how quickly a format settles.' }
    ],
    related: [
      { label: 'Security', url: '/security' },
      { label: 'Casino Games', url: '/games/casino' },
      { label: 'Crash Games', url: '/games/crash' }
    ]
  },

  '/privacy-policy': {
    metaTitle: '6 Club Privacy Policy',
    metaDescription:
      'Read the 6 Club Privacy Policy covering what account data 6 Club collects, how it\'s used and how it\'s protected.',
    keywords: ['6 Club Privacy Policy', '6 Club Platform'],
    eyebrow: 'Legal',
    h1: '6 Club Privacy Policy',
    intro: 'This policy explains what information 6 Club collects and how it is used across your account.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Gets Collected',
        paragraphs: [
          'Registering hands over your mobile number and account credentials; making a transaction adds verified payment details needed to process deposits and withdrawals. Gameplay activity is also logged to calculate rewards, VIP tier and referral earnings.'
        ]
      },
      {
        heading: 'What That Data Is Actually Used For',
        paragraphs: [
          'It runs your wallet, applies rewards correctly, verifies withdrawal requests, and helps support respond to your questions. Personal account information is never sold to third parties, and payment details go only to the verified partners needed to complete a transaction.'
        ]
      },
      {
        heading: 'Your Options',
        paragraphs: [
          'Contact Support to request details on the data tied to your account, or to close it entirely. Some transaction records stay on file after closure where financial and regulatory rules require it.'
        ]
      },
      {
        heading: 'How Long Records Stick Around',
        paragraphs: [
          'Active account data stays for as long as the account itself is open, keeping your rewards history, VIP progress and referral records accurate. Once you request closure, most account data clears out within a reasonable window, while transaction records required by regulation are retained separately for whatever period applies.',
          'Support can walk through exactly what\'s retained after closure for your specific account, on request.'
        ]
      }
    ],
    faqs: [
      { q: 'What gets collected the moment I register?', a: 'Your mobile number and account credentials; verified payment details get added once you actually transact.' },
      { q: 'Is my data ever sold?', a: 'No — personal account information is never sold to third parties.' },
      { q: 'Who has access to my payment details?', a: 'Only the verified payment partners required to process a given transaction.' },
      { q: 'Can I ask for my data, or ask to close my account?', a: 'Yes — contact Support for either, subject to standard record-keeping rules.' },
      { q: 'What happens to my data after I close my account?', a: 'Most of it clears within a reasonable window; certain transaction records stay on file as regulation requires.' },
      { q: 'Can I find out exactly what data is held on me?', a: 'Yes — contact Support to request those specifics.' }
    ],
    related: [
      { label: 'Terms & Conditions', url: '/terms-conditions' },
      { label: 'Cookies Policy', url: '/cookies' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/terms-conditions': {
    metaTitle: '6 Club Terms & Conditions',
    metaDescription:
      'Read the 6 Club Terms & Conditions covering account eligibility, acceptable use, rewards and withdrawal rules.',
    keywords: ['6 Club Terms', '6 Club Terms and Conditions', '6 Club Platform'],
    eyebrow: 'Legal',
    h1: '6 Club Terms & Conditions',
    intro: 'These terms govern your use of the 6 Club platform, account and associated reward programs.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Who Can Hold an Account',
        paragraphs: [
          'You must be at least 18 and provide accurate registration details to open an account. One account per person — duplicates may be restricted or merged at our discretion.'
        ]
      },
      {
        heading: 'What Counts as Acceptable Use',
        paragraphs: [
          'Accounts are personal — using one on behalf of someone else needs prior approval, such as through the Agent Program. Attempting to exploit reward systems, referral tracking or game mechanics outside their intended use can trigger an account review or restriction.'
        ]
      },
      {
        heading: 'Rewards, Withdrawals and Term Updates',
        paragraphs: [
          'Reward eligibility and withdrawal handling follow what\'s described on the Rewards and Withdrawal Guide pages. Terms here get updated periodically, and continuing to use your account after a change takes effect counts as accepting the update.'
        ]
      },
      {
        heading: 'When an Account Gets Reviewed or Restricted',
        paragraphs: [
          'An account may be reviewed or temporarily restricted if its activity looks like it conflicts with these terms — suspected duplicates, reward exploitation, or payment verification issues among them — while things get sorted out. Affected players are notified through the account or registered contact details wherever possible.',
          'A restriction isn\'t automatically permanent. Resolving the underlying issue — completing verification, clarifying account history through Support — is usually the path back to normal access.'
        ]
      }
    ],
    faqs: [
      { q: 'What\'s the minimum age to hold an account?', a: 'At least 18, to register and to hold an account at all.' },
      { q: 'Am I allowed more than one account?', a: 'One per person — duplicates may be restricted or merged.' },
      { q: 'Can someone else use my account on my behalf?', a: 'Accounts are meant to be personal, aside from approved arrangements like the Agent Program.' },
      { q: 'How would I find out if terms change?', a: 'Updates appear on this page, and continued use afterward means you\'ve accepted them.' },
      { q: 'What typically triggers an account restriction?', a: 'Suspected duplicate accounts, reward exploitation, or payment verification issues.' },
      { q: 'Can a restricted account be restored?', a: 'Usually yes — resolving the underlying issue through Support is the normal path back.' }
    ],
    related: [
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Responsible Gaming', url: '/responsible-gaming' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/cookies': {
    metaTitle: '6 Club Cookies Policy',
    metaDescription:
      '6 Club Cookies Policy: how 6 Club uses cookies to keep you logged in, remember preferences and understand site usage.',
    keywords: ['6 Club Cookies Policy', '6 Club Platform'],
    eyebrow: 'Legal',
    h1: '6 Club Cookies Policy',
    intro: '6 Club uses a small number of cookies to keep sessions secure and remember basic preferences.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Cookies Are Doing Here',
        paragraphs: [
          'Session cookies keep you signed in as you move between pages, so credentials don\'t need re-entering on every load. A small batch of preference cookies remember display settings for a consistent experience on repeat visits.',
          'None of this feeds third-party advertisers — cookies here aren\'t used to sell browsing activity.'
        ]
      },
      {
        heading: 'Managing Cookies on Your End',
        paragraphs: [
          'Since usage here is limited to session management and basic preferences rather than ad trackers, there\'s not much practical difference whether you manage cookies through browser settings or leave them at default — blocking session cookies specifically just means getting logged out between page loads.',
          'Most browsers let you clear cookies per-site rather than everywhere at once, which is a clean way to reset just your session here without touching other sites you use.'
        ]
      }
    ],
    faqs: [
      { q: 'Are cookies here used for ads?', a: 'No — they\'re for session management and basic preferences only, not advertising sales.' },
      { q: 'Can I browse with cookies disabled?', a: 'Session cookies are needed to stay logged in, so disabling them will likely log you out between pages.' },
      { q: 'What kinds of cookies actually get set?', a: 'Mostly session cookies for login state, plus lightweight preference cookies for display settings.' },
      { q: 'How do I clear them?', a: 'Through your browser\'s privacy or history settings, any time.' },
      { q: 'Can I clear these without wiping cookies from every site?', a: 'Yes — most browsers support clearing on a per-site basis.' },
      { q: 'What happens if I block session cookies specifically?', a: 'You\'ll likely get logged out between pages, since that\'s what keeps a session signed in.' }
    ],
    related: [
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Terms & Conditions', url: '/terms-conditions' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/disclaimer': {
    metaTitle: '6 Club Disclaimer',
    metaDescription:
      'Read the 6 Club Disclaimer covering informational content, outcome uncertainty, third-party links and platform limits.',
    keywords: ['6 Club Disclaimer', '6 Club Platform'],
    eyebrow: 'Legal',
    h1: '6 Club Disclaimer',
    intro: 'This disclaimer sets out the limits of what 6 Club\'s content and platform can promise you.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Information, Not a Promise',
        paragraphs: [
          'Guides, odds explanations and game descriptions here are general information only. They explain how a category or feature works — they\'re never a promise of a particular outcome, win, or payout amount.'
        ]
      },
      {
        heading: 'No Outcome Is Ever Guaranteed',
        paragraphs: [
          'Casino, slot, lottery, sports, crash, fishing and arcade results come down to certified random generation, or, for sports, the actual event result — never anything published on this site. Past results shown in history or blog content say nothing about what happens next.'
        ]
      },
      {
        heading: 'Age and Eligibility Assumptions',
        paragraphs: [
          'This content assumes readers already meet the age and eligibility bar set out in the Terms & Conditions. None of it is aimed at anyone below that age, or in a place where this kind of platform isn\'t permitted.'
        ]
      },
      {
        heading: 'What Happens When You Click a Third-Party Link',
        paragraphs: [
          'Links to payment partners, sister sites or other outside destinations exist purely for convenience. Once you leave the platform, we don\'t control — and aren\'t responsible for — what happens on that third-party site.'
        ]
      },
      {
        heading: 'Where Liability Stops',
        paragraphs: [
          'Content and guides here are provided as-is. To whatever extent the law allows, we\'re not liable for decisions made based on what\'s published here, or for losses tied to platform use beyond what\'s separately covered in the Terms & Conditions.'
        ]
      }
    ],
    faqs: [
      { q: 'Is a win ever guaranteed?', a: 'No — no game or piece of content here guarantees a winning outcome or payout amount.' },
      { q: 'Should blog guides be treated as betting advice?', a: 'No — they\'re general informational content about how something works, not personalized advice.' },
      { q: 'Are third-party sites linked here your responsibility?', a: 'No — those links are for convenience only, and we don\'t control that outside content.' },
      { q: 'Does past history predict future results?', a: 'No — every round or market settles independently, regardless of what history shows.' },
      { q: 'Where do the full legal terms actually live?', a: 'On the Terms & Conditions page — this disclaimer specifically covers the limits of the content itself.' }
    ],
    related: [
      { label: 'Terms & Conditions', url: '/terms-conditions' },
      { label: 'Privacy Policy', url: '/privacy-policy' },
      { label: 'Fair Play', url: '/fair-play' }
    ]
  },

  '/help-center': {
    metaTitle: '6 Club Help Center – Guides for Login, Register & Account Help',
    metaDescription:
      'The 6 Club Help Center collects guides on how to login 6 Club, how to register 6 Club, deposits, withdrawals and rewards.',
    keywords: ['6 Club Help Center', '6 Club Support', '6 Club Help'],
    eyebrow: 'Help Center',
    h1: '6 Club Help Center',
    intro: 'The Help Center brings together 6 Club guides on the topics players ask about most.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Where to Start',
        paragraphs: [
          'New here? The Register, Login and Deposit Guide pages cover the basics of getting set up. For payout questions, Withdrawal Guide and Payment Methods handle the details, while Security and Fair Play explain account protection and how outcomes get verified.',
          'Still stuck after a guide? Reach the team directly through the Contact page.'
        ],
        image: {
          src: '/images/screenshots/self-service-center.webp',
          alt: '6 Club Self Service Center listing common self-help topics like deposit and withdrawal issues',
          caption: '6 Club\'s Self Service Center, listing common self-help topics such as deposit issues, IFSC modification and withdrawal problems.'
        }
      },
      {
        heading: 'Getting to the Right Guide Fast',
        paragraphs: [
          'Nearly every visit here falls into one of three buckets: setting up an account, understanding how money moves through the wallet, or figuring out how a specific game works. Grouping things this way is deliberate — it\'s quicker to identify which bucket a question belongs to than to search for exact wording.',
          'When a question straddles two guides — how a reward interacts with a withdrawal, say — the related links at the bottom of each page are the quickest route between connected topics.'
        ]
      }
    ],
    faqs: [
      { q: 'Where should a brand-new player start?', a: 'Register and Deposit Guide first, then explore game categories once the account is funded.' },
      { q: 'Where\'s withdrawal information kept?', a: 'Withdrawal Guide and Payment Methods cover processing times and supported options.' },
      { q: 'What if my exact question isn\'t here?', a: 'Contact the team directly through the Contact page.' },
      { q: 'Does this cover account security topics?', a: 'Yes — Security and Fair Play explain protection and outcome verification.' },
      { q: 'What\'s the logic behind how guides are grouped?', a: 'Around account setup, payments and individual games, since most questions fall into one of those.' },
      { q: 'My question spans two different guides — now what?', a: 'Use the related links at the bottom of each page to jump between connected topics.' }
    ],
    related: [
      { label: 'Support', url: '/support' },
      { label: 'FAQs', url: '/faqs' },
      { label: 'Contact', url: '/contact-us' }
    ]
  },

  '/support': {
    metaTitle: '6 Club Support – Customer Care for Your Account',
    metaDescription:
      'Reach 6 Club Support and Customer Care for help with account access, deposits, withdrawals or general questions.',
    keywords: ['6 Club Support', '6 Club Customer Care', '6 Club Help'],
    eyebrow: 'Support',
    h1: '6 Club Support',
    intro: '6 Club support is available around the clock through live chat and email.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Getting Hold of Support',
        paragraphs: [
          'Account access issues, deposit or withdrawal questions, general platform questions — all of it goes through the Contact page. Include your registered number and a short description of what\'s wrong to speed things along.',
          'For quicker self-service, check Help Center and FAQs first — a lot of account and payment questions are already answered there.'
        ]
      },
      {
        heading: 'What Gets a Request Resolved Faster',
        paragraphs: [
          'Specifics help — a transaction reference for a payment issue, roughly when it happened, which device and platform you were on. That level of detail means support doesn\'t need a follow-up message just to gather basics.',
          'For account or payment issues specifically, having your registered number ready from the start skips an extra back-and-forth before the real issue even gets looked at.'
        ]
      }
    ],
    faqs: [
      { q: 'Is support around 24/7?', a: 'Yes — reachable any time through live chat and email.' },
      { q: 'What should I include in a support message?', a: 'Your registered number and a short description of the issue.' },
      { q: 'Is there a way to get answers without waiting on support?', a: 'Yes — Help Center and FAQs cover most common account, deposit and withdrawal questions.' },
      { q: 'What\'s the direct way to reach the team?', a: 'The Contact page, through your preferred channel.' },
      { q: 'What details speed up a resolution?', a: 'A transaction reference, rough timing, and the device or platform involved.' },
      { q: 'Do VIP accounts get a different support line?', a: 'Yes — higher tiers get a dedicated contact instead of the general queue.' }
    ],
    related: [
      { label: 'Help Center', url: '/help-center' },
      { label: 'FAQs', url: '/faqs' },
      { label: 'Contact', url: '/contact-us' }
    ]
  },

  '/contact-us': {
    metaTitle: '6 Club Contact – Reach 6 Club Customer Care',
    metaDescription:
      '6 Club Contact details for player support, affiliate or agent program applications, or general platform questions.',
    keywords: ['6 Club Contact', '6 Club Customer Care'],
    eyebrow: 'Contact',
    h1: 'Contact 6 Club',
    intro: 'Reach 6 Club for account support, partnership applications, or general questions about the platform.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Ways to Get in Touch',
        paragraphs: [
          `Player support requests, affiliate or agent program applications, and general platform questions all funnel through this page. Email ${'support@6club.org.in'} with your registered mobile number and a short description of your question, and the team follows up as quickly as possible.`
        ]
      },
      {
        heading: 'Picking the Right Category for Your Message',
        paragraphs: [
          'Player support, partnership applications and general questions all land in the same inbox but get prioritized differently — account-access and payment issues are treated as time-sensitive, while partnership applications and general questions go in received order.',
          'Flagging which category your message falls under upfront, along with your registered number for account questions, routes it to the right response faster.'
        ]
      }
    ],
    faqs: [
      { q: 'What\'s the best way to reach support?', a: `Email ${'support@6club.org.in'} with your registered mobile number and a description of the issue.` },
      { q: 'Can affiliate or agent applications go through here too?', a: 'Yes — both go through the same contact channel as general support.' },
      { q: 'How fast is the typical response?', a: 'As quickly as possible; urgent account issues get prioritized first.' },
      { q: 'Is there a faster self-service option?', a: 'Yes — check Help Center and FAQs for answers to common questions first.' },
      { q: 'Does every message get treated with the same urgency?', a: 'No — account-access and payment issues are time-sensitive; partnership and general questions go in order received.' },
      { q: 'Should I state my category upfront?', a: 'Yes — that, plus your registered number for account questions, gets a faster response.' }
    ],
    related: [
      { label: 'Support', url: '/support' },
      { label: 'Help Center', url: '/help-center' },
      { label: 'Affiliate Program', url: '/affiliate-program' }
    ]
  },

  '/faqs': {
    metaTitle: '6 Club FAQ – Frequently Asked Questions',
    metaDescription:
      'Answers to the most common 6 Club FAQ topics covering registration, deposits, withdrawals, rewards and security.',
    keywords: ['6 Club FAQs', '6 Club FAQ'],
    eyebrow: 'FAQs',
    h1: '6 Club Frequently Asked Questions',
    intro: 'Common questions about registering, playing and managing your 6 Club account in one place.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What This Page Covers',
        paragraphs: [
          'The questions asked most often about registration, payments, rewards and security are collected right here. For a deeper walkthrough on any of them, the linked guides below break each process down step by step.'
        ]
      },
      {
        heading: 'How to Get the Most Out of This Page',
        paragraphs: [
          'Every answer here is kept short on purpose — the goal is confirming the shape of an answer quickly, not replacing the full guide on a topic. Where a question needs more room than a short answer allows, it links straight to the page built around it.',
          'Not seeing your exact question? Check the Help Center next — it\'s organized by topic area rather than by individual question, so it may cover something more specific than what\'s gathered here.'
        ]
      }
    ],
    faqs: [
      { q: 'What are the steps to register?', a: 'Enter your mobile number, confirm the OTP, set a password — full detail on the Register page.' },
      { q: 'How do I get the app onto my device?', a: 'Android installs the APK, iOS uses a guided browser install, desktop needs nothing at all — see Download.' },
      { q: 'What\'s the usual withdrawal timeline?', a: 'Most verified requests clear the same day — details on the Withdrawal Guide page.' },
      { q: 'What exactly is Colour Prediction?', a: 'A fast round type on the Lottery Games page where you predict an outcome colour, settling in under a minute.' },
      { q: 'How does inviting friends actually pay off?', a: 'You earn a share of what they play through your unique referral link — see Referral Program.' },
      { q: 'How do VIP tiers get unlocked?', a: 'Automatically, as account activity builds — see the VIP Program page for the mechanics.' },
      { q: 'Is this platform actually safe?', a: 'Encrypted sessions, verified payment partners and certified fair play standards — see Security and Fair Play.' },
      { q: 'What do I do about a forgotten password?', a: 'Use Forgot Password to reset it through your registered number — no need for a new account.' },
      { q: 'Can I cap my own account activity?', a: 'Yes — deposit limits and cooling-off periods live in account settings — see Responsible Gaming.' }
    ],
    related: [
      { label: 'Help Center', url: '/help-center' },
      { label: 'Support', url: '/support' },
      { label: 'Security', url: '/security' }
    ]
  },

  '/news': {
    metaTitle: '6 Club News – Platform Updates & Guide',
    metaDescription:
      'Read the latest 6 Club news covering platform updates, new game releases and policy changes.',
    keywords: ['6 Club News', '6 Club Platform'],
    eyebrow: 'News',
    h1: '6 Club News',
    intro: 'Platform-level news covering updates, releases and policy changes across 6 Club.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Lives on This Page',
        paragraphs: [
          'Broader platform news — payment method updates, new category launches, policy changes — sits here, separate from the shorter, more frequent notices on Announcements. For educational and strategy content, that\'s the Blog instead.'
        ]
      },
      {
        heading: 'Why Three Separate Pages Instead of One',
        paragraphs: [
          'This split is deliberate, not redundant: News covers changes that affect how the platform actually works, Announcements handles short-lived operational notices like maintenance windows, and the Blog carries longer explainer content that doesn\'t shift over time the way a news item does.',
          'If substantive changes are all you care about — a new payment method, a new category, a policy update — this page gets you caught up without wading through day-to-day operational chatter.'
        ]
      }
    ],
    faqs: [
      { q: 'What separates News from Announcements?', a: 'News covers broader updates and releases; Announcements covers shorter, more frequent operational notices.' },
      { q: 'Are new game launches covered here?', a: 'Yes — major category launches sit here alongside other platform updates.' },
      { q: 'Where\'s the strategy and educational content?', a: 'On the Blog.' },
      { q: 'How often does this page get updated?', a: 'Whenever something significant happens, rather than on a fixed schedule.' },
      { q: 'Why split content across News, Announcements and the Blog?', a: 'Each serves a different purpose — substantive changes, short-lived notices, and longer explainers, respectively.' },
      { q: 'Is this the fastest way to catch up on major changes?', a: 'Yes — it\'s focused on substance rather than daily operational notices.' }
    ],
    related: [
      { label: 'Announcements', url: '/announcements' },
      { label: 'Blog', url: '/blog' },
      { label: 'Leaderboard', url: '/leaderboard' }
    ]
  },

  '/leaderboard': {
    metaTitle: '6 Club Leaderboard – Top VIP Players This Period',
    metaDescription:
      'See the current 6 Club Leaderboard ranking top players by activity and winnings across every game category.',
    keywords: ['6 Club Leaderboard', '6 Club VIP'],
    eyebrow: 'Leaderboard',
    h1: '6 Club Leaderboard',
    intro: 'The 6 Club leaderboard ranks top players by activity across all game categories for the current period.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Determines Your Rank',
        paragraphs: [
          'Position comes from combined activity and winnings across every category during the current period. Standings reset at the start of each new one, so everyone gets a clean slate to climb from.',
          'Top spots sometimes get featured in seasonal promotions on top of the standard rewards earned through normal play.'
        ]
      },
      {
        heading: 'How to Actually Move Up',
        paragraphs: [
          'Since ranking combines activity and winnings across every category rather than crediting just one, there\'s no single "best" category to chase — steady play in a favorite category counts the same as the same volume spread across several. It\'s the combined total at the period\'s close that matters.',
          'And because standings reset each period, a slow start doesn\'t rule out a strong finish — plenty of players see the biggest jumps happen in the final stretch as totals catch up.'
        ]
      }
    ],
    faqs: [
      { q: 'What goes into calculating rank?', a: 'Combined activity and winnings across every category during the current period.' },
      { q: 'Does the board reset periodically?', a: 'Yes — standings reset at the start of each new ranking period.' },
      { q: 'Is there a bonus for finishing near the top?', a: 'Top spots may be featured in seasonal promotions, on top of standard rewards.' },
      { q: 'Which categories actually count toward it?', a: 'All of them — activity across every category contributes.' },
      { q: 'Is one category a better bet for climbing than another?', a: 'No — combined activity and winnings across every category count equally.' },
      { q: 'Can a weak start still turn into a strong finish?', a: 'Yes — the review covers the full period total, not early pace.' }
    ],
    related: [
      { label: 'Popular Games', url: '/games/popular' },
      { label: 'VIP Program', url: '/vip' },
      { label: 'Promotions', url: '/promotions' }
    ]
  },

  '/gift-code': {
    metaTitle: '6 Club Gift Code – Redeem Bonus Codes Today',
    metaDescription:
      'How to redeem a 6 Club Gift Code for bonus wallet credit, and where new 6 Club Gift Code Today drops are announced.',
    keywords: ['6 Club Gift Code', '6 Club Bonus', '6 Club Gift Code Today'],
    eyebrow: 'Gift Codes',
    h1: '6 Club Gift Code',
    intro: 'Redeem 6 Club gift codes from your account dashboard for bonus wallet credit.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'Redeeming a Gift Code',
        paragraphs: [
          'Type a valid code into the redemption field on your dashboard. Codes are typically time-limited and single-use per account, crediting bonus balance straight to your wallet once accepted.',
          'New codes surface on the Announcements page and official social channels — always confirm a code against an official source before typing it in.'
        ],
        image: {
          src: '/images/screenshots/6club-lottery-win-popup.webp',
          alt: '6 Club bonus confirmation popup showing a credited bonus amount',
          caption: 'A 6 Club bonus confirmation popup — the same style of instant credit you see once a gift code or bonus is accepted.'
        }
      },
      {
        heading: 'Dodging Fake or Expired Codes',
        paragraphs: [
          'Codes are easy to forward, which means unofficial and expired versions tend to outnumber genuinely live ones on any given day. The only real way to confirm one is current is checking it directly against the Announcements page or an official social channel — not a forwarded message or random third-party post.',
          'If a code refuses to redeem, it\'s usually one of three things: already expired, already used on that account, or never official in the first place. The Announcements page clears up most of these fast.'
        ]
      }
    ],
    faqs: [
      { q: 'Where do codes actually get entered?', a: 'In the redemption field on your account dashboard.' },
      { q: 'Do codes expire?', a: 'Yes — most are time-limited and stop working past their listed expiry.' },
      { q: 'Can the same code be reused?', a: 'No — generally single-use per account.' },
      { q: 'Where do new codes get announced?', a: 'The Announcements page and official social channels.' },
      { q: 'Why would a code fail to redeem?', a: 'Usually it\'s expired, already used, or was never official to begin with.' },
      { q: 'How do I confirm a code is genuine before using it?', a: 'Cross-check it against the Announcements page or an official social channel first.' }
    ],
    related: [
      { label: 'Announcements', url: '/announcements' },
      { label: 'Promotions', url: '/promotions' },
      { label: 'Rewards', url: '/rewards' }
    ]
  },

  '/announcements': {
    metaTitle: '6 Club Announcements – Latest Platform Notices',
    metaDescription:
      'Short, frequent 6 Club announcements covering maintenance windows, new gift codes and quick policy notices.',
    keywords: ['6 Club Announcements', '6 Club Promotions'],
    eyebrow: 'Announcements',
    h1: '6 Club Announcements',
    intro: 'Short-form notices covering day-to-day 6 Club updates, separate from full News articles.',
    breadcrumbTrail: [],
    sections: [
      {
        heading: 'What Shows Up Here',
        paragraphs: [
          'Maintenance windows, new gift code drops, quick policy notices — all posted here as they happen. For bigger platform updates and feature launches, News is the page you want instead.'
        ]
      },
      {
        heading: 'Making a Habit of Checking In',
        paragraphs: [
          'These notices are short-lived by design — a maintenance window closes, a code expires — so a periodic glance catches far more than searching after the fact once something\'s already changed. Pairing this page with Gift Code is a solid habit if bonus codes specifically are what you\'re after.',
          'Anything that touches account access directly, like a maintenance window, generally posts here with enough lead time to plan around it rather than surprising you mid-session.'
        ]
      }
    ],
    faqs: [
      { q: 'What sort of things get posted here?', a: 'Maintenance windows, new gift code drops, and quick policy notices.' },
      { q: 'How does this differ from News?', a: 'This covers short, frequent notices; News covers broader updates and releases.' },
      { q: 'Do gift codes show up here first?', a: 'Typically yes, alongside official social channels.' },
      { q: 'How frequently does this page change?', a: 'Often — more frequently than News, since notices here are short-lived.' },
      { q: 'Will maintenance be flagged ahead of time?', a: 'Generally yes, with enough lead time to plan a session around it.' },
      { q: 'Should I check regularly if I\'m chasing gift codes?', a: 'Yes — pairing this with the Gift Code page is a good habit.' }
    ],
    related: [
      { label: 'News', url: '/news' },
      { label: 'Gift Codes', url: '/gift-code' },
      { label: 'Blog', url: '/blog' }
    ]
  },

  '/sitemap': {
    metaTitle: '6 Club Site Map – Full 6 Club Platform Directory',
    metaDescription:
      'A complete directory of every 6 Club page, organized by games, rewards, account and support sections.',
    keywords: ['6 Club Site Map', '6 Club Platform'],
    eyebrow: 'Site Map',
    h1: '6 Club Site Map',
    intro: 'A full directory of 6 Club pages, organized by section for quick navigation.',
    breadcrumbTrail: [],
    sections: [],
    faqs: [
      { q: 'What\'s the purpose of this page?', a: 'It lists every page on the site in one place, grouped by section, so anything is quick to find.' },
      { q: 'How is this different from sitemap.xml?', a: 'This is the human-readable version; sitemap.xml is the machine-readable one search engines use.' },
      { q: 'Where are the game category pages?', a: 'Grouped together under the Games section below.' },
      { q: 'Where do legal pages live?', a: 'Privacy Policy, Terms and Cookies sit together in the Legal section.' },
      { q: 'Where are rewards and VIP pages grouped?', a: 'Rewards, the VIP Program and Promotions sit together in the Rewards & VIP section.' },
      { q: 'Where\'s the blog listed?', a: 'Blog categories and the main listing are grouped in the Blog section.' }
    ],
    related: [
      { label: 'Home', url: '/' },
      { label: 'Help Center', url: '/help-center' }
    ]
  }
}

export default pagesData;
