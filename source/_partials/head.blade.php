<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="{{ $page->getUrl() }}">
  <meta name="description" content="{{ $page->description }}">
  <title>{{ $page->title }}</title>
  <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
  <script defer src="{{ mix('js/main.js', 'assets/build') }}"></script>
  {{-- <script>
    window.Userback = window.Userback || {};
    Userback.access_token = '10960|78225|G0cCbrFH9G7QCSQUl6rYqBu3e';
    (function(d) {
        var s = d.createElement('script');s.async = true;
        s.src = 'https://static.userback.io/widget/v1.js';
        (d.head || d.body).appendChild(s);
    })(document);
  </script> --}}
</head>