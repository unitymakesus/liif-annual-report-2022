@props(['bio'])

<article {{ $attributes->merge(['class' => 'leader flex flex-col md:grid gap-9 pb-4 md:pb-12 my-4']) }}>
    @if ($bio->image)
      <div class="relative h-0">
        <img class="lazyload max-h-80 absolute w-full h-full object-cover" src="{{ url($bio->image) }}" alt="{{ $bio->image_alt }}" />
      </div>
    @endif
    <div class="leader__bio">
      <p class="mb-4">
        <h3 class="font-bold">{{ $bio->name }}</h3>
        <span class="block mb-4">{{ $bio->title }}</span>
      </p>
      @if ( $name_2 = $bio->name_2 )
        <p class="mb-4">
          <h3 class="font-bold">{{ $name_2 }}</h3>
          <span class="block mb-4">{{ $bio->title_2 }}</span>
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