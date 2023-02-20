@props(['bio'])

<article {{ $attributes->merge(['class' => 'grid gap-9 md:gap-16 py-4 md:py-12 my-4']) }}>
    @if ($bio->image)
      <div class="px-4">
        <img class="lazyload max-h-80 w-auto" src="{{ url($bio->image) }}" alt="{{ $bio->image_alt }}" />
      </div>
    @endif
    <div class="px-4">
      <p class="mb-4">
        <strong>{{ $bio->name }}</strong><br/>
        <span>{{ $bio->title }}</span>
      </p>
      @if ( $name_2 = $bio->name_2 )
        <p class="mb-4">
          <strong>{{ $name_2 }}</strong><br/>
          <span>{{ $bio->title_2 }}</span>
        </p>
      @endif
      <p class="mb-4">{!! $bio->excerpt !!}</p>
      @if ($bio->link_url)
        <div class="flex">
          @if ($bio->headshot)
            <img class="w-32 mr-4 lazyload" src="{{ url($bio->headshot) }}" alt="" />
          @endif
          <a class="self-start" href="{{ $bio->link_url }}">{{ $bio->link_text }} <span class="sr-only">{{ $bio->title }}</span></a>
        </div>
      @endif
    </div>
</article>