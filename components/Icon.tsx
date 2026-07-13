import type { ComponentType, SVGProps } from 'react';
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Gift,
  Smartphone,
  Apple,
  Monitor,
  Lock,
  BadgeCheck,
  Eye,
  LifeBuoy,
  ChevronDown,
  Menu,
  Send,
  ArrowRight,
  Star,
  Plus,
  Spade,
  Coins,
  Ticket,
  Trophy,
  Rocket,
  Anchor,
  Gamepad2,
  Flame,
  Timer,
  Headset,
  Sunrise,
  CalendarDays,
  CalendarRange,
  Crown
} from 'lucide-react';
import { Facebook, Instagram } from './icons/brand-icons';

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  zap: Zap,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  gift: Gift,
  smartphone: Smartphone,
  apple: Apple,
  monitor: Monitor,
  lock: Lock,
  'badge-check': BadgeCheck,
  eye: Eye,
  'life-buoy': LifeBuoy,
  'chevron-down': ChevronDown,
  menu: Menu,
  facebook: Facebook,
  instagram: Instagram,
  send: Send,
  'arrow-right': ArrowRight,
  star: Star,
  plus: Plus,
  spade: Spade,
  coins: Coins,
  ticket: Ticket,
  trophy: Trophy,
  rocket: Rocket,
  anchor: Anchor,
  'gamepad-2': Gamepad2,
  flame: Flame,
  timer: Timer,
  headset: Headset,
  sunrise: Sunrise,
  'calendar-days': CalendarDays,
  'calendar-range': CalendarRange,
  crown: Crown
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name];
  if (!Component) return null;
  return <Component className={className} />;
}
