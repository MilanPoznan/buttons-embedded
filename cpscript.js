
    var picker = new CP(document.getElementById('changeIcnCol'));

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

    function on_change2(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("div2").style.backgroundColor = '#' + v;
        console.log('change');
    }

    function on_start2() {
        console.log('start');
    }

    function on_drag2() {
        console.log('drag');
    }

    function on_stop2() {
        console.log('stop');
    }

    function on_enter2() {
        console.log('enter');
    }

    function on_exit2() {
        console.log('exit');
    }

    function on_fit2() {
        console.log('fit');
    }

    function on_create2(v, instance) {
        console.log('create');
    }

    picker2.on("change", on_change2);
    picker2.on("start", on_start2);
    picker2.on("drag", on_drag2);
    picker2.on("stop", on_stop2);
    picker2.on("enter", on_enter2);
    picker2.on("exit", on_exit2);
    picker2.on("fit", on_fit2);
    picker2.on("create", on_create2);

// ======= Change Button color ====
var picker3 = new CP(document.getElementById('changeButton'));

    function on_change3(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("g11").style.fill = '#' + v;
        console.log('change');
    }

    function on_start3() {
        console.log('start');
    }

    function on_drag3() {
        console.log('drag');
    }

    function on_stop3() {
        console.log('stop');
    }

    function on_enter3() {
        console.log('enter');
    }

    function on_exit3() {
        console.log('exit');
    }

    function on_fit3() {
        console.log('fit');
    }

    function on_create3(v, instance)
        console.log('create');
    }

    picker3.on("change", on_change3);
    picker3.on("start", on_start3);
    picker3.on("drag", on_drag3);
    picker3.on("stop", on_stop3);
    picker3.on("enter", on_enter3);
    picker3.on("exit", on_exit3);
    picker3.on("fit", on_fit3);
    picker3.on("create", on_create3);


// ====== Change Arrow Color ======

var picker4 = new CP(document.getElementById('changeArrow'));

    function on_change4(v, instance) {
        instance.target.value = '#' + v;
        document.getElementById("g2").style.fill = '#' + v;
        console.log('change');
    }

    function on_start4() {
        console.log('start');
    }

    function on_drag4() {
        console.log('drag');
    }

    function on_stop4() {
        console.log('stop');
    }

    function on_enter4() {
        console.log('enter');
    }

    function on_exit4() {
        console.log('exit');
    }

    function on_fit4() {
        console.log('fit');
    }

    function on_create4(v, instance) {
        console.log('create');
    }

    picker4.on("change", on_change4);
    picker4.on("start", on_start4);
    picker4.on("drag", on_drag4);
    picker4.on("stop", on_stop4);
    picker4.on("enter", on_enter4);
    picker4.on("exit", on_exit4);
    picker4.on("fit", on_fit4);
    picker4.on("create", on_create4);
