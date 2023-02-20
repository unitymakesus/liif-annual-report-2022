@props(['card'])

<div class="card w-full max-w-[380px] mx-auto">
  <div class="card__title bg-{{ $card->color }} flex justify-center my-4">
      <h3 class="uppercase font-semibold text-white py-4">{{ $card->title }}</h3>
  </div>
  <div class="card__body bg-{{ $card->color }}-overlay relative h-0 pb-[150%]">
      <img class="lazyload w-full h-full absolute object-cover top-0 left-0" src="{{ url( $card->image ) }}" alt="{{ $card->image_alt }}" />
      <div class="card__text absolute flex flex-col w-full h-full justify-end items-center px-4 pb-8 text-white z-10">
            <span class="block font-semibold uppercase">{{ $card->title }}</span>
            <span class="goal flex font-extrabold">
                @if($prefix = $card->prefix)
                    <span class="text-5xl pt-4">{{ $prefix }}</span>
                @endif
                {{ $card->stat }}
                @if($unit = $card->unit)
                    <span class="text-7xl self-end">{{ $unit }}</span>
                @endif
            </span>
          <span class="block font-semibold lowercase">{!! $card->desc !!}</span>
      </div>
  </div>
</div>