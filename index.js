function hitung() {
    let x;
    let iterasi;
    let toleransi;
    let str;
    let arr;
    let koma;
    let hasil;
    let lbr = ['-'];
    let arrx = []
    let lebar;

    // Fungsi fx
    function f(x) {
        // return Math.pow(2.7182818284, x) - 5 * Math.pow(x, 2);
        // console.log(2.7182818284 ** x - 5 * x ** 2)
        // return 2.7182818284 ** x - 5 * x ** 2;
        return eval(document.getElementById('f(x)').value)
    }

    // Turunan fx
    function f_(x) {
        // return Math.pow(2.7182818284, x) - 10 * x;
        // return 2.7182818284 ** x - 10 * x;
        return eval(document.getElementById('f_(x)').value)
    }

    // Get input value
    x = eval(document.getElementById('x').value);
    iterasi = eval(document.getElementById('iterasi').value);
    toleransi = eval(document.getElementById('toleransi').value);

    str = toleransi.toString()
    arr = str.split('.')
    koma = arr[1].length + 1
    arrx.push(x)

    // Show table header
    document.getElementById('tabel').innerHTML = `
    <thead class="fw-bold align-middle">
        <td>r</td>
        <td>𝑥<sub>r</sub></td>
        <td>𝑓(𝑥<sub>r</sub>)</td>
        <td>𝑓'(𝑥<sub>r</sub>)</td>
        <td>Lebar <br> | 𝑥<sub>r+1</sub> - 𝑥<sub>r</sub> |</td>
    </thead>
    `;

    for (let i = 0; i <= iterasi; i++) {

        document.getElementById("tabel").innerHTML += `
            <tbody>
                <td class="fw-bolder">` + Number(i) + `</td>
                <td>` + x.toFixed(koma) + `</td>
                <td>` + f(x).toFixed(koma) + `</td>
                <td>` + f_(x).toFixed(koma) + `</td>
                <td>` + Math.abs(lbr[i]).toFixed(koma) + `</td>
            </tbody>
        `;

        if (lebar < toleransi) {
            hasil = x
            document.getElementById('hasil').innerHTML = `<h3 class="fs-4">Hampiran akar 𝑥 = ${hasil.toFixed(koma)} 👍🏻</h3>`
            break;
        }

        x = x - f(x) / f_(x);
        arrx.push(x)

        lbr.push(arrx[i + 1] - arrx[i])

        lebar = Math.abs(arrx[i + 1] - arrx[i])
    }
}
