<?php

function carrega_scripts(){ 
    $theme_version = wp_get_theme()->get( 'Version' );
    
    wp_enqueue_style( 'carrega_scripts', get_template_directory_uri() . '/assets/style/main.css', null, $theme_version, 'print');
    //wp_enqueue_style( 'carrega_scripts', get_template_directory_uri() . '/assets/style/main.css', null, $theme_version, 'print' );

    add_filter('single_template', 'create_single_template');

    function create_single_template( $template ) {
        global $post;

        $categories = get_the_category();
        // caso não tenhamos categoria retornamos o template default.
        if ( ! $categories )
                return $template; 

        //resgatando o post type
        $post_type = get_post_type( $post->ID );

        $templates = array();

        foreach ( $categories as $category ) {
                // adicionando templates por id e slug
                $templates[] = "single-{$post_type}-{$category->slug}.php";
                $templates[] = "single-{$post_type}-{$category->term_id}.php";
        }

        // adicionando os templates padrões
        $templates[] = "single-{$post_type}.php";
        $templates[] = 'single.php';
        $templates[] = 'singular.php';
        $templates[] = 'index.php';

        return locate_template( $templates );
    }
}

add_action( 'wp_enqueue_scripts', 'carrega_scripts');
add_theme_support( 'post-thumbnails', array( 'post' ) );
add_theme_support( 'post-thumbnails' );

//menu

register_nav_menus(
    array(
        'meu_menu_principal' => 'Menu Principal',
    )
);

