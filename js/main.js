document.addEventListener('DOMContentLoaded', () => {
    const auditForm = document.querySelector('#audit-request-form');

    if (!auditForm) {
        return;
    }

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
});
