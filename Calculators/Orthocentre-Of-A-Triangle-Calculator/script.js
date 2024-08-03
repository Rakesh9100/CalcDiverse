function calculate() {
    // Get input values
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const x3 = parseFloat(document.getElementById('x3').value);
    const y3 = parseFloat(document.getElementById('y3').value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2) || isNaN(x3) || isNaN(y3)) {
        document.getElementById("result").innerText = "Please enter the valid numbers for all fields.";
        return;
    }
    if ((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) == 0) {
        document.getElementById("result").innerText = "The given coordinates do not form a triangle";
        return;
    }

    // Display the result
    const orthocenter = calculateOrthocenter(x1, y1, x2, y2, x3, y3);
    const resultElement = document.getElementById('result');
    resultElement.innerText = "Orthocenter coordinates: (" + (orthocenter.x).toString() + ", " + (orthocenter.y).toString() + ")";
}


function calculateOrthocenter(x1, y1, x2, y2, x3, y3) {
    // Javascript program for the above approach

    // Function to find the line given
    // two points
    function lineFromPoints(P, Q, arr) {
        arr[0] = Q[1] - P[1];
        arr[1] = P[0] - Q[0];
        arr[2] = arr[0] * (P[0]) + arr[1] * (P[1]);
    }

    // Function to convert the input line
    // to its perpendicular bisector
    function perpendicularBisector(P, Q, arr) {
        let mid_point = [(P[0] + Q[0]) / 2,
            (P[1] + Q[1]) / 2
        ];

        // c = -bx + ay
        arr[2] = -arr[1] * (mid_point[0]) +
            arr[0] * (mid_point[1]);

        let temp = arr[0];
        arr[0] = -arr[1];
        arr[1] = temp;
    }

    // Function to find the
    // intersection point of two lines
    function lineLineIntersection(abc, efg) {

        let determinant = abc[0] * efg[1] - efg[0] * abc[1];

        // As points are non-collinear,
        // determinant cannot be 0
        let x = (efg[1] * abc[2] - abc[1] * efg[2]) / determinant;
        let y = (abc[0] * efg[2] - efg[0] * abc[2]) / determinant;

        return [x, y];
    }

    // Function to find the
    // circumcenter of a triangle
    function findCircumCenter(A) {

        let P = A[0],
            Q = A[1],
            R = A[2];

        // Line PQ is represented as
        // ax + by = c
        let abc = new Array(3);
        lineFromPoints(P, Q, abc);

        // Line QR is represented as
        // ex + fy = g
        let efg = new Array(3);
        lineFromPoints(Q, R, efg);

        // Converting lines PQ and QR
        // to perpendicular bisectors
        perpendicularBisector(P, Q, abc);
        perpendicularBisector(Q, R, efg);

        // Their point of intersection
        // gives the circumcenter
        let circumcenter = lineLineIntersection(abc, efg);

        // Return the circumcenter
        return circumcenter;
    }

    // Function to find the
    // centroid of a triangle
    function findCentroid(A) {
        // Centroid of a triangle is
        // given as (Xa + Xb + Xc)/3,
        // (Ya + Yb + Yc)/3
        let centroid = [
            (A[0][0] + A[1][0] + A[2][0]) / 3,
            (A[0][1] + A[1][1] + A[2][1]) / 3
        ];

        // Return the centroid
        return centroid;
    }

    // Function to find the
    // orthocenter of a triangle
    function findOrthocenter(A) {
        // Store the circumcenter and
        // the centroid of triangle
        let circumcenter = findCircumCenter(A);
        let centroid = findCentroid(A);

        // Apply External section formula:
        // (mX1 - nX2)/(m - n), (mY1 - nY2)/(m - n)
        let h = [
            (3 * centroid[0] - 2 * circumcenter[0]),
            (3 * centroid[1] -
                2 * circumcenter[1])
        ];

        // Print the x and y-coordinate
        // of the orthocenter of the triangle
        return h;
    }

    // Given points P, Q, R
    let P = [x1, y1];
    let Q = [x2, y2];
    let R = [x3, y3];

    let A = [P, Q, R];
    h = findOrthocenter(A)
    // function call
    return ({
        x: h[0],
        y: h[1]
    });
}
