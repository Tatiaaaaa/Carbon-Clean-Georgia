document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentNode;
            const accordionContent = accordionItem.querySelector('.accordion-content');

            // Toggle active class on content to show/hide it
            accordionContent.classList.toggle('active');

            // Change icon based on active state
            const icon = this.querySelector('.accordion-icon');
            icon.textContent = accordionContent.classList.contains('active') ? '-' : '+';

            // Collapse other accordion items
            const allAccordionItems = document.querySelectorAll('.accordion-item');
            allAccordionItems.forEach(item => {
                if (item !== accordionItem) {
                    item.querySelector('.accordion-content').classList.remove('active');
                    item.querySelector('.accordion-icon').textContent = '+';
                }
            });
        });
    });
});