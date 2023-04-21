setInterval(function () {
    const data: Date = new Date();
    const czas: string = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

    renderujTekst('datawPolsce', czas);
}, 1000);