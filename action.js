// بسم الله

const navBtn = document.querySelector('#nav-btn'); // الزر الذي سيشغل التبديل
const main = document.querySelector('main'); // عنصر الـ main
const sideNav = document.querySelector('.side-nav'); // الشريط الجانبي
const bottomNav = document.querySelector('.bottom-nav'); // الشريط الجانبي
const darkBtn = document.querySelector('#dark-btn'); // الشريط الجانبي
const cardsHolder = document.querySelector('.cards-holder'); // الشريط الجانبي
const gridBtn = document.querySelector('#grid-btn'); // الشريط الجانبي
const listBtn = document.querySelector('#list-btn'); // الشريط الجانبي

 
// حدث النقر على الزر لتبديل الفئة 'small' في الـ main
navBtn.addEventListener('click', (e) => {
    main.classList.toggle('small'); // إذا كانت فئة 'small' موجودة، سيتم إزالتها أو إضافتها
    if (main.classList.contains('small')) 
        sideNav.style.display = 'block'; // عرض الشريط الجانبي
    e.stopPropagation(); // منع انتشار الحدث
});

// حدث النقر على الـ main لإغلاق الشريط الجانبي إذا كان في حالة 'small'
main.addEventListener('click', (event) => {
    // التحقق من أن النقر كان داخل الـ main وليس في العناصر الأخرى
    if (main.classList.contains('small') && !sideNav.contains(event.target) && !navBtn.contains(event.target)) {
        main.classList.remove('small'); // إزالة الفئة 'small' عند النقر خارج الشريط الجانبي
        console.log('Main clicked and side nav is closed');
    }
});

darkBtn.addEventListener('click', (e) => {
    bottomNav.classList.toggle('dark');
    sideNav.classList.toggle('dark');
    main.classList.toggle('dark');
    cardsHolder.classList.toggle('dark');
});



// counter 
document.querySelectorAll('.plus').forEach(plusButton => {
    plusButton.addEventListener('click', () => {
        const counter = plusButton.closest('.counter');
        const numInput = counter.querySelector('.num');
        const minusButton = counter.querySelector('.minus');

        // تحديث القيمة
        let currentValue = parseInt(numInput.dataset.foodIdOrders, 10) || 0;
        currentValue++;
        numInput.dataset.foodIdOrders = currentValue;
        numInput.value = currentValue;

        // إظهار زر "-" إذا كانت القيمة أكبر من 0
        if (currentValue > 0) {
            minusButton.style.display = 'block';
            numInput.style.display = 'block';
        }
    });
});

document.querySelectorAll('.minus').forEach(minusButton => {
    minusButton.addEventListener('click', () => {
        const counter = minusButton.closest('.counter');
        const numInput = counter.querySelector('.num');

        // تحديث القيمة
        let currentValue = parseInt(numInput.dataset.foodIdOrders, 10) || 0;
        if (currentValue > 0) {
            currentValue--;
            numInput.dataset.foodIdOrders = currentValue;
            numInput.value = currentValue;

            // إخفاء زر "-" إذا وصلت القيمة إلى 0
            if (currentValue === 0) {
                minusButton.style.display = 'none';
                numInput.style.display = 'none';
            }
        }
    });
});

document.querySelectorAll('.num').forEach(numInput => {
    numInput.addEventListener('change', () => {
        
        // تحديث قيمة dataset
        let currentValue = parseInt(numInput.value, 10) || 0; // قراءة القيمة من input
        numInput.dataset.foodIdOrders = currentValue;

        // إظهار أو إخفاء زر "-" بناءً على القيمة
        if (currentValue === 0) {
            minusButton.style.display = 'none';
            numInput.style.display = 'none';
        }
    });
});

// Grid And List

gridBtn.addEventListener('click', () => {
    if (!cardsHolder.classList.contains('grid')) {
        cardsHolder.classList.remove('list')
        cardsHolder.classList.toggle('grid')
        listBtn.classList.remove('active');
        
        if (!gridBtn.classList.contains('active'))
            gridBtn.classList.toggle('active');
    }
    cardsHolder.classList.remove('list')
    console.log('grid')
});
listBtn.addEventListener('click', () => {
    if (cardsHolder.classList.contains('grid')) {
        cardsHolder.classList.toggle('list')
        cardsHolder.classList.remove('grid')
        gridBtn.classList.remove('active');

        if (!listBtn.classList.contains('active'))
            listBtn.classList.toggle('active');
    }
    cardsHolder.classList.remove('grid')
    console.log('list')
});
