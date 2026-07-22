export interface BlogAuthor {
  slug: string;
  name: string;
  role: string;
  bio: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogContentSection {
  heading?: string;
  paragraphs?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  dateModified: string;
  faqs: BlogFaq[];
  content: BlogContentSection[];
}

export interface BlogTagCount {
  slug: string;
  name: string;
  count: number;
}

export const authors: BlogAuthor[] = [
  {
    slug: 'meera-kapoor',
    name: 'Meera Kapoor',
    role: 'Content Lead, 6 Club',
    bio: 'Meera covers 6 Club platform guides, focusing on account setup, payments and rewards mechanics.'
  },
  {
    slug: 'rohan-verma',
    name: 'Rohan Verma',
    role: 'Product Writer, 6 Club',
    bio: 'Rohan writes about 6 Club game categories, covering how each format works and what to expect before you play.'
  }
];

export const categories: BlogCategory[] = [
  { slug: 'getting-started', name: 'Getting Started' },
  { slug: 'game-guides', name: 'Game Guides' },
  { slug: 'payments', name: 'Payments' },
  { slug: 'rewards', name: 'Rewards' },
  { slug: 'sports', name: 'Sports' },
  { slug: 'responsible-gaming', name: 'Responsible Gaming' }
];

export const posts: BlogPost[] = [
  {
    slug: 'how-6club-color-prediction-rounds-settle',
    title: 'How 6 Club Color Prediction Rounds Actually Settle',
    excerpt:
      'A plain-language look at how 6 Club Color Prediction rounds are timed, settled and logged, for players who want to understand the mechanics before playing.',
    category: 'game-guides',
    tags: ['color-prediction', 'lottery', 'strategy'],
    author: 'rohan-verma',
    date: '2026-05-04',
    dateModified: '2026-05-04',
    faqs: [
      { q: 'Does a past Color Prediction round affect the next one?', a: 'No, each 6 Club Color Prediction round uses independent certified random generation, so previous outcomes have no bearing on the next round.' },
      { q: 'How long does one round take?', a: 'Rounds run on a short, fixed timer, considerably faster than a scheduled numbered lottery draw.' }
    ],
    content: [
      {
        heading: 'Why Color Prediction Feels Different From a Slot Spin',
        paragraphs: [
          '6 Club Color Prediction sits in the Lottery Games category, but it plays faster than a numbered draw. Instead of waiting for a scheduled draw time, each round runs on a short, fixed timer, and the outcome is generated the moment that timer ends rather than on a daily or weekly schedule.',
          'That short cycle is the main reason players compare it to crash games — you can complete several rounds in the time it takes to finish a single scheduled lottery draw.'
        ]
      },
      {
        heading: 'What Determines the Outcome',
        paragraphs: [
          'Each round uses the same certified random outcome generation described on our Fair Play page, applied independently to every round. That means a previous round\'s result has no bearing on the next one, regardless of how many rounds in a row landed on the same color.',
          'The interface shows a countdown before the round locks, followed by the result and an updated entry in your round history, so you can always review what happened and when.'
        ]
      },
      {
        heading: 'A Few Practical Notes',
        paragraphs: [
          'Because rounds settle quickly, it is easy to play more rounds than you intended in a short session. Setting a personal round or time limit before you start — covered in more depth on our Responsible Gaming page — is worth doing specifically for fast-cycle formats like this one.'
        ]
      }
    ]
  },
  {
    slug: 'beginners-guide-to-6club-slot-volatility',
    title: "A Beginner's Guide to 6 Club Slot Volatility",
    excerpt:
      'What "volatility" actually means for 6 Club slot titles, and how to pick a stake range that matches the way you like to play.',
    category: 'game-guides',
    tags: ['slots', 'beginner'],
    author: 'rohan-verma',
    date: '2026-04-18',
    dateModified: '2026-04-20',
    faqs: [
      { q: 'Is high volatility better than low volatility on 6 Club slots?', a: 'Neither is objectively better — it depends on whether you prefer steadier smaller payouts or less frequent larger ones.' },
      { q: 'Can I change my stake mid-session?', a: 'Yes, 6 Club slot titles let you adjust your stake per spin within the listed range at any time.' }
    ],
    content: [
      {
        heading: 'What Volatility Describes',
        paragraphs: [
          'Volatility is simply a way of describing how a slot title pays out over time. Lower-volatility 6 Club slots tend to pay smaller amounts more frequently, while higher-volatility titles pay less often but with larger amounts when they do land.',
          'Neither approach is objectively better — it comes down to whether you prefer a steadier balance or occasional bigger swings.'
        ]
      },
      {
        heading: 'Matching Stakes to Volatility',
        paragraphs: [
          'On 6 Club, each slot title lets you adjust your stake per spin within a set range. A common approach with higher-volatility titles is to lower your per-spin stake slightly, simply so a longer run without a payout does not use up your session balance too quickly.',
          'With lower-volatility titles, players often keep a steadier stake since payouts land more often.'
        ]
      },
      {
        heading: 'Finding New Titles to Try',
        paragraphs: [
          'The New Games page lists recently added slot titles before they move into general rotation, which is a reasonable place to try a title with different volatility than what you usually play.'
        ]
      }
    ]
  },
  {
    slug: 'habits-that-keep-6club-withdrawals-fast',
    title: '5 Habits That Keep Your 6 Club Withdrawals Fast',
    excerpt:
      'Small account habits that reduce the chance of a delayed 6 Club withdrawal, based on the most common support questions.',
    category: 'payments',
    tags: ['withdrawal', 'security'],
    author: 'meera-kapoor',
    date: '2026-03-22',
    dateModified: '2026-03-22',
    faqs: [
      { q: 'Why was my 6 Club withdrawal sent for manual review?', a: 'This usually happens when the withdrawal method differs from the original deposit method or verification has lapsed.' },
      { q: 'Does VIP tier really change withdrawal speed?', a: 'Yes, higher 6 Club VIP tiers are typically prioritized ahead of the standard withdrawal queue.' }
    ],
    content: [
      {
        heading: '1. Keep Your Payment Method Verified',
        paragraphs: [
          '6 Club withdrawals are processed through the same verified method used for deposits. If that method\'s verification status lapses or changes, it can hold up a withdrawal until it is reconfirmed.'
        ]
      },
      {
        heading: '2. Match Your Deposit and Withdrawal Method',
        paragraphs: [
          'Requesting a withdrawal to a different method than the one you deposited with is one of the most common reasons a request needs manual review. Keeping both aligned avoids that extra step entirely.'
        ]
      },
      {
        heading: '3. Watch Your VIP Tier',
        paragraphs: [
          'Higher 6 Club VIP tiers are typically prioritized in the withdrawal queue. If speed matters to you, the Rewards and VIP Program pages explain what moves your tier up.'
        ]
      },
      {
        heading: '4. Double-Check the Amount Before Confirming',
        paragraphs: [
          'Requests that need to be corrected and resubmitted simply take longer than one confirmed correctly the first time.'
        ]
      },
      {
        heading: '5. Reach Support Early if Something Looks Off',
        paragraphs: [
          'If a withdrawal is taking noticeably longer than the usual same-day window, contacting Support with your transaction reference sooner rather than later gets it looked at faster.'
        ]
      }
    ]
  },
  {
    slug: 'understanding-the-6club-vip-ladder',
    title: 'Understanding the 6 Club VIP Ladder',
    excerpt:
      'How 6 Club VIP tiers are earned, what changes at each stage, and why withdrawal speed is the benefit most players notice first.',
    category: 'rewards',
    tags: ['vip', 'rewards'],
    author: 'meera-kapoor',
    date: '2026-02-10',
    dateModified: '2026-02-14',
    faqs: [
      { q: 'Do I need to pay to reach a higher 6 Club VIP tier?', a: 'No, VIP tiers are earned through normal account activity, not purchased.' },
      { q: 'Can my VIP tier decrease?', a: 'Tiers are based on rolling activity, so extended inactivity can affect your standing at the next review.' }
    ],
    content: [
      {
        heading: 'How Tiers Are Earned, Not Bought',
        paragraphs: [
          'Unlike a paid membership, 6 Club VIP tiers are unlocked through normal account activity across the daily, weekly and monthly reward cycles. There is no separate fee or application — the system reviews your cumulative activity and moves your tier accordingly.'
        ]
      },
      {
        heading: 'What Actually Changes at Higher Tiers',
        paragraphs: [
          'The most consistently reported change is withdrawal speed — higher tiers sit ahead of the standard queue. Reward multipliers also tend to increase, and at the higher tiers, players get a dedicated support contact rather than the general queue.'
        ]
      },
      {
        heading: 'Keeping Your Tier',
        paragraphs: [
          'Because tiers are based on rolling activity, extended inactivity can affect your standing at the next review. If you plan to step away for a while, it is worth checking the Rewards page to understand how that might factor in.'
        ]
      }
    ]
  },
  {
    slug: 'reading-6club-sports-markets-before-cricket-season',
    title: 'Reading 6 Club Sports Markets Before Cricket Season',
    excerpt:
      'A practical primer on how pre-match and live 6 Club sports markets are structured, using cricket as the example.',
    category: 'sports',
    tags: ['sports', 'cricket'],
    author: 'rohan-verma',
    date: '2026-01-29',
    dateModified: '2026-01-29',
    faqs: [
      { q: 'Why do live 6 Club sports odds change so quickly?', a: 'Live odds reflect the current state of the match, so events like a wicket or a run-rate shift move them in real time.' },
      { q: 'How are 6 Club sports markets settled?', a: 'Settlement always follows the official result of the underlying match or event.' }
    ],
    content: [
      {
        heading: 'Pre-Match vs Live Markets',
        paragraphs: [
          'Pre-match markets on 6 Club open before a fixture starts and lock once it begins. Live markets take over from there, with odds adjusting continuously as the match progresses — a wicket, a chase acceleration or a run-rate shift will all move live odds quickly.'
        ]
      },
      {
        heading: 'Why Odds Move Mid-Match',
        paragraphs: [
          'Live odds reflect the current state of the match rather than a fixed pre-match view, which is why the same market can look very different at the start of an innings compared to the final few overs.'
        ]
      },
      {
        heading: 'Where Settlement Comes From',
        paragraphs: [
          'All 6 Club sports markets settle based on official match results, so the outcome is never a platform judgment call — it follows the recognized result of the fixture itself.'
        ]
      }
    ]
  },
  {
    slug: 'practical-guide-to-responsible-play-on-6club',
    title: 'Setting Limits: A Practical Guide to Responsible Play on 6 Club',
    excerpt:
      'How to set deposit and session limits on 6 Club before you start playing, not after a difficult session.',
    category: 'responsible-gaming',
    tags: ['responsible-gaming', 'security'],
    author: 'meera-kapoor',
    date: '2025-12-15',
    dateModified: '2025-12-15',
    faqs: [
      { q: 'Where do I set a deposit limit on 6 Club?', a: 'Deposit limits are set from your account settings and apply to future deposits going forward.' },
      { q: 'What does the cooling-off option do?', a: 'It pauses account activity for a set period without requiring full account closure.' }
    ],
    content: [
      {
        heading: 'Set Limits Before You Start, Not After',
        paragraphs: [
          'The most useful time to set a 6 Club deposit limit is before your session, not partway through one. Limits set from account settings apply to future deposits, so doing this ahead of time removes a decision from the moment you might least want to make it carefully.'
        ]
      },
      {
        heading: 'Use Session Reminders',
        paragraphs: [
          'Time tracking matters as much as spend tracking, especially with fast-cycle formats like Color Prediction or crash games where several rounds can pass quickly. Session reminders in your account settings help flag when a planned short break has run long.'
        ]
      },
      {
        heading: 'Know the Cooling-Off Option',
        paragraphs: [
          'If gaming starts to feel like an obligation rather than entertainment, the cooling-off option in account settings pauses activity for a set period without requiring you to close your account entirely.'
        ]
      }
    ]
  },
  {
    slug: 'what-is-6club',
    title: 'What Is 6 Club? A Complete Overview',
    excerpt:
      'A plain-language overview of what 6 Club is, how the single-account model works, and where to go for login, registration, downloads and rewards.',
    category: 'getting-started',
    tags: ['overview', 'getting-started'],
    author: 'meera-kapoor',
    date: '2026-07-10',
    dateModified: '2026-07-10',
    faqs: [
      { q: 'What is 6 Club used for?', a: '6 Club is an online gaming platform used for casino, slot, lottery, sports, crash, fishing and arcade games, all through one account.' },
      { q: 'Is 6 Club one app or several?', a: 'It is a single platform — one account, one wallet and one app or site covers every game category rather than separate apps per category.' }
    ],
    content: [
      {
        heading: 'One Account, Every Game Category',
        paragraphs: [
          '6 Club is an online gaming platform that groups casino tables, slot reels, lottery draws, sports markets, crash rounds, fishing games and arcade titles under a single account. Rather than registering separately for each type of game, you create one 6 Club account, and every category becomes available from the same dashboard, wallet and rewards ledger.',
          'The platform has been running since 2021, and the current lineup of categories reflects gradual additions based on player demand rather than a fixed catalog set at launch.'
        ]
      },
      {
        heading: 'How 6 Club Differs From a Single-Game App',
        paragraphs: [
          'Most gaming apps focus on one format — a slots app, a sportsbook, a lottery app. 6 Club\'s model is closer to a portfolio: the account, deposit process and reward cycle are identical no matter which category you play, so switching from a crash game to a sports market on the same evening doesn\'t involve a new login or a separate deposit.',
          'This is also why the term "6 Club Game" gets used informally to describe the whole catalog — it isn\'t a separate product, just shorthand for everything accessible from a 6 Club account.'
        ]
      },
      {
        heading: 'Where to Go Next',
        paragraphs: [
          'If you\'re new, the Register page is the starting point, followed by the Login page for returning visits. The Download page covers Android, iOS and desktop access, and the Rewards and VIP pages explain what you can expect once you\'re active on the platform.'
        ]
      }
    ]
  },
  {
    slug: '6club-login-guide',
    title: '6 Club Login Guide: Signing In Without the Hassle',
    excerpt:
      'How to log into 6 Club on any device, what to do if you forget your password, and why logging out matters on shared devices.',
    category: 'getting-started',
    tags: ['login', 'account'],
    author: 'meera-kapoor',
    date: '2026-07-02',
    dateModified: '2026-07-02',
    faqs: [
      { q: 'Can I use the same 6 Club login on two devices?', a: 'Yes, your registered mobile number and password work across Android, iOS and desktop browsers.' },
      { q: 'What if I don\'t receive a password reset code?', a: 'Double-check the number on file is correct and current, then contact Support if the code still doesn\'t arrive after a reasonable wait.' }
    ],
    content: [
      {
        heading: 'Logging In on Any Device',
        paragraphs: [
          'The 6 Club Login page asks for your registered mobile number and password — the same two fields regardless of whether you\'re on Android, iOS or a desktop browser. Because the account is shared across devices, your wallet balance, reward progress and VIP tier stay identical no matter where you log in from.'
        ]
      },
      {
        heading: 'If You Can\'t Remember Your Password',
        paragraphs: [
          'Rather than creating a new account, use the Forgot Password page. It sends a reset code to your registered number, and entering that code lets you set a new password without losing any account history, wallet balance or reward progress tied to your original registration.'
        ]
      },
      {
        heading: 'Logging Out on Shared Devices',
        paragraphs: [
          'Staying logged in is convenient on a personal phone, but on a shared or public device it\'s worth logging out manually afterward — otherwise your wallet and account details remain visible to the next person who opens the browser or app. If you ever notice login activity you don\'t recognize, changing your password immediately through the Forgot Password flow is the fastest way to secure the account.'
        ]
      }
    ]
  },
  {
    slug: '6club-register-guide',
    title: 'How to Register on 6 Club in Under a Minute',
    excerpt:
      'A full walkthrough of creating a 6 Club account, from entering your mobile number to unlocking every game category with your first deposit.',
    category: 'getting-started',
    tags: ['register', 'getting-started'],
    author: 'meera-kapoor',
    date: '2026-06-24',
    dateModified: '2026-06-24',
    faqs: [
      { q: 'Does 6 Club registration cost anything?', a: 'No, creating an account is free — a mobile number, an OTP verification step and a password are all that\'s required.' },
      { q: 'Can I register on 6 Club without an invite code?', a: 'Yes, an invite code is optional and mainly used to link your account to whoever referred you.' }
    ],
    content: [
      {
        heading: 'What You Need Before You Start',
        paragraphs: [
          'Registration goes fastest when you have an active mobile number ready to receive a one-time code — the code expires after a short window, so requesting a new one if it lapses is normal. Deciding on a payment method in advance also helps, since you won\'t be able to place a real stake until a deposit clears.'
        ]
      },
      {
        heading: 'The Registration Steps',
        paragraphs: [
          'On the Register page, enter your mobile number, confirm the OTP sent to that number, then set a password. That password, alongside your registered number, is what you\'ll use to log in from that point forward. An invite code field is available but optional.'
        ]
      },
      {
        heading: 'After You Register',
        paragraphs: [
          'There\'s no requirement to deposit immediately — you can browse game categories first. Once you do add a payment method and make a first deposit, every category becomes available right away rather than unlocking gradually, and the daily reward cycle starts tracking from that first session.'
        ]
      }
    ]
  },
  {
    slug: '6club-download-guide',
    title: '6 Club Download Guide: Android, iOS and Desktop',
    excerpt:
      'How to install the 6 Club APK on Android, set up access on iOS, or skip downloading anything and play from a desktop browser.',
    category: 'getting-started',
    tags: ['download', 'mobile'],
    author: 'rohan-verma',
    date: '2026-06-16',
    dateModified: '2026-06-16',
    faqs: [
      { q: 'Is the 6 Club Android APK safe to install?', a: 'Download it only from the official Download page rather than a third-party link, and allow installs from that source when prompted.' },
      { q: 'Do I need to download anything to play on desktop?', a: 'No, 6 Club runs directly in a desktop browser without any installation.' }
    ],
    content: [
      {
        heading: 'Installing on Android',
        paragraphs: [
          'The Download page links directly to the 6 Club Android APK. Because it installs outside the Play Store, Android will prompt you to allow installs from that source the first time — a standard step for APK installs, not specific to 6 Club. Once installed, log in with your existing account or register from inside the app.'
        ]
      },
      {
        heading: 'Setting Up on iOS',
        paragraphs: [
          'iOS access follows the installation guide linked from the Download page, which walks through the steps for your device rather than a direct App Store listing. The account itself works identically to Android and desktop once set up.'
        ]
      },
      {
        heading: 'Playing From Desktop Without Installing',
        paragraphs: [
          'If you\'d rather not install anything, 6 Club runs directly in a desktop browser with the same account, wallet and rewards as the mobile app. This is often the fastest way to try the platform before deciding whether to install a dedicated app.'
        ]
      }
    ]
  },
  {
    slug: '6club-game-explained',
    title: '"6 Club Game" Explained: What the Term Actually Means',
    excerpt:
      'Where the term "6 Club Game" comes from, what it covers, and how it relates to the 6 Club account and platform.',
    category: 'getting-started',
    tags: ['6club-game', 'overview'],
    author: 'rohan-verma',
    date: '2026-06-08',
    dateModified: '2026-06-08',
    faqs: [
      { q: 'Is 6 Club Game different from 6 Club?', a: 'No, "6 Club Game" is shorthand for the full 6 Club game catalog, not a separate product or account.' },
      { q: 'Do I need a separate account for each 6 Club Game category?', a: 'No, one 6 Club account and wallet covers every category referred to as 6 Club Game.' }
    ],
    content: [
      {
        heading: 'Where the Term Comes From',
        paragraphs: [
          'Players commonly refer to the whole 6 Club catalog collectively as "6 Club Game" — it\'s a description of the collection, not a separate app or account type. The name reflects how the platform is used in practice: one account used to access a range of game formats under the 6 Club brand.'
        ]
      },
      {
        heading: 'What Falls Under "6 Club Game"',
        paragraphs: [
          'That includes live-dealer casino tables, themed slot reels, fast-settling lottery and color prediction rounds, pre-match and live sports markets, crash games, skill-based fishing rounds and short arcade sessions. Any of these can reasonably be called a "6 Club Game" since they all sit inside the same account structure.'
        ]
      },
      {
        heading: 'Why It\'s Not a Separate App',
        paragraphs: [
          'New categories get added to the existing 6 Club account rather than launched as standalone apps, so a player who registered for slots can open a sports market or a lottery draw without creating anything new or moving funds between wallets. That shared structure is exactly why "6 Club Game" and "6 Club" describe the same underlying platform from two different angles.'
        ]
      }
    ]
  },
  {
    slug: 'how-6club-rewards-actually-work',
    title: 'How 6 Club Rewards Actually Work: Daily, Weekly and Monthly',
    excerpt:
      'A breakdown of the daily, weekly and monthly reward cycles on 6 Club, and how they stack with VIP tiers and referral earnings.',
    category: 'rewards',
    tags: ['rewards', 'vip'],
    author: 'meera-kapoor',
    date: '2026-05-28',
    dateModified: '2026-05-28',
    faqs: [
      { q: 'Do 6 Club daily rewards reset if I miss a day?', a: 'Missing a day typically resets the streak count, though the exact rule is shown on the Daily Rewards page.' },
      { q: 'Do rewards from different cycles overlap?', a: 'Yes, daily, weekly and monthly rewards run independently and don\'t cancel each other out.' }
    ],
    content: [
      {
        heading: 'The Daily Cycle',
        paragraphs: [
          'Daily rewards track consecutive login days, with the bonus typically growing the longer the streak runs. This cycle starts tracking from your first session after registering, so logging in again the next day is what keeps it moving rather than any specific amount of play.'
        ]
      },
      {
        heading: 'Weekly and Monthly Layers',
        paragraphs: [
          'On top of the daily streak, weekly cashback and monthly milestone rewards run on their own separate schedules, based on cumulative activity across that period rather than any single session. None of these three cycles replace each other — they run in parallel and are tracked from the same account dashboard.'
        ]
      },
      {
        heading: 'How Rewards Stack With VIP and Referrals',
        paragraphs: [
          'VIP tier and referral earnings sit alongside the daily, weekly and monthly cycles rather than competing with them. A higher VIP tier generally increases reward multipliers on top of the base cycle amounts, and referral earnings from invited players\' activity are tracked and paid separately again, so none of these income sources come at the expense of another.'
        ]
      }
    ]
  },
  {
    slug: '6club-bonus-types-explained',
    title: 'Every Type of 6 Club Bonus, Explained',
    excerpt:
      'A rundown of the different bonus types on 6 Club — welcome, reload, streak and game-specific — and how to tell them apart before claiming one.',
    category: 'rewards',
    tags: ['bonus', 'promotions'],
    author: 'rohan-verma',
    date: '2026-05-18',
    dateModified: '2026-05-18',
    faqs: [
      { q: 'Do 6 Club bonuses expire?', a: 'Most bonuses list an eligibility window on the offer itself, after which they\'re removed from the active list.' },
      { q: 'Can I use more than one 6 Club bonus at a time?', a: 'It depends on each offer\'s terms — some bonuses are exclusive and can\'t be combined with others.' }
    ],
    content: [
      {
        heading: 'Welcome and Reload Bonuses',
        paragraphs: [
          'Welcome offers apply to new accounts, typically tied to an early deposit. Reload bonuses work similarly but are open to existing accounts, usually triggered by a deposit above a listed threshold. Both types list their own wagering conditions on the offer before you opt in.'
        ]
      },
      {
        heading: 'Streak and Milestone Bonuses',
        paragraphs: [
          'Separate from welcome and reload offers, streak bonuses reward consecutive wins or consistent daily activity with an added percentage on top of normal payouts. These run alongside the standard reward cycles rather than replacing them, so claiming one doesn\'t use up anything from your daily or weekly rewards.'
        ]
      },
      {
        heading: 'Reading the Terms Before You Claim',
        paragraphs: [
          'Every bonus type lists its own eligibility window and wagering requirement, shown directly on the offer. Confirming a promotion through your 6 Club account or official app, rather than an outside link, and reading those terms before it\'s applied to your wallet, avoids surprises about what the bonus actually requires.'
        ]
      }
    ]
  }
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

export function getPostsByTag(tagSlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.tags.includes(tagSlug));
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getAllPosts().filter((p) => p.author === authorSlug);
}

export function getCategory(slug: string): BlogCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAuthor(slug: string): BlogAuthor | undefined {
  return authors.find((a) => a.slug === slug);
}

export function getCategoriesWithCounts(): (BlogCategory & { count: number })[] {
  return categories.map((c) => ({ ...c, count: getPostsByCategory(c.slug).length }));
}

export function getAllTags(): BlogTagCount[] {
  const tagSet = new Map<string, number>();
  posts.forEach((p) => {
    p.tags.forEach((t) => {
      tagSet.set(t, (tagSet.get(t) || 0) + 1);
    });
  });
  return Array.from(tagSet.entries()).map(([slug, count]) => ({
    slug,
    name: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    count
  }));
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, limit);
}
