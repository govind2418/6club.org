import '../css/main.css';

function initMobileMenu() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function closeFaqItem(item) {
  const question = item.querySelector('[data-faq-question]');
  const answer = item.querySelector('[data-faq-answer]');
  item.setAttribute('data-open', 'false');
  if (question) question.setAttribute('aria-expanded', 'false');
  if (answer) answer.style.maxHeight = null;
}

function initFaqAccordion() {
  document.querySelectorAll('[data-faq-item]').forEach((item) => {
    const question = item.querySelector('[data-faq-question]');
    const answer = item.querySelector('[data-faq-answer]');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-open') === 'true';
      const group = item.parentElement ? item.parentElement.querySelectorAll('[data-faq-item]') : [item];
      group.forEach(closeFaqItem);

      if (!isOpen) {
        item.setAttribute('data-open', 'true');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseFloat(el.getAttribute('data-counter'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      const value = Math.floor(target * eased);
      el.textContent = value.toLocaleString('en-IN') + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('en-IN') + suffix;
    };
    requestAnimationFrame(step);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => observer.observe(el));
  } else {
    counters.forEach(animate);
  }
}

function initHeaderScroll() {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('bg-black/70', window.scrollY > 12);
    header.classList.toggle('backdrop-blur-md', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initCounters();
  initHeaderScroll();
});
