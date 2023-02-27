@props(['lists', 'type'])

<div {{ $attributes->merge(['class' => 'tabs mt-12']) }}>
  <div role="tablist" aria-orientation="vertical" aria-label="" class="flex flex-col gap-2 sm:flex-row sm:flex-wrap mb-8">
    @foreach ($lists as $list)
      <button role="tab" class="text-lg font-semibold py-1 px-4" id="tab-{{ $list->slug }}" aria-selected="{{ $loop->first ? 'true' : 'false' }}" aria-controls="tabpanel-{{ $list->slug }}">{{ $list->label }}</button>
    @endforeach
  </div>
  @foreach ($lists as $list)
    <div tabindex="0" role="tabpanel" id="tabpanel-{{ $list->slug }}" aria-labelledby="tab-{{ $list->slug }}" {{ $loop->first ? '' : 'hidden' }}>
      @if ($type === 'list')
        @if (in_array($list->slug, ['senior-staff']))
          <ul class="md:columns-2 lg:grid lg:grid-cols-3 gap-3">
            @foreach ($list->items as $item)
              @if ($item['col_start'])
                <div class="col-{{ $item['col_start'] }}">
              @endif
                <li class="mb-4 text-sm break-inside-avoid text-green-text">
                  <strong class="block">{{ $item['name'] }}</strong>
                  <span class="italic">{!! $item['title'] !!}</span>
                </li>
              @if ($item['col_end'])
                </div>
              @endif
            @endforeach
          </ul>
        @elseif (in_array($list->slug, ['board-of-directors']))
          <div class="mb-8">
            <h3 class="font-semibold mb-4 text-lg text-green-text">Officers</h3>
            <ul class="md:columns-2 lg:columns-3 gap-3"> 
              @foreach ($list->officers as $officer)
                <li class="mb-4 text-sm break-inside-avoid text-green-text">
                  <strong class="block">{{ $officer['name'] }}</strong>
                  <span class="italic">{!! $officer['title'] !!}</span>
                </li>
              @endforeach
            </ul>
          </div>
          <div class="mb-8">
            <h3 class="font-semibold mb-4 text-lg text-green-text">Directors</h3>
            <ul class="md:columns-2 lg:columns-3 gap-3">       
              @foreach ($list->directors as $director)
                <li class="mb-4 text-sm break-inside-avoid text-green-text">
                  <strong class="block">{{ $director['name'] }}</strong>
                  <span class="italic">{!! $director['title'] !!}</span>
                </li>
              @endforeach
            </ul>
          </div>
          <div class="mb-8">
            <h3 class="font-semibold mb-4 text-lg text-green-text">Welcome our newest Board members <span class="text-base font-normal italic">(voted in June 2022) </span></h3>
            <ul class="md:columns-2 lg:columns-3 gap-3">       
              @foreach ($list->new_members as $new)
                <li class="mb-4 text-sm break-inside-avoid text-green-text">
                  <strong class="block">{{ $new['name'] }}</strong>
                  <span class="italic">{!! $new['title'] !!}</span>
                </li>
              @endforeach
            </ul>
          </div>
        @elseif (in_array($list->slug, ['committees']))
          <p class="text-green-text mb-4 font-semibold">The following committees provide governance in support of our mission.</p>
          @foreach ($list->items as $item)
            <div class="mb-4">
              <h3 class="mb-2 text-green-text">{{ $item['name'] }}</h3>
            </div>
          @endforeach
        @else
          <div>
            <ul class="md:columns-2 lg:columns-3 gap-3 text-green-text">
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