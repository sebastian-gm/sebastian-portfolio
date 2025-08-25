// Scroll reveal animation utilities
export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  // Observe all elements with the 'reveal' class
  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Initialize animations when DOM is loaded
export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // If DOM is still loading, wait for it. Otherwise, initialize immediately.
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
      } else {
        initScrollReveal();
      }
    } else {
      // If user prefers reduced motion, make all reveal elements visible immediately
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('active');
      });
    }
  }
};