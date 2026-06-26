document.addEventListener('DOMContentLoaded', () => {
    // 1. Audit Form prepare/copy logic (original)
    const auditForm = document.querySelector('#audit-request-form');

    if (auditForm) {
        const status = auditForm.querySelector('#audit-form-status');
        const submitButton = auditForm.querySelector('button[type="submit"]');

        const getFieldLabel = (field) => {
            const label = auditForm.querySelector(`label[for="${field.id}"]`);
            return label ? label.textContent.trim() : field.name;
        };

        const getFieldValue = (field) => {
            if (field.tagName === 'SELECT') {
                const option = field.options[field.selectedIndex];
                return option ? option.textContent.trim() : '';
            }

            return field.value.trim();
        };

        const buildAuditRequest = () => {
            const fields = Array.from(auditForm.elements).filter((field) => {
                return field.name && field.type !== 'submit';
            });

            const lines = fields.map((field) => {
                return `${getFieldLabel(field)}: ${getFieldValue(field)}`;
            });

            return [
                'SEO Revamp Audit Request',
                '',
                ...lines,
            ].join('\n');
        };

        const copyAuditRequest = async (message) => {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(message);
                return true;
            }

            const textarea = document.createElement('textarea');
            textarea.value = message;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.top = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();

            const copied = document.execCommand('copy');
            textarea.remove();
            return copied;
        };

        auditForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (!auditForm.reportValidity()) {
                return;
            }

            const message = buildAuditRequest();

            try {
                await copyAuditRequest(message);
                status.textContent = 'Audit details copied. Opening Solicate on Instagram so you can send the request.';
            } catch (error) {
                status.textContent = 'Copy failed. Please copy your answers manually and send them to Solicate on Instagram.';
            }

            submitButton.textContent = 'Request Prepared';
            submitButton.disabled = true;

            window.open('https://www.instagram.com/solicatehq/', '_blank', 'noopener,noreferrer');
        });
    }

    // 2. Mouse coordinate spotlight (flat radial paper glow variables)
    document.addEventListener('mousemove', (event) => {
        document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
    });

    // 3. Runtime Text Phrase Highlighter (Editorial marker accents)
    const highlightTerms = () => {
        const terms = [
            /redesign for search first/gi,
            /search-led website structure/gi,
            /mobile-first visual presentation/gi,
            /fast galleries and proof sections/gi,
            /compounding 12-month search asset/gi,
            /WooCommerce event ticketing/gi,
            /UGC creator portfolio/gi,
            /SEO-first website revamp/gi,
            /SEO-first revamp/gi,
            /SEO revamp/gi,
            /website redesign/gi
        ];

        // TreeWalker to safely inspect text nodes without destroying event listeners or elements
        const walk = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: (node) => {
                    const parent = node.parentNode;
                    if (parent && (
                        parent.tagName === 'SCRIPT' || 
                        parent.tagName === 'STYLE' || 
                        parent.tagName === 'TEXTAREA' || 
                        parent.tagName === 'OPTION' || 
                        parent.tagName === 'LABEL' ||
                        (typeof parent.closest === 'function' && (parent.closest('.btn') || parent.closest('button') || parent.closest('a'))) ||
                        parent.classList.contains('highlight-accent')
                    )) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodesToReplace = [];
        let currentNode;
        while (currentNode = walk.nextNode()) {
            let text = currentNode.textContent;
            let matched = false;
            for (const regex of terms) {
                if (regex.test(text)) {
                    matched = true;
                    break;
                }
            }
            if (matched && currentNode.parentNode) {
                nodesToReplace.push(currentNode);
            }
        }

        nodesToReplace.forEach((node) => {
            const parent = node.parentNode;
            if (!parent) return;

            let html = node.textContent;
            
            // Wrap matching terms in the highlight-accent span (longest phrases matched first)
            html = html.replace(/(redesign for search first|search-led website structure|mobile-first visual presentation|fast galleries and proof sections|compounding 12-month search asset|WooCommerce event ticketing|UGC creator portfolio|SEO-first website revamps?|SEO-first website revamping|SEO-first website revamp|SEO-first revamping|SEO-first revamp|SEO website revamp|SEO revamp|website redesign)/gi, (match) => {
                return `<span class="highlight-accent">${match}</span>`;
            });

            const span = document.createElement('span');
            span.innerHTML = html;
            
            while (span.firstChild) {
                parent.insertBefore(span.firstChild, node);
            }
            parent.removeChild(node);
        });
    };
    
    try {
        highlightTerms();
    } catch (e) {
        console.error("Text highlighting error: ", e);
    }

    // 4. Intersection Observer for Scroll Reveals and Highlighter Sweeps
    const initScrollReveals = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            section.classList.add('reveal');
        });

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -40px 0px'
        });

        sections.forEach((section) => {
            sectionObserver.observe(section);
        });

        // Dynamic observer for highlighter draws
        const highlights = document.querySelectorAll('.highlight-accent');
        const highlightObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('highlighted');
                    highlightObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -20px 0px'
        });

        highlights.forEach((highlight) => {
            highlightObserver.observe(highlight);
        });
    };

    if ('IntersectionObserver' in window) {
        initScrollReveals();
    } else {
        // Fallback for older browsers
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            section.classList.add('reveal', 'active');
        });
        const highlights = document.querySelectorAll('.highlight-accent');
        highlights.forEach((highlight) => {
            highlight.classList.add('highlighted');
        });
    }

    // 5. Active Navigation Link Highlighting
    const highlightActiveNavLink = () => {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
                link.classList.add('active');
            }
        });
    };
    highlightActiveNavLink();
});
