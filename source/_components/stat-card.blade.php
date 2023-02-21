@props(['card'])

<div class="card w-full mx-auto">
  <div class="card__title bg-{{ $card->color }} flex justify-center my-4">
      <h3 class="uppercase font-bold text-white py-8">{{ $card->title }}</h3>
  </div>
  <div class="card__body animate bg-{{ $card->color }}-overlay relative h-0 pb-[150%]" data-sal="slide-up" data-sal-duration="15000" data-sal-delay="100">
      <img class="lazyload w-full h-full absolute object-cover top-0 left-0" src="{{ url( $card->image ) }}" alt="{{ $card->image_alt }}" />
      <div class="card__text absolute flex flex-col w-full h-full justify-end items-center p-8 text-white z-10">
            <span class="block font-semibold uppercase">{{ $card->title }}</span>
            <span class="goal flex font-extrabold">
                @if($prefix = $card->prefix)
                    <span class="prefix">{{ $prefix }}</span>
                @endif
                {{ $card->stat }}
                @if($unit = $card->unit)
                    <span class="unit">{{ $unit }}</span>
                @endif
            </span>
          <span class="block font-semibold lowercase">{!! $card->desc !!}</span>
      </div>
  </div>
</div>