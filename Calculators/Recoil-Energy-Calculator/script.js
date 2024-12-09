let massBullet = document.getElementById('massBullet');
let velBullet = document.getElementById('velBullet');
let massGun = document.getElementById('massGun');
let result = document.getElementById('result');

function calculateRecoilEnergy() {
    let mBullet = parseFloat(massBullet.value);
    let vBullet = parseFloat(velBullet.value);
    let mGun = parseFloat(massGun.value);

    if (isNaN(mBullet) || isNaN(vBullet) || isNaN(mGun)) {
        result.innerHTML = "Please enter valid numerical values";
        return;
    }

    let E = (mBullet * (vBullet * vBullet)) / (2 * mGun);
    result.innerHTML = `Recoil energy is : ${E.toFixed(2)} Joules`;
}