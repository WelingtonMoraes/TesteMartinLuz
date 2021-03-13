<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 */
?>

<?php get_header();?>

<?php while ( have_posts() ) : the_post(); ?>
<div class="content">
	<div class="home__posts">
		<h1><?php the_title(); ?></h1>

		<?php the_content(); ?>
	</div>
</div>
<?php endwhile; ?>
<?php get_footer();?>