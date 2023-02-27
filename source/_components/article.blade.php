@props(['article'])

<article class="impact-article wrapper wrapper-wide">
  <h2 class="text-{{ $article->color }} text-center font-bold text-4xl md:text-5xl mb-8 relative green-rule__article">{{ $article->title }}</h2>
  <div class="impact-article__body relative lg:flex lg:align-center {{ $article->excerpt_pos }}">
    <img class="hero__bg-img lazyload w-full {{ $article->image_pos}}" src="{{ url($article->image) }}" alt="{{$article->image_alt}}" />
    <div class="impact-article__text lg:p-16 lg:flex lg:items-center lg:absolute lg:h-full">
      <div class="bg-white lg:bg-blue lg:opacity-90 lg:text-white py-8 lg:px-8">
        <h3 class="text-{{ $article->color }} lg:text-white text-xl mb-5 font-semibold">{{ $article->subtitle }}</h3>
        <p class="mb-4">{{ $article->excerpt }}</p>
        <a href="{{ $article->link_url }}">{{ $article->link_text }} <span class="sr-only">{{ $article->title }}</span></a>
      </div>
    </div>
  </div>
  @if ($spotlight = $article->spotlight)
    <div class="impact-article__spotlight lg:pt-4 xl:pl-20 xl:h-0">
      <p class="text-[14px]">{!! $spotlight !!}</p>
    </div>
  @endif
</article>
@if ($spotlight = $article->spotlight)
  <div class="spacer"></div>
@endif