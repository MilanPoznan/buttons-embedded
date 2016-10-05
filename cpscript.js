
    var picker = new CP(document.querySelector('input'));

    function on_change(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("g1").style.fill = '#' + v;
        console.log('change');
    }

    function on_start() {
        console.log('start');
    }

    function on_drag() {
        console.log('drag');
    }

    function on_stop() {
        console.log('stop');
    }

    function on_enter() {
        console.log('enter');
    }

    function on_exit() {
        console.log('exit');
    }

    function on_fit() {
        console.log('fit');
    }

    function on_create(v, instance) {
        console.log('create');
    }

    picker.on("change", on_change);
    picker.on("start", on_start);
    picker.on("drag", on_drag);
    picker.on("stop", on_stop);
    picker.on("enter", on_enter);
    picker.on("exit", on_exit);
    picker.on("fit", on_fit);
    picker.on("create", on_create);
// ===== Background color picker
 var picker2 = new CP(document.getElementById('changeBgC'));

    function on_change(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("div2").style.backgroundColor = '#' + v;
        console.log('change');
    }

    function on_start() {
        console.log('start');
    }

    function on_drag() {
        console.log('drag');
    }

    function on_stop() {
        console.log('stop');
    }

    function on_enter() {
        console.log('enter');
    }

    function on_exit() {
        console.log('exit');
    }

    function on_fit() {
        console.log('fit');
    }

    function on_create(v, instance) {
        console.log('create');
    }

    picker2.on("change", on_change);
    picker2.on("start", on_start);
    picker2.on("drag", on_drag);
    picker2.on("stop", on_stop);
    picker2.on("enter", on_enter);
    picker2.on("exit", on_exit);
    picker2.on("fit", on_fit);
    picker2.on("create", on_create);
