import { createIcons, Heart, ShieldCheck, PlayCircle, Leaf, Brain, Activity, ArrowLeft, ArrowRight, Instagram, Linkedin, MessageCircle, CheckCircle2 } from 'https://unpkg.com/lucide@latest/dist/lucide.js';

lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from('.hero-content h1', {
opacity: 0,
y: 50,
duration: 1,
ease: 'power3.out'
})
.from('.hero-content p', {
opacity: 0,
y: 30,
duration: 0.8,
ease: 'power3.out'
}, '-=0.6')
.from('.hero-content button', {
opacity: 0,
y: 20,
duration: 0.6,
stagger: 0.2,
ease: 'power3.out'
}, '-=0.4')
.from('.hero-image', {
opacity: 0,
scale: 0.8,
duration: 1.2,
ease: 'elastic.out(1, 0.75)'
}, '-=1');

gsap.from('.pillar-card', {
scrollTrigger: {
trigger: '#pillars',
start: 'top 80%',
},
opacity: 0,
y: 40,
duration: 0.8,
stagger: 0.2,
ease: 'power2.out'
});

gsap.from('.expert-profile', {
scrollTrigger: {
trigger: '#experts',
start: 'top 85%',
},
opacity: 0,
scale: 0.5,
duration: 0.6,
stagger: 0.1,
ease: 'back.out(1.7)'
});

window.addEventListener('scroll', () => {
const nav = document.querySelector('nav');
if (window.scrollY > 50) {
nav.classList.add('scrolled', 'bg-white/95');
} else {
nav.classList.remove('scrolled', 'bg-white/95');
}
});
});

const brandData = {
experts: [
{ name: '北京协和医学院', role: '临床指导' },
{ name: '湘雅医院', role: '医学研究' },
{ name: '北京师范大学', role: '心理学专家' }
]
};

console.log('泊泉健康 Web App 初始化成功');
