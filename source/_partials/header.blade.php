<header class="header bg-white" role="banner">
  <div class="flex items-center justify-between mx-auto pt-4 pb-8 lg:py-8 px-8 sm:px-16 lg:px-24">
    <div class="flex items-end">
      <a class="inline-block p-[7px]" href="https://www.liifund.org/">
        <img class="logo lazyload sm:w-[125px] lg:w-[150px]" src="{{ url('/assets/images/logo.svg') }}" alt="Low Income Investment Fund" width="100" />
      </a>
      <span class="ml-4 text-xl sm:text-2xl font-bold">
        <span class="block w-full text-2xl sm:text-3xl align-left">2022</span> {{ trim($page->title, "20") }}
      </span>
    </div>
    @include('_partials.icons')
  </div>
</header>