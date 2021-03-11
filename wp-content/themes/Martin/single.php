<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 */
?>

<?php get_header();?>

<?php 
	$banner = get_field("banner");

?>

<?php while ( have_posts() ) : the_post(); ?>
<div class="posts">

	<?php if(get_the_category( $post->ID )[0]->name <> 'Eventos'): ?>
		<?php if(!empty($banner)): ?>

			<div class="banner alignVertical" style="background-image: url('<?= $banner; ?>')">
				<div>
					<h1><?php the_title(); ?></h1>
					<span></span>
					<p><?php echo get_the_excerpt(); ?></p>
				</div>
			</div>

		<?php else: ?>

			<div class="banner-padrao alignVertical">
				<div>
					<h1><?php the_title();?></h1>
					<span></span>
				</div>
			</div>

		<?php endif; ?>
	<?php endif; ?>

	<div class="content">
		<!--<h1 class="page-title"><?php //the_title();?></h1>-->
		<a href="/noticias" class="link_voltar"><i class="fas fa-arrow-left" aria-hidden="true"></i> Ir para Notícias</a>

		<?php the_content(); ?>
	</div>
</div>
<?php endwhile; ?>
<?php get_footer();?>