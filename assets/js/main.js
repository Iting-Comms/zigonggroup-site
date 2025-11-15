// ===========================
// Smooth Scrolling for Navigation Links
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }

    // ===========================
    // Header Scroll Effect
    // ===========================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }

        lastScroll = currentScroll;
    });

    // ===========================
    // Back to Top Button
    // ===========================
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===========================
    // Form Submission Handler
    // ===========================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !phone || !message) {
                alert('请填写所有必填项（姓名、电话、咨询内容）');
                return;
            }
            
            // Phone number validation (simple Chinese phone number format)
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                alert('请输入有效的手机号码');
                return;
            }
            
            // Email validation (if provided)
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('请输入有效的电子邮箱地址');
                    return;
                }
            }
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('感谢您的咨询！\n\n我们已收到您的信息，将在1-2个工作日内与您联系。\n\n咨询业务：' + (service || '未选择') + '\n联系电话：' + phone);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // ===========================
    // Active Navigation Highlight
    // ===========================
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ===========================
    // Animate on Scroll (Simple)
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections for animation
    const animatedElements = document.querySelectorAll('.service-card, .product-card, .process-step, .scope-category');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ===========================
    // Add Active Class to Current Page
    // ===========================
    const currentLocation = window.location.hash;
    if (currentLocation) {
        navItems.forEach(item => {
            if (item.getAttribute('href') === currentLocation) {
                item.classList.add('active');
            }
        });
    }

    // ===========================
    // Prevent Default Form Submit on Enter in Text Inputs
    // ===========================
    const formInputs = document.querySelectorAll('form input[type="text"], form input[type="email"], form input[type="tel"]');
    
    formInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Move to next input
                const inputs = Array.from(contactForm.querySelectorAll('input, select, textarea'));
                const index = inputs.indexOf(input);
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });
    });

    // ===========================
    // Console Welcome Message
    // ===========================
    console.log('%c惠州市子贡贸易有限公司', 'color: #2a5298; font-size: 20px; font-weight: bold;');
    console.log('%c专业贸易及综合代理服务平台', 'color: #666; font-size: 14px;');
    console.log('%c联系我们: info@zigonggroup.net', 'color: #666; font-size: 12px;');

    // ===========================
    // Print Page Info (for debugging)
    // ===========================
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('开发模式 - GitHub Pages部署后此消息将不显示');
    }
});

// ===========================
// External Link Warning (Optional)
// ===========================
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.hostname !== window.location.hostname && !e.target.href.startsWith('#')) {
        const confirmLeave = confirm('您即将离开本站，是否继续？');
        if (!confirmLeave) {
            e.preventDefault();
        }
    }
});

// ===========================
// Performance Monitoring (Optional)
// ===========================
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        console.log('页面加载时间: ' + loadTime + 'ms');
    }
});
