var Mobil = function(pabrikan,model,warna){
    this.pabrikan = pabrikan === undefined ? "Tidak ada" : pabrikan;
    this.model = model === undefined ? "Tidak ada" : model;
    this.warna = warna === undefined ? "Tidak ada" : warna;
    
    this.maju = function(){
        console.log("Mobil "+this.pabrikan+" "+this.model+" "+" "+this.warna+", bergerak maju!");
    }
}

var  mobil1 = new Mobil('Honda','Accord','Hitam');
var mobil2 = new Mobil('Honda', 'Civic', 'Silver');

console.log(mobil1.pabrikan);
mobil1.maju();
mobil1.warna ='Silver';
mobil1.maju();
console.log('Mobil 2 adalah', mobil2.pabrikan, mobil2.model, mobil2.warna);
mobil2.maju();