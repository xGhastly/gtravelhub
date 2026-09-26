/**
 * GTRAVEL HUB - Interatividade & UX Refinado (Versão 3)
 * WhatsApp Oficial: 88 99723-6929
 * Atualizado com as 4 Coleções de Viagem, 6 Serviços e Formulário Qualificador com Chips
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '5588997236929';

  // 1. Header Sticky & Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Menu Mobile Drawer
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawerWrapper = document.getElementById('mobileDrawerWrapper');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileMenu = () => {
    const isOpening = !mobileDrawer.classList.contains('active');
    mobileBtn.classList.toggle('active', isOpening);
    if (mobileDrawerWrapper) {
      mobileDrawerWrapper.classList.toggle('active', isOpening);
    }
    mobileDrawer.classList.toggle('active', isOpening);
    if (mobileBackdrop) {
      mobileBackdrop.classList.toggle('active', isOpening);
    }
    document.body.style.overflow = isOpening ? 'hidden' : '';
  };

  if (mobileBtn) mobileBtn.addEventListener('click', toggleMobileMenu);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', toggleMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });

  // 3. Filtro de Destinos em Destaque
  const filterBtns = document.querySelectorAll('.filter-btn');
  const destinationCards = document.querySelectorAll('.destination-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      destinationCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 4. FAQ Accordion Acessível
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';

        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (!isExpanded) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        }
      });
    }
  });

  // 5. Máscara de Telefone / WhatsApp com DDD
  const phoneInput = document.getElementById('plannerPhone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }

  // 6. Envio do Formulário Qualificador para o WhatsApp
  const plannerForm = document.getElementById('travelPlannerForm');
  if (plannerForm) {
    plannerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('plannerName').value.trim();
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const serviceEl = document.getElementById('plannerService');
      const service = serviceEl ? serviceEl.value : 'Não especificado';
      const destination = document.getElementById('plannerDestination').value.trim() || 'A definir com a consultoria';
      const travelersEl = document.getElementById('plannerTravelers');
      const travelers = travelersEl ? travelersEl.value : 'A definir';
      const investmentEl = document.getElementById('plannerInvestment');
      const investment = investmentEl ? investmentEl.value : 'Ainda estou descobrindo';
      const dateEl = document.getElementById('plannerDate');
      const date = dateEl ? dateEl.value : 'Ainda não defini';
      const details = document.getElementById('plannerDetails').value.trim();

      // Monta mensagem qualificada e elegante para o WhatsApp
      let msg = `✨ *SOLICITAÇÃO DE CONSULTORIA — GTRAVEL HUB* ✨\n\n`;
      msg += `👤 *Nome:* ${name}\n`;
      if (phone) msg += `📱 *WhatsApp:* ${phone}\n`;
      msg += `🎯 *O que procura:* ${service}\n`;
      msg += `📍 *Destino/Região:* ${destination}\n`;
      msg += `👥 *Viajantes:* ${travelers}\n`;
      msg += `💰 *Faixa de Investimento:* ${investment}\n`;
      msg += `📅 *Quando pretende viajar:* ${date}\n`;
      if (details) {
        msg += `📝 *Preferências & Detalhes:* ${details}\n`;
      }
      msg += `\n_Enviado através do formulário de curadoria do site oficial._`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // 8. Modal de Política de Privacidade
  const privacyModal = document.getElementById('privacyModal');
  const openPrivacyBtns = document.querySelectorAll('.open-privacy-modal');
  const closePrivacyBtn = document.getElementById('closePrivacyModal');

  openPrivacyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (privacyModal) privacyModal.classList.add('active');
    });
  });

  if (closePrivacyBtn && privacyModal) {
    closePrivacyBtn.addEventListener('click', () => {
      privacyModal.classList.remove('active');
    });

    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) {
        privacyModal.classList.remove('active');
      }
    });
  }

  // 9. Intersection Observer para Animações Suaves
  const animElements = document.querySelectorAll('.line-card, .service-card, .destination-card, .why-item, .testimonial-card, .stat-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
});
