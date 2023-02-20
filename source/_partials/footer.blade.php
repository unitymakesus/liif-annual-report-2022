<footer class="footer bg-blue-med">
  <div class="flex flex-col items-center md:flex-row justify-between max-w-6xl mx-auto text-center py-12 px-8">
    <div>
      <a class="inline-block" href="https://www.liifund.org/">
        <img class="lazyload sm:w-28 lg:w-40" src="{{ url('/assets/images/logo.svg') }}" alt="Low Income Investment Fund" width="100" />
      </a>
    </div>
    <div class="mt-8 md:mt-0">
      <form class="flex flex-col sm:flex-row justify-center" action="https://liifund.us13.list-manage.com/subscribe/post?u=a27878232e2220f64b0fb32cb&amp;id=2f9987be46" method="post">
        <div class="flex flex-col sm:mr-4 text-white">
          <label for="mce-email">Your email address</label>
          <input class="border rounded-none py-2 px-4 w-auto md:w-72 bg-white text-sm text-dark-blue" type="email" name="EMAIL" id="mce-email">
        </div>
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_a27878232e2220f64b0fb32cb_1a7304a993" tabindex="-1" value="">
        </div>
        <input class="border rounded-none py-2 px-6 mt-2 md:mt-0 bg-white text-dark-blue text-sm font-medium uppercase self-end cursor-pointer hover:bg-blue hover:text-white focus:bg-blue focus:text-white transition-colors" type="submit" value="Subscribe">
      </form>
    </div>
    @include('_partials.icons')
  </div>
  <div class="text-center text-sm py-4 px-8 bg-blue-dark text-white" role="contentinfo">
    Copyright © 2022 Low Income Investment Fund, 2022 Annual Impact Report
  </div>
</footer>