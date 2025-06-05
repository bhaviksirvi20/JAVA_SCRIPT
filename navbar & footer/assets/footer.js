function foot() {
  let foot = document.createElement("div");
  foot.className = "footer";
  foot.innerHTML = `
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <h2>LOGO</h2>
          <p>Building something great, one line at a time.</p>
        </div>

        <div class="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Web St, JavaScript City</p>
        </div>

        <div class="footer-social">
          <h3>Follow Us</h3> &nbsp;
          <a href="#">Facebook</a>&nbsp; | &nbsp;
          <a href="#">Twitter</a>&nbsp; | &nbsp;
          <a href="#">Instagram</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 YourSite. All rights reserved.</p>
      </div>
    </footer>
  `;
  return foot;
}

export default foot;
