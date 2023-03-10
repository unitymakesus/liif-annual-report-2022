<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
    @include('_partials.head')
    <body class="text-gray-900 font-sans antialiased">
        @include('_partials.header')
        <main role="main">
            @yield('body')
        </main>
        @include('_partials.footer')
        <script src="/node_modules/focus-visible/dist/focus-visible.min.js"></script>
    </body>
</html>
