function hitung() {
    let x = 0.5
    let iterasi = 5
    let toleransi = 0.00001
    let str;
    let arr;
    let koma += 1
    let lebar;
    let hasil;

    // Fungsi fx
    function f(x) {
        // return Math.pow(2.7182818284, x) - 5 * Math.pow(x, 2);
        // console.log(2.7182818284 ** x - 5 * x ** 2)
        return 2.7182818284 ** x - 5 * x ** 2;
        // return eval(document.getElementById('f(x)').value)
    }

    // Turunan fx
    function f_(x) {
        // return Math.pow(2.7182818284, x) - 10 * x;
        return 2.7182818284 ** x - 10 * x;
        // return eval(document.getElementById('f_(x)').value)
    }

    // Get input value
    x = Number(document.getElementById('x').value);
    iterasi = Number(document.getElementById('iterasi').value);
    toleransi = Number(document.getElementById('toleransi').value);

    str = toleransi.toString()
    arr = str.split('.')
    koma = arr[1].length

    // Show table header
    document.getElementById('tabel').innerHTML = `
    <thead class="fw-bold">
        <td>r</td>
        <td>xr</td>
        <td>f(xr)</td>
        <td>f'(xr)</td>
        <td>Lebar | Xr+1 - Xr |</td>
    </thead>
    `;

    for (var i = 0; i <= iterasi; i++) {
        document.getElementById("tabel").innerHTML += `
            <tbody>
                <td>` + Number(i + 1) + `</td>
                <td>` + x.toFixed(koma) + `</td>
                <td>` + f(x).toFixed(koma) + `</td>
                <td>` + f_(x).toFixed(koma) + `</td>
                <td>` + Math.abs(lebar).toFixed(koma) + `</td>
            </tbody>
        `;
        if (lebar < toleransi) {
            hasil = x
            document.getElementById('hasil').innerHTML = `<h3 class="fs-4">Hampiran akar x = ${hasil.toFixed(koma)}</h3>`
            break;
        }

        x = x - f(x) / f_(x);
        lebar = f(x) / f_(x)
    }
}
