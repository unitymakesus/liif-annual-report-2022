@props(['article'])

<article class="impact-article max-w-7xl mx-auto px-6 sm:px-8 sm:py-16 mt-8 green-rule__article">
  <h2 data-sal="fade" class="text-{{ $article->color }} text-center font-extrabold text-4xl md:text-5xl mb-8 sm:w-[80%] mx-auto relative pl-6 md:pl-16 lg:pl-12 xl:pl-0">{{ $article->title }}</h2>
  <div class="relative mx-auto px-8 lg:px-0 lg:flex lg:align-center {{ $article->excerpt_pos }}">
    <img class="hero__bg-img lazyload w-full" src="{{ url($article->image) }}" alt="{{$article->image_alt}}" />
    <div class="impact-article__text lg:p-16 lg:flex lg:items-center lg:absolute lg:h-full">
      <div class="bg-white py-8 lg:px-8">
        <h3 class="text-{{ $article->color }} text-xl mb-5 font-extrabold">{{ $article->subtitle }}</h3>
        <p class="mb-4">{{ $article->excerpt }}</p>
        <a href="{{ $article->link_url }}">{{ $article->link_text }} <span class="sr-only">{{ $article->title }}</span></a>
      </div>
    </div>
  </div>
</article>