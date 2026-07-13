const { renderPage } = require('../helpers/render.helper');
const { buildMeta } = require('../helpers/seo.helper');
const { buildBreadcrumbSchema } = require('../helpers/breadcrumb.helper');
const { organizationSchema, webPageSchema, articleSchema, faqSchema } = require('../helpers/schema.helper');
const { paginate } = require('../helpers/pagination.helper');
const readingTime = require('../helpers/reading-time.helper');
const blog = require('../data/blog.data');

const PER_PAGE = 6;

function recentSidebarData() {
  return {
    categories: blog.getCategoriesWithCounts(),
    tags: blog.getAllTags().slice(0, 12),
    recentPosts: blog
      .getAllPosts()
      .slice(0, 5)
      .map((p) => ({ slug: p.slug, title: p.title, date: p.date }))
  };
}

async function listing(req, res, { posts, title, description, path, eyebrow, heading }) {
  const page = parseInt(req.params.page, 10) || 1;
  const pagination = paginate(posts, page, PER_PAGE);

  const meta = buildMeta({ title, description, path });
  const schemas = [organizationSchema(), webPageSchema({ title, description, path })];

  await renderPage(req, res, 'blog/index', {
    meta,
    schemas,
    eyebrow,
    heading,
    posts: pagination.items,
    pagination,
    baseUrl: path,
    breadcrumb: [{ label: 'Home', url: '/' }, { label: 'Blog', url: path === '/blog' ? null : '/blog' }].concat(
      path === '/blog' ? [] : [{ label: heading, url: null }]
    ),
    ...recentSidebarData()
  });
}

async function index(req, res) {
  await listing(req, res, {
    posts: blog.getAllPosts(),
    title: 'BDG Win Blog – Guides, Tips and Platform Updates',
    description: 'The BDG Win blog covers game guides, payment tips, rewards explainers and responsible gaming articles.',
    path: '/blog',
    eyebrow: 'BDG Win Blog',
    heading: 'BDG Win Blog'
  });
}

async function byCategory(req, res, next) {
  const category = blog.getCategory(req.params.slug);
  if (!category) return next();

  await listing(req, res, {
    posts: blog.getPostsByCategory(category.slug),
    title: `${category.name} Articles | BDG Win Blog`,
    description: `Read BDG Win blog articles filed under ${category.name}.`,
    path: `/blog/category/${category.slug}`,
    eyebrow: 'Category',
    heading: category.name
  });
}

async function byTag(req, res) {
  const tagSlug = req.params.slug;
  const tagName = tagSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  await listing(req, res, {
    posts: blog.getPostsByTag(tagSlug),
    title: `${tagName} Articles | BDG Win Blog`,
    description: `BDG Win blog articles tagged ${tagName}.`,
    path: `/blog/tag/${tagSlug}`,
    eyebrow: 'Tag',
    heading: `#${tagName}`
  });
}

async function byAuthor(req, res, next) {
  const author = blog.getAuthor(req.params.slug);
  if (!author) return next();

  await listing(req, res, {
    posts: blog.getPostsByAuthor(author.slug),
    title: `Articles by ${author.name} | BDG Win Blog`,
    description: `BDG Win blog articles written by ${author.name}, ${author.role}.`,
    path: `/blog/author/${author.slug}`,
    eyebrow: 'Author',
    heading: author.name
  });
}

async function show(req, res, next) {
  const post = blog.getPostBySlug(req.params.slug);
  if (!post) return next();

  const author = blog.getAuthor(post.author);
  const category = blog.getCategory(post.category);
  const relatedPosts = blog.getRelatedPosts(post);
  const fullText = post.content.map((s) => (s.paragraphs || []).join(' ')).join(' ');
  const path = `/blog/${post.slug}`;

  const meta = buildMeta({
    title: `${post.title} | BDG Win Blog`,
    description: post.excerpt,
    path,
    type: 'article',
    image: '/images/blog-cover.png',
    imageWidth: '800',
    imageHeight: '450'
  });

  const breadcrumb = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog' },
    { label: post.title, url: null }
  ];

  const schemas = [
    organizationSchema(),
    articleSchema({
      title: post.title,
      description: post.excerpt,
      image: '/images/blog-cover.png',
      path,
      datePublished: post.date,
      dateModified: post.dateModified,
      authorName: author ? author.name : undefined
    }),
    buildBreadcrumbSchema(breadcrumb),
    faqSchema(post.faqs)
  ].filter(Boolean);

  const toc = post.content.filter((s) => s.heading).map((s) => s.heading);

  await renderPage(req, res, 'blog/post', {
    meta,
    schemas,
    post,
    author,
    category,
    relatedPosts,
    toc,
    readingTime: readingTime(fullText),
    breadcrumb
  });
}

module.exports = { index, byCategory, byTag, byAuthor, show };
