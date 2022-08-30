</main>
<footer class="footer" js-appear>
  <div class="container">
    <div class="grid--tablet">
      <div class="footer_logo grid_1_3" js-appear-item>
        <a href="<?=get_site_url()?>">
          <!-- SVG -->
  	      <svg>
            <use xlink:href="#logo-icon" />
          </svg>
        </a>
      </div>
      <div class="grid_8_24 footer_right">
        <!-- NAV -->
        <div class="footer_nav">
          <?php echo get_template_part('partials/footer-menu'); ?>
          <?php echo get_template_part('partials/footer-contact'); ?>
        </div>
        <?php echo get_template_part('partials/footer-newsletter') ?>
      </div>
    </div>

    <!-- BOTTOM -->
    <div class="footer_bottom">
      <!-- <?php if(get_field('copyright', 'option')) {?><p><?=get_field('copyright', 'option')?></p><?php } ?> -->
      <?php echo get_template_part('partials/footer-bottom'); ?>
    </div>
  </div>
</footer>


<?php
wp_footer();
?>
</body>

</html>
