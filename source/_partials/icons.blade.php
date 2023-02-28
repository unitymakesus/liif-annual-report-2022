<div class="social-icons mt-8 sm:flex sm:flex-col sm:justify-end md:mt-0">
  <ul class="flex justify-center mt-8" aria-label="Follow Us On Social Media">
    @foreach ($page->social as $title => $url)
      <li class="ml-4">
        <a class="inline-block social-link" href="{{ $url }}" target="_blank" rel="noopener noreferrer" aria-label="{{ ucwords($title) }}">
          @php($view = '_partials.svg.icon-' . $title)
          @include($view)
        </a>
      </li>
    @endforeach
  </ul>
</div>