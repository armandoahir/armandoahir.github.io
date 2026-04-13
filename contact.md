---
layout: page
title: Contacts
permalink: /contact/
---

<style>
* { box-sizing: border-box; }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 5px; margin-bottom: 14px; }
label { font-size: 0.75rem; font-weight: 500; color: #555; }
input, select, textarea {
  font-family: inherit; font-size: 0.9rem; padding: 9px 12px;
  border: 1px solid #ddd; border-radius: 8px; background: #fff;
  transition: border-color 0.15s;
}
input:focus, select:focus, textarea:focus { outline: none; border-color: #888; }
textarea { resize: vertical; min-height: 120px; }
.hint { font-size: 0.7rem; color: #999; }
button[type="submit"] {
  width: 100%; padding: 11px; font-size: 0.9rem; font-weight: 500;
  background: #1a1a1a; color: #fff; border: none; border-radius: 8px;
  cursor: pointer; margin-top: 8px;
}
button[type="submit"]:hover { opacity: 0.85; }
@media (max-width: 480px) { .row { grid-template-columns: 1fr; } }
</style>

<p style="color:#666; font-size:0.9rem; margin-bottom:1.5rem;">I usually reply under 24–48 hours.</p>

<form action="https://formspree.io/f/mykbovgy" method="POST">

  <div class="row">
    <div class="field">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Raffaele" required>
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="pillarofautumn@email.com" required>
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
    <textarea id="message" name="message" placeholder="Write here..." required></textarea>
    <span class="hint" id="count">0 / 500 </span>
  </div>

  <input type="text" name="_gotcha" style="display:none">
  <input type="hidden" name="_next" value="https://armandoahir.github.io/thanks/">

  <button type="submit">Submit</button>

</form>

<script>
document.getElementById('message').addEventListener('input', function() {
  document.getElementById('count').textContent = this.value.length + ' / 500';
});
</script>
