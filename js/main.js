if (typeof $ !== 'undefined') {

    $(function() {
        // Lettering
        $('.nombre-sitio').lettering();

        // Clase a Menú

        $('body.conferencia .navegacion-principal a:contains("Conferencia")').addClass('activo');
        $('body.calendario .navegacion-principal a:contains("Calendario")').addClass('activo');
        $('body.invitados .navegacion-principal a:contains("Invitados")').addClass('activo');

        // Menú fijo

        var windowHeight = $(window).height();
        var barraAltura = $('.barra').innerHeight();

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > windowHeight) {
                $('.barra').addClass('fixed');
                $('body').css({ 'margin-top': barraAltura + 'px' })
            } else {
                $('.barra').removeClass('fixed');
                $('body').css({ 'margin-top': '0px' })
            }
        })

        // Menú Responsive
        $('.menu-movil').on('click', function() {
            $('.navegacion-principal').slideToggle();
        });

        // Programa de Conferencias
        $('.programa-evento .info-curso:first').show();
        $('.menu-programa a:first').addClass('activo');

        $('.menu-programa a').on('click', function() {
            $('.menu-programa a').removeClass('activo');
            $(this).addClass('activo');
            $('.ocultar').hide();

            var enlace = $(this).attr('href');
            $(enlace).fadeIn(1000);

            return false;
        });

        var oberver = new IntersectionObserver(contenedor => {
            for (x of contenedor) {
                if (x.isIntersecting && $('.resumen-evento li:nth-child(1) p')[0].innerText == "") {
                    // Animaciones para los números
                    $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
                    $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
                    $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3 }, 1200);
                    $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9 }, 1200);
                }
            }
        }, { threshold: [0] });

        var element = document.querySelector('.contador > .contenedor');
        if (element) oberver.observe(element);

        // Cuenta Regresiva
        $('.cuenta-regresiva').countdown('2020/12/10 09:00:00', function(event) {
            $('#dias').html(event.strftime('%D'));
            $('#horas').html(event.strftime('%H'));
            $('#minutos').html(event.strftime('%M'));
            $('#segundos').html(event.strftime('%S'));
        });

        // Colorbox
        var cboxOptions = {
            inline: true,
            width: '95%',
            // height: '95%',
            maxWidth: '960px',
            maxHeight: '95%',
        }

        var invitados = $('.invitado-info');
        if (invitados.length > 0) {
            $('.invitado-info').colorbox(cboxOptions);
            $('.cboxElement').on('click', function() {
                $.colorbox.close();
            });

            $('.boton_newsletter').colorbox({ inline: true, width: "95%", maxWidth: '960px' });
        }
    });

}