<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="{{ $page->getUrl() }}">
  <meta name="description" content="{{ $page->description }}">
  <title>{{ $page->title }}</title>

  <meta property="og:url" content="{{ $page->getUrl() }}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="{{ $page->seo_title }}">
  <meta property="og:description" content="{{ $page->description }}">
  <meta property="og:image" content="{{ url('assets/images/hero-thumb.png') }}">

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="liifund.org">
  <meta property="twitter:url" content="{{ $page->getUrl() }}">
  <meta name="twitter:title" content="{{ $page->seo_title }}">
  <meta name="twitter:description" content="{{ $page->description }}">
  <meta name="twitter:image" content="{{ url('assets/images/hero-thumb.png') }}">

  <link rel="apple-touch-icon" sizes="180x180" href="{{ url('assets/images/favicon/apple-icon-precomposed.png') }}">
  <link rel="icon" type="image/png" sizes="192x192" href="{{ url('assets/images/favicon/android-icon-192x192.png') }}">
  <link rel="icon" type="image/png" sizes="96x96" href="{{ url('assets/images/favicon/favicon-96x96.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ url('assets/images/favicon/favicon-32x32.png') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ url('assets/images/favicon/favicon-16x16.png') }}">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
  <script defer src="{{ mix('js/main.js', 'assets/build') }}"></script>

  <script>
    window.Userback = window.Userback || {};
    Userback.access_token = '10960|78225|G0cCbrFH9G7QCSQUl6rYqBu3e';
    (function(d) {
        var s = d.createElement('script');s.async = true;
        s.src = 'https://static.userback.io/widget/v1.js';
        (d.head || d.body).appendChild(s);
    })(document);
  </script>
</head>