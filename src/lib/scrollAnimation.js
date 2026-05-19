export function scrollAnimation(node, { animation = 'fade', duration = 3000, delay = 0, skipInitial = false } = {}) {
  let observer;

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (skipInitial) {
          node.style.opacity = '1';
          node.style.transform = 'translateY(0) scale(1)';
        } else {
          node.style.opacity = '0';
          node.style.transform = getInitialTransform(animation);
          
          setTimeout(() => {
            node.style.transition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
            node.style.opacity = '1';
            node.style.transform = 'translateY(0) scale(1)';
          }, 100);
        }
        
        observer.unobserve(node);
      }
    });
  };

  const getInitialTransform = (animation) => {
    switch (animation) {
      case 'slideUp':
        return 'translateY(50px)';
      case 'slideDown':
        return 'translateY(-50px)';
      case 'slideLeft':
        return 'translateX(-50px)';
      case 'slideRight':
        return 'translateX(50px)';
      case 'scale':
        return 'scale(0.8)';
      default:
        return 'translateY(20px)';
    }
  };

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1
  });

  observer.observe(node);

  return {
    destroy() {
      if (observer) {
        observer.disconnect();
      }
    }
  };
} 