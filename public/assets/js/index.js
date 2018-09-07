function generate_mod(ability) {
    if (ability > 0) {
        return Math.floor((ability - 10) / 2);
    } else {
        return null;
    }
}

$(document).ready(function() {
    $('.input-value-1').bind('change', function() {
        $(this).parents('.input_abilities').children().find('.input-value-2').val(generate_mod($(this).val()));

        if ($(this).parents('.input_abilities').children().find('.input-value-3').val() > 0) {
            $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).val($(this).parents('.input_abilities').children().find('.input-value-4').val());
        } else {
            $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).val($(this).parents('.input_abilities').children().find('.input-value-2').val());
        }
        $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).change();

    });

    $('.input-value-3').bind('change', function() {
        $(this).parents('.input_abilities').children().find('.input-value-4').val(generate_mod($(this).val()));

        if ($(this).parents('.input_abilities').children().find('.input-value-3').val() > 0) {
            $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).val($(this).parents('.input_abilities').children().find('.input-value-4').val());
        } else {
            $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).val($(this).parents('.input_abilities').children().find('.input-value-2').val());
        }

        $(document).find('.input_skills').find('.input-ability-' + $(this).parents('.input_abilities').children().find('.input-name').text()).change();
    });

    $('.input-value-2, .input-value-3, .input-value-4').bind('change', function() {
        ability = $(this).parents('.input_skills').children().find('.input-value-2').val();
        range = $(this).parents('.input_skills').children().find('.input-value-3').val();
        additional = $(this).parents('.input_skills').children().find('.input-value-4').val();

        $(this).parents('.input_skills').children().find('.input-value-1').val(
            Math.floor(ability / 1 + range / 1 + additional / 1)
        );
    });
    $('.input-value-1, .input-value-2, .input-value-3, .input-value-4').trigger('change');
});