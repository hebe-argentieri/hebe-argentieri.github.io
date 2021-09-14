const Template = {};

Template.pages = `
<ul>{{ _.each(items, function(v){ }} 
  <li><a href="#p:{{= v }}">{{= title_pages(v) }}</a></li>
{{ }); }}</ul>`;

Template.series = `
<ul>{{ _.each(items, function(v){ }} 
  <li><a href="#s:{{= v }}">{{= title_series(v) }}</a></li>
{{ }); }}</ul>`;

Template.news = `
<ul>{{ _.each(items, function(v){ }} 
  <li><a href="#n:{{= v }}">{{= title_news(v) }} <small>{{= date_news(v) }}</small></a></li>
{{ }); }}</ul>`;

Template.rrss = `
<ul>{{ _.each(items, function(v){ }} 
  <li><a href="{{= G.cfg[v].url }}" target="_blank" title="{{= G.cfg[v].name }}"><img alt="{{= G.cfg[v].name }}" src="{{= G.cfg[v].icon }}"></a></li>
{{ }); }}</ul>`;

Template.series_gallery_item = `
<section class="galery">
  <h2>{{= v['title-'+G.lang] }}</h2>
  <div class="description">{{= marked(v['description-'+G.lang]) }}</div>
  <ul class="mini">
    <script name="data" type="text/json">{{= JSON.stringify(v) }}</script>
    {{ _.each(v['images'], function(w, i){
          w['_title'] = w['tex-'+G.lang] || '';
          if( i < G.cfg.gallery.mini_max ){
      }}
      <li class="itm">
        <img src="{{= w.img }}" title="{{= w._title }}">
      </li> 
    {{ } }) }}
    {{ if( v.images.length > G.cfg.gallery.mini_max ){ }}
      <li class="itm more">{{= v['images'].length - G.cfg.gallery.mini_max }}</li>
    {{ } }}
  </ul>
</section>`;

Template.gallery_panel = `
<div id="gallery_panel">
  <div class="cnt">
    <nav>
      <button name="prev"></button>
      <i name="position">{{= i + 1 }}{{= G.cfg.gallery.position_sep}}{{= d.images.length }}</i>
      <button name="next"></button>
      <strong>{{= d['title-'+G.lang] }}</strong>
      <button name="close"></button>
    </nav>
    <div class="image" data-index="{{= i }}">
      <p>{{= d.images[i]['tex-'+G.lang] || '' }}</p>
      <img src="{{= d.images[i].img }}">
    </div>
  </div>
</div>`;

Template.news_gallery_item = `
<section>
  <h2>{{= v['title'] }}</h2>
  <p><i>{{= v['date'] }}</i></p>
  <div class="cnt">
    {{= t }}
  </div>
</section>`;

Template.press_gallery_item = `
<section>
  <h2>{{= v['title'] }}</h2>
  <p><i>{{= v['date'] }}</i></p>
  <div class="cnt">
    {{= t }}
  </div>
</section>`;

Template.html_slide = `
<div id="{{= id }}" class="slide">
  <div class="image">
    <img class="back" src="{{= images[0] }}">
    <img class="front" src="./img/empty.svg">
  </div>
  <ul></ul>
</div>`;