'use strict';

const projects = {
  'seo-research': {
    name: 'Keyword Research & SEO Strategy', category: 'SEO / Research',
    description: 'Examples of keyword analysis, search intent research and competitive discovery from my SEO work.',
    images: [
      ['keyword-research', 'Keyword research spreadsheet'],
      ['keyword-gap', 'Keyword selection and ranking analysis'],
      ['competitor-research', 'Competitive keyword research'],
      ['onpage-analysis', 'On-page analysis worksheet']
    ]
  },
  'seo-audits': {
    name: 'Website SEO Audits', category: 'SEO / Technical & Content',
    description: 'A selection of website audit, content optimization, competitor review and technical SEO documentation.',
    images: [
      ['site-audit', 'Website analysis and on-page SEO checks'],
      ['seo-checklist', 'Structured SEO audit checklist'],
      ['seo-checklist-two', 'Site audit evaluation'],
      ['technical-audit', 'Technical SEO review'],
      ['content-optimization', 'SEO content optimization work'],
      ['onpage-wrike', 'On-page article optimization'],
      ['onpage-legalzoom', 'Content optimization in WordPress'],
      ['offpage-analysis', 'Off-page competitive analysis']
    ]
  },
  techsoft: {
    name: 'Techsoft Digi', category: 'SEO / Website',
    description: 'Examples of site content and technical SEO documentation, including XML sitemaps and robots.txt.',
    images: [
      ['techsoft-site', 'Techsoft Digi website'],
      ['techsoft-about', 'About page'],
      ['techsoft-sitemap', 'XML sitemap'],
      ['techsoft-robots', 'Robots.txt documentation'],
      ['sitemap', 'Sitemap screenshot'],
      ['robots', 'Robots directives screenshot']
    ]
  },
  ecommerce: {
    name: 'E-Commerce Technical SEO', category: 'SEO / E-Commerce',
    description: 'Technical setup and optimization environment for a WordPress-based e-commerce website.',
    images: [['ecommerce-tech', 'WordPress technical plugin setup']]
  },
  a3: {
    name: 'A3 Sports', category: 'Social Media / Sports',
    description: 'Cross-platform content planning, social profile setup, and messaging touchpoints for a sports retail brand.',
    images: [
      ['a3-facebook', 'Facebook page branding'],
      ['a3-instagram', 'Instagram account profile'],
      ['a3-messenger', 'Messenger automation view'],
      ['a3-finland', 'International social profile'],
      ['a3-content-one', 'Social content planning worksheet'],
      ['a3-content-two', 'More multi-platform captions']
    ]
  },
  churi: {
    name: 'Churi Ghor', category: 'Social Media / Creative Design',
    description: 'Bangla-language handmade bangle product creatives designed for visual storytelling on social platforms.',
    images: [
      ['churi-creative-one', 'Handmade bracelets social visual'],
      ['churi-creative-two', 'Black and white bracelet campaign creative'],
      ['churi-creative-three', 'Blue bracelet product design'],
      ['churi-creative-four', 'Handmade bangle product promotion']
    ]
  },
  flow: {
    name: '4Flow', category: 'Social Media / B2B',
    description: 'B2B social creative examples on supply chain complexity, technology, sustainability and logistics.',
    images: [
      ['flow-control', 'From complexity to control'],
      ['flow-sustainability', 'Sustainable supply chain campaign'],
      ['flow-technology', 'Technology as supply chain advantage'],
      ['flow-global', 'Global supply chain concept'],
      ['flow-4pl', '3PL and 4PL explainer graphic']
    ]
  },
  piks: {
    name: 'Global Piks', category: 'Social Media / E-Commerce',
    description: 'Content planning, caption copy and promotional creatives across beauty, lifestyle and consumer products.',
    images: [
      ['global-piks-dior', 'Beauty product social marketing'],
      ['global-piks-vanity', 'Cosmetics product campaign'],
      ['global-piks-reel', 'Short-form product creative'],
      ['global-piks-mac', 'Makeup product post'],
      ['global-piks-plan', 'Cross-platform content plan'],
      ['global-piks-content', 'Social copywriting worksheet'],
      ['global-piks-campaigns', 'Campaign content examples']
    ]
  },
  sync: {
    name: 'Global Sync', category: 'Social Media / Education',
    description: 'Content planning and campaign examples for education and study-abroad communications.',
    images: [
      ['global-sync-ai', 'Study artificial intelligence campaign'],
      ['global-sync-scholarship', 'Study in China scholarship post'],
      ['global-sync-ranking', 'University ranking announcement'],
      ['global-sync-content', 'Education content planning worksheet']
    ]
  },
  pixel: {
    name: 'Meta Pixel Setup', category: 'Social Media / Tracking',
    description: 'An example from Meta Events Manager showing website event-tracking configuration.',
    images: [['meta-pixel', 'Events Manager pixel and event activity']]
  }
};

const toggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  mobileNav.hidden = expanded;
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}));

const filters = [...document.querySelectorAll('.filter-button')];
filters.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach(b => {
    const active = b === button;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.hidden = filter !== 'all' && card.dataset.category !== filter;
  });
}));

const modal = document.querySelector('#gallery-modal');
const galleryTitle = document.querySelector('#gallery-title');
const galleryType = document.querySelector('#gallery-type');
const galleryDescription = document.querySelector('#gallery-description');
const galleryImage = document.querySelector('#gallery-image');
const galleryCount = document.querySelector('#gallery-count');
const galleryCaption = document.querySelector('#gallery-caption');
const galleryDots = document.querySelector('#gallery-dots');
let selectedProject = null;
let selectedIndex = 0;
let lastTrigger = null;

function displayImage() {
  const [filename, caption] = selectedProject.images[selectedIndex];
  galleryImage.src = `assets/${filename}.webp`;
  galleryImage.alt = caption;
  galleryCaption.textContent = caption;
  galleryCount.textContent = `${String(selectedIndex + 1).padStart(2, '0')} / ${String(selectedProject.images.length).padStart(2, '0')}`;
  [...galleryDots.children].forEach((dot, idx) => {
    dot.classList.toggle('active', idx === selectedIndex);
    dot.setAttribute('aria-label', `View image ${idx + 1}`);
    dot.setAttribute('aria-current', idx === selectedIndex ? 'true' : 'false');
  });
  const hasMultiple = selectedProject.images.length > 1;
  document.querySelector('.gallery-prev').hidden = !hasMultiple;
  document.querySelector('.gallery-next').hidden = !hasMultiple;
}
function openGallery(key, trigger) {
  selectedProject = projects[key];
  if (!selectedProject) return;
  lastTrigger = trigger;
  selectedIndex = 0;
  galleryTitle.textContent = selectedProject.name;
  galleryType.textContent = selectedProject.category.toUpperCase();
  galleryDescription.textContent = selectedProject.description;
  galleryDots.replaceChildren();
  selectedProject.images.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.addEventListener('click', () => { selectedIndex = index; displayImage(); });
    galleryDots.append(dot);
  });
  displayImage();
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-close').focus();
}
function closeGallery() {
  modal.hidden = true;
  galleryImage.removeAttribute('src');
  document.body.classList.remove('modal-open');
  selectedProject = null;
  if (lastTrigger) lastTrigger.focus();
}
function switchGallery(direction) {
  if (!selectedProject) return;
  selectedIndex = (selectedIndex + direction + selectedProject.images.length) % selectedProject.images.length;
  displayImage();
}
document.querySelectorAll('.project-card').forEach(card => {
  const trigger = card.querySelector('.project-open');
  trigger.addEventListener('click', () => openGallery(card.dataset.project, trigger));
});
document.querySelector('.modal-close').addEventListener('click', closeGallery);
document.querySelector('.modal-underlay').addEventListener('click', closeGallery);
document.querySelector('.gallery-prev').addEventListener('click', () => switchGallery(-1));
document.querySelector('.gallery-next').addEventListener('click', () => switchGallery(1));
document.addEventListener('keydown', event => {
  if (modal.hidden) return;
  if (event.key === 'Escape') closeGallery();
  if (event.key === 'ArrowLeft') switchGallery(-1);
  if (event.key === 'ArrowRight') switchGallery(1);
  if (event.key === 'Tab') {
    const controls = [...modal.querySelectorAll('button:not([hidden])')];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
document.querySelector('#year').textContent = String(new Date().getFullYear());
