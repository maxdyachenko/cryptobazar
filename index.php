<?php
    session_start();
    error_reporting(0);

    require 'langs/GetLanguageByCountry.php';

    $uri = trim(strip_tags(ltrim($_SERVER['REQUEST_URI'], '/')));

    $ismain = false;

    if (empty($uri)) {
        $ismain = true;
        $_SESSION['lang'] = getLanguageByCountry($_SERVER['REMOTE_ADDR']);
    }
    elseif ($uri == "en" || $uri == "ru") {
        $ismain = true;
        $_SESSION['lang'] = $uri;
    }
    elseif ($uri == "event") {
        include_once 'pages/event.php';
    }
    else {
        exit(header('Location: /404'));
    }

    if ($ismain) {
        if (file_exists('langs/' . $_SESSION['lang'] . '.php')) {
            require 'langs/' . $_SESSION['lang'] . '.php';
            include_once 'pages/main.php';
        }
        else {
            exit(header('Location: /404'));
        }
    }

?>
