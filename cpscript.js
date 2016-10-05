
    var picker = new CP(document.querySelector('input'));

    function on_change(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("Layer_1_butt").style.backgroundColor = '#' + v;
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

