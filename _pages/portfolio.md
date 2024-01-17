---
layout: page
title: Portfolio
permalink: /portfolio/
description: Here is my portfolio sectioned in to different aspects along with some description.
nav: true
nav_order: 2
display_categories: [Games, 3D, Theater & Stagecraft, Traditional, Graphic Designing, UI/UX Designing]
horizontal: false
toc:
  sidebar: left
  

---

<!-- pages/portfolio.md -->
<div class="portfolio">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.myprojects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include portfolio_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include portfolio.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.myprojects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include portfolio_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include portfolio.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
<a href="https://clustrmaps.com/site/1by6v" title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=-0vweRXgj9N0Vq4XdLTqKePi7EH085yfqUofSSgxBpE&cl=ffffff" width="10" height="10"></a>
