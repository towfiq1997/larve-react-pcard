<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <style>
    div#pcard-modal {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99999;
        font-family: Outfit, sans-serif;
    }
    </style>

</head>

<body class="antialiased">
    <div class="reactpush" id="reactpush"></div>
    <div class="pcard-modal" id="pcard-modal"></div>
    <div class="left-diolog" id="left-diolog"></div>

    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>