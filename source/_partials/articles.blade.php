<div class="articles">
  @foreach ($articles as $article)
      <x-article :article="$article"/>
  @endforeach
</div>