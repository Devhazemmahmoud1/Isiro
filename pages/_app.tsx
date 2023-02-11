import "bootstrap/dist/css/bootstrap.css";
import "../public/plugins/fontawesome/css/fontawesome.min.css";
import "../public/plugins/fontawesome/css/all.min.css";
import "../public/plugins/icons/feather/feather.css";

// import "../public/plugins/icons/typicons/typicons.css";
// import "../public/plugins/icons/weather/weathericons.css";
// import "../public/plugins/icons/themify/themify.css";
// import "../public/plugins/simpleline/simple-line-icons.css";
// import "../public/plugins/icons/ionic/ionicons.css";
// import "../public/plugins/material/materialdesignicons.css";
// import "../public/plugins/icons/pe7/pe-icon-7.css";
// import "../public/plugins/c3-chart/c3.min.css";
// import "../public/plugins/twitter-bootstrap-wizard/form-wizard.css";
// import "../public/plugins/stickynote/sticky.css";
// import "../public/plugins/lightbox/glightbox.min.css";
// import "../public/plugins/alertify/alertify.min.css";
// import "../public/plugins/scrollbar/scroll.min.css";
// import "../public/plugins//toastr/toatr.css";
// import "../public/plugins/summernote/summernote-bs4.min.css";
// import "../public/plugins/ion-rangeslider/css/ion.rangeSlider.min.css";
// import "../public/plugins/dragula/css/dragula.min.css";
// import "../public//plugins/jvectormap/jquery-jvectormap-2.0.3.css";
// import "../public/css/ckeditor.css";
// import "../public/plugins/datatables/datatables.min.css";
// import "../public/plugins/select2/css/select2.min.css";
// import "../public/css/bootstrap-datetimepicker.min.css";
// import "../public/plugins/fullcalendar/fullcalendar.min.css";
// import '../loader';
import "../styles/globals.css";
import "../public/js/mycustom"
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../hooks/AuthHook";

export var url: string = ''
export default function App({ Component, pageProps }: AppProps) {

  useAuth();

  if (typeof window !== 'undefined') {
    window['$'] = window['jQuery'] = require('jquery');
    require('bootstrap/dist/js/bootstrap.min.js')
    require('../public/plugins/slimscroll/jquery.slimscroll.min.js')
    if (false) {
      require('../public/plugins/fileupload/fileupload.min.js')
      require('../public/js/form-validation.js');
      require('../public/js/form-validation.js');
      require('../public/js/jquery.maskedinput.min.js');
      require('../public/js/mask.js');
    }
    // window['d3'] = require('../public/plugins/c3-chart/d3.v5.min.js');
    // window['c3'] = require('../public/plugins/c3-chart/c3.min.js');
    // require('../public/plugins/c3-chart/chart-data.js');

    // Charts
    // require('../public/plugins/peity/jquery.peity.min.js');
    // require('../public/plugins/peity/chart-data.js');
    // require('../public/plugins/flot/jquery.flot.js');
    // require('../public/plugins/flot/jquery.flot.fillbetween.js');
    // require('../public/plugins/flot/jquery.flot.pie.js');
    // require('../public/plugins/flot/chart-data.js');
    // require('../public/plugins/chartjs/chart.min.js');
    // require('../public/plugins/chartjs/chart-data.js');
    // window['ApexCharts'] = require('../public/plugins/apexchart/apexcharts.min.js');
    // require('../public/plugins/apexchart/chart-data.js');

    // Wizard
    // require('../public/plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js');
    // require('../public/plugins/twitter-bootstrap-wizard/prettify.js');
    // require('../public/plugins/twitter-bootstrap-wizard/form-wizard.js');
    // require('../public/plugins/timeline/horizontal-timeline.js')
    // require('../public/js/jquery-ui.min.js');
    // window['GLightbox'] = require('../public/plugins/lightbox/glightbox.min.js');
    // require('../public/plugins/lightbox/lightbox.js');
    // require('../public/plugins/alertify/alertify.min.js');
    // require('../public/plugins/alertify/custom-alertify.min.js');
    // require('../public/plugins/scrollbar/scrollbar.min.js');
    // require('../public/plugins/scrollbar/custom-scroll.js');
    // require('../public/plugins/countup/jquery.counterup.min.js');
    // require('../public/plugins/countup/jquery.waypoints.min.js');
    // require('../public/plugins/countup/jquery.missofis-countdown.js');
    // require('../public/plugins/summernote/summernote-bs4.min.js');
    // require('../public/plugins/toastr/toastr.min.js');
    // require('../public/plugins/raty/jquery.raty.js');
    // require('../public/plugins/raty/custom.raty.js');
    // require('../public/plugins/ion-rangeslider/js/ion.rangeSlider.min.js');
    // require('../public/plugins/ion-rangeslider/js/custom-rangeslider.js');
    // window['dragula'] = require('../public/plugins/dragula/js/dragula.min.js');
    // require('../public/plugins/dragula/js/drag-drop.min.js');
    // require('../public/plugins/clipboard/clipboard.min.js');
    // require('../public/plugins/sweetalert/sweetalert2.all.min.js');
    // require('../public/plugins/sweetalert/sweetalerts.min.js');
    // require('../public/plugins/slimscroll/jquery.slimscroll.min.js');
    if (false) {
      require('../public/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js');
      require('../public/plugins/jvectormap/jquery-jvectormap-world-mill.js');
      require('../public/plugins/jvectormap/jquery-jvectormap-ru-mill.js');
      require('../public/plugins/jvectormap/jquery-jvectormap-us-aea.js');
      require('../public/plugins/jvectormap/jquery-jvectormap-uk_countries-mill.js');
      require('../public/plugins/jvectormap/jquery-jvectormap-in-mill.js');
      require('../public/js/jvectormap.js');
    }

    // Edit Blog
    // require('../public/js/ckeditor.js');
    // Tags Input

    if (false) {
      require('../public/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.js');
      require('../public/plugins/datatables/jquery.dataTables.min.js');
      require('../public/plugins/datatables/datatables.min.js');
      require('../public/plugins/select2/js/select2.min.js');
      require('../public/plugins/select2/js/custom-select.js');
      require('../public/plugins/moment/moment.min.js');
      require('../public/js/bootstrap-datetimepicker.min.js');
      require('../public/js/jquery-ui.min.js');
      require('../public/plugins/fullcalendar/fullcalendar.min.js');
      require('../public/plugins/fullcalendar/jquery.fullcalendar.js');
    }
    //require('../public/js/script.js');
    // <script src="<?php echo base_url();?>/assets/plugins/morris/raphael-min.js"></script>
		// <script src="<?php echo base_url();?>/assets/plugins/morris/morris.min.js"></script>
		// <script src="<?php echo base_url();?>/assets/plugins/morris/chart-data.js"></script>
  }
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
