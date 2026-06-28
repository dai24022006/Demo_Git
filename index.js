// 1. Lấy phần tử H1 và đoạn văn từ HTML
const textHeader = document.getElementById('animate-text');
const subText = document.getElementById('sub-text');

// 2. Tách từng ký tự của chữ "Hello world!" thành các thẻ <span> riêng lẻ
const content = textHeader.textContent;
textHeader.innerHTML = ''; // Xóa chữ gốc đi

for (let i = 0; i < content.length; i++) {
  const span = document.createElement('span');
  
  // Nếu là khoảng trắng thì giữ nguyên, ngược lại thì thêm class 'char'
  span.textContent = content[i] === ' ' ? '\u00A0' : content[i];
  if (content[i] !== ' ') {
    span.classList.add('char');
  }
  textHeader.appendChild(span);
}

// 3. Tạo hiệu ứng xuất hiện lần lượt cho từng ký tự
const chars = document.querySelectorAll('.char');
chars.forEach((char, index) => {
  setTimeout(() => {
    char.classList.add('fade-in');
  }, index * 100); // Mỗi chữ xuất hiện cách nhau 100ms
});

// 4. Cho đoạn văn hiện lên sau cùng
setTimeout(() => {
  subText.classList.add('show');
}, chars.length * 100);