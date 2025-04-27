document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
       
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
    });
});
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Ngăn reload trang
  
// Lấy dữ liệu từ form
const data = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      branch: document.getElementById('branch').value,
      note: document.getElementById('note').value,
};
  
// Lưu tạm vào localStorage
localStorage.setItem('bookingInfo', JSON.stringify(data));
  
// Thông báo cảm ơn
alert('Cảm ơn, chúng tôi sẽ sớm liên hệ với bạn');
  
// Reset form
    this.reset();
});
