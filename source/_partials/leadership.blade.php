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