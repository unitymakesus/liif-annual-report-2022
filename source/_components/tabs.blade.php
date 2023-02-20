@props(['lists', 'type'])

<div {{ $attributes->merge(['class' => 'tabs mt-12']) }}>
  <div role="tablist" aria-orientation="vertical" aria-label="" class="flex flex-wrap mb-8">
    @foreach ($lists as $list)
      <button role="tab" class="text-lg font-semibold py-1 px-2" id="tab-{{ $list->slug }}" aria-selected="{{ $loop->first ? 'true' : 'false' }}" aria-controls="tabpanel-{{ $list->slug }}">{{ $list->label }}</button>
    @endforeach
  </div>
  @foreach ($lists as $list)
    <div tabindex="0" role="tabpanel" id="tabpanel-{{ $list->slug }}" aria-labelledby="tab-{{ $list->slug }}" {{ $loop->first ? '' : 'hidden' }}>
      @if ($type === 'list')
        @if (in_array($list->slug, ['board-of-directors', 'senior-staff']))
          {{-- <h3>{{ $list->label }}</h3> --}}
          <ul class="md:columns-2 lg:columns-3 gap-3">
            @foreach ($list->items as $item)
              <li class="mb-4 text-sm break-inside-avoid">
                <strong class="block">{{ $item['name'] }}</strong>
                <span>{{ $item['title'] }}</span>
              </li>
            @endforeach
          </ul>
        @elseif (in_array($list->slug, ['committees']))
          @foreach ($list->items as $item)
            <div class="mb-8">
              <h3 class="font-semibold mb-4 text-lg">{{ $item['name'] }}</h3>
              <ul class="md:columns-2 lg:columns-3 gap-3">
                @foreach ($item['items'] as $committee)
                  <li class="mb-4 text-sm break-inside-avoid">
                    <strong class="block">{{ $committee['name'] }}</strong>
                    <span>{{ $committee['title'] }}</span>
                  </li>
                @endforeach
              </ul>
            </div>
          @endforeach
        @else
          <div>
            {{-- <h3>{{ $list->label }}</h3> --}}
            <ul class="md:columns-2 lg:columns-3 gap-3 text-green-text font-semibold">
              @foreach ($list->items as $item)
                <li class="mb-4 text-sm break-inside-avoid">{{ $item }}</li>
              @endforeach
            </ul>
          </div>
        @endif
      @endif

      @if ($type === 'table')
        @include('_partials.table-' . $list->slug)
      @endif
    </div>
  @endforeach
</div>