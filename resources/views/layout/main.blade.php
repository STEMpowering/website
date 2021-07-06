<!DOCTYPE html>
<html lang="en">

<head>
 @include('layout.head')
</head>

<body>

@include('layout.nav')

 @yield('content')

 @hasSection('container')
 <main id="main" style="margin-top: 110px !important">
    @yield('container')
</main>




 @endif

 @include('layout.foot');

</body>

</html>