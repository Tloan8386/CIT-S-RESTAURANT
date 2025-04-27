let slideIndex = 0;
showSlides(slideIndex);

// Khi nhấn mũi tên
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Hiển thị slide
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Tự động chuyển slide sau 5s
setInterval(() => {
  changeSlide(1);
}, 5000);

// Nội dung chi tiết cho từng chương trình
const promotions = [
  { title: "Private Chef’s Table Experience",
   description: `- Mô tả: Khách đặt trước “Chef’s Table” – bàn tròn ngay bên cạnh bếp mở, được đầu bếp chính mời ăn thử và giải thích từng món trong thực đơn tasting 8–10 món.",
- Điều kiện: Nhóm từ 4–6 khách, đặt trước ít nhất 5 ngày.
- Quyền lợi: Kèm rượu vang sâm panh khai vị và cocktail chào mừng.`
},
  { title: "Wine Subscription Club", 
    description:  `- Mô tả: Khách mua gói thành viên 6 tháng/12 tháng sẽ nhận được:
 + 1 chai rượu vang cao cấp (nghiền chọn) mỗi tháng
 + Ưu đãi 15% cho toàn bộ món ăn khi đến dùng.
- Điều kiện: Đóng phí trước; gia hạn tự động.` },
  { title: " Seasonal Tasting Menu Launch", 
    description: `- Mô tả: Vào đầu mỗi mùa (Xuân – Hạ – Thu – Đông), nhà hàng ra mắt thực đơn thử vị 6 món đặc sắc theo mùa, kèm rượu pairing. Khách đăng ký dùng thử trước ngày ra mắt chính thức sẽ nhận ưu đãi 20% trên giá menu.
- Điều kiện: Đặt chỗ trong tuần preview, tối đa 20 khách/đợt.`},
  { title: "Exclusive Cooking Masterclass",
    description: `- Mô tả: Workshop 2 giờ với Chef trưởng, học làm một món signature (ví dụ: Gan ngỗng áp chảo), sau đó cùng thưởng thức. Kèm bộ công thức in đẹp.
- Điều kiện: Nhóm từ 2–4 người, phí tham dự 1.500.000 VND/người (bao gồm nguyên liệu và set tasting).`},
  { title: "Anniversary Fine-Dining Package", 
    description: `- Mô tả: Combo trọn gói cho kỷ niệm (ngày cưới, ngày thành lập công ty…) gồm:
 + Bàn trang trí nhẹ với hoa và nến
 + Thực đơn 5 món cao cấp
 + Trà/vang ngọt khai vị
 + Bức ảnh kỷ niệm do photographer chuyên nghiệp ghi lại.
- Điều kiện: Đặt trước ít nhất 7 ngày, giá trọn gói từ 8.000.000 VND/bàn.`},
  { title: "Corporate Loyalty Program", 
    description: `- Mô tả: Dành cho doanh nghiệp chi tiêu định kỳ, gồm:
 + Mỗi quý đạt doanh số >100 triệu: tặng 1 buổi team-building mini tại nhà hàng (buffet 5 món + không gian riêng).
 + Thẻ VIP doanh nghiệp cho phép đặt bàn nhanh, ưu tiên vào giờ cao điểm.
- Điều kiện: Ký hợp đồng dịch vụ F&B tối thiểu 6 tháng.`},
  { title: "Gourmet Gift Vouchers with Luxury Packaging", 
    description:`- Mô tả: Phiếu quà tặng (500k/1.000k/2.000k VND) kèm hộp quà gỗ cao cấp, nắp in logo nhà hàng, đi kèm thiệp chúc. Có dịch vụ ship tận nơi với white-glove delivery.",
- Điều kiện: Đặt tối thiểu 5 voucher/lần, phí đóng gói và ship phụ thu theo khu vực.`},
  { title: "Early-Access to New Menu Items", 
    description: `- Mô tả: Khách VIP (chi tiêu >20 triệu/năm) được mời tham dự “New Dish Preview” – buổi thử miễn phí 3–4 món mới trước khi lên menu chính. Kèm survey đóng góp ý kiến.
- Điều kiện: Thư mời gửi qua email; đăng ký giới hạn 30 ghế/buổi.`},
  { title: "Private Event Space Discount", 
    description: `- Mô tả: Giảm 20% phí thuê phòng riêng / phòng tiệc cho nhóm từ 20 khách trở lên (họp công ty, tiệc cá nhân). Kèm 2 chai vang miễn phí cho mỗi 10 khách.
- Điều kiện: Đặt trước ít nhất 14 ngày.`},
  { title: "Luxury Holiday Feast Pre-Order", 
    description: `- Mô tả: Dành cho các dịp lễ lớn (Valentine, Quốc tế Phụ nữ, Giáng Sinh, Tết Nguyên Đán), khách đặt menu đặc biệt (set 7–9 món) sớm sẽ nhận quà gồm: 
 + Giảm 15% giá set
 + Ưu tiên đặt bàn giờ “vàng” (19–21h)
 + Tặng hoa tươi/bao lì xì (Tết).
- Điều kiện: Đặt ít nhất 10 ngày trước lễ, thanh toán trước 50% để giữ chỗ.`}
];

// Mở popup chi tiết
function showDetails(index) {
  document.getElementById("detailTitle").innerText = promotions[index].title;
  document.getElementById("detailDescription").innerText = promotions[index].description;
  document.getElementById("detailPopup").style.display = "block";
}

// Đóng popup
function closeDetails() {
  document.getElementById("detailPopup").style.display = "none";
}

// Toggle mobile menu
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
