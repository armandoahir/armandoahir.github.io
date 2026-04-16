---
layout: page
title: Contacts
permalink: /contact/
---
<p>
  I'm <b>not</b> on Facebook, Instagram, Reddit, X (ex Twitter).
  I do have <a href="https://github.com/armandoahir"> Github</a>.
  Any others profile not linked to this blog it's not mine.
</p>
<style>
/* Reset e allineamento al tema del blog */
* { box-sizing: border-box; }

/* Contenitore principale centrato come il resto del blog */
.page-content, .wrapper {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Stile del form */
.contact-form {
  max-width: 620px;
  margin: 2rem auto;
}

/* Testo della descrizione - uniformato al blog */
.contact-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
}

/* Griglia per nome ed email */
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 6px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}

label {
  font-size: 0.85rem;
  font-weight: 500;
  color: #444;
  letter-spacing: 0.3px;
}

input, select, textarea {
  font-family: inherit;
  font-size: 0.95rem;
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #fff;
  transition: all 0.2s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #aaa;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.02);
}

textarea {
  resize: vertical;
  min-height: 130px;
}

.hint {
  font-size: 0.7rem;
  color: #999;
  text-align: right;
  margin-top: 4px;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  margin-top: 16px;
  transition: opacity 0.2s;
  letter-spacing: 0.5px;
}

button[type="submit"]:hover {
  opacity: 0.85;
  background: #000;
}

/* Mobile */
@media (max-width: 600px) {
  .row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .contact-form {
    margin: 1.5rem auto;
  }
  
  .contact-description {
    font-size: 0.95rem;
  }
}
</style>

<div class="contact-form">
  <p class="contact-description">
    I usually reply within 24–48 hours.
  </p>

  <form action="https://formspree.io/f/mykbovgy" method="POST">
    <div class="row">
      <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
    </div>
    <div class="field">
      <label for="topic">Topic</label>
      <select id="topic" name="topic">
        <option value="">Select...</option>
        <option>Collaboration</option>
        <option>Questions about an article</option>
        <option>Notes request</option>
        <option>Other</option>
      </select>
    </div>
    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <span class="hint" id="count">0 / 500</span>
    </div>
    <input type="text" name="_gotcha" style="display:none">
    <input type="hidden" name="_next" value="https://armandoahir.github.io/thanks/">
    <button type="submit">Send message →</button>
  </form>
</div>

<script>
const textarea = document.getElementById('message');
const counter = document.getElementById('count');
textarea.addEventListener('input', function() {
  counter.textContent = this.value.length + ' / 500';
});
</script>
