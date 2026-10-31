///////////////////////////////////// nav links start
var navLinks = document.querySelectorAll('.navbar-nav .nav-item');

navLinks.forEach(function(link) {
    link.onclick = function() {
        navLinks.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.add('active');
    };
});
/////////////////////////////////////// nav links end

let heroContnet = document.querySelector(".hero-content")

// ///////////////////// contact form /////////////////////
function sendWhatsAppForm(event) {
    event.preventDefault();

    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const service = document.getElementById('serviceType').value;
    const message = document.getElementById('clientMessage').value;

    const text = `مرحباً أرجاء العاصمة، أريد حجز معاينة أو استفسار:%0a` +
               `- الاسم: ${name}%0a` +
               `- الجوال: ${phone}%0a` +
               `- الخدمة: ${service}%0a` +
               `- التفاصيل: ${message}`;
               
    const whatsappUrl = `https://wa.me/966569632404?text=${text}`;
    window.open(whatsappUrl, '_blank');
}