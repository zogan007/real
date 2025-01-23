const menuItems = document.querySelectorAll('.menu-item');
const contentSection = document.getElementById('content');
const books = document.querySelectorAll('.book');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedTopic = item.getAttribute('data-topic');

        // แสดง/ซ่อนข้อมูล
        contentSection.style.display = 'block';
        books.forEach(book => {
            const topic = book.getAttribute('data-topic');
            if (selectedTopic === 'All' || topic === selectedTopic) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
});
