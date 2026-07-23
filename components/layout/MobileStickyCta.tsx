import { Icon } from '@/components/Icon';

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-goldline bg-black/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <a
        href="/go"
        className="btn-gold flex w-full items-center justify-center gap-2 animate-pulseGlow"
      >
        <Icon name="gift" className="h-4 w-4" />
        6 Club Signup — Get ₹500 Gift Code
      </a>
    </div>
  );
}
