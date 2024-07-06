document.addEventListener('DOMContentLoaded', function () {
    const eqn1_a = document.querySelector('input[name="eqn1_a"]');
    const eqn1_b = document.querySelector('input[name="eqn1_b"]');
    const eqn1_c = document.querySelector('input[name="eqn1_c"]');
    const eqn2_a = document.querySelector('input[name="eqn2_a"]');
    const eqn2_b = document.querySelector('input[name="eqn2_b"]');
    const eqn2_c = document.querySelector('input[name="eqn2_c"]');
    const res_angle = document.querySelector('input[name="angle"]');

    function calculateAngle() {
        const eqn1_a_input = parseFloat(eqn1_a.value);
        const eqn1_b_input = parseFloat(eqn1_b.value);
        const eqn1_c_input = parseFloat(eqn1_c.value);

        const eqn2_a_input = parseFloat(eqn2_a.value);
        const eqn2_b_input = parseFloat(eqn2_b.value);
        const eqn2_c_input = parseFloat(eqn2_c.value);

        if (isNaN(eqn1_a_input) || isNaN(eqn1_b_input) || isNaN(eqn1_c_input) || isNaN(eqn2_a_input) || isNaN(eqn2_b_input) || isNaN(eqn2_c_input)) {
            res_angle.value = "";
            return;
        }

        const m1 = -eqn1_a_input / eqn1_b_input;
        const m2 = -eqn2_a_input / eqn2_b_input;

        const tan_theta = Math.abs((m1 - m2) / (1 + m1 * m2));
        const final_angle_rad = Math.atan(tan_theta);
        const final_angle_deg = final_angle_rad * (180 / Math.PI);

        res_angle.value = final_angle_deg.toFixed(2);
    }

    eqn1_a.addEventListener('input', calculateAngle);
    eqn1_b.addEventListener('input', calculateAngle);
    eqn1_c.addEventListener('input', calculateAngle);
    eqn2_a.addEventListener('input', calculateAngle);
    eqn2_b.addEventListener('input', calculateAngle);
    eqn2_c.addEventListener('input', calculateAngle);
});
