let imprimeTiempo = () => {
    let tiempoActual = () => {
        let tiempo = new Date();
        return tiempo.toLocaleDateString();
    }
    let tagTiempo = document.querySelector('#time');
    return tagTiempo.innerHTML = tiempoActual();
}
imprimeTiempo();