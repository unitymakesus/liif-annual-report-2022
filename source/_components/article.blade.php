@props(['article'])

<article class="impact-article max-w-7xl mx-auto px-6 sm:p-8 mt-8 green-rule__article">
  <h2 class="text-{{ $article->color }} text-center font-semibold text-4xl md:text-5xl mb-8 sm:w-[80%] mx-auto relative">{{ $article->title }}</h2>
  <div class="relative mx-auto lg:flex lg:align-center {{ $article->excerpt_pos }}">
    <img class="hero__bg-img lazyload w-full" src="{{ url($article->image) }}" alt="{{$article->image_alt}}" />
    <div class="impact-article__text lg:p-16 lg:flex lg:items-center lg:absolute lg:h-full lg:w-1/2">
      <div class="bg-white py-8 lg:px-8">
        <h3 class="text-{{ $article->color }} text-xl mb-5 font-semibold">{{ $article->subtitle }}</h3>
        <p class="mb-4">{{ $article->excerpt }}</p>
        <a href="{{ $article->link_url }}">{{ $article->link_text }} <span class="sr-only">{{ $article->title }}</span></a>
      </div>
    </div>
  </div>
</article>