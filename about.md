---
layout: page
title: About
permalink: /about/
---

<style>
  body {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 15px;
    font-family: serif; /* Luke predilige i font classici o monospaziati */
    line-height: 1.5;
    color: #111;
    background-color: #fff;
  }

  h1, h2, h3 {
    font-family: monospace;
    font-weight: bold;
  }

  img.profile-pic {
    float: left;
    margin: 0 20px 10px 0;
    border: 2px solid #000;
    max-width: 200px;
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

  hr {
    border: 0;
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }

  pre, code {
    background: #f4f4f4;
    font-family: monospace;
  }

  a {
    color: #0000ee;
  }

  a:visited {
    color: #551a8b;
  }

  ul {
    list-style-type: square;
  }
</style>

<div class="clearfix">
  <img src="{{ '/assets/arma.jpg' | relative_url }}" alt="Photo of Armando Ahir" class="profile-pic">
  <h1>Armando Ahir</h1>
  <p><i>Computer Science Student / Maker / Minimalist</i></p>
  <p>
    Welcome. This is my corner of the world wide web. I am a computer science engineering 
    student based in Italy.
    I'm a minimalist, i believe in simple tools, efficient code, and 
    understanding the systems we use daily.
  </p>
</div>

<hr>

## Interests

* **STEM:** i like to build things. Mostly focused on electronics, low-level software development, and functional prototyping.
* **Chess:** former chess player; still enjoy the occasional blitz game. Find me on [Chess.com](https://www.chess.com/member/itsarma).
* **Birding:** since 2026, i've been spending my time outdoors observing and cataloging bird species. You can see my log here: [Birding List]({{ '/birding-list' | relative_url }}).
<hr>

## Contact & Resources

* **Curriculum Vitae:** [Download PDF]({{ '/assets/files/cv.pdf' | relative_url }})
* **Email:** `yourname [at] provider [dot] com`
* **RSS:** [Feed]({{ '/feed.xml' | relative_url }})
