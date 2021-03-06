<?php

$meta_descrioption = "CryptoBazar - offers private investors the opportunity to participate in financing the withdrawal of projects at the ICO";

/**
 * Текст для главного меню
 * ключ  - якорь ссылки, значение - текст ссылки
 */
$menu = [
	'#section4' => 'OUR TEAM',
	'#section5' => 'ADVANTAGES',
	'#map-section' => 'MAP',
	'#section8'       => 'ICO LAUNCH',
	'#section9'       => 'PROJECT STAGES',
	'#section11'      => 'ROADMAP',
	'#section12'      => 'STRATEGY & TERMS',
	'#section13'      => 'GET TOKEN',
	'#footer-section' => 'CONTACTS',
];
/**
 *Images svg
 */
$src1 = 'media/images/section6/ICO-30000-cryptobazar-en.svg';
$src2 = 'media/images/section8/work-steps-cryptobazar-en.svg';

/**
 * Текст для шапки сайта
 */
$header = [
	'big-text'    => '<span class="big-text">INVEST IN PROJECTS</span><br/>BEFORE ICO',
	'description' => 'and watch your capital grow exponentially',
];


/**
 * Текст для условий сотрудничества (моб. версия)
 */
$investment_mob = [
	'3–6 months'   => 'investment cycle',
	'triple-digit' => 'forecasted annual returns',
	'20 BTC'       => 'min. investment',
	'10-12'        => 'ICOs per year',
];


/**
 * Текст для условий сотрудничества
 */
$investment = [
	'Investment model',
	'20 BTC'       => 'min. investment',
	'3–6 months'   => 'investment cycle',
	'10-12'        => 'ICOs per year',
	'triple-digit' => 'forecasted annual returns',
];

$learn_more = '<a href="#section13" class="more-button"><?php echo $learn_more; ?>LEARN MORE</a>';

/**
 * Текст для секции Profile отсюда cryptobazar.io/profile
 */
$profile_blocks = [
	'block1' => [
		'head' => 'Цена CryptoBazar Token (CBT)',
		'img' => '<img src="media/images/profile-section/block1.jpg" alt="Profile">'
	],
	'block2' => [
		'head' => 'Динамика стоимости портфеля фонда',
		'img' => '<img src="media/images/profile-section/block2.jpg" alt="Profile">'
	],
	'block3' => [
		'head' => 'Структура портфеля фонда',
		'img' => '<img src="media/images/profile-section/block3.jpg" alt="Profile">'
	],
	'block4' => [
		'head' => 'Динамика размера фонда ',
		'img' => '<img src="media/images/profile-section/block4.jpg" alt="Profile">'
	],
];
/**
 * Текст для секции "Команда Crypto BAZAR"
 */
$team_name = 'Crypto BAZAR <span class="highlighted">Team</span>';
$team_desc = 'CRYPTOBAZAR IS A TEAM OF PROFESSIONALS EXPERIENCED IN<br>VENTURE CAPITAL INVESTMENT AND BLOCKCHAIN INDUSTRY';

$people = [
	'Oleg Ivanov' => [
		'img'         => 'media/images/section4/oleg-ivanov.png',
		'achievments' => '• InvestBazar — USD 17 mln<br>
    • InvestBazar Fund — managing USD 15 mln<br>
    • Own projects — USD 90 mln<div class="fb"><a href="https://www.facebook.com/ivanovinvest" target="_blank"><img src="/media/images/facebook.png"></a>
    <a href="https://www.instagram.com/ivanovinvest/" target="_blank" style="margin-left:10px;"><img src="/media/images/inst.png"></a>
    <a href="https://www.linkedin.com/in/IvanovInvest/" target="_blank" style="margin-left:10px;"><img src="/media/images/linked.png"></a></div>',
	],

	'Andrey Yudin' => [
		'img'         => 'media/images/section4/andrey-yudin.png',
		'achievments' => '• Ex-CTO, Mail.ru<br>
    • Own projects — USD 2 mln<br>
    • Private investor on the cryptocurrency market since 2013<div class="fb"><a href="https://www.facebook.com/andrey.ext" target="_blank"><img src="/media/images/facebook.png"></a>
    <a href="https://www.instagram.com/andreyextreme" target="_blank" style="margin-left:10px;"><img src="/media/images/inst.png"></a>
    <a href="https://www.linkedin.com/in/yudin1/ " target="_blank" style="margin-left:10px;"><img src="/media/images/linked.png"></a></div>',
	],

	'Alexander Ivanov' => [
		'img'         => 'media/images/section4/alex-ivanov.png',
		'achievments' => '• Founder of the Waves platform – successful ICO (2016) raising USD 16 mln<br>
    • Market cap USD 0.5 bn<div class="fb"><a href="https://www.facebook.com/sasha35625" target="_blank"><img src="/media/images/facebook.png"></a>
    <a href="https://www.instagram.com/sasha35625" target="_blank" style="margin-left:10px;"><img src="/media/images/inst.png"></a></div>',
	],

	'Alim Bitokov' => [
		'img'         => 'media/images/section4/alim-bitokov.png',
		'achievments' => 'Vice-President, ATON Capital Partners<br>
    • In venture capital since 2008<br>
    • Managing over USD 100 mln<br>
    • Investment Company of the Year by Thomson Extel Russia<div class="fb"><a href="https://www.facebook.com/bitokov.alim.5" target="_blank"><img src="/media/images/facebook.png"></a>
    <a href="https://www.instagram.com/alimbitokov" target="_blank" style="margin-left:10px;"><img src="/media/images/inst.png"></a></div>',
	],
];

/**
 * Текст для секции "Новый инструмент инвестирования"
 */
$instrument_head = '<span class="highlighted">A new investment</span> vehicle';
$instrument_desc = 'PLUS TRIED-AND-TRUE PROJECT SELECTION PROCESS BY INVESTBAZAR';

$instruments_list = [
	'Invest Bazar' => [
		'class' => 'first',
		'name'  => 'Invest<br>
    <strong>BAZAR</strong>',
		'img'   => 'media/images/section4/investbazar.png',
		'desc1' => 'A platform for raising<br> private capital for well-established or emerging businesses',
		'desc2' => 'Since 2013 — <br>focused on real economy investment',
		'desc3' => '<div class="column-block"><div><img src="media/images/section4/13-ico.png" alt=""></div>
    <p>
        > 50,000 subscribers<br>
        > USD 32 mln invested<br>
        > 3,000 applications quarterly
    </p></div>',
		'desc4' => '<strong>Conventional vehicles:</strong><br>
    credit, shares, factoring',
		'desc5' => '<div class="column-block">
        <div><img src="media/images/section4/12-ico.png" alt=""></div>
        <p>Tried-and-true process of selecting top quality projects</p>
    </div>',
	],

	'Crypto Bazar' => [
		'class' => 'second',
		'name'  => 'Crypto<br>
    <strong>BAZAR</strong>',
		'img'   => 'media/images/section4/cryptobazar.png',
		'desc1' => 'A platform for raising<br>capital via blockchain and cryptocurrencies',
		'desc2' => 'Booming cryptocurrency market',
		'desc3' => '<div class="column-block">
        <div><img src="media/images/section4/14-ico.png" alt=""></div>
        <p>
            + Free market<br>
            + Vast opportunities<br>
            + Little regulation
        </p>
    </div>',
		'desc4' => '<strong>High-yield and lowest-risk investment — investment into THE RIGHT ICOs</strong>',
		'desc5' => '<div class="column-block">
        <div><img src="media/images/section4/10-ico.png" alt=""></div>
        <p>
            • Overwhelming stream of data<br>
            • Hard to navigate<br>
            • Risk of missing opportunities or misplacing capital in a wrong ICO
        </p>
    </div>',
	],
];

/**
 * Текст для секции "Cтатистика доходности"
 */
$stat_head           = '<span class="highlighted">Returns on</span> TOP-30 most<br>successful ICOs (Initial Coin Offerings)';
$stat_desc           = 'INVESTING BEFORE ICO OFFERS<br>HIGHER YIELDS WITH LOWER RISK!';
$stat_carousel_title = 'Project ROI after ICO';


/**
 * Текст для секции для инвесторов
 */
$logos_headline = 'Для инвесторов - мировая экспертиза от лучших. Для проектов - окно доступа к топ блокчейн ресурсам';
$sections = [
	'section1' => [
		'head' => 'Aссоциации и платформы',
		'images' => '
                <img src="media/images/carousel-section/platforms/1.png" alt="logo">
                <img src="media/images/carousel-section/platforms/2.png" alt="logo">
                <img src="media/images/carousel-section/platforms/3.png" alt="logo">
                <img src="media/images/carousel-section/platforms/4.png" alt="logo">
                <img src="media/images/carousel-section/platforms/5.png" alt="logo">
                <img src="media/images/carousel-section/platforms/6.png" alt="logo">
                <img src="media/images/carousel-section/platforms/7.png" alt="logo">'
	],
	'section2' => [
		'head' => 'Биржи и трейдинг',
		'images' => '
                <img src="media/images/carousel-section/trading/1.png" alt="logo">
                <img src="media/images/carousel-section/trading/2.png" alt="logo">
                <img src="media/images/carousel-section/trading/3.png" alt="logo">
                <img src="media/images/carousel-section/trading/4.png" alt="logo">
                <img src="media/images/carousel-section/trading/5.png" alt="logo">
                <img src="media/images/carousel-section/trading/6.png" alt="logo">
                <img src="media/images/carousel-section/trading/7.png" alt="logo">'
	],
	'section3' => [
		'head' => 'Медиа',
		'images' => '
                <img src="media/images/carousel-section/media/1.png" alt="logo">
                <img src="media/images/carousel-section/media/2.png" alt="logo">
                <img src="media/images/carousel-section/media/3.png" alt="logo">
                <img src="media/images/carousel-section/media/4.png" alt="logo">
                <img src="media/images/carousel-section/media/5.png" alt="logo">
           '
	],
	'section4' => [
		'head' => 'Регуляторы и лигал',
		'images' => '
                <img src="media/images/carousel-section/regulators/1.png" alt="logo">
                <img src="media/images/carousel-section/regulators/2.png" alt="logo">
                <img src="media/images/carousel-section/regulators/3.png" alt="logo">
                <img src="media/images/carousel-section/regulators/4.png" alt="logo">
           '
	]
];


/**
 * Текст для секции "Стандартная модель вывода проекта на ICO"
 */
$model_head = '<span class="highlighted">Standard ICO model:</span>';
$model_desc = 'THE YIELDS ARE HIGHEST AT THE EARLIEST STAGES!';

/**
 * Текст для секции "Как CryptoBazar отбирает проекты для инвестирования"
 */
$selection_head = '<span class="highlighted">Project selection process at CryptoBazar</span>';

$steps = [
	'APPLICATIONS' => [
		'class'     => 'step1',
		'subtitle'  => 'Selecting the most promising projects',
		'desc-list' => '<p class="description">• InvestBazar\'s extensive partner network, since 2013</p>
    <p class="description">• CryptoBazar strong presence at public events and in the media </p>
    <p class="description">• 500+ incoming applications monthly followed by multi-stage selection based on InvestBazar expertise since 2013</p>',
		'img'       => 'media/images/section9/5-ico.png',
	],

	'PROJECT SELECTION' => [
		'class'     => 'step2',
		'subtitle'  => 'Initial investment deals (term sheet)',
		'desc-list' => '<p class="description">• Automated screening </p>
    <p class="description">• Project development within CryptoBazar Accelerator (1.5 months; 2 sessions per week, internal/external expert reviews)</p>
    <p class="description">• Internal dry run and final ranking by experts</p>',
		'img'       => 'media/images/section9/6-ico.png',
	],

	'PRE-ICO' => [
		'class'     => 'step3',
		'subtitle'  => 'The Fund unfreezes the money in case of private investments',
		'desc-list' => '<p class="description">Best projects pitch to InvestBazar and CryptoBazar private investors</p>',
		'img'       => 'media/images/section9/7-ico.png',
	],

	'TOKEN PRE-SALE' => [
		'class'     => 'step4',
		'subtitle'  => 'Receipt of bonus tokens or their purchase by the Fund',
		'desc-list' => '<p class="description">Assistance in launching token pre-sale among InvestBazar and CryptoBazar</p>',
		'img'       => 'media/images/section9/8-ico.png',
	],

	'ICO LAUNCH' => [
		'class'     => 'step5',
		'subtitle'  => 'Additional token purchases on preferential terms, when appropriate',
		'desc-list' => '<p class="description">Marketing announcements on the ICO launch among the audience of InvestBazar and CryptoBazar, and partner networks</p>',
		'img'       => 'media/images/section9/9-ico.png',
	],

	'POST ICO' => [
		'class'     => 'step6',
		'subtitle'  => 'The Fund recovers the investment “body” — earnings retained in the project to grow',
		'desc-list' => '<p class="description">Providing liquidity for early investors (through token exchanges or smart contract buy-back) </p>',
		'img'       => 'media/images/section9/10-ico.png',
	],
];

/**
 * Текст для секции "Дорожная карта CryptoBazar"
 */
$roadmap_head = '<span class="highlighted">Crypto BAZAR Roadmap</span>';

$roadmap_list = [
	'1' => [
		'class'     => 'left-side',
		'add-class' => 'highlight',
		'text'      => '<span class="title">July 2017</span><br>
    Attracting investments',
	],

	'2' => [
		'class'     => 'right-side',
		'add-class' => 'highlight',
		'text'      => '<span class="title">July 2017</span><br>
    First investments<br>into projects',
	],

	'3' => [
		'class'     => 'left-side',
		'add-class' => '',
		'text'      => '<span class="title">August 2017</span><br>
    Fund tokenization<br>and investor’s personal<br>user account',
	],

	'4' => [
		'class'     => 'right-side',
		'add-class' => '',
		'text'      => '<span class="title">2017</span><br>
    At least<br>10 projects in portfolio',
	],

	'5' => [
		'class'     => 'left-side',
		'add-class' => 'highlight',
		'text'      => '<span class="title">2018</span><br>
    Listing tokens<br>on exchanges',
	],
];


/**
 * Текст для секции "Как получить CryptoBazar Token"
 */

$s13title      = '<h2>How to get <span class="highlighted">CryptoBazar Token</span></h2>';
$s13title_left = '<span>Buy CryptoBazar Token</span><br>automatically in Waves<br>Wallet in 3 easy steps';
$step1         = '<span>STEP 1. </span>Open the <a href="https://waveswallet.io/" target="_blank">Waves Wallet</a>';
$step2         = '<span>STEP 2. </span>Transfer ВТС to your Waves Wallet';
$step3         = '<span>STEP 3. </span>Get CryptoBazar Tokens for BTC ';
$bootpdf       = '<a href="/media/images/CBT-Waves_Eng.pdf" target="_blank">View detailed instructions in PDF</a>';

$s13title_right = '<span>Apply to invest</span><br>with CrytpoBazar<br>Fund';
$s13righttext   = 'For personal communication<br>with fund managers<br>for amounts from 5 ВТС';
$boots13right   = '<a href="https://docs.google.com/forms/d/1L14PbHJttKnggtoF84vt97MhZ5FFWec1TBVSLMkevPk/viewform?edit_requested=true" target="_blank">Apply to invest with us</a>';


/**
 * Текст для секции "Инвестиционная стратегия"
 */

$strategy_invest_head = 'INVESTMENT TERMS';
$strategy_invest_list = '<p class="invest-point"><strong>4%</strong><br/>Entry fee</p>
<p class="invest-point">Investor\'s profit <strong>65%</strong> of the total Fund yield</p>
<p class="invest-point"><strong>12 mos</strong><br/>Lock-up period</p>';

$strategy_button = '<a href="https://docs.google.com/forms/d/1L14PbHJttKnggtoF84vt97MhZ5FFWec1TBVSLMkevPk/viewform?edit_requested=true"
           target="_blank">
            <button class="request">APPLY TO INVEST WITH US</button>
        </a>';

/**
 * Текст для секции с контактной информацией
 */
$contact_info = '<h4 class="header">CRYPTO BAZAR HQ</h4>
<p class="phone">+7 (499) 372 30 11</p>
<p class="address">Barclay Plaza Business Center Bldg 5, 6 Barklaya St<br/>Park Pobedy Metro Station, Moscow</p>
<a class="email" href="mailto:info@cryptobazar.io">E-mail us</a>
<p class="site">www.cryptobazar.io © All rights reserved. 2017</p>';


/**
 * Текст для попапа Регистрация проекта (открывается с блока Ближайшие события)
 */
$name_popup   = 'Project registration';
$button_popup = 'Submit';
