import type { ReactNode } from 'react';
import { siteConfig } from './site.config';

export interface LinkifyTracker {
  done: boolean;
}

export function createLinkifyTracker(): LinkifyTracker {
  return { done: false };
}

const KEYWORD = '6 Club';
const HOME_URL = siteConfig.siteUrl;

/**
 * Wraps the first "6 Club" mention found across a page in a homepage link,
 * then leaves every subsequent mention as plain text via the shared tracker —
 * one contextual internal link per page reads naturally; linking every
 * mention would look like anchor-text stuffing to search engines.
 */
export function linkifyBrandOnce(text: string, tracker: LinkifyTracker): ReactNode {
  if (tracker.done) return text;
  const idx = text.indexOf(KEYWORD);
  if (idx === -1) return text;
  tracker.done = true;
  return (
    <>
      {text.slice(0, idx)}
      <a href={HOME_URL} className="underline decoration-goldline underline-offset-2 hover:text-gold">
        {KEYWORD}
      </a>
      {text.slice(idx + KEYWORD.length)}
    </>
  );
}
