import DOMPurify from 'dompurify';

export function sanitizeHTML(htmlText: string) {
    return DOMPurify.sanitize(htmlText);
}
