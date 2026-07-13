const authors = [
  {
    slug: 'meera-kapoor',
    name: 'Meera Kapoor',
    role: 'Content Lead, BDG Win',
    bio: 'Meera covers BDG Win platform guides, focusing on account setup, payments and rewards mechanics.'
  },
  {
    slug: 'rohan-verma',
    name: 'Rohan Verma',
    role: 'Product Writer, BDG Win',
    bio: 'Rohan writes about BDG Win game categories, covering how each format works and what to expect before you play.'
  }
];

const categories = [
  { slug: 'game-guides', name: 'Game Guides' },
  { slug: 'payments', name: 'Payments' },
  { slug: 'rewards', name: 'Rewards' },
  { slug: 'sports', name: 'Sports' },
  { slug: 'responsible-gaming', name: 'Responsible Gaming' }
];

const posts = [
  {
    slug: 'how-bdg-win-color-prediction-rounds-settle',
    title: 'How BDG Win Color Prediction Rounds Actually Settle',
    excerpt:
      'A plain-language look at how BDG Win Color Prediction rounds are timed, settled and logged, for players who want to understand the mechanics before playing.',
    category: 'game-guides',
    tags: ['color-prediction', 'lottery', 'strategy'],
    author: 'rohan-verma',
    date: '2026-05-04',
    dateModified: '2026-05-04',
    faqs: [
      { q: 'Does a past Color Prediction round affect the next one?', a: 'No, each BDG Win Color Prediction round uses independent certified random generation, so previous outcomes have no bearing on the next round.' },
      { q: 'How long does one round take?', a: 'Rounds run on a short, fixed timer, considerably faster than a scheduled numbered lottery draw.' }
    ],
    content: [
      {
        heading: 'Why Color Prediction Feels Different From a Slot Spin',
        paragraphs: [
          'BDG Win Color Prediction sits in the Lottery Games category, but it plays faster than a numbered draw. Instead of waiting for a scheduled draw time, each round runs on a short, fixed timer, and the outcome is generated the moment that timer ends rather than on a daily or weekly schedule.',
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
    slug: 'beginners-guide-to-bdg-win-slot-volatility',
    title: "A Beginner's Guide to BDG Win Slot Volatility",
    excerpt:
      'What "volatility" actually means for BDG Win slot titles, and how to pick a stake range that matches the way you like to play.',
    category: 'game-guides',
    tags: ['slots', 'beginner'],
    author: 'rohan-verma',
    date: '2026-04-18',
    dateModified: '2026-04-20',
    faqs: [
      { q: 'Is high volatility better than low volatility on BDG Win slots?', a: 'Neither is objectively better — it depends on whether you prefer steadier smaller payouts or less frequent larger ones.' },
      { q: 'Can I change my stake mid-session?', a: 'Yes, BDG Win slot titles let you adjust your stake per spin within the listed range at any time.' }
    ],
    content: [
      {
        heading: 'What Volatility Describes',
        paragraphs: [
          'Volatility is simply a way of describing how a slot title pays out over time. Lower-volatility BDG Win slots tend to pay smaller amounts more frequently, while higher-volatility titles pay less often but with larger amounts when they do land.',
          'Neither approach is objectively better — it comes down to whether you prefer a steadier balance or occasional bigger swings.'
        ]
      },
      {
        heading: 'Matching Stakes to Volatility',
        paragraphs: [
          'On BDG Win, each slot title lets you adjust your stake per spin within a set range. A common approach with higher-volatility titles is to lower your per-spin stake slightly, simply so a longer run without a payout does not use up your session balance too quickly.',
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
    slug: 'habits-that-keep-bdg-win-withdrawals-fast',
    title: '5 Habits That Keep Your BDG Win Withdrawals Fast',
    excerpt:
      'Small account habits that reduce the chance of a delayed BDG Win withdrawal, based on the most common support questions.',
    category: 'payments',
    tags: ['withdrawal', 'security'],
    author: 'meera-kapoor',
    date: '2026-03-22',
    dateModified: '2026-03-22',
    faqs: [
      { q: 'Why was my BDG Win withdrawal sent for manual review?', a: 'This usually happens when the withdrawal method differs from the original deposit method or verification has lapsed.' },
      { q: 'Does VIP tier really change withdrawal speed?', a: 'Yes, higher BDG Win VIP tiers are typically prioritized ahead of the standard withdrawal queue.' }
    ],
    content: [
      {
        heading: '1. Keep Your Payment Method Verified',
        paragraphs: [
          'BDG Win withdrawals are processed through the same verified method used for deposits. If that method\'s verification status lapses or changes, it can hold up a withdrawal until it is reconfirmed.'
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
          'Higher BDG Win VIP tiers are typically prioritized in the withdrawal queue. If speed matters to you, the Rewards and VIP Program pages explain what moves your tier up.'
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
    slug: 'understanding-the-bdg-win-vip-ladder',
    title: 'Understanding the BDG Win VIP Ladder',
    excerpt:
      'How BDG Win VIP tiers are earned, what changes at each stage, and why withdrawal speed is the benefit most players notice first.',
    category: 'rewards',
    tags: ['vip', 'rewards'],
    author: 'meera-kapoor',
    date: '2026-02-10',
    dateModified: '2026-02-14',
    faqs: [
      { q: 'Do I need to pay to reach a higher BDG Win VIP tier?', a: 'No, VIP tiers are earned through normal account activity, not purchased.' },
      { q: 'Can my VIP tier decrease?', a: 'Tiers are based on rolling activity, so extended inactivity can affect your standing at the next review.' }
    ],
    content: [
      {
        heading: 'How Tiers Are Earned, Not Bought',
        paragraphs: [
          'Unlike a paid membership, BDG Win VIP tiers are unlocked through normal account activity across the daily, weekly and monthly reward cycles. There is no separate fee or application — the system reviews your cumulative activity and moves your tier accordingly.'
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
    slug: 'reading-bdg-win-sports-markets-before-cricket-season',
    title: 'Reading BDG Win Sports Markets Before Cricket Season',
    excerpt:
      'A practical primer on how pre-match and live BDG Win sports markets are structured, using cricket as the example.',
    category: 'sports',
    tags: ['sports', 'cricket'],
    author: 'rohan-verma',
    date: '2026-01-29',
    dateModified: '2026-01-29',
    faqs: [
      { q: 'Why do live BDG Win sports odds change so quickly?', a: 'Live odds reflect the current state of the match, so events like a wicket or a run-rate shift move them in real time.' },
      { q: 'How are BDG Win sports markets settled?', a: 'Settlement always follows the official result of the underlying match or event.' }
    ],
    content: [
      {
        heading: 'Pre-Match vs Live Markets',
        paragraphs: [
          'Pre-match markets on BDG Win open before a fixture starts and lock once it begins. Live markets take over from there, with odds adjusting continuously as the match progresses — a wicket, a chase acceleration or a run-rate shift will all move live odds quickly.'
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
          'All BDG Win sports markets settle based on official match results, so the outcome is never a platform judgment call — it follows the recognized result of the fixture itself.'
        ]
      }
    ]
  },
  {
    slug: 'practical-guide-to-responsible-play-on-bdg-win',
    title: 'Setting Limits: A Practical Guide to Responsible Play on BDG Win',
    excerpt:
      'How to set deposit and session limits on BDG Win before you start playing, not after a difficult session.',
    category: 'responsible-gaming',
    tags: ['responsible-gaming', 'security'],
    author: 'meera-kapoor',
    date: '2025-12-15',
    dateModified: '2025-12-15',
    faqs: [
      { q: 'Where do I set a deposit limit on BDG Win?', a: 'Deposit limits are set from your account settings and apply to future deposits going forward.' },
      { q: 'What does the cooling-off option do?', a: 'It pauses account activity for a set period without requiring full account closure.' }
    ],
    content: [
      {
        heading: 'Set Limits Before You Start, Not After',
        paragraphs: [
          'The most useful time to set a BDG Win deposit limit is before your session, not partway through one. Limits set from account settings apply to future deposits, so doing this ahead of time removes a decision from the moment you might least want to make it carefully.'
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
  }
];

function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

function getPostsByTag(tagSlug) {
  return getAllPosts().filter((p) => p.tags.includes(tagSlug));
}

function getPostsByAuthor(authorSlug) {
  return getAllPosts().filter((p) => p.author === authorSlug);
}

function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

function getAuthor(slug) {
  return authors.find((a) => a.slug === slug);
}

function getCategoriesWithCounts() {
  return categories.map((c) => ({ ...c, count: getPostsByCategory(c.slug).length }));
}

function getAllTags() {
  const tagSet = new Map();
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

function getRelatedPosts(post, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, limit);
}

module.exports = {
  authors,
  categories,
  posts,
  getAllPosts,
  getPostBySlug,
  getPostsByCategory,
  getPostsByTag,
  getPostsByAuthor,
  getCategory,
  getAuthor,
  getCategoriesWithCounts,
  getAllTags,
  getRelatedPosts
};
