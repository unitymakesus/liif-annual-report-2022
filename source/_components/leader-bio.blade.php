@props(['bio'])

<article
  @if ($bio->image_pos === 'top')
    {{ $attributes->merge(['class' => 'leader flex flex-col md:grid gap-9 mt-6 img-top']) }}
  @else
    {{ $attributes->merge(['class' => 'leader flex flex-col md:grid gap-9 mt-6 img-bottom']) }}  
  @endif
>
    @if ($bio->image_pos === 'top')
      @if ($bio->image)
        <div class="leader__img relative h-0">
          <img class="lazyload absolute w-full h-full object-cover" src="{{ url($bio->image) }}" alt="{{ $bio->image_alt }}" />
        </div>
      @endif
    @endif
    <div class="leader__bio">
      <p class="mb-4">
        <h3 class="font-bold">{{ $bio->name }}</h3>
        <span class="block mb-4 italic">{{ $bio->title }}</span>
      </p>
      @if ( $name_2 = $bio->name_2 )
        <p class="mb-4">
          <h3 class="font-bold">{{ $name_2 }}</h3>
          <span class="block mb-4 italic">{{ $bio->title_2 }}</span>
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
    @if ($bio->image_pos === 'bottom')
      @if ($bio->image)
        <div class="leader__img relative h-0">
          <img class="lazyload absolute w-full h-full object-cover" src="{{ url($bio->image) }}" alt="{{ $bio->image_alt }}" />
        </div>
      @endif
    @endif
</article>