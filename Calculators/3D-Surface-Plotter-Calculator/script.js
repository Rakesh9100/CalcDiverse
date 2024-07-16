function plotSurface() {
    const func = document.getElementById("function").value;
    const plotDiv = document.getElementById("plot");

    const xRange = [...Array(50).keys()].map((i) => -5 + i * 0.2);
    const yRange = [...Array(50).keys()].map((i) => -5 + i * 0.2);
    const zValues = xRange.map((x) =>
        yRange.map((y) => eval(func.replace(/x/g, x).replace(/y/g, y)))
    );

    const data = [{
        z: zValues,
        x: xRange,
        y: yRange,
        type: "surface",
    }, ];

    Plotly.newPlot(plotDiv, data);
}

plotSurface();
