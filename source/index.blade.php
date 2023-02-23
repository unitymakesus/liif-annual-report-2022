@extends('_layouts.main')

@section('body')
    <div class="hero relative">
        <div class="flex justify-end sm:justify-end relative sm:pr-16 lg:pr-24">
            <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold bg-green-lighter text-blue-dark w-fit py-2 sm:py-3 lg:py-4 px-8 absolute top-1/2 z-10">Redefining Equity:</h1>
            <h2 class="hidden" aria-hidden="true">Moving beyond what to how</h2>
        </div>
        <div class="hero__img overflow-hidden relative">
            <img class="hero__bg-img lazyload absolute w-full h-full object-cover pointer-events-none" src="{{ url('/assets/images/hero-bg.png') }}" alt="Young girl playing in packing box with her mother and father smiling behind her" />
        </div>
        <div class="hero__subtitles grid w-full gap-2 sm:gap-4 lg:gap-8 text-4xl sm:text-6xl lg:text-8xl 2xl:text-9xl font-bold absolute bottom-0">
            <div class="justify-self-start py-2 sm:py-6 px-8 bg-green-light text-green-dark">Moving Beyond</div>
            <div class="justify-self-end py-2 sm:py-6 px-8 bg-green-medium text-green-yellow italic">What to How</div>
        </div>
    </div>

    <div class="leadership pt-12">
        <div class="wrapper wrapper-wide">
            <div class="green-rule__hero h2"></div>
            <h2 class="text-3xl lg:text-[40px] font-bold h2-hero h2-wide mb-8">
                <span class="text-blue">In Their Own Words:</span> LIIF Leadership Speaks on 2022<?php echo "\u{02BC}" ?>s Impact
            </h2>
            <div class="grid">
                @foreach ($leaders as $leader)
                    <x-leader-bio :bio="$leader"/>
                @endforeach
            </div>
        </div>
    </div>

    <div class="investment-goal bg-gray">
        <div class="wrapper wrapper-wide">
            <h2 class="h2-wide text-3xl text-blue-dark font-bold">2030 Goal</h2>
            <p class="text-blue-dark mb-2 md:flex items-end">
                    <span class="goal goal-total flex md:inline-flex font-bold">
                        <span class="prefix">$</span>
                        5
                        <span class="unit">B</span>
                    </span>
                <span class="align-self-end py-1 px-4 text-lg font-semibold block md:inline-block"> LIIF is driving $5 billion in investments over the next decade to advance racial equity.</span>
            </p>

            {{-- Progress Bar --}}
            <div class="progress-bar flex text-white relative overflow-hidden">
                <span class="sr-only">This animation depicts a progress bar loading from 0% to 26% complete</span>
                <span class="text-xl inline-block h-full font-medium pl-4 py-1 z-10">
                    <span class="progress">26</span>%
                </span>
                <span class="progress-bar__overlay h-full absolute top-0 left-0"></span>
            </div>
            {{-- End Progress Bar --}}

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mb-24">
                @foreach ($cards as $card)
                    <x-stat-card :card="$card"/>
                @endforeach
            </div>
        </div>
    </div>

    <div class="articles">
        @foreach ($articles as $article)
            <x-article :article="$article"/>
        @endforeach
    </div>

    <div class="financials bg-blue-dark text-green-lime">
        <div class="wrapper">
            <h2 class="font-bold text-4xl green-rule__tabs">
                <span class="block max-w-[1024px] mx-auto">Consolidated Financial Statements</span>
            </h2>
            <div class="max-w-[1024px] mx-auto">
                <x-tabs :lists="$financials" type="table" />
            </div>
        </div>
    </div>

    <div class="supporters pb-[60px] bg-green-mint">
        <div class="wrapper">
            <h2 class="font-bold text-4xl text-green-darker max-w-[1280px] xl:px-[80px] green-rule__tabs">Thanks to those who support our mission.</h2>
            <x-tabs :lists="$supporters" type="list" />
        </div>
    </div>
@endsection
