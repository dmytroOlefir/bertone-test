<?php
if (isset($_SERVER['HTTPS']) &&
    ($_SERVER['HTTPS'] == 'on' || $_SERVER['HTTPS'] == 1) ||
    isset($_SERVER['HTTP_X_FORWARDED_PROTO']) &&
    $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https') {
  $protocol = 'https';
}
else {
  $protocol = 'http';
}

$current_url = "$protocol://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$meta_description = get_field('meta_description', get_queried_object_id());

$key = 0;
$keyWords = get_field('meta_keywords'); 


function meta_keywords () {
	if( have_rows('meta_keywords') )  : 
		while( have_rows('meta_keywords') ): the_row(); $key++;

		the_sub_field('keyword'); echo ', ';
				
		endwhile; 
	endif; 
} ?>


<? if (empty($meta_description)) {
	$meta_description = 'This could be an interesting meta description';
}
?>
<!DOCTYPE html>
<html <?php language_attributes() ?> dir="ltr">

<head>
	<?php if (is_home()) : ?>
		<title>Blog | <?php bloginfo('name'); ?></title>
	<?php elseif (is_404()) : ?>
		<title>Error 404 | <?php bloginfo('name'); ?></title>
	<?php else : ?>
		<title>
		<?php if (get_field('meta_titre')) : the_field('meta_titre') ?> |
			<?php bloginfo('name');
							else : the_title(); ?> | <?php bloginfo('name');
				endif; ?>
		</title>
	<?php endif; ?>

	<meta name="description" content="<?php echo $meta_description; ?> " />
	<meta name="keywords" content="<?php meta_keywords(); ?>">
	<? $favicon_Path = '/src/assets/icones/favicon' ?>
	<link rel="apple-touch-icon" sizes="180x180" href="<? echo get_template_directory_uri() . $favicon_Path?>/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="<? echo get_template_directory_uri() . $favicon_Path?>/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="<? echo get_template_directory_uri() . $favicon_Path?>/favicon-16x16.png">
	<link rel="manifest" href="<? echo get_template_directory_uri() . $favicon_Path?>/site.webmanifest">
	<link rel="mask-icon" href="<? echo get_template_directory_uri() . $favicon_Path?>/safari-pinned-tab.svg" color="#41a7d8">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<script type="text/javascript" src="https://www.bugherd.com/sidebarv2.js?apikey=iw1hvoctfs0o2lxxdbikng" async="true"></script>

    <?php wp_head() ?>
</head>

<!-- Hey, source code investigator! 
	This website is created by
		
	         _       _ _             _____            _             
	    /\  | |     | (_)           |  __ \          (_)            
	   /  \ | |_ ___| |_  ___ _ __  | |  | | ___  ___ _  __ _ _ __  
	  / /\ \| __/ _ \ | |/ _ \ '__| | |  | |/ _ \/ __| |/ _` | '_ \ 
	 / ____ \ ||  __/ | |  __/ |    | |__| |  __/\__ \ | (_| | | | |
	/_/    \_\__\___|_|_|\___|_|    |_____/ \___||___/_|\__, |_| |_|
	                                                     __/ |      
                                                        |___/   
	Go pay them a visit on
	https://www.atelierdesign.be
	info@atelierdesign.be
	-->

<body class="<?php if(get_query_var('paged') || get_query_var('q')) { echo 'no-animated'; }  ?>">
	<!-- INCLUDE SPRITE -->
<div class="sr-only">
  <?php get_template_part( 'public/assets/sprite.svg' ); ?>
</div>
<!-- HEADER -->
<header class="header <?php if(is_front_page() || is_home() || !is_single()){ echo "with-banner"; } ?>">
		<div class="container header_wrap">
			<div class="header_logo">
					<!-- LOGO -->
					<a href="<?php echo home_url(); ?>">
						<!-- SVG -->
						<svg>
							<use xlink:href="#logo-icon" />
						</svg>
					</a>
			</div>
			<nav class="header_right">
				<!-- MENU -->
				<?php
				$items = nav_menu_tree('primary');
					if ($items) {
				?>
				<button type="button" class="menu_btn" js-menu-btn>
					<span class="sr-only">Ouvrir / fermer le menu</span>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<ul class="menu header_menu" js-menu>
					<?php foreach ($items as $item ) { ?>
							<li>
								<a href="<?=$item->url?>" class="<?php if($current_url == $item->url) { echo "is-active"; } ?>" data-url="<?=$current_url?>" data-other="<?=$item->url?>">
									<?=$item->title?>
								</a>
							</li>
					<?php	} ?>
					<li>
						<?php if(get_field('btn-header', 'option')) { ?>
							<a href="<?=get_field('btn-header','option')?>" class="btn btn--square menu_link-btn">
								Join us
							</a>
						<?php } ?>
					</li>
				</ul>
				<?php 
					}
				?>
			</nav>
		</div>
</header>
<main class="main" data-uri="<?=get_site_url()?>" js-api-url>