// بسم الله

const navBtn = document.querySelector('#nav-btn'); // الزر الذي سيشغل التبديل
const main = document.querySelector('main'); // عنصر الـ main
const sideNav = document.querySelector('.side-nav'); // الشريط الجانبي

// حدث النقر على الزر لتبديل الفئة 'small' في الـ main
navBtn.addEventListener('click', () => {
    main.classList.toggle('small'); // إذا كانت فئة 'small' موجودة، سيتم إزالتها أو إضافتها
    console.log('nav btn clicked');
});

// حدث النقر على الـ main لإغلاق الشريط الجانبي إذا كان في حالة 'small'
main.addEventListener('click', (event) => {
    // التحقق من أن النقر كان داخل العنصر main وليس في العناصر الأخرى
    if (main.classList.contains('small') && !sideNav.contains(event.target) && !navBtn.contains(event.target)) {
        main.classList.remove('small'); // إزالة الفئة 'small' عند النقر خارج الشريط الجانبي
        console.log('Main clicked and side nav is closed');
    }
});
