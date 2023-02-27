@props(['card'])

<div class="card w-full mx-auto">
    <div class="card__title bg-{{ $card->color }} flex justify-center my-4">
        <h3 class="text-center uppercase font-bold text-white text-xl py-8">{{ $card->title }}</h3>
    </div>
    <div class="card__body bg-{{ $card->color }}-overlay relative h-0 pb-[150%]">
        <img class="lazyload w-full h-full absolute object-cover top-0 left-0" src="{{ url( $card->image ) }}" alt="{{ $card->image_alt }}" />
        <div class="card__text absolute flex flex-col w-full h-full justify-end items-center p-8 text-white z-10">
                <span class="block font-bold text-xl uppercase">{{ $card->title }}</span>
                <span class="goal flex font-extrabold">
                    @if($prefix = $card->prefix)
                        <span class="prefix">{{ $prefix }}</span>
                    @endif
                    {{ $card->stat }}
                    @if($unit = $card->unit)
                        <span class="unit">{{ $unit }}</span>
                    @endif
                </span>
            <span class="block font-bold text-2xl lowercase">{!! $card->desc !!}</span>
        </div>
    </div>
</div>