<div class="investment-goal bg-gray">
  <div class="wrapper wrapper-wide">
      <h2 class="h2-wide text-3xl text-blue-dark font-extrabold">2030 Goal</h2>
      <p class="text-blue-dark mb-2 md:flex items-end">
              <span class="goal goal-total flex md:inline-flex font-black">
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

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          @foreach ($cards as $card)
              <x-stat-card :card="$card"/>
          @endforeach
          <span class="card__note text-blue-dark font-bold text-sm mt-4 max-w-[400px] sm:max-w-none mr-0 ml-auto sm:mx-0 sm:col-span-2 lg:col-span-4 text-right italic">*four statistics from LIIF’s inception in 1984 through June 30, 2022</span>
      </div>
  </div>
</div>