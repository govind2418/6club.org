import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FaqAccordion } from '@/components/FaqAccordion';
import { Cta } from '@/components/Cta';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { buildMeta } from '@/lib/seo';
import { organizationSchema, articleSchema, faqSchema } from '@/lib/schema';
import { buildBreadcrumbSchema } from '@/lib/breadcrumb';
import { readingTime } from '@/lib/reading-time';
import * as blog from '@/data/blog.data';

export function generateStaticParams() {
  return blog.posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.getPostBySlug(slug);
  if (!post) return {};
  return buildMeta({
    title: `${post.title} | BDG Win Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
    image: '/images/blog-cover.png',
    imageWidth: '800',
    imageHeight: '450'
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blog.getPostBySlug(slug);
  if (!post) notFound();

  const author = blog.getAuthor(post.author);
  const category = blog.getCategory(post.category);
  const relatedPosts = blog.getRelatedPosts(post);
  const fullText = post.content.map((s) => (s.paragraphs || []).join(' ')).join(' ');
  const path = `/blog/${post.slug}`;
  const toc = post.content.filter((s) => s.heading).map((s) => s.heading as string);

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
  ];

  return (
    <>
      <JsonLd schemas={schemas} />
      <Breadcrumb breadcrumb={breadcrumb} />

      <article className="mx-auto max-w-3xl px-5 py-14 lg:px-8">
        <header className="mb-8 text-center">
          {category && (
            <a href={`/blog/category/${category.slug}`} className="section-eyebrow">
              {category.name}
            </a>
          )}
          <h1 className="text-balance mt-4 text-2xl font-bold text-white lg:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-grey">
            {author && (
              <>
                <a href={`/blog/author/${author.slug}`} className="hover:text-gold">
                  By {author.name}
                </a>
                <span>&middot;</span>
              </>
            )}
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{readingTime(fullText)}</span>
          </div>
        </header>

        <img
          src="/images/blog-cover.svg"
          alt=""
          width={800}
          height={450}
          className="mb-10 w-full rounded-2xl border border-goldline"
        />

        {toc.length > 0 && (
          <nav aria-label="Table of contents" className="card-surface mb-10 p-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">In This Article</h2>
            <ol className="space-y-2 text-sm text-grey">
              {toc.map((heading, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="hover:text-gold">
                    {heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="space-y-10">
          {post.content.map((section, i) => (
            <div key={i} id={`section-${i}`}>
              {section.heading && <h2 className="mb-3 text-xl font-semibold text-white">{section.heading}</h2>}
              {(section.paragraphs || []).map((p, pi) => (
                <p key={pi} className="mb-4 text-sm leading-relaxed text-grey lg:text-base">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {author && <AuthorBio author={author} />}

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <a
              key={tag}
              href={`/blog/tag/${tag}`}
              className="rounded-full border border-goldline px-3 py-1 text-xs text-grey hover:border-gold hover:text-gold"
            >
              #{tag}
            </a>
          ))}
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && <FaqAccordion faqs={post.faqs} faqTitle="FAQs" faqHeadingId="post-faq" />}

      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-16 lg:px-8">
          <h2 className="mb-6 text-xl font-semibold text-white">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((rp) => (
              <a key={rp.slug} href={`/blog/${rp.slug}`} className="card-surface p-5">
                <p className="text-xs uppercase tracking-wide text-gold">{rp.date}</p>
                <h3 className="mt-2 text-sm font-semibold text-white">{rp.title}</h3>
              </a>
            ))}
          </div>
        </section>
      )}

      <Cta />
    </>
  );
}
