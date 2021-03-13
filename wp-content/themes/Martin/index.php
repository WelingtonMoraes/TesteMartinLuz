<?php
/*
*
* Template Name: home
*
* @package WordPress
*/
?>

<?php get_header();?>

<div class="home content">
    <div class="home__reembolso flex flex-wrap alinItem">
        <div class="col-6">
            <h1>Reembolsos corporativos de forma simples e rápida. <b>Como deve ser.</b></h1>
            <p>Acabe com a dor de cabeça da gestão de despesas do dia a dia da sua empresa: pagamentos, reembolsos, compras on-line e gestão do fundo fixo. Controle seus gastos escaneando notas fiscais, acompanhando aprovações, visualizando relatórios e muito mais!</p>
            <a href="#" class="btn__claro">Peça já sua proposta</a>
            <p class="respondemos" >Responderemos <b>em até 24h.</b></p>
        </div>
        <div class="col-6">
            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/img1.png"/>
        </div>
    </div>

    <div class="home__controle flex flex-wrap alinItem">
        <div class="col-6">
            <a href="javascript:void(0)" id="playV">
                <img class="home__controle--backimg" src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/backimg.png"/>
            </a>
            <div id="playvideo" class="modalVideo">
                <div class="modal-content">
                    <div class="">
                        <span onclick="closeVideo()" class="close">&times;</span>
                    </div>
                    <div class="modal-body">
                        <iframe class="youtube-video" width="100%" height="100%" src="https://www.youtube.com/embed/4oeVCWTyUpY?enablejsapi=1&version=3&playerapiid=ytplayer" frameborder="0" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
            <h2>Assuma agora o <br><b>controle dos gastos</b> variáveis da sua empresa</h2>
            <p>O BPP Corp é uma solução única para a administração de gastos corporativos que conta com uma conta digital empresarial grátis, cartões VISA pré-pagos para controle total das despesas e um aplicativo sem custos adicionais para tornar seu controle financeiro mais simples e prático! </p>
        </div>
    </div>

    <div class="home__organizar flex flex-wrap">
        <div class="col-6">
            <div class="home__organizar--text">
                <h2><b>Organizar reembolsos</b> da sua empresa nunca foi tão rápido</h2>
                <p>Utilizando BPP Corp, você tem controle total sobre o budget de sua equipe podendo realizar transferências instantâneas para os cartões corporativos dos colaboradores, acompanhar gastos, receber comprovantes e visualizar relatórios que organizam seu reembolso.</p>
                <a href="#" class="btn__escuro">Peça já sua proposta
                    <i style="margin-left:6px" class="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div class="col-6 home__organizar--img">
            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/bpp_corp_reembolso.png"/>
        </div>
    </div>

    <div class="home__reduzir flex flex-wrap">
        <div class="home__reduzir--text col-12">
            <h2>A plataforma que ajuda a <b>reduzir os gastos</b> do dia a dia</h2>
            <p>Simplifique a gestão das despesas, evitando a perda de tempo com comprovantes e planilhas, reduzindo custos e aumentando os resultados da sua empresa.</p>
        </div>
        <div class="home__reduzir--icons">
            <div class="swiper-container home__reduzir--icons---swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir1.svg"/>
                            <h3>Mais rapidez na gestão das suas despesas</h3>
                            <p>Para que seu negócio cresça de maneira inteligente e rápida, substitua os processos demorados de reembolsos, aprovações, criação de relatórios e etc. por uma plataforma que te oferece tudo isso de forma rápida e digital. </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir4.svg"/>
                            <h3>Apresente suas despesas com um só clique</h3>
                            <p>Enviar seus comprovantes é mais simples do que você imagina. Basta que o colaborador tire uma foto do cupom fiscal com seu smartphone através do aplicativo BPP Card. O gestor das despesas pode aprovar ou reprovar aquele gasto através do App.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir2.svg"/>
                            <h3>Os relatórios que você precisa em um único lugar</h3>
                            <p>Encontre relatórios detalhados sobre as utilizações de cada cartão corporativo cadastrado em sua equipe. Confira o saldo de cada cartão, redistribua valores, faça transferências instantâneas e não perca tempo com formulários e planilhas. </p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir5.svg"/>
                            <h3>Controle seus gastos com cartões pré-pagos VISA</h3>
                            <p>Os cartões pré-pago BPP Corp são fáceis de controlar: o colaborador só gasta o que a empresa disponibiliza para compras online ou em lojas físicas. Conte com cartões VISA aceitos em mais de 30 milhões de estabelecimentos no mundo todo, incluindo sites e aplicativos!</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir3.svg"/>
                            <h3>Organize todos os seus comprovantes</h3>
                            <p>Recebendo os comprovantes de gastos de seus colaboradores através da plataforma, você não precisa mais guardar comprovantes e notas fiscais em lugar nenhum. Os gastos podem ser classificados por tipo ou por projeto, da forma que você precisar.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="content-box">
                            <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/iconReduzir6.svg"/>
                            <h3>Conta digital gratuita e exclusiva para sua empresa</h3>
                            <p>Oferecemos uma conta digital gratuita especialmente para gerenciar despesas.  Transfira o saldo de sua conta para os cartões de maneira instantânea, sempre livre de taxas de manutenção ou de juros.</p>
                        </div>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    <div class="home__vantagens flex flex-wrap">
        <div class="col-6 flex flex-wrap">
            <div class="home__vantagens--box col-6 alignVertical">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/BK.png"/>
            </div>
            <div class="home__vantagens--box col-6 alignVertical">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/boticario.png"/>
            </div>
            <div class="home__vantagens--box col-6 alignVertical">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/cacau.png"/>
            </div>
            <div class="home__vantagens--box col-6 alignVertical">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/images/home/pague.png"/>
            </div>
        </div>
        <div class="col-6">
            <div class="home__vantagens--text col-6">
                <h2>Conheça quem já conta com as <b>vantagens excluisivas</b> do BPP Corp</h2>
                <p>A empresas mais bem-sucedidas do mundo, grandes e pequenas, confiam no BPP Corp para reduzir custos com organização dos gastos da suas empresas. </p>
            </div>
        </div>
    </div>
    <div class="home__decida flex flex-wrap">
        <div class="home__decida--text col-12">
            <h2>Compare e <b>decida agora</b> mesmo</h2>
            <p>Substitua o uso do dinheiro em espécie pelo BPP Corp e ganhe segurança e praticidade, evitando roubos e perdas, tendo uma plataforma única para gerir suas despesas. </p>
        </div>
        <div class="col-12 alignVertical flex flex-wrap">
            <div class="home__decida--esquerda col-5">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/dinheiro.svg"/>
                <h3>Dinheiro em papel</h3>
                <p>Saque de dinheiro em papel para as despesas</p>
                <p>Várias notas fiscais em papel</p>
                <p>Diversas planilhas de gestão</p>
                <p>Problemas de contabilização dos gastos</p>
                <p>Não tem segurança</p>
            </div>
            <div class="home__decida--direita col-5">
                <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/bpp.svg"/>
                <h3>BPP Corp</h3>
                <p>Faça pagamentos com o BPP Corp sem precisar tirar dinheiro</p>
                <p>Prestação de contas sem papel, via app</p>
                <p>Relatórios completos em um único lugar</p>
                <p>Controle dos gastos com cartões pré-pago</p>
                <p>Segurança total do seu dinheiro</p>
            </div>
        </div>
    </div>
    <div class="home__gestao">
        <div class="home__gestao--text">
            <h2>A sua gestão financeira nunca foi tão fácil. </h2>
            <p>Conte com as soluções do BPP Corp e facilite o controle dos gastos da sua empresa agora mesmo.</p>
            <a href="#" class="btn__claro">Peça já sua proposta</a>      
            <p>Proposta <b>grátis</b> e sem compromisso.</p> 
        </div>          
    </div>
    <div class="home__posts flex flex-wrap">
        <h2 class="col-12">Últimos posts</h2>

        <?php 
			$all_posts_query = new WP_Query( array(
				'nopaging' => true, 
				'post_status' => 'publish'
			) );

			if ( $all_posts_query->have_posts() ) :
                $cont = 0;
				while ( $all_posts_query->have_posts() ) :
					$all_posts_query->the_post();

                    if($cont >= 3){
                        break;
                    }
                    $cont ++;
		?>
        
        <a href="<?php the_permalink(); ?>" class="col-4">
            <?php $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'single-post-thumbnail' ); ?>
            <div class="home__posts--box" style="background-image: url('<?php echo $image[0]; ?>')">
                <p><?php the_title(); ?></p>
            </div>
        </a>

        <?php 	
				endwhile;
			endif;
			wp_reset_postdata();
		?>
    </div>
    <div class="home__feedback flex flex-wrap alinItem">
        <div class="col-6">
            <h2>Esta página foi útil?</h2>
        </div>
        <div class="col-6">
            <div class="home__feedback--emojis flex flex-wrap alinItem">
                <a href="" class="col-3">
                    <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/feedback1.svg"/>
                </a>
                <a href="" class="col-3">
                    <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/feedback2.svg"/>
                </a>
                <a href="" class="col-3">
                    <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/feedback3.svg"/>
                </a>
                <a href="" class="col-3">
                    <img src="<?php get_template_directory_uri() ?>/wp-content/themes/Martin/assets/icons/home/feedback4.svg"/>
                </a>
            </div>
        </div>
    </div>
</div>

<?php get_footer();?>