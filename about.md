---
layout: page
title: About me
permalink: /about/
---

<div class="about-grid">
  <div class="avatar-cell">
    <img src="{{ site.author.avatar }}" alt="Armando Ahir" class="profile-img">
  </div>
  
  <div class="content-cell">
    <h1>Armando Ahir <span class="alias">alias Krptn</span></h1>
    
    <p class="tagline">Software engineer</p>
    
    <p>Based in Italy, documenting my journey in computer science, embedded systems and cybersecurity through this blog.</p>
    
    <div class="contacts-section">
      <h2>Contacts</h2>
      <ul class="contact-list">
        <li>
          <span class="contact-icon">📩</span>
          <span class="contact-label">Gmail:</span>
          <a href="mailto:armandoahir31@gmail.com" class="contact-link">
            armandoahir31@gmail.com
          </a>
        </li>
        <li>
          <span class="contact-icon">🔐</span>
          <span class="contact-label">Secure mail:</span>
          <a href="mailto:armandoahir@proton.me" class="contact-link secure">
            armandoahir@proton.me
          </a>
          <small>(Encrypted)</small>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
.about-grid {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 50px;
  align-items: start;
}

.profile-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  border: 3px solid #f0f0f0;
}

.alias {
  color: #666;
  font-weight: normal;
  font-size: 1.2rem;
}

.tagline {
  color: #0077cc;
  font-size: 1.1rem;
  margin: -10px 0 20px 0;
}

.contacts-section {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.contact-list {
  list-style: none;
  padding-left: 0;
}

.contact-list li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-label {
  font-weight: bold;
  min-width: 100px;
}

.contact-link {
  color: #0077cc;
  text-decoration: none;
  border-bottom: 1px dotted transparent;
  transition: all 0.2s;
}

.contact-link:hover {
  border-bottom: 1px dotted #0077cc;
}

.contact-link.secure {
  color: #28a745;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  
  .profile-img {
    max-width: 200px;
    margin: 0 auto;
  }
  
  .contact-list li {
    justify-content: center;
    text-align: center;
  }
}
</style>
