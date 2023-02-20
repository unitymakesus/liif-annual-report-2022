<header class="header bg-white" role="banner">
  <div class="flex items-center justify-between mx-auto pt-4 pb-8 lg:py-8 px-8 sm:px-16 lg:px-24">
    <div class="flex items-end">
      <a class="inline-block" href="https://www.liifund.org/">
        <img class="lazyload sm:w-28 lg:w-40" src="{{ url('/assets/images/logo.svg') }}" alt="Low Income Investment Fund" width="100" />
      </a>
      <span class="ml-4 text-xl font-semibold">
        <span class="block w-full text-2xl align-left">2022</span> {{ trim($page->title, "20") }}
      </span>
    </div>
    @include('_partials.icons')
  </div>
</header>